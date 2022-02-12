import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import PageLayout from './PageLayout'
import Link from 'next/link'
import Curriculum from '../helpers/Curriculum'
import YouTube from './YouTube'
import HtmlMetaTags from './HtmlMetaTags'
import TwitterMetaTags from './TwitterMetaTags'
import OpenGraphMetaTags from './OpenGraphMetaTags'
import React from 'react'
import Router from 'next/router'
import { useAuth } from '../components/AuthUserProvider'
import { useDatabase } from '../components/DatabaseProvider'


// A lesson page. Show lesson details with buttons to make "done" at the bottom.
//
export default function LessonPageLayout({ id, children }) {

  const lesson = Curriculum.findLessonByLessonId(id)
  const nextLesson = Curriculum.findNextLessonById(id)
  const prevLesson = Curriculum.findPrevLessonById(id)
  const course = Curriculum.findCourseByLessonId(id)
  const topic = Curriculum.findTopicByLessonId(id)
  const { user } = useAuth()
  const { loading, setLessonCompleted } = useDatabase()

  // Controls for top left corner (prev/close/next)
  const iconControls = (
    <>
    
      <IconButton sx={{ color: "white" }} href={Curriculum.pathToLesson(course, prevLesson)} aria-label="Previous lesson" disabled={!prevLesson}>
        <ArrowBack/>
      </IconButton>

      <IconButton sx={{ color: "white" }} href={Curriculum.pathToCourse(course)} aria-label="Return to course">
        <Close/>
      </IconButton>

      <IconButton sx={{ color: "white" }} href={Curriculum.pathToLesson(course, nextLesson)} aria-label="Next lesson" disabled={!nextLesson}>
        <ArrowForward/>
      </IconButton>

    </>
  )

  return (
    <PageLayout
      title={course.course_label + " " + topic.topic_label + "." + lesson.lesson_label + ": " + lesson.title}
      controls={iconControls}
    >
      <HtmlMetaTags title={lesson.title} description={lesson.description} />
      <TwitterMetaTags title={lesson.title} description={lesson.description} site="@akent99" creator="@akent99" />
      <OpenGraphMetaTags type="website" title={lesson.title} description={lesson.description} locale="en_US" />

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {lesson.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {lesson.description}
        </Typography>

      </Container>

      {/* Page content area - include YouTube with lesson metadata. */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {lesson.youTubeCode && (
          <YouTube
            title={lesson.title}
            description={lesson.description}
            thumbnailUrl={Curriculum.pathToLessonImage(course, lesson)}
            published={lesson.published}
            duration={lesson.duration}
            youTubeCode={lesson.youTubeCode}
          />
        )}

        {/* You can add your own content in lesson pages on top of just a YouTube video. */}
        {children}

      </Container>

      {/* Text nav buttons */}
      <Container sx={{ py: 2 }} maxWidth="md">

        {/* Link to next lesson, or to parent course page if last lesson. */}
        {nextLesson ? (
          <Button
            variant="contained"
            color="success"
            sx={{ width: "100%" }}
            disabled={loading}
            onClick={e => {
              setLessonCompleted(lesson, true)
              Router.push(Curriculum.pathToLesson(course, nextLesson))
            }}
          >
            {user === null ? "Log in to save progress" : "DONE, NEXT LESSON!"}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            sx={{ width: "100%" }}
            disabled={loading}
            onClick={e => {
              setLessonCompleted(lesson, true)
              Router.push(Curriculum.pathToCourse(course))
            }}
          >
            {user === null ? "Log in to save progress" : "DONE, COURSE PAGE!"}
          </Button>
        )}

      </Container>

      <Container maxWidth="md">

        <Button sx={{ width: "50%" }} disabled={!nextLesson} href={Curriculum.pathToLesson(course, nextLesson)}>
          NEXT LESSON
        </Button>

        <Button sx={{ width: "50%" }} href={Curriculum.pathToCourse(course)}>
          COURSE PAGE
        </Button>

      </Container>

    </PageLayout>
  )
}

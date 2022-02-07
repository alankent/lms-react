import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import PageLayout from './PageLayout'
import Link from 'next/link'
import Curriculum from './Curriculum'
import Completion from './Completion'


export default function LessonPageLayout({ id, children }) {

  const lesson = Curriculum.findLessonByLessonId(id)
  const nextLesson = Curriculum.findNextLessonById(id)
  const prevLesson = Curriculum.findPrevLessonById(id)
  const course = Curriculum.findCourseByLessonId(id)
  const topic = Curriculum.findTopicByLessonId(id)

  // For top right corner of screen
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

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {lesson.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {lesson.description}
        </Typography>

      </Container>

      {/* Page content area */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {children}
      </Container>

      {/* Text nav buttons */}
      <Container sx={{ py: 2 }} maxWidth="md">

        {/*
        {prevLesson ? (
          <Button variant="outlined" sx={{ mr: 2 }} href={Curriculum.pathToLesson(course, prevLesson)}>Prev</Button>
        ) : (
          <Button variant="outlined" sx={{ mr: 2 }} disabled>Prev</Button>
        )}
        */}

        {nextLesson ? (
          <Button
            variant="contained"
            color="success"
            sx={{ width: "100%" }}
            hrefxxx={Curriculum.pathToLesson(course, nextLesson)}
            onClick={e => {
              Completion.setLessonCompleted(lesson, true)
              window.open(Curriculum.pathToLesson(course, nextLesson), "_self")
            }}
          >
            Mark complete and continue to next lesson
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            sx={{ width: "100%" }}
            href={Curriculum.pathToCourse(course)}
            onClick={e => Completion.setLessonCompleted(lesson, true)}
          >
            Mark complete and return to course list
          </Button>
        )}

      </Container>
      <Container maxWidth="md">

        {nextLesson ? (
          <Button sx={{ width: "50%" }} href={Curriculum.pathToLesson(course, nextLesson)}>
            Continue to next lesson
          </Button>
        ) : (
          <Button sx={{ width: "50%" }} disabled>
            Continue to next lesson
          </Button>
        )}

        <Button sx={{ width: "50%" }} href={Curriculum.pathToCourse(course)}>
          Return to course list
        </Button>

      </Container>

    </PageLayout>
  );
}

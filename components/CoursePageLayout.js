import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Close from '@mui/icons-material/Close'
import PageLayout from './PageLayout'
import Link from 'next/link'
import IconButton from 'next/link'
import Curriculum from '../helpers/Curriculum'
import StructuredData from './StructuredData'
import Router from 'next/router'
import { useAuth } from '../components/AuthUserProvider'
import { useDatabase } from '../components/DatabaseProvider'


// Format a duration into a human readable string.
// Uses "XhXmXs" or "XmXs" rather than "H:M:S" or "M:S" to be clearer units of numbers.
//
function formatDuration(duration) {
  if (duration.asHours() >= 1) {
    return "" + duration.hours() + "h" + duration.minutes() + "m" + duration.seconds() + "s"
  } else {
    return "" + duration.minutes() + "m" + duration.seconds() + "s"
  }
}


// The contents of a course page
//
export default function CoursePageLayout({ id, children }) {

  const course = Curriculum.findCourseByCourseId(id)
  const { user } = useAuth()
  const { loading, completionStatus, lessonCompleted, setLessonCompleted, setCourseCompleted } = useDatabase()

  // Structured data to include on the page to help search engines understand what this page is.
  // This gets embedded in the <head> element of the page.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "courseCode": course.course_label,
    "provider": {
      "@type": "Person",
      "name": "Alan Kent",
      "url": "http://extra-ordinary.tv/"
    }
  }

  return (
    <PageLayout
      title={course.course_label + ": " + course.title}
      controls={
        <IconButton sx={{ color: "white" }} href={Curriculum.pathToCourseList()} aria-label="Course list">
          <Close/>
        </IconButton>
      }
    >
      <StructuredData data={structuredData}/>

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {course.description}
        </Typography>

        {children}

      </Container>

      {/* List of topics and lessons per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {course.topics.map((topic) => (
          <Box key={topic.id}>

            <Typography component="h3" variant="h3" align="left" color="text.primary" sx={{ mt: 4 }} gutterBottom>
              {topic.title}
            </Typography>

            {topic.lessons.map((lesson) => (
              <Box key={lesson.id} sx={{ mb: 2 }}>
                <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 2, bgcolor: 'background.paper' }}>
                  
                  {/* This stack puts the 'done' switch next to the description on wide screens, below it on mobile. */}
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0} justifyContent="space-between" alignItems="left">

                    {/* Lesson summary */}
                    <Link href={Curriculum.pathToLesson(course, lesson)}>
                      <Box sx={{ m: 3 }}>
                        <Typography variant="h5" sx={{ mr: 2 }} component="span" align="left" color="text.primary" gutterBottom>
                          {/*{topic.topic_label}.{lesson.lesson_label}*/} {lesson.title}
                        </Typography>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}><br /></Box>
                        <Typography component="span" align="left" color="text.secondary" gutterBottom>
                          {lesson.description + (lesson.duration ? " [" + formatDuration(lesson.duration) + "]" : "")}
                        </Typography>
                      </Box>
                    </Link>

                    {/* Lesson link and switch to track if lesson completed. */}
                    <Stack direction="row" justifyContent="left" alignItems="center" ml={2} mr={3} mb={1}>
                      <Button sx={{ whiteSpace: "nowrap" }} href={Curriculum.pathToLesson(course, lesson)}>
                        VIEW LESSON
                      </Button>
                      {user && (
                        <Switch
                          disabled={loading}
                          checked={lessonCompleted(lesson)}
                          onChange={e => setLessonCompleted(lesson, e.target.checked)}
                        />
                      )}
                    </Stack>

                  </Stack>

                </Box>
              </Box>
            ))}

          </Box>
        ))}
      </Container>

      {/* Buttons at bottom of page to mark course as done */}
      <Container maxWidth="md">
        <Button
          variant="contained"
          color="success"
          disabled={user === null}
          sx={{ width: "100%" }}
          onClick={(e) => {
            setCourseCompleted(course, true)
            Router.push(Curriculum.pathToCourseList())
          }}
        >
          {user == null ? "Log in to save progress" : "DONE, COURSE PAGE!"}
        </Button>
      </Container>

      {/* Button to return to course list without marking as done (or if logged off) */}
      <Container maxWidth="md">
        <Button sx={{ width: "100%" }} href={Curriculum.pathToCourseList()}>
          COURSE PAGE
        </Button>
      </Container>

    </PageLayout>
  )
}

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
import Curriculum from './Curriculum'
import Completion from './Completion'
import StructuredData from './StructuredData'
import Router from 'next/router'
import { UserContext } from '../helpers/auth'
import { CompletionContext } from '../components/Completion'

function formatDuration(duration) {
  if (duration.asHours() >= 1) {
    return "" + duration.hours() + "h" + duration.minutes() + "m" + duration.seconds() + "s";
  } else {
    return "" + duration.minutes() + "m" + duration.seconds() + "s";
  }
}


export default function CoursePageLayout({ id, children }) {

  const course = Curriculum.findCourseByCourseId(id)
  const user = React.useContext(UserContext)
  const status = React.useContext(CompletionContext)
  console.log("COURSE PAGE")
  console.log(status)

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
          <div key={topic.id}>

            <Typography component="h3" variant="h3" align="left" color="text.primary" sx={{ mt: 4 }} gutterBottom>
              {topic.title}
            </Typography>

            {topic.lessons.map((lesson) => (
              <Box key={lesson.id} sx={{ mb: 2 }}>
                <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 2, bgcolor: 'background.paper' }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={0} justifyContent="space-between" alignItems="left">
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
                    <Stack direction="row" justifyContent="left" alignItems="center" ml={2} mr={3} mb={1}>
                      <Button sx={{ whiteSpace: "nowrap" }} href={Curriculum.pathToLesson(course, lesson)}>
                        VIEW LESSON
                      </Button>
                      {user && (
                        <Switch
                          disabled={user === null}
                          checked={Completion.lessonCompleted(status, lesson)}
                          onChange={e => Completion.setLessonCompleted(user, lesson, e.target.checked)}
                        />
                      )}
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            ))}

          </div>
        ))}
      </Container>

      <Container maxWidth="md">
        <Button
          variant="contained"
          color="success"
          disabled={user === null}
          sx={{ width: "100%" }}
          onClick={(e) => {
            Completion.setCourseCompleted(user, course, true)
            Router.push(Curriculum.pathToCourseList())
          }}
        >
          {user == null ? "Log in to save progress" : "DONE, COURSE PAGE!"}
        </Button>
      </Container>

      <Container maxWidth="md">
        <Button sx={{ width: "100%" }} href={Curriculum.pathToCourseList()}>
          COURSE PAGE
        </Button>
      </Container>

    </PageLayout>
  );
}

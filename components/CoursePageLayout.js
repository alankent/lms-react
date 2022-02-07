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


export default function CoursePageLayout({ id }) {

  const course = Curriculum.findCourseByCourseId(id)

  return (
    <PageLayout
      title={course.course_label + ": " + course.title}
      controls={
        <IconButton sx={{ color: "white" }} href="/courses" aria-label="Course list">
          <Close/>
        </IconButton>
      }
    >

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {course.description}
        </Typography>

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
                  <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" mr={2}>
                    <Link href={Curriculum.pathToLesson(course, lesson)}>
                      <Box sx={{ m: 3 }}>
                        <Typography variant="h5" sx={{ mr: 2 }} component="span" align="left" color="text.primary" gutterBottom>
                          {topic.topic_label}.{lesson.lesson_label} {lesson.title}
                        </Typography>
                        <Typography component="span" align="left" color="text.secondary" gutterBottom>
                          {lesson.description}
                        </Typography>
                      </Box>
                    </Link>
                    <Stack direction="row">
                      <Button sx={{ whiteSpace: "nowrap" }} href={Curriculum.pathToLesson(course, lesson)}>
                        Go to Lesson
                      </Button>
                      <Switch
                        defaultChecked={Completion.lessonCompleted(lesson)}
                        onChange={e => Completion.setLessonCompleted(lesson, e.target.checked)}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            ))}

          </div>
        ))}
      </Container>

      <Container>
        <Button sx={{ mr: 2 }} variant="outlined" href={"/courses"}>
          Return to course list
        </Button>
        <Button sx={{ mr: 2 }} variant="contained" color="success" href={"/courses"}>
          Mark as Done
        </Button>
      </Container>

    </PageLayout>
  );
}

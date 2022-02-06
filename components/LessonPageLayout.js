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


export default function LessonPageLayout({ id, children }) {

  const lesson = Curriculum.findLessonByLessonId(id)
  const nextLesson = Curriculum.findNextLessonById(id)
  const prevLesson = Curriculum.findPrevLessonById(id)
  const course = Curriculum.findCourseByLessonId(id)
  const topic = Curriculum.findTopicByLessonId(id)

  // For top right corner of screen
  const iconControls = (
    <Box>
    
      <IconButton href={Curriculum.pathToLesson(course, prevLesson)} aria-label="Previous lesson" disabled={!prevLesson}>
        <ArrowBack sx={{ color: 'white' }}/>
      </IconButton>

      <IconButton href={Curriculum.pathToCourse(course)} aria-label="Return to course">
        <Close sx={{ color: 'white' }}/>
      </IconButton>

      <IconButton href={Curriculum.pathToLesson(course, nextLesson)} aria-label="Next lesson" disabled={!nextLesson}>
        <ArrowForward sx={{ color: 'white' }}/>
      </IconButton>

    </Box>
  )

  return (
    <PageLayout
      title={course.course_label + " " + topic.topic_label + "." + lesson.lesson_label + ": " + lesson.title}
      icon={(<ArrowBack/>)}
      iconHref={"/course/" + course.path}
      right={iconControls}
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
      <Container sx={{ py: 2 }} maxWidth="lg">

        {prevLesson ? (
          <Button variant="outlined" sx={{ mr: 2 }} href={Curriculum.pathToLesson(course, prevLesson)}>Prev</Button>
        ) : (
          <Button variant="outlined" sx={{ mr: 2 }} disabled>Prev</Button>
        )}

        {nextLesson ? (
          <Button variant="outlined" sx={{ mr: 2 }} href={Curriculum.pathToLesson(course, nextLesson)}>Next</Button>
        ) : (
          <Button variant="outlined" sx={{ mr: 2 }} disabled>Next</Button>
        )}

        <Button variant="outlined" sx={{ mr: 2 }} href={Curriculum.pathToCourse(course)}>Close</Button>

        {nextLesson ? (
          <Button variant="contained" color="success" sx={{ mr: 2 }} href={Curriculum.pathToLesson(course, nextLesson)}>Done</Button>
        ) : (
          <Button variant="contained" color="success" sx={{ mr: 2 }} href={Curriculum.pathToCourse(course)}>Done</Button>
        )}

      </Container>

    </PageLayout>
  );
}

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowBack from '@mui/icons-material/ArrowBack'
import PageLayout from './PageLayout'
import Link from 'next/link'
import Curriculum from './Curriculum'


export default function CoursePageLayout({ id }) {

  const course = Curriculum.findCourseByCourseId(id)

  return (
    <PageLayout
      title={course.course_label + ": " + course.title}
      icon={<ArrowBack/>}
      iconHref="/courses"
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

            <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
              {topic.title}
            </Typography>

            {topic.lessons.map((lesson) => (
              <Box key={lesson.id} sx={{ mb: 2 }}>
                <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 2, bgcolor: 'background.paper' }}>
                  <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" mr={2}>
                    <Link href={"/course/" + course.path + "/" + lesson.path}>
                      <Box sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ m: 2 }} component="span" align="left" color="text.primary" gutterBottom>
                          {topic.topic_label}.{lesson.lesson_label} {lesson.title}
                        </Typography>
                        <Typography component="span" align="left" color="text.primary" gutterBottom>
                          {lesson.description}
                        </Typography>
                      </Box>
                    </Link>
                    <Switch checked={true}/>
                  </Stack>
                </Box>
              </Box>
            ))}

          </div>
        ))}

      </Container>
    </PageLayout>
  );
}

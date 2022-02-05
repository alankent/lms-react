import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout'
import Curriculum from '../../components/Curriculum'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function CoursePage() {

  const router = useRouter()
  const { course_id } = router.query

  const course = Curriculum.findCourseById(course_id)

  return (
    <PageLayout pageTitle={course?.course_label + ": " + course?.title}>

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {course?.course_label + ": " + course?.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {course?.description}
        </Typography>

      </Container>

      {/* List of categories and courses per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {course?.topics?.map((topic) => (
          <div key={topic.topic_label}>

            <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
              {topic.topic_label} {topic.title}
            </Typography>

            {topic.lessons.map((lesson) => (
              <div key={lesson.lesson_label}>

                <Typography component="h4" variant="h4" align="left" color="text.primary" gutterBottom>
                  {topic.topic_label}.{lesson.lesson_label} {lesson.title}
                </Typography>

                <Typography component="p" align="left" color="text.primary" gutterBottom>
                  {lesson.description}
                </Typography>

              </div>
            ))}

          </div>
        ))}
      </Container>

    </PageLayout>
  );
}

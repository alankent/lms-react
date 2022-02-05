import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBack from '@mui/icons-material/ArrowBack';
import PageLayout from './PageLayout';
import Link from 'next/link';


export default function CoursePageLayout({ metadata }) {
  return (
    <PageLayout
      title={metadata.course_label + ": " + metadata.title}
      icon={<ArrowBack/>}
      iconHref="/courses"
    >

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {metadata.title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {metadata.description}
        </Typography>

      </Container>

      {/* List of topics and lessons per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {metadata.topics.map((topic) => (<>

          <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
            {topic.title}
          </Typography>

          {topic.lessons.map((lesson) => (
            <>
              <Typography component="h4" variant="h4" align="left" color="text.primary" gutterBottom>
                {topic.topic_label}.{lesson.lesson_label} {lesson.title}
              </Typography>
              <Link href={"/course/" + metadata.path + "/" + lesson.path}>Start Lesson</Link>
            </>
          ))}

        </>))}

      </Container>
    </PageLayout>
  );
}

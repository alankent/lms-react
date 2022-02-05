import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ArrowBack from '@mui/icons-material/ArrowBack';
import PageLayout from './PageLayout'
import Link from 'next/link'
import Curriculum from './Curriculum'


export default function LessonPageLayout({ metadata, children }) {

  const courseMetadata = Curriculum.findCourseByLessonId(metadata.db_id)
  const topicMetadata = Curriculum.findTopicByLessonId(metadata.db_id)

  return (
    <PageLayout
      title={courseMetadata.course_label + " " + topicMetadata.topic_label + "." + metadata.lesson_label + ": " + metadata.title}
      icon={(<ArrowBack/>)}
      iconHref={"/course/" + courseMetadata.path}
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

      {/* Page content area */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {children}
      </Container>

    </PageLayout>
  );
}

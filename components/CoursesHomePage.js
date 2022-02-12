import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import HtmlMetaTags from './HtmlMetaTags'
import TwitterMetaTags from './TwitterMetaTags'
import OpenGraphMetaTags from './OpenGraphMetaTags'
import Link from 'next/link';
import PageLayout from '../components/PageLayout'
import Curriculum from '../helpers/Curriculum'
import Assignment from '@mui/icons-material/Assignment'
import { useAuth } from '../components/AuthUserProvider'
import { useDatabase } from '../components/DatabaseProvider'


// Display the home page, which consists of a list of all courses
// that are available. If logged on, it displays which courses you
// have marked as 'done'.
//
export default function CoursesHomePage() {

  const { user } = useAuth();
  const { loading, courseCompleted, setCourseCompleted } = useDatabase();

  const title = "Web Comic and Animation Free Course Material"
  const description = "Welcome to my site for comic and animation creators who want to learn how to create web comics and animation with limited drawing or technical skills, using mainly freely available software."

  return (
    <PageLayout title="Curriculum" controls={<Assignment/>}>

      <HtmlMetaTags title={title} description={description} />
      <TwitterMetaTags title={title} description={description} site="@akent99" creator="@akent99" />
      <OpenGraphMetaTags type="website" title={title} description={description} locale="en_US" />

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {description}
        </Typography>

      </Container>

      {/* List of categories and courses per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {Curriculum.categories.map((category) => (
          <Box key={category.category_label}>

            <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
              {category.title}
            </Typography>

            <Grid container spacing={4}>
              {category.courses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>

                  {/* Each card on the grid */}
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                    <CardMedia
                      component="img"
                      image={Curriculum.pathToCourseImage(course)}
                      alt={"Image for " + course.title}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h4">
                        {course.title}
                      </Typography>
                      <Typography>
                        {course.description}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Stack sx={{ width: "100%" }} direction="row" justifyContent="space-between">
                        <Button href={Curriculum.pathToCourse(course)}>
                          GO TO COURSE
                        </Button>

                        {/* Don't show the switch if not logged in. */}
                        {/* Don't enable the switch until we have fetched state from the database. */}
                        {user && (
                          <Switch
                            disabled={loading}
                            checked={courseCompleted(course)}
                            onChange={e => setCourseCompleted(course, e.target.checked)}
                          />

                        )}
                      </Stack>
                    </CardActions>

                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

      </Container>
    </PageLayout>

  );
}

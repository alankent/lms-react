import React from 'react'
import Button from '@mui/material/Button'
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
import Link from 'next/link';
import PageLayout from '../components/PageLayout'
import Curriculum from '../components/Curriculum'
import Completion from '../components/Completion'
import Assignment from '@mui/icons-material/Assignment'
import { UserContext } from '../helpers/auth'
import { CompletionContext } from '../components/Completion'

export default function Courses() {

  const user = React.useContext(UserContext)
  const status = React.useContext(CompletionContext)

  return (
    <PageLayout title="Curriculum" controls={<Assignment/>}>

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Web Comic and Animation Free Course Material
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Welcome to my site for comic and animation creators who want to learn how to create
          web comics and animation with limited drawing or technical skills, using mainly freely
          available software.
        </Typography>

      </Container>

      {/* List of categories and courses per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {Curriculum.categories.map((category) => (
          <div key={category.category_label}>

            <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
              {category.title}
            </Typography>

            <Grid container spacing={4}>
              {category.courses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
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
                          Go to Course
                        </Button>
                        {user && (
                          <Switch
                            disabled={user == null}
                            checked={Completion.courseCompleted(status, course)}
                            onChange={e => Completion.setCourseCompleted(user, course, e.target.checked)}
                          />
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>

        ))}

      </Container>
    </PageLayout>

  );
}

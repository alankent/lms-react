import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Curriculum from '../components/Curriculum';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';


export default function CoursePage() {
  return (
    <PageLayout pageTitle="Curriculum">

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
{/*
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
  */}
      </Container>

      {/* List of categories and courses per category */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        {Curriculum.categories.map((category) => (<>

          <Typography component="h3" variant="h3" align="left" color="text.primary" gutterBottom>
            {category.title}
          </Typography>

          <Grid container spacing={4}>
            {category.courses.map((course) => (<>
              <Grid item key={course.course_id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
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
                    <Link href={"/course/" + course.course_id}>
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </>))}
          </Grid>

        </>))}

      </Container>
    </PageLayout>

  );
}

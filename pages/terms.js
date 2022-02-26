import React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import HtmlMetaTags from '../components/HtmlMetaTags'
import TwitterMetaTags from '../components/TwitterMetaTags'
import OpenGraphMetaTags from '../components/OpenGraphMetaTags'
import Close from '@mui/icons-material/Close'
import PageLayout from '../components/PageLayout'


export default function TermsOfService() {

  const title = "Terms of Service"
  const description = "This site is free to use for all at own risk."

  return (
    <PageLayout
      title="Terms of Service"
      controls={
        <IconButton sx={{ color: "white" }} href="/" aria-label="Home">
          <Close/>
        </IconButton>
      }
    >

      <HtmlMetaTags title={title} description={description} />
      <TwitterMetaTags title={title} description={description} site="@akent99" creator="@akent99" />
      <OpenGraphMetaTags type="website" title={title} description={description} locale="en_US" />

      {/* Page title area */}
      <Container maxWidth="md">

        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="p" color="text.secondary" paragraph>
          This site is provided at no charge to the public.
          While every effort is made to ensure the accuracy of the material presented,
          no liability is accepted for any errors on this site.
          The content is provided free of charge for use by the community, at own risk.
        </Typography>

        <Typography variant="p" color="text.secondary" paragraph>
          There is no obligation of visitors to this site to provide finacial support.
          Any contributions are gratefully accepted, but with no implied obligation to the site owner.
          This site may be taken down at any time without notice.
        </Typography>

      </Container>

    </PageLayout>

  )
}

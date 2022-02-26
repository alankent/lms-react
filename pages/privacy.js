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


export default function PrivacyPolicy() {

  const title = "Privacy Policy"
  const description = "Cookies may be used to track users behavior on the site for the purposes of improving site quality."

  return (
    <PageLayout
      title={title}
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
          Cookies may be used by this site to track user flows across the site with the goal of improving the quality
          of the service provided. (No such cookies exist today, but they may be added at a future time.)
        </Typography>

        <Typography variant="p" color="text.secondary" paragraph>
          All content on this site is provided free of charge without restriction. Login is not required.
          Login is supported (via Google identity management) as a service to users to remember their progress
          through content on this site. If you do not wish the site to record such details, please do not login.
        </Typography>

        <Typography variant="p" color="text.secondary" paragraph>
          If you log on, then this is assumed to be permission for the site to remember details about your usage.
          This is stored in a database with a Google allocated internal ID (not your email address) along with
          progress details. These details will never be shared with other parties.
        </Typography>

      </Container>

    </PageLayout>

  )
}

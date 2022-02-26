import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'


// Copyright message based on current year.
//
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://extra-ordinary.tv/">
        <a>Extra Ordinary</a>
      </Link>{' '}
      {new Date().getFullYear()}
      {'. '}
      <Link color="inherit" href="/terms">
        <a>Terms of Service</a>
      </Link>{'. '}
      <Link color="inherit" href="/privacy">
        <a>Privacy Policy</a>
      </Link>{'.'}
    </Typography>
  )
}


// Page footer. Keeping it pretty light at the moment, just the copyright message.
//
export default function PageFooter() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2 }} component="footer">
      <Copyright />
    </Box>
  )
}

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://extra-ordinary.tv/">
        Extra Ordinary
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function PageFooter() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      {/*
      <Typography variant="h6" align="center" gutterBottom>
        More Info
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      */}
      <Copyright />
    </Box>
  );
}

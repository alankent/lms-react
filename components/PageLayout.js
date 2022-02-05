//import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
//import Assignment from '@mui/icons-material/Assignment';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';


const theme = createTheme();

export default function PageLayout({ pageTitle, children }) {
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <PageHeader>
        { pageTitle }
      </PageHeader>

      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
          {children}
        </Box>
      </main>

      <PageFooter />

    </ThemeProvider>
  );
}

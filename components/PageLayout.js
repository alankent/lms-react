import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';


const theme = createTheme();

export default function PageLayout({ title, children, icon, iconHref, right }) {
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <PageHeader title={title} icon={icon} iconHref={iconHref} right={right} />

      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
          {children}
        </Box>
      </main>

      <PageFooter />

    </ThemeProvider>
  );
}

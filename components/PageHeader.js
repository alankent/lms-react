import AppBar from '@mui/material/AppBar';
import Assignment from '@mui/icons-material/Assignment';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function PageHeader({ children }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Assignment sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

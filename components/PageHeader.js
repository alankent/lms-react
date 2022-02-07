import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Assignment from '@mui/icons-material/Assignment'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function PageHeader({ title, controls }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        {controls}
        <Typography variant="h6" component="div" color="inherit" noWrap sx={{ ml: 2, flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

PageHeader.defaultProps = {
  icon: (<Assignment/>)
}

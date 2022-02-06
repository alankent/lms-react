import AppBar from '@mui/material/AppBar'
import Assignment from '@mui/icons-material/Assignment'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function PageHeader({ title, icon, iconHref, right }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        {iconHref ? (
          <Link href={iconHref}>
            {icon}
          </Link>
        ) : (
          <span>
            {icon}
          </span>
        )}
        <Typography variant="h6" component="div" color="inherit" noWrap sx={{ ml: 2, flexGrow: 1 }}>
          {title}
        </Typography>
        {right}
      </Toolbar>
    </AppBar>
  );
}

PageHeader.defaultProps = {
  icon: (<Assignment/>)
}

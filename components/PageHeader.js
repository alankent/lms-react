import AppBar from '@mui/material/AppBar'
import Assignment from '@mui/icons-material/Assignment'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function PageHeader({ title, icon, iconHref }) {
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
        <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

PageHeader.defaultProps = {
  icon: (<Assignment/>)
}

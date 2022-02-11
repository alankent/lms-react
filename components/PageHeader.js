import React from 'react'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Logout from '@mui/icons-material/Logout'
import Login from '@mui/icons-material/Login'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import { useAuth } from '../components/AuthUserProvider'


export default function PageHeader({ title, controls }) {

  const { user, signIn, signOut } = useAuth();

  console.log("IN PageHeader", user)

  const handleSignIn = () => {
    signIn()
  }
  const handleSignOut = () => {
    signOut()
  }

  /* Alternatives for login button
  <IconButton sx={{ color: "white" }} onClick={handleSignIn}>
    <AccountCircle/>
  </IconButton>

  <Typography variant="h6" component="span" color="inherit" noWrap>
    Login
  </Typography>
  */
  
  return (
    <AppBar position="relative">
      <Toolbar>
        {controls}
        <Typography variant="h6" component="div" color="inherit" noWrap sx={{ ml: 2, flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          {(user === null) ? (
            <Tooltip title="Log in to save your progress as you complete lessons">
              <Button variant="text" sx={{ color: "white" }} onClick={handleSignIn}>
                LOGIN
              </Button>
            </Tooltip>
          ) : (
            <Stack direction="row" alignItems="center">
              {/* <img> returns warning to use <Image>. <Image> does not let you use Google URLs. Ugg. */}
              {/* Sometimes the photo does not appear, but it might be related to other sign-in/out problems I am having. */}
              {/* <div dangerouslySetInnerHTML={{__html: '<img width="40" height="40" style="border-radius: 50%;" src="' + user.photoURL + '">'}}></div> */}
              <Typography variant="h6" component="span" color="inherit" noWrap>
                {user.displayName}
              </Typography>
              <IconButton sx={{ color: "white" }} onClick={handleSignOut}>
                <Logout/>
              </IconButton>
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

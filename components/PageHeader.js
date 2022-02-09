import React from 'react'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Logout from '@mui/icons-material/Logout'
import Login from '@mui/icons-material/Login'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import Completion from '../components/Completion'
import { signInWithGoogle, signOutFromSite, AuthContext } from '../helpers/auth'


export default function PageHeader({ title, controls }) {

  const {user, setUser} = React.useContext(AuthContext)

  console.log("IN PageHeader")
  console.log(user)

  var setUser2 = (user) => {
    console.log("SET USER TO...");
    console.log(user);
    Completion.setAuthenticatedUser(user)
    return setUser(user)
  }
  
  return (
    <AppBar position="relative">
      <Toolbar>
        {controls}
        <Typography variant="h6" component="div" color="inherit" noWrap sx={{ ml: 2, flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          {(user === null) ? (
            <IconButton sx={{ color: "white" }} onClick={() => signInWithGoogle(setUser2)}>
              <AccountCircle/>
            </IconButton>
          ) : (
            <Stack direction="row">
              {/* <img> returns warning to use <Image>. <Image> does not let you use Google URLs. Ugg. */}
              <div dangerouslySetInnerHTML={{__html: '<img width="40" height="40" style="border-radius: 50%;" src="' + user.photoURL + '">'}}></div>
              <IconButton sx={{ color: "white" }} onClick={() => signOutFromSite(setUser2)}>
                <Logout/>
              </IconButton>
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

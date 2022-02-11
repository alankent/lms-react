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
import firebaseInit from '../helpers/firebaseConfig'
import { userDetails, UserContext, UpdateUserContext } from '../helpers/auth'
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from 'firebase/auth'


export default function PageHeader({ title, controls }) {

  const { auth } = firebaseInit()

  const user = React.useContext(UserContext)
  const setUser = React.useContext(UpdateUserContext)

  console.log("IN PageHeader", user)

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: "select_account" })
    signInWithRedirect(auth, provider)
    console.log(auth)
  }

  React.useEffect(() => {
    getRedirectResult(auth)
      .then(function(result) {
        console.log("IN SIGN-IN USE EFFECT HOOK", result)
        if (result != null) {
          const user = userDetails(result.user)
          setUser(user)
          Completion.listenForUpdates(user)
        }
      })
      .catch(function(error) {
        console.log(error.code, error.message)
      })
  })

  const handleSignOut = () => {
    console.log("REGISTERING SIGN *OFF* FOR...", user);
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      console.log(error.code, error.message)
    })
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
            <IconButton sx={{ color: "white" }} onClick={handleSignIn}>
              <AccountCircle/>
            </IconButton>
          ) : (
            <Stack direction="row">
              {/* <img> returns warning to use <Image>. <Image> does not let you use Google URLs. Ugg. */}
              <div dangerouslySetInnerHTML={{__html: '<img width="40" height="40" style="border-radius: 50%;" src="' + user.photoURL + '">'}}></div>
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

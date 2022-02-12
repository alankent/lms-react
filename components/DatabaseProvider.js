import { useState, useEffect, createContext, useContext } from 'react'
import firebaseInit from '../helpers/firebaseConfig'
import { useAuth } from './AuthUserProvider'
import { ref, once, update, onValue, offValue } from 'firebase/database'


// Create a context for database connection details.
//
const databaseContext = createContext({
  loading: true,
  completionStatus: null,
  courseCompleted: (course) => false,
  setCourseCompleted: (course, value) => {},
  lessonCompleted: (lesson) => false,
  setLessonCompleted: (lesson, value) => {},
})


// Update the database contents for the specified user with a new set of state
// for what lessons and courses the user has completed.
//
function updateDatabase(db, user, completionStatus) {

  if (!user) {
    console.warn("Tried to update database without logging on! (user == null)")
    return
  }
  var r = ref(db)
  if (!r) {
    console.warn("Cannot connect to database (authentication failed?)")
    return
  }

  var updates = {}
  updates["/completed/" + user.uid] = completionStatus
  return update(r, updates)
    .then(() => {
      //console.log("UPDATE DONE FOR", user)
    })
}


// Get everything set up to talk to the database.
// TODO: Could optimize to have one update message per lesson.
//
function useFirebaseDatabase() {

  const { db } = firebaseInit()
  const { user } = useAuth()

  // Keep track of the current completion state of lessons.
  const [completionStatus, setCompletionStatus] = useState({})
  const [loading, setLoading] = useState(true)

  // Return true if the user has completed this course.
  const courseCompleted = (course) => {
    if (!user || loading || completionStatus == null) {
      return false
    }
    var response = completionStatus[course.id] ? true : false
    return response
  }

  // Update database to match user course input selection
  const setCourseCompleted = (course, value) => {
    if (!user || loading || completionStatus == null) {
      console.warn("Asking database to update course completion status when busy/not connected")
      return
    }
    setLoading(true)
    completionStatus[course.id] = value
    setCompletionStatus(completionStatus)
    updateDatabase(db, user, completionStatus)
        .then(() => { setLoading(false) })
  }

  // Return true if lesson has been completed.
  const lessonCompleted = (lesson) => {
    if (!user || loading || completionStatus == null) {
      return false
    }
    var response = completionStatus[lesson.id] ? true : false
    return response
  }

  // Update database to match user lesson input selection
  const setLessonCompleted = (lesson, value) => {
    if (!user || loading || completionStatus == null) {
      console.warn("Asking database to update lesson completion status when busy/not connected")
      return
    }
    setLoading(true)
    completionStatus[lesson.id] = value
    setCompletionStatus(completionStatus)
    updateDatabase(db, user, completionStatus)
        .then(() => { setLoading(false) })
  }

  // TODO: I have tried other listening techniques, but usually end up in infinite loops.
  // This approach can get multiple database updates for a single page with no database changes (!!).

  // listen for Firebase database state change
  const onValueChange = (snapshot) => {
    var newStatus = snapshot.val()
    //console.log("RECEIVED DATABASE UPDATE FOR " + user.uid, newStatus)
    if (newStatus !== null) {
      completionStatus = newStatus
      if (loading) {
        setLoading(false)
      }
    }
  }

  // Once we are connected (and so have 'user' available), connect to the database
  if (user) {
    // Listen for updates, so if someone in other session changes something, we see it.
    var completionListenerRef = ref(db, 'completed/' + user.uid)
    onValue(completionListenerRef, onValueChange)
  }

  // Return state (loading, completionStatus) and methods for caller's convenience.
  return {
    loading,
    completionStatus,
    lessonCompleted,
    setLessonCompleted,
    courseCompleted,
    setCourseCompleted,
  }
}


// React component to wrap page contents in pages/_app.js.
// This must sit inside the authentication component so we can pick up the user context.
//
export function DatabaseProvider({ children }) {
  const database = useFirebaseDatabase()
  return <databaseContext.Provider value={database}>{children}</databaseContext.Provider>
}


// Convenience function to get details
//
export const useDatabase = () => useContext(databaseContext)

import { useState, useEffect, createContext, useContext } from 'react'
import { useFirebase } from './FirebaseProvider'
import { useAuth } from './AuthUserProvider'
import { ref, get, update, onValue, off } from 'firebase/database'


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


// Update the database state what what courses/lessons have been completed.
//
function updateDatabase(db, user, id, value) {

  if (!user) {
    console.warn("Tried to update database without logging on! (user = null)")
    return
  }
  var r = ref(db)
  if (!r) {
    console.warn("Cannot connect to database (authentication failed?)")
    return
  }

  var updates = {}
  updates[`/completed/${user.uid}/${id}`] = value
  return update(r, updates)
    .then(() => {
      //console.log("UPDATE DONE FOR", user)
    })
}


// Get everything set up to talk to the database.
//
function useFirebaseDatabase() {

  const { db } = useFirebase()
  const { user } = useAuth()

  // Keep track of the current completion state of lessons.
  const [completionStatus, setCompletionStatus] = useState({})
  const [loading, setLoading] = useState(true)

  // Return true if the user has completed this course.
  const courseCompleted = (course) => {
    if (!user || loading || completionStatus === null) {
      return false
    }
    var response = completionStatus[course.id] ? true : false
    return response
  }

  // Update database to match user course input selection
  const setCourseCompleted = (course, value) => {
    if (!user || loading || completionStatus === null) {
      console.warn("Asking database to update course completion status when busy/not connected")
      return
    }
    setLoading(true)
    updateDatabase(db, user, course.id, value)
  }

  // Return true if lesson has been completed.
  const lessonCompleted = (lesson) => {
    if (!user || loading || completionStatus === null) {
      return false
    }
    var response = completionStatus[lesson.id] ? true : false
    return response
  }

  // Update database to match user lesson input selection
  const setLessonCompleted = (lesson, value) => {
    if (!user || loading || completionStatus === null) {
      console.warn("Asking database to update lesson completion status when busy/not connected")
      return
    }
    setLoading(true)
    updateDatabase(db, user, lesson.id, value)
  }

  // listen for Firebase database state change
  const onValueChange = (snapshot) => {
    console.log("RECEIVED DATABASE UPDATE FOR " + user?.uid)
    var newStatus = snapshot.val()
    if (newStatus !== null) {
      setCompletionStatus(newStatus)
      setLoading(false)
    }
  }

  // Listen for updates to the database, deregistering listener when done
  useEffect(() => {
    if (user) {
      const listenerRef = ref(db, `/completed/${user.uid}`)
      const listener = onValue(listenerRef, onValueChange)

      // Stop listening for updates when no longer required
      return () => off(listenerRef, listener);
    }
  }, [user?.uid]);

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

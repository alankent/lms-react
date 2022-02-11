import { useState, useEffect, createContext, useContext } from 'react'
import firebaseInit from '../helpers/firebaseConfig'
import { useAuth } from './AuthUserProvider'
import { ref, once, update, onValue, offValue } from 'firebase/database'

const databaseContext = createContext({
  loading: true,
  completionStatus: null,
  courseCompleted: (course) => false,
  setCourseCompleted: (course, value) => {},
  lessonCompleted: (lesson) => false,
  setLessonCompleted: (lesson, value) => {},
});

// This synchronizes the whole lesson/course completion for a user in a single big JSON lump.
function updateDatabase(db, user, completionStatus) {
  if (!user) {
    console.warn("Tried to update database without logging on! (user == null)")
    return
  }
  var r = ref(db)
  if (r === undefined || r === null) {
    console.warn("Cannot connect to database (authentication failed?)")
    return
  }

  console.log("UPDATING DATABASE for " + user.uid)
  console.log("Returned status", completionStatus)

  var updates = {}
  updates["/completed/" + user.uid] = completionStatus
  return update(r, updates)
    .then(() => {
      console.log("UPDATE DONE")
    })
}

function useFirebaseDatabase() {
  console.log("IN useFirebaseDatabase()")

  const { db } = firebaseInit();
  const { user } = useAuth();

  const [completionStatus, setCompletionStatus] = useState({});
  const [loading, setLoading] = useState(true);

  const courseCompleted = (course) => {
    if (!user || loading || completionStatus == null) {
      return false;
    }
    var response = completionStatus[course.id] ? true : false
    //console.log("Course " + course.id + " completed=" + response)
    return response
  }

  const setCourseCompleted = (course, value) => {
    if (!user || loading || completionStatus == null) {
      console.warn("Asking database to update course completion status when busy/not connected")
      return
    }
    console.log("Marking " + course.id + " as completed=" + value)
    setLoading(true)
    completionStatus[course.id] = value
    setCompletionStatus(completionStatus)
    updateDatabase(db, user, completionStatus)
        .then(() => { setLoading(false) })
  }

  const lessonCompleted = (lesson) => {
    if (!user || loading || completionStatus == null) {
      return false
    }
    var response = completionStatus[lesson.id] ? true : false
    //console.log("Lesson " + lesson.id + " completed=" + response)
    return response
  }

  const setLessonCompleted = (lesson, value) => {
    if (!user || loading || completionStatus == null) {
      console.warn("Asking database to update lesson completion status when busy/not connected")
      return
    }
    console.log("Marked " + lesson.id + " as completed=" + value)
    setLoading(true)
    completionStatus[lesson.id] = value
    setCompletionStatus(completionStatus)
    updateDatabase(db, user, completionStatus)
        .then(() => { setLoading(false) })
  }

  // listen for Firebase database state change
  const onValueChange = (snapshot) => {
    var newStatus = snapshot.val();
    console.log("RECEIVED DATABASE UPDATE FOR " + user.uid, newStatus);
    if (newStatus !== null) {
      completionStatus = newStatus
      if (loading) {
        console.log("SETTING LOADING TO FALSE")
        setLoading(false)
      }
    }
  }

  if (user) {
    console.log("REGISTERING DATABASE LISTENER for " + user.uid)
    var completionListenerRef = ref(db, 'completed/' + user.uid);
    onValue(completionListenerRef, onValueChange)
  }

  return {
    loading,
    completionStatus,
    lessonCompleted,
    setLessonCompleted,
    courseCompleted,
    setCourseCompleted,
  }
}

export function DatabaseProvider({ children }) {
  const database = useFirebaseDatabase();
  return <databaseContext.Provider value={database}>{children}</databaseContext.Provider>;
}

export const useDatabase = () => useContext(databaseContext);

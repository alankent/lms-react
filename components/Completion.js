import React from 'react'
import firebaseInit from '../helpers/firebaseConfig'
import { ref, onValue, update } from 'firebase/database'

const { db } = firebaseInit()

// These two are kept in sync so we have access here, outside a react function.
// We only ever update this structure in this file.
var idStatus = {}

// Callback function to update status information.
var tellReactStatusUpdated = null


/* Firebase rules to protect database
{
  "rules": {
    ".read": false,
    ".write": false,
    "completed": {
      "$uid": {
        ".read": "$uid == auth.uid",
        ".write": "$uid == auth.uid"
      }
    }
  }
}
*/

// This synchronizes the whole idStatus for a user in a single big JSON lump.
// 
function updateDatabase(user) {
  if (user == null) {
    console.warn("Tried to update database without logging on! (user == null)")
    return
  }
  var r = ref(db)
  if (r === undefined || r === null) {
    console.warn("Cannot connect to database (authentication failed?)")
    return
  }
  var updates = {}
  updates["/completed/" + user.id] = idStatus
  var status = update(r, updates)
  console.log("UPDATED DATABASE for " + user.id)
  console.log(idStatus)

  if (tellReactStatusUpdated) {
    tellReactStatusUpdated(idStatus)
  }
}


const Completion = {

  registerStateUpdateCallback(setState) {
    console.log("Registered status update callback")
    tellReactStatusUpdated = (newStatus) => {
      console.log("TELLING REACT TO UPDATE STATUS")
      console.log(newStatus)
      setState(newStatus)
    }
  },

  listenForUpdates(user) {
    console.log("COMPLETION LISTEN FOR UPDATES")
    console.log(user)

    // Listen for DB updates for this user id.
    if (user) {
      const completedRef = ref(db, 'completed/' + user.id);
      onValue(completedRef, (snapshot) => {
        var newStatus = snapshot.val();
        console.log("RECEIVED DATABASE UPDATE FOR " + user.id);
        console.log(newStatus)
        if (newStatus !== null) {
          idStatus = newStatus
          tellReactStatusUpdated(idStatus)
        }
      });
    }
  },

  // Return true if the specified course has been completed.
  courseCompleted(status, course) {
    var response = status[course.id] ? true : false
    //console.log("Course " + course.id + " completed=" + response)
    return response
  },

  setCourseCompleted(user, course, value) {
    idStatus[course.id] = value
    updateDatabase(user)
    //console.log("Marked " + course.id + " as completed=" + value)
  },

  lessonCompleted(status, lesson) {
    var response = status[lesson.id] ? true : false
    console.log("Lesson " + lesson.id + " completed=" + response)
    return response
  },

  setLessonCompleted(user, lesson, value) {
    idStatus[lesson.id] = value
    updateDatabase(user, )
    console.log("Marked " + lesson.id + " as completed=" + value)
  },

}

export const CompletionContext = React.createContext(idStatus)

export default Completion

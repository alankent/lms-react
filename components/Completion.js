import firebaseDb from '../helpers/db'
import firebaseAuth from '../helpers/auth'
import { getDatabase, ref, onValue, update } from "firebase/database";


var idStatus = {}
var currentUser



// Allow read/write access on all documents to any user signed in to the application
// https://www.freecodecamp.org/news/react-firebase-authentication-and-crud-operations/
/*
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/

// This synchronizes the whole idStatus for a user in a single big JSON lump.
// 
function updateDatabase() {

  if (currentUser === undefined) return;

  var updates = {}
  updates["/completed/" + currentUser.id] = idStatus
  var status = update(ref(firebaseDb), updates)
  console.log("UPDATED DATABASE for " + currentUser.id)
}


const Completion = {

  setAuthenticatedUser(user) {
    console.log("COMPLETION")
    {//if (user?.id !== currentUser?.id) {
      currentUser = user
      console.log("  NEW USER")
      console.log(currentUser)

      // Listen for DB updates for this user id.
      if (currentUser) {
        const completedRef = ref(firebaseDb, 'completed/' + currentUser.id);
        onValue(completedRef, (snapshot) => {
          var newStatus = snapshot.val();
          console.log("RECEIVED DATABASE UPDATE FOR " + currentUser.id);
          console.log(newStatus)
          if (newStatus !== null) {
            idStatus = newStatus
          }
        });
      }
    }
  },

  // Return true if connected to firestore
  connected() {
    return currentUser !== undefined
  },

  // Return true if the specified course has been completed.
  courseCompleted(course) {
    var response = idStatus[course.id] ? true : false
    //console.log("Course " + course.id + " completed=" + response)
    return response
  },

  setCourseCompleted(course, value) {
    idStatus[course.id] = value
    updateDatabase()
    //console.log("Marked " + course.id + " as completed=" + value)
  },

  lessonCompleted(lesson) {
    var response = idStatus[lesson.id] ? true : false
    console.log("Lesson " + lesson.id + " completed=" + response)
    return response
  },

  setLessonCompleted(lesson, value) {
    idStatus[lesson.id] = value
    updateDatabase()
    console.log("Marked " + lesson.id + " as completed=" + value)
  },

}

export default Completion

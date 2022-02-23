import { useState, createContext, useContext } from 'react'
import { useDatabase } from './DatabaseProvider'


// Create a context for database connection details.
//
const completionContext = createContext({
  loading: true,
  completionStatus: null,
  courseCompleted: (course) => false,
  setCourseCompleted: (course, value) => {},
  lessonCompleted: (lesson) => false,
  setLessonCompleted: (lesson, value) => {},
})


// React component to wrap page contents in pages/_app.js.
// This must sit inside the authentication component so we can pick up the user context.
//
export function CompletionProvider({ children }) {

  const { loading, listeners, updatePaths } = useDatabase()

  // Keep track of the current completion state of lessons.
  const [completionStatus, setCompletionStatus] = useState({})

  // Listen for database updates and save them away.
  listeners({ "completed": setCompletionStatus })

  // Return true if the user has completed this course.
  const courseCompleted = (course) => {
    if (loading || completionStatus === null) {
      return false
    }
    var response = completionStatus[course.id] ? true : false
    return response
  }

  // Update database to match user course input selection
  const setCourseCompleted = (course, value) => {
    updatePaths({ [`completed/${course.id}`]: value })
  }

  // Return true if lesson has been completed.
  const lessonCompleted = (lesson) => {
    if (loading || completionStatus === null) {
      return false
    }
    var response = completionStatus[lesson.id] ? true : false
    return response
  }

  // Update database to match user lesson input selection
  const setLessonCompleted = (lesson, value) => {
    updatePaths({ [`completed/${lesson.id}`]: value })
  }

  // Return state (loading, completionStatus) and methods for caller's convenience.
  const completion = {
    loading,
    completionStatus,
    lessonCompleted,
    setLessonCompleted,
    courseCompleted,
    setCourseCompleted,
  }

  return <completionContext.Provider value={completion}>{children}</completionContext.Provider>
}


// Convenience function to get details
//
export const useCompletion = () => useContext(completionContext)

import { useState, createContext, useContext } from 'react'
import { useFirebase } from './FirebaseProvider'
import { useAuth } from './AuthUserProvider'
import { ref, get, update, onValue, off } from 'firebase/database'


// Create a context for database connection details.
//
const databaseContext = createContext({

  // Set to true if waiting for data from database
  loading: true,

  // Register listeners (object with paths and a setter function to call)
  listeners: (watches) => {},

  // Request a database update (object with paths and new values)
  updatePaths: (paths) => {},
})


// React component to wrap page contents in pages/_app.js.
// This must sit inside the authentication component so we can pick up the user context.
//
export function DatabaseProvider({ children }) {

  const { db } = useFirebase()
  const { user } = useAuth()

  // Keep track of the current completion state of lessons.
  const [loading, setLoading] = useState(true)

  // Listen for updates to the database, deregistering listener when done.
  // Input is an object where the key is the path to listen to, and
  // the value is the setter function to call when the value changes.
  const listeners = (watches) => {

    if (!user) {
      return () => null
    }

    // Watch each provided path, calling the setting on change.
    var unsubscribe = []
    for (var path in watches) {

      // Get the setter function for the path.
      const setter = watches[path]

      // Get the ref handle for the path
      const listenerPath = `/user/${user.uid}/${path}`
      const listenerRef = ref(db, listenerPath)

      // Register listener for value changes
      const listener = onValue(listenerRef, (snapshot) => {
        //console.log("RECEIVED DATABASE UPDATE FOR " + user?.uid)
        var newValue = snapshot.val()
        setter(newValue)
        setLoading(false)
      })

      // Remember all on-value-changed listeners so we can remove them later
      unsubscribe.push(() => off(listenerRef, listener))
    }

    // Stop listening for updates when no longer required
    return () => unsubscribe.map((unsub) => unsub())
  }
  
  // Function to update database with a set of new values.
  // Null as value means delete the path.
  const updatePaths = (paths) => {

    if (!user) {
      console.warn("Tried to update database without logging on! (user = null)")
      return
    }

    var r = ref(db)
    if (!r) {
      console.warn("Cannot connect to database (authentication failed?)")
      return
    }

    // Build up update requests with full paths (add /user/id prefix)
    var updates = {}
    for (var path in paths) {
      const value = paths[path]
      updates[`/user/${user.uid}/${path}`] = value
    }
   
    // Record that we are expecting the value set to be udpated (from the
    // database). The current value is out of date so should not be used.
    setLoading(true)

    // Ask for datatabse update
    return update(r, updates)
  }

  // Return state (loading, completionStatus) and methods for caller's convenience.
  const database = {
    loading,
    listeners,
    updatePaths,
  }

  return <databaseContext.Provider value={database}>{children}</databaseContext.Provider>
}


// Convenience function to get details
//
export const useDatabase = () => useContext(databaseContext)

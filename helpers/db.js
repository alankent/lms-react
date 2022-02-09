import app from './firebaseConfig'
import { getDatabase } from 'firebase/database'


const db = getDatabase(app)

export default db

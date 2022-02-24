import LessonPageLayout from '../../../components/LessonPageLayout'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'

export default function Lesson_default() {

  const router = useRouter()
  const { courseId, lessonId } = router.query

  if (!courseId || !lessonId) {
    return <></>
  }

  return (
    <LessonPageLayout id={courseId + "_" + lessonId} />
  )
}

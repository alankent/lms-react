import LessonPageLayout from '../../../components/LessonPageLayout'
import { useRouter } from 'next/router'
import Curriculum from '../../../helpers/Curriculum'

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


// Return all the parameters for all paths to lessons
//
export async function getStaticPaths() {
  const paths = Curriculum.allDynamicRouteCourseAndLessonIds().map(({ courseId, lessonId }) => ({
    params: {
      courseId,
      lessonId
    }
  }))
  return {
    paths,
    fallback: false
  }
}


// Get properties for the given entity (we do nothing)
//
export async function getStaticProps({ params }) {
  return {
    props: { }
  }
}

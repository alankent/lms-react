import CoursePageLayout from '../../components/CoursePageLayout'
import { useRouter } from 'next/router'


export default function Course_default() {
  
  const router = useRouter()
  const { courseId } = router.query

  if (!courseId) {
    return <></>
  }

  return (
    <CoursePageLayout id={courseId}/>
  );
}

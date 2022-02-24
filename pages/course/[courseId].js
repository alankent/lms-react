import CoursePageLayout from '../../components/CoursePageLayout'
import { useRouter } from 'next/router'
import Curriculum from '../../helpers/Curriculum'


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


// Return all the parameters for all paths to courses
//
export async function getStaticPaths() {
  const paths = Curriculum.allDynamicRouteCourseIds().map(({ courseId }) => ({
    params: {
      courseId
    }
  }))
  console.log(paths)
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
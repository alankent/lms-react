import Image from 'next/Image'
import LessonPageLayout from '../../../components/LessonPageLayout'

const metadata = {
  lesson_label: "1",
  path: "001",
  db_id: "vs101_001",
  title: "Installing VRoid Studio",
  description: "A quick guide to installing VRoid Studio on your desktop."
}


export default function Lesson_vs101_001() {
  return (
    <LessonPageLayout metadata={metadata}>
      <p>HERE IS MY LESSON 001 CONTENT</p>
    </LessonPageLayout>
  )
}

Lesson_vs101_001.metadata = metadata

//console.log("INIT LESSON 001")
//console.log(Lesson_vs101_001)

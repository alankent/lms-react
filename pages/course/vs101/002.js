import Image from 'next/Image'
import LessonPageLayout from '../../../components/LessonPageLayout'

const metadata = {
  lesson_label: "2",
  path: "002",
  db_id: "vs101_002",
  title: "Basic Controls",
  description: "A first introduction to the basic controls in VRoid Studio."
}


export default function Lesson_vs101_002() {
  return (
    <LessonPageLayout metadata={metadata}>
      <p>HERE IS MY LESSON 002 CONTENT</p>
    </LessonPageLayout>
  )
}

Lesson_vs101_002.metadata = metadata

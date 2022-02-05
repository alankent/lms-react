import Image from 'next/Image'
import LessonPageLayout from '../../../components/LessonPageLayout'

const metadata = {
  lesson_label: "1b",
  path: "003b",
  db_id: "vs101_102",
  title: "Pose Test",
  description: "Test your character poses before exporting from VRoid Studio to other systems."
}

export default function Lesson_vs101_003b() {
  return (
    <LessonPageLayout metadata={metadata}>
      <p>HERE IS MY LESSON 003b CONTENT</p>
    </LessonPageLayout>
  )
}

Lesson_vs101_003b.metadata = metadata

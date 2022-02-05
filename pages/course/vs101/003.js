import Image from 'next/Image'
import LessonPageLayout from '../../../components/LessonPageLayout'

const metadata = {
  lesson_label: "1",
  path: "003",
  db_id: "vs101_003",
  title: "Animation Test",
  description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
}

export default function Lesson_vs101_003() {
  return (
    <LessonPageLayout metadata={metadata}>
      <p>HERE IS MY LESSON 003 CONTENT</p>
    </LessonPageLayout>
  )
}

Lesson_vs101_003.metadata = metadata

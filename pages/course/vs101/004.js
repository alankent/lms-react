import Image from 'next/Image'
import LessonPageLayout from '../../../components/LessonPageLayout'

const metadata = {
  lesson_label: "2",
  path: "004",
  db_id: "vs101_004",
  title: "Animation Test",
  description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
}

export default function Lesson_vs101_004() {
  return (
    <LessonPageLayout metadata={metadata}>
      <p>HERE IS MY LESSON 004 CONTENT</p>
    </LessonPageLayout>
  )
}

Lesson_vs101_004.metadata = metadata

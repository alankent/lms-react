import CoursePageLayout from '../../../components/CoursePageLayout'
import Link from 'next/link'

import Lesson_vs101_001 from './001'
import Lesson_vs101_002 from './002'
import Lesson_vs101_003 from './003'
import Lesson_vs101_003b from './003b'
import Lesson_vs101_004 from './004'

const metadata = {
  path: "vs101",
  db_id: "vs101",
  course_label: "VS-101",
  title: "VRoid Studio Basics",
  description: "An elementary course to create your first VRoid Studio 3D avatar.",
  topics: [
    {
      topic_label: "1",
      title: "Introduction to VRoid Studio",
      lessons: [
        Lesson_vs101_001.metadata,
        Lesson_vs101_002.metadata
      ]
    },
    {
      topic_label: "2",
      title: "Exporting VRM Files",
      lessons: [
        Lesson_vs101_003.metadata,
        Lesson_vs101_003b.metadata,
        Lesson_vs101_004.metadata
      ]
    }
  ]
}

export default function Course_vs101() {
  return (
    <CoursePageLayout metadata={metadata} />
  );
}

Course_vs101.metadata = metadata

//console.log("INIT COURS vs101")
//console.log(Course_vs101)
//console.log("INIT COURS vs101 TOPIC [0]")
//console.log(Course_vs101.metadata.topics[0])

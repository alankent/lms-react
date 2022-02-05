import CoursePageLayout from '../../../components/CoursePageLayout'
import Link from 'next/link'

import Lesson_vs101_001 from './001'

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
        {
          lesson_label: "2",
          path: "002",
          db_id: "vs101_002",
          title: "Basic Controls",
          description: "A first introduction to the basic controls in VRoid Studio."
        }
      ]
    },
    {
      topic_label: "2",
      title: "Exporting VRM Files",
      lessons: [
        {
          lesson_label: "1",
          path: "003",
          db_id: "vs101_003",
          title: "Animation Test",
          description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
        },
        {
          lesson_label: "1b",
          path: "001b",
          db_id: "vs101_102",
          title: "Pose Test",
          description: "Test your character poses before exporting from VRoid Studio to other systems."
        },
        {
          lesson_label: "2",
          path: "002",
          db_id: "vs101_004",
          title: "Animation Test",
          description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
        }
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

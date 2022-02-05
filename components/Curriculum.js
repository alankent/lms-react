const Curriculum = {
  categories: [
    {
      title: "VRoid Studio",
      description: "Training material on VRoid Studio",
      courses: [
        {
          course_id: "vs101",
          course_label: "VS-101",
          title: "VRoid Studio Basics",
          description: "An elementary course to create your first VRoid Studio 3D avatar.",
          topics: [
            {
              topic_label: "1",
              title: "Introduction to VRoid Studio",
              lessons: [
                {
                  lesson_label: "1",
                  lesson_id: "vs101_001",
                  title: "Installing VRoid Studio",
                  description: "A quick guide to installing VRoid Studio on your desktop."
                },
                {
                  lesson_label: "2",
                  lesson_id: "vs101_002",
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
                  lesson_id: "vs101_003",
                  title: "Animation Test",
                  description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
                },
                {
                  lesson_label: "1b",
                  lesson_id: "vs101_102",
                  title: "Pose Test",
                  description: "Test your character poses before exporting from VRoid Studio to other systems."
                },
                {
                  lesson_label: "2",
                  lesson_id: "vs101_004",
                  title: "Animation Test",
                  description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Curriculum


Curriculum.findCourseById = function findCourseById(courseId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      if (course.course_id === courseId) {
        return course;
      }
    }
  }
  return null;
}

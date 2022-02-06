
const Curriculum = {
  categories: [
    {
      category_label: "vs",
      title: "VRoid Studio",
      description: "Training material on VRoid Studio",
      courses: [
        {
          course_label: "VS-101",
          path: "vs101",
          id: "vs101",
          title: "VRoid Studio Basics",
          description: "An elementary course to create your first VRoid Studio 3D avatar.",
          topics: [
            {
              topic_label: "1",
              id: "vs101_t1",
              title: "Introduction to VRoid Studio",
              lessons: [
                {
                  lesson_label: "1",
                  path: "001",
                  id: "vs101_001",
                  title: "Installing VRoid Studio",
                  description: "A quick guide to installing VRoid Studio on your desktop."
                },
                {
                  lesson_label: "2",
                  path: "002",
                  id: "vs101_002",
                  title: "Basic Controls",
                  description: "A first introduction to the basic controls in VRoid Studio."
                }
              ]
            },
            {
              topic_label: "2",
              id: "vs101_t2",
              title: "Exporting VRM Files",
              lessons: [
                {
                  lesson_label: "1",
                  path: "003",
                  id: "vs101_003",
                  title: "Animation Test",
                  description: "Test your character with built in animation clips before exporting from VRoid Studio to other systems."
                },
                {
                  lesson_label: "1b",
                  path: "003b",
                  id: "vs101_102",
                  title: "Pose Test",
                  description: "Test your character poses before exporting from VRoid Studio to other systems."
                },
                {
                  lesson_label: "2",
                  path: "004",
                  id: "vs101_004",
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


Curriculum.findCourseByCourseId = function findCourseByCourseId(courseId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      if (course.id === courseId) {
        return course;
      }
    }
  }
  return null;
}

Curriculum.findCourseByLessonId = function findCourseByLessonId(lessonId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (lesson.id === lessonId) {
            return course;
          }
        }
      }
    }
  }
  return null;
}

Curriculum.findTopicByLessonId = function findCoursTopicByLessonId(lessonId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (lesson.id === lessonId) {
            return topic;
          }
        }
      }
    }
  }
  return null;
}

Curriculum.findLessonByLessonId = function findLessonByLessonId(lessonId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (lesson.id === lessonId) {
            return lesson;
          }
        }
      }
    }
  }
  return null;
}

Curriculum.findNextLessonById = function findNextLessonById(lessonId) {
  var wantNextOne = false
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (wantNextOne) {
            return lesson
          }
          if (lesson.id === lessonId) {
            wantNextOne = true
          }
        }
      }
    }
  }
  return null;
}

Curriculum.findPrevLessonById = function findPrevLessonById(lessonId) {
  var prevLesson = null
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (lesson.id === lessonId) {
            return prevLesson
          }
          prevLesson = lesson
        }
      }
    }
  }
  return null;
}

Curriculum.pathToCourse = function pathToCourse(course) {
  return course && ("/course/" + course.path);
}

Curriculum.pathToLesson = function pathToLesson(course, lesson) {
  return course && lesson && ("/course/" + course.path + "/" + lesson.path);
}

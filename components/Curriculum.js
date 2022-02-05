import Course_vs101 from '../pages/course/vs101'

const Curriculum = {
  categories: [
    {
      category_label: "vs",
      title: "VRoid Studio",
      description: "Training material on VRoid Studio",
      courses: [
        Course_vs101.metadata
      ]
    }
  ]
}

export default Curriculum


Curriculum.findCourseById = function findCourseById(courseId) {
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      if (course.db_id === courseId) {
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
          if (lesson.db_id === lessonId) {
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
          if (lesson.db_id === lessonId) {
            return topic;
          }
        }
      }
    }
  }
  return null;
}

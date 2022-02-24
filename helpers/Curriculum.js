import ch001 from '../courses/ch001'
import wa001 from '../courses/wa001'


// All of the categories/courses/topics/lessons available.
// This is split into a file per course to keept this file manageable.
// This could be put in a database or similar so can fetch the data
// structure incrementally, but its overkill for this small site.
//
const Curriculum = {
  categories: [
    {
      category_label: "ch",
      title: "Adobe Character Animator",
      description: "Learn how to use Adobe Character Animator (a part of the Adobe Creative Cloud) to perform 2D animation of Photoshop or Illustrator artwork",
      courses: [
        ch001,
      ]
    },
    {
      category_label: "wa",
      title: "Web Apps",
      description: "Create your own web applications using modern web development tools such as Next.js, React, and Google Firebase",
      courses: [
        wa001,
      ]
    }
  ]
}



// ************ Find courses, topics, and lessons by id *************
// TODO: These functions could be optimized using a lookup structure
// created from the above data structure, but there are not many yet
// so optimize this later if needed.


// Given a course id, find the course definition.
//
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


// Given a lesson id, find the course definition it appears within
//
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


// Given a lesson id, find the topic it appears within
//
Curriculum.findTopicByLessonId = function findTopicByLessonId(lessonId) {
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


// Given a lesson id, find the lesson it appears within
//
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


// Given a lesson id, find the lesson after it
//
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
      if (wantNextOne) {
        // It was the last lesson in the course
        return null;
      }
    }
  }
  return null;
}


// Given a lesson id, find the lesson before it
//
Curriculum.findPrevLessonById = function findPrevLessonById(lessonId) {
  var prevLesson = null
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      prevLesson = null;
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


// Return a list of all course ids.
//
Curriculum.allDynamicRouteCourseIds = function allDynamicRouteCourseIds() {
  var courseIds = []
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      if (!course.staticFile) {
        courseIds.push({ courseId: course.id })
      }
    }
  }
  return courseIds;
}


// Return a list of all course ids.
//
Curriculum.allDynamicRouteCourseAndLessonIds = function allDynamicRouteCourseAndLessonIds() {
  var courseAndLessonIds = []
  for (var category of Curriculum.categories) {
    for (var course of category.courses) {
      for (var topic of course.topics) {
        for (var lesson of topic.lessons) {
          if (!lesson.staticFile) {
            courseAndLessonIds.push({ courseId: course.id, lessonId: lesson.id })
          }
        }
      }
    }
  }
  return courseAndLessonIds;
}


// Return the URL to the page of a course.
//
Curriculum.pathToCourse = function pathToCourse(course) {
  return course && ("/course/" + course.path);
}


// Return the URL to the hero image of a course.
//
Curriculum.pathToCourseImage = function pathToCourseImage(course) {
  return course && ("/course/" + course.path + "/hero-image.png");
}


// Return the URL to a lessson
//
Curriculum.pathToLesson = function pathToLesson(course, lesson) {
  return course && lesson && ("/course/" + course.path + "/" + lesson.path);
}


// Return the URL to the thumbnail image of a lesson.
// (Thumbnails are needed by Video structured data we export)
//
Curriculum.pathToLessonImage = function pathToLessonImage(course, lesson) {
  return course && lesson && ("/course/" + course.path + "/" + lesson.path + "-thumbnail.png");
}


// Return the path to the list of all courses.
//
Curriculum.pathToCourseList = function pathToCourseList() {
  return "/";
}


export default Curriculum


var idStatus = {}


const Completion = {

  courseCompleted(course) {
    var response = idStatus[course.id] ? true : false
    console.log("Course " + course.id + " completed=" + response)
    return response
  },

  setCourseCompleted(course, value) {
    idStatus[course.id] = value
    console.log("Marked " + course.id + " as completed=" + value)
  },

  toggleCourseCompleted(course) {
    idStatus[course.id] = !(idStatus[course.id] ?? false)
    console.log("Marked " + course.id + " as completed=" + idStatus[course.id])
  },

  lessonCompleted(lesson) {
    var response = idStatus[lesson.id] ? true : false
    console.log("Lesson " + lesson.id + " completed=" + response)
    return response
  },

  setLessonCompleted(lesson, value) {
    idStatus[lesson.id] = value
    console.log("Marked " + lesson.id + " as completed=" + value)
  },

  toggleLessonCompleted(lesson) {
    idStatus[lesson.id] = !(idStatus[lesson.id] ?? false)
    console.log("Marked " + lesson.id + " as completed=" + idStatus[lesson.id])
  }

}

export default Completion

import moment from 'moment'


const Curriculum = {
  categories: [
    {
      category_label: "ch",
      title: "Adobe Character Animator",
      description: "Learn how to use Adobe Character Animator (a part of the Adobe Creative Cloud) to perform 2D animation of Photoshop or Illustrator artwork",
      courses: [
        {
          course_label: "CH-001",
          path: "ch001",
          id: "ch001",
          title: "Project Wookie",
          description: "This is a series of tutorials/walkthroughs of Adobe Character Animator using a photo of a stuffed Wookie toy and then using Adobe Photoshop to change that photo into an animated cartoon 'puppet'.",
          topics: [
            {
              topic_label: "0",
              id: "ch001_t0",
              title: "Welcome",
              lessons: [
                {
                  lesson_label: "0",
                  path: "000",
                  id: "ch001_000",
                  title: "Episode 0: Introduction",
                  description: "This series of episodes will take a photo of a stuffed Wookie and convert it into an Adobe Character Animator 2019 puppet in a series of short step by step episodes.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:0:40"),
                  youTubeCode: "Sps-hoe6kcU",
                },
              ]
            },
            {
              topic_label: "1",
              id: "ch001_t1",
              title: "A First Working Puppet",
              lessons: [
                {
                  lesson_label: "1",
                  path: "001",
                  id: "ch001_001",
                  title: "Episode 1: Removing Photo Background",
                  description: "In this episode we use Adobe Photoshop to remove the background of the photo, so the puppet artwork is on a transparent background. This is important for the next step, of rigging the puppet for simple arm movements.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:8:56"),
                  youTubeCode: "6Jq1FMCx8Xg",
                },
                {
                  lesson_label: "2",
                  path: "002",
                  id: "ch001_002",
                  title: "Episode 2: Rigging Simple Arms and Legs",
                  description: "In this episode we use Adobe Character Animator to add sticks and draggers to the photo from episode 1 to allow the arms and legs of the puppet to move.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:13:08"),
                  youTubeCode: "ZWuMQNXbDDE",
                },
                {
                  lesson_label: "3",
                  path: "003",
                  id: "ch001_003",
                  title: "Episode 3: Recording a First Scene",
                  description: "Now we have a simple puppet, lets record a first simple scene and play it back.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:10:24"),
                  youTubeCode: "1Zlw5WpngaA",
                },
                {
                  lesson_label: "4",
                  path: "004",
                  id: "ch001_004",
                  title: "Episode 4: Exporting a Video for YouTube",
                  description: "Let's export our first scene as a video file so we can upload it to YouTube!",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:13:13"),
                  youTubeCode: "eJ23BT8iqYM",
                },
              ]
            },
            {
              topic_label: "2",
              id: "ch001_t2",
              title: "Publishing",
              lessons: [
                {
                  lesson_label: "1",
                  path: "005",
                  id: "ch001_005",
                  title: "Episode 5: Joining Video Clips in Adobe Rush",
                  description: "Adobe Rush is a new addition to the Adobe product range, designed to make it quick and easy to create simple videos and publish them. We take two videos created by different scenes in Adobe Character Animator and join them together using Adobe Rush, the publish to YouTube.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:10:38"),
                  youTubeCode: "7As9L5jXSf0",
                },
                {
                  lesson_label: "2",
                  path: "006",
                  id: "ch001_006",
                  title: "Episode 6: Combining Video Files with Premier Pro",
                  description: "Adobe Premier Pro is a more sophisticated video editing application compared to Adobe Rush. Let's repeat the previous episode of Rush in Premier Pro to understand the differences.",
                  published: moment("2018-10-20"),
                  duration: moment.duration("0:10:11"),
                  youTubeCode: "2zHkrKU15CQ",
                },
                {
                  lesson_label: "3",
                  path: "007",
                  id: "ch001_007",
                  title: "Episode 7: Titles and Captioning",
                  description: "Tutorial on approaches to adding titles and captions to an Adobe Character Animator project. Briefly mentions titling from Adobe Rush and Premier Pro (see previous episodes), then describes how simple titling and captioning can be done directly inside Character Animator.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:18:43"),
                  youTubeCode: "sfu-VnQfJ4Q",
                },
                {
                  lesson_label: "4",
                  path: "008",
                  id: "ch001_008",
                  title: "Episode 8: Static Backgrounds",
                  description: "Tutorial on adding a static background image to an Adobe Character Animator project. See also episode 7 on titling for some more examples. This tutorial includes adding a static image, but also using masks so the puppet can move from behind a table to in front of it.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:18:35"),
                  youTubeCode: "9OTnDtsVk6U",
                },
              ]
            },
            {
              topic_label: "3",
              id: "ch001_t3",
              title: "Movement",
              lessons: [
                {
                  lesson_label: "1",
                  path: "009",
                  id: "ch001_009",
                  title: "Episode 9: Moving Puppets Linearly",
                  description: "Tutorial on moving puppets in a straight line within an Adobe Character Animator project. See also episode 8 for more examples. This tutorial includes moving a puppet in a straight line using 'blends'. It also includes moving the background using a blend for a camera pan effect.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:14:07"),
                  youTubeCode: "BUbbU6g8g10",
                },
                {
                  lesson_label: "2",
                  path: "010",
                  id: "ch001_010",
                  title: "Episode 10: Duplicating Puppets as Backups",
                  description: "Tutorial on how to make a copy of a puppet so you can try editing it without messing up the original puppet within an Adobe Character Animator project. There are two ways: 'Duplicate' within a project that duplicates the rigging but not the artwork, and doing a puppet export then import.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:8:57"),
                  youTubeCode: "SPNFlQwb13o",
                },
                {
                  lesson_label: "3",
                  path: "011",
                  id: "ch001_011",
                  title: "Episode 11: Bobbing Walk (without Walk Behavior)",
                  description: "Tutorial on how to make a puppet look like its walking in Adobe Character Animator without using the Walk Behavior. This uses a combination of linear blends (see Episode 9) and short Y blends to make the character bob up and down. It also demonstrates using scale blends on the background.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:11:42"),
                  youTubeCode: "ra-tuYYTzXM",
                },
                {
                  lesson_label: "4",
                  path: "012",
                  id: "ch001_012",
                  title: "Episode 12: Floating Puppet Movement",
                  description: "Tutorial on how to move a puppet as if it is floating within an Adobe Character Animator project. To do this, I find it easiest to make a copy of a puppet (described in episode 10) then remove the pins from the feet and use a dragger to move the puppet around the scene. In this tutorial we show a wookie floating away with a balloon, but also a butterfly flapping around the screen.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:13:13"),
                  youTubeCode: "yLvp6-e-7ko",
                },
                {
                  lesson_label: "5",
                  path: "013",
                  id: "ch001_013",
                  title: "Episode 13: Wind Blowing Balloon",
                  description: "In episode 12 we showed how to make the Wookie float away carried by a balloon. This episode we add some wind and physics behaviors to the balloon to give it a bit more life!",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:8:56"),
                  youTubeCode: "AMdXQ9amZAM",
                },
                {
                  lesson_label: "6",
                  path: "014",
                  id: "ch001_014",
                  title: "Episode 14: Holding and Releasing Balloon",
                  description: "In this episode we show how the Wookie can hold and then release the Balloon. This is using a new feature called Magnets. Magnets unfortunately don't work with Dangles, so if you add a dangle the magnet stops working. (Next episode I show how to get them both working together.) NOTE: I had in the Magnet behavior the attach property set to HINGE which made the balloon sway backwards and forwards. Using WELD stopped that, but had the string act like a hard stick, which eliminated the sway.",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:17:33"),
                  youTubeCode: "8BSxR9HWzI4",
                },
                {
                  lesson_label: "7",
                  path: "015",
                  id: "ch001_015",
                  title: "Episode 15: Releasing Balloon on a Windy Day",
                  description: "Episode 14 demonstrated releasing a balloon, but it did not sway in the wind. This episode combines a few techniques for the ultimate release of a balloon on a windy day. (This is no longer what I would call 'beginner' but it rounds out the last few episodes nicely.)",
                  published: moment("2018-10-21"),
                  duration: moment.duration("0:13:29"),
                  youTubeCode: "ciyZbykwH4k",
                },
              ]
            },
            {
              topic_label: "4",
              id: "ch001_t4",
              title: "Eyes and Mouth",
              lessons: [
                {
                  lesson_label: "1",
                  path: "016",
                  id: "ch001_016",
                  title: "Episode 16: Adding Eyebrows",
                  description: "The balloon has blown away - time to get back to adding some more details to our basic puppet. In this episode we add some simple eyebrows to the puppet. We look at two approaches - use handles to warp the face, and using an independent layer to hold the eyebrows (my preference).",
                  published: moment("2018-10-22"),
                  duration: moment.duration("0:16:13"),
                  youTubeCode: "1I_sQR_YRqk",
                },
                {
                  lesson_label: "2",
                  path: "017",
                  id: "ch001_017",
                  title: "Episode 17: Quick Eyes and Mouth",
                  description: "In this episode we are going to steal eyes and mouth from another Adobe Character Animator puppet and add them to our Wookie. This can be a useful way to get something going quickly. You can then go back and refine them later.",
                  published: moment("2018-10-23"),
                  duration: moment.duration("0:21:57"),
                  youTubeCode: "g0v-iDYEgkY",
                },
                {
                  lesson_label: "3",
                  path: "018",
                  id: "ch001_018",
                  title: "Episode 18: Eye Pupil Movements",
                  description: "In this episode we try a few different ways of making the eyes look more consistent with the rest of the puppet. The eyes are one of the most tricky areas to get right in Adobe Character Animator puppets, but they are also one of the most important features of puppets as that is where we focus our attention - we look other people in the eyes.",
                  published: moment("2018-10-25"),
                  duration: moment.duration("0:32:09"),
                  youTubeCode: "lQuvKdAgSG4",
                },
                {
                  lesson_label: "4",
                  path: "019",
                  id: "ch001_019",
                  title: "Episode 19: Eye Blinks",
                  description: "In this episode we look at eye blinking - using the webcam and using the Auto Blink behavior (which I like).",
                  published: moment("2018-10-25"),
                  duration: moment.duration("0:7:50"),
                  youTubeCode: "hP_Ok4UCaRo",
                },
                {
                  lesson_label: "5",
                  path: "020",
                  id: "ch001_020",
                  title: "Episode 20: Recording Eye Movements",
                  description: "In this episode we look at recording eye movements, then going back and editing the eye positions and how to merge the results nicely together. (Re-recorded.) [Sorry for the poor sound quality - not sure why different to previous episodes!]",
                  published: moment("2018-10-25"),
                  duration: moment.duration("0:23:00"),
                  youTubeCode: "iDOKY4iLaks",
                },
                {
                  lesson_label: "6",
                  path: "021",
                  id: "ch001_021",
                  title: "Episode 21: Crazy Eyes",
                  description: "In this episode we look at fixing crazy eyes (short).",
                  published: moment("2018-10-25"),
                  duration: moment.duration("0:6:45"),
                  youTubeCode: "sNYJ3-aB0Sw",
                },
                {
                  lesson_label: "7",
                  path: "022",
                  id: "ch001_022",
                  title: "Episode 22: Basic Oral Hygiene (Mouths)",
                  description: "Mouths are important for talking! Make sure your mouth is clean! In this episode I run through the basics of mouths in Adobe Character Animator, introducing visemes, then showing how to add additional expressions (like sad and angry) via triggers, including keyboard triggers for standard visemes like smile and Oh sounds.",
                  published: moment("2018-10-26"),
                  duration: moment.duration("0:21:24"),
                  youTubeCode: "gJFCUw68njA",
                },
              ]
            },
            {
              topic_label: "5",
              id: "ch001_t5",
              title: "Advanced Topics",
              lessons: [
                {
                  lesson_label: "1",
                  path: "023",
                  id: "ch001_023",
                  title: "Episode 23: Planning the Audio",
                  description: "This episode discusses some options for how to plan the audio (voice actors, music, etc) for you animation. Do you record like a radio show and then animation? Or record short audio clips and move them around in the scene based on animation? Both work - you just need to pick. [Sorry for the below average sound quality!]",
                  published: moment("2018-10-28"),
                  duration: moment.duration("0:17:50"),
                  youTubeCode: "sgoP60Csr68",
                },
                {
                  lesson_label: "2",
                  path: "024",
                  id: "ch001_024",
                  title: "Episode 24: Morphing into Super Wookie!",
                  description: "It's a bird! It's a plane! No, its Super Wookie! In this episode he reveals how he morphs his clothes from mind mannered Wookie into Super Wookie! We talk about a few ways this can be done in Adobe Character Animator. Contains a bit of Photoshop to create the clothes etc as well. [Sorry for the poor audio quality.]",
                  published: moment("2018-10-28"),
                  duration: moment.duration("0:23:43"),
                  youTubeCode: "PWhClNuxkZI",
                },
                {
                  lesson_label: "3",
                  path: "025",
                  id: "ch001_025",
                  title: "Episode 25: Arms for Independence",
                  description: "Not a revolutionary war, but rather chopping the arms off the puppet and attachment them as independent layers so get arms going in front of the body correctly. A bit of Photoshop in here to adjust the Photoshop file. Shows independent layers and attaching the arms to the body - more common with Illustrator files. [Sorry, the last few video audio is TERRIBLE! I need to track down the source.]",
                  published: moment("2018-10-28"),
                  duration: moment.duration("0:30:33"),
                  youTubeCode: "DuOvQJTQ9FU",
                },
                {
                  lesson_label: "4",
                  path: "026",
                  id: "ch001_026",
                  title: "Episode 26: Repeating Movements",
                  description: "In this tutorial we look at how to repeat the same gestures easily. This can make recording a scene faster if the puppet repeats the same actions frequently, but can also be used with a MIDI device to make live streaming simpler (especially if using foot pedals)",
                  published: moment("2018-11-02"),
                  duration: moment.duration("0:20:17"),
                  youTubeCode: "Z3P1X7W85pA",
                },
                {
                  lesson_label: "5",
                  path: "027",
                  id: "ch001_027",
                  title: "Episode 27: Seeking Resolution",
                  description: "Resolution of images makes a difference, especially when you zoom in on parts of the puppet. So design your puppet from the beginning so you can zoom into the required part of the puppet with high resolution after the zoom. (I often use 6000px x 6000px)",
                  published: moment("2018-11-03"),
                  duration: moment.duration("0:12:43"),
                  youTubeCode: "pV06wGHZr0E",
                },
              ]
            },
          ]
        },
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

Curriculum.pathToCourseImage = function pathToCourseImage(course) {
  return course && ("/course/" + course.path + "/hero-image.png");
}

Curriculum.pathToLesson = function pathToLesson(course, lesson) {
  return course && lesson && ("/course/" + course.path + "/" + lesson.path);
}

Curriculum.pathToLessonImage = function pathToLessonImage(course, lesson) {
  return course && lesson && ("/course/" + course.path + "/" + lesson.path + "-thumbnail.png");
}

Curriculum.pathToCourseList = function pathToCourseList() {
  return "/courses";
}


# Extra Ordinary Learning Management System

The purpose of this project is to demonstrate a working but minimal site using:

* [Next.js](https://nextjs.org/), a full stack for building production grade React web applications.
* [mui.com](https://mui.com/), a React implementation of the Material Design system.
* [Google Firebase](https://firebase.google.com/), a paid service from Google that supports static file hosting, authentication infrastructure, and realtime databases for saving application state.
* [Google Search Console](https://search.google.com/search-console/about), a tool for checking your site's presence in Google Search

The expectation is to create your own project by copying parts of this project, not use this project verbatim.

The project implements a simple learning management system.
You can create a list of courses with lesson pages.
If the user logs on with Google authentication, they can save their progress.
The site is normally live at [extra-ordinary-lms.web.app](https://extra-ordinary-lms.web.app) (a Firebase hosting site).

## Getting Started

* Go to the Google Firebase console and create your own account and project.
* Update the `helpers/firebaseConfig.js` file with the keys for your project.
* Delete and replace the `google8cea660adcba132b.html` file with your own Google Search Console verification file.
* Change all references to `extra-ordinary-lms` to your own project name.
* For development: `npm run dev` and open [http://localhost:3000](http://localhost:3000).
* For production: `npm run build && firebase deploy` to build a static version of this site and deploy it.

## React + Material UI + Static Site generation

The reason this project uses Next.js is because it provides great tools for
generating static sites. Static sites do not need a Node.js web server behind
them in production, making Google Firebase Hosting a great option.
(Okay! I work at Google! I may be biased!)

The other thing I like about static site hosting is they are generally fast for
page loading, but also very secure.  There is no backend Node.js server logic
to attack. Its just static files on disk.  You can attack your portion of the
Firebase database (the part associated with your user id), but that is it.  So
you can build a good looking custom web site, with simple database persistence,
with almost no ongoing maintenance required.

If you are doing a serious production project, you probably want to think about
backup and recovery strategies.  This project is just remembering which lessons
a user has completed. If its lost, sorry!

If you want a bit of fun, open up two browser windows. Updating a lesson status
in one window will immediately update the status in the other window! This is
done through the firebase realtime database automatic synchronization support.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about structured data and site maps:

- [Google Search Central](https://developers.google.com/search)
- [Structured data types](https://developers.google.com/search/docs/advanced/structured-data/search-gallery)

To set up Google Firebase via the console:

- [Google Firebase Console](https://firebase.google.com/)

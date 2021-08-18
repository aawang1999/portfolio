import { v4 as uuidv4 } from 'uuid'

export const projects = [
  {
    id: uuidv4(),
    title: "React Task Tracker",
    desc: "A simple React web app for task management with a mock JSON server backend",
    github: "https://github.com/aawang1999/task-tracker-react",
    image: "./images/task.jpg"
  },
  {
    id: uuidv4(),
    title: "Angular Task Tracker",
    desc: "A simple Angular web app for task management with a mock JSON server backend",
    github: "https://github.com/aawang1999/task-tracker-angular",
    image: "./images/task-angular.jpg"
  },
  {
    id: uuidv4(),
    title: "Restaurant List",
    desc: "A web app that allows you to manage restaurant entries (Express.js, Handlebars, MongoDB)",
    github: "https://github.com/aawang1999/restaurant-list-router",
    image: "./images/restaurant.jpg"
  },
  {
    id: uuidv4(),
    title: "Ray's Classroom",
    desc: "A website to complement my YouTube channel on U.S. civics (HTML, CSS, JS)",
    github: "https://github.com/aawang1999/rays-classroom",
    image: "./images/rays.jpg"
  },
  {
    id: uuidv4(),
    title: "Expense Tracker",
    desc: "A web app that helps you manage your expenses (Node.js, Express, Handlebars, MongoDB)",
    github: "https://github.com/aawang1999/expense-tracker",
    image: "./images/expense.jpg"
  },
  {
    id: uuidv4(),
    title: "URL Shortener",
    desc: "A web app that converts URLs into randomly-generated shortened URLs (Node.js, Express, Handlebars)",
    github: "https://github.com/aawang1999/url-shortener",
    image: "./images/url.jpg"
  },
  {
    id: uuidv4(),
    title: "Login Portal",
    desc: "A web app that simulates a login portal by managing a list of usernames and passwords (Node.js, Express, MongoDB)",
    github: "https://github.com/aawang1999/account-login",
    image: "./images/account.jpg"
  }
]
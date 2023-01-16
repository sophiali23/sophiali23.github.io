// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sophia",
  middleName: "",
  lastName: "Li",
  message: " Passionate about delivering great user experiences and using technology to help others. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sophiali23",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/li.sophia/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sophiali23/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sophiali.jpg"),
  imageSize: 375,
  message:
    "Hi! I'm a recent University of Waterloo graduate and software engineer with over 2 years of professional experience. I have a strong passion for creating great UX. I previously worked for Meta/Facebook full time and prior to that, I completed software engineering internships at MongoDB, Facebook, PagerDuty, Wattpad, and a couple startups. In my free time, I love to do pilates, travel, and spend time with my cat Alfie.",
  resume: "https://drive.google.com/file/d/1PlQPbNersJ0DzQ8t6nLBW45oLd_yrgCL/view?usp=sharing",
};

const work = {
  show: true,
  heading: "Work",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Side Projects",
  gitHubUsername: "sophiali23", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ["WeatherApp"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/sophiali.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/sophiali.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full stack or front end sofware engineering opportunities! If you know of any positions available, please feel free to email me at",
  email: "sophiali99723@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/meta.png'),
      date: 'September 2022 - November 2022',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/mongodb.png'),
      date: 'June 2021 – August 2021',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/facebook.png'),
      date: 'January 2021 – April 2021',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/inkling.png'),  // Inkling
      date: 'May 2020 – August 2020',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/pagerduty.png'),  // PagerDuty
      date: 'September 2019 – December 2019',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/wattpad.png'),  // Wattpad
      date: 'January 2019 – April 2019',
    },
    {
      role: 'Software Engineer-in-Test Intern',
      companylogo: require('../assets/img/influitive.png'),  // Influitive
      date: 'May 2018 – August 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, work, repos, skills, leadership, getInTouch, experiences };

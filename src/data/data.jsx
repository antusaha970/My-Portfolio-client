import html from "../assets/techStack/html.png";
import css from "../assets/techStack/css.png";
import javaScript from "../assets/techStack/javaScript.png";
import react from "../assets/techStack/react.png";
import bootsrap from "../assets/techStack/bootstrap.png";
import git from "../assets/techStack/git.png";
import github from "../assets/techStack/github.png";
import vsCode from "../assets/techStack/vsCode.png";
import figma from "../assets/techStack/figma.png";
import materialUI from "../assets/techStack/materailUI.png";
import django from "../assets/techStack/django.png";
import cpp from "../assets/techStack/cpp.png";
import python from "../assets/techStack/python.png";
import p1 from "../assets/pbProfile/p1.png";
import p3 from "../assets/pbProfile/p3.png";
import p2 from "../assets/pbProfile/p2.png";
import rest_framework from "../assets/techStack/rest.png";
import stripe from "../assets/techStack/rsz_stripe.png";
import postman from "../assets/techStack/postman.png";
import mysql from "../assets/techStack/mysql.png";
import redis from "../assets/techStack/redis.png";

const techStackData = [
  { name: "css", img: css },
  { name: "html", img: html },
  { name: "javaScript", img: javaScript },
  { name: "react", img: react },
  { name: "bootsrap", img: bootsrap },
  { name: "git", img: git },
  { name: "github", img: github },
  { name: "vscode", img: vsCode },
  { name: "figma", img: figma },
  { name: "materialUI", img: materialUI },
  { name: "cpp", img: cpp },
  { name: "python", img: python },
  { name: "django", img: django },
  { name: "django_rest_framework", img: rest_framework },
  { name: "stripe", img: stripe },
  { name: "postman", img: postman },
  { name: "mysql", img: mysql },
  { name: "redis", img: redis },
];

const problemSolvingProfileData = [
  {
    name: "LeetCode",
    img: p1,
    profileLink: "https://leetcode.com/u/antusaha970/",
  },
  {
    name: "GeeksForGeeks",
    img: p3,
    profileLink: "https://www.geeksforgeeks.org/user/antusaha970/",
  },
  {
    name: "Coding Ninjas",
    img: p2,
    profileLink: "https://www.naukri.com/code360/profile/antusaha",
  },
];

const projectDataStatic = [
  {
    description:
      "The House Rent Site is a web application that allows users to post and find rental advertisements. Users can book house rent and manage all necessary things. ",
    backendLink: "https://github.com/antusaha970/Home-housing-backend",
    frontendLink: "https://github.com/antusaha970/Home-Housing",
    imageLink: "https://i.ibb.co.com/PYL75SQ/Screenshot-2024-10-16-130515.png",
    liveLink: "https://home-housing.netlify.app/",
    techStack:
      "Python, Django, Django REST framework, SQLite3, Stripe, React, Bootstrap, react-hook-form,React Router, Docker",
    title: "Home-Housing",
  },
  {
    description:
      "Krist E-commerce is a t-shirt sales platform where users can choose from 1000 designs, place orders via Stripe or cash on delivery, and enjoy features like product filtering and order management. Admins manage products, orders, and accounts with ease.",
    backendLink: "https://github.com/antusaha970/krist_ecommerce_backend",
    frontendLink: "https://github.com/antusaha970/krist_ecommerce_frontend",
    imageLink: "https://i.ibb.co.com/Jc50Ccv/Screenshot-2024-10-16-133207.png",
    liveLink: "https://krist-ecommerce.netlify.app/",
    techStack:
      "Python, Django, Django REST framework, SQLite3, Stripe,Redis, React, Bootstrap, react-hook-form,React Router, Axios, Docker",
    title: "Krist E-commerce",
  },
  {
    description:
      "This Library Management System is a web-based application designed to streamline the process of managing books and user interactions within a library. The system allows users to explore a collection of books, borrow and return them, and share their reviews. It's made with Django MVT.",
    backendLink: "https://github.com/antusaha970/e-library-django",
    frontendLink: "https://github.com/antusaha970/e-library-django",
    imageLink: "https://i.ibb.co.com/17McxC2/Screenshot-2024-10-17-133816.png",
    liveLink: "https://e-library-django.onrender.com/",
    techStack: "Python, Django, SQLite3, HTML/CSS, Bootstrap",
    title: "E-library",
  },
  {
    description:
      "This is a full stack Gym management project with full functionality. There is an admin panel also to manage content. I implemented stripe payment gateway too. For full information visit github. ",
    backendLink: "https://github.com/antusaha970/power-x-gym",
    frontendLink: "https://github.com/antusaha970/power-x-gym",
    imageLink: "https://i.ibb.co/WpxDyXB/35ae65b77bc4.png",
    liveLink: "https://power-x-gym-feni.netlify.app/",
    techStack:
      "React, Material UI, React-Router, Axios,Node, Express,Mongodb,Mongoose",
    title: "Power-X-Gym",
  },
];

export default techStackData;
export { problemSolvingProfileData, projectDataStatic };

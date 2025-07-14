
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import kvsLogo from './assets/education_logo/kvslogo.JPG';
import srmLogo from './assets/education_logo/srmlogo.png';
import hwsLogo from './assets/education_logo/hwslogo.jpg';

// Project Section Logo's
import studyAidLogo from './assets/work_logo/study_aid.png';
import amzSummLogo from './assets/work_logo/amz_prod_summ.png';
import engIndiaLogo from './assets/work_logo/eng_india.png';
import todoLogo from './assets/work_logo/to_do_list.png';
import removebgLogo from './assets/work_logo/removebg.png';
import quizLogo from './assets/work_logo/interactive_quiz.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    
    {
      id: 0,
      img: srmLogo,
      school: "SRMIST, Kattankulathur, Chennai",
      date: "Aug 2024 - Present",
      grade: "9.93 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, Kattankulathur, Chennai. The program is designed to provide a strong foundation in computer science principles, programming languages, and software development methodologies.",
      degree: "B.Tech Computer Science and Engineering",
    },
    {
      id: 1,
      img: hwsLogo,
      school: "Holy World School, New Delhi",
      date: "Jun 2022 - May 2024",
      grade: "87.6%",
      desc: "I completed my class 12 education from Holy World School, New Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: kvsLogo,
      school: "Kendriya Vidyalaya, Dehu Road, Pune",
      date: "Apr 2021 - Jun 2022",
      grade: "88.6%",
      desc: "I completed my class 10 education from Kendriya Vidyalaya, Dehu Road, Pune, under the CBSE board, where I studied all core subjects including Mathematics, Science, and English.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "StudyAID - AI-Powered Study Buddy",
      description:
        "AI powered web application designed to assist students in their academic journey. It offers features like AI-generated notes, questions, and video suggestions by uploading pdf or ppt of your study material to enhance learning efficiency.",
      image: studyAidLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Gemini API", "Youtube API"],
      github: "https://github.com/apoorwa46/StudyAID",
      webapp: "https://study-aid-psi.vercel.app/",
    },
    {
      id: 1,
      title: "Amazon Product Summary Generator",
      description:
        "A full-stack application that generates concise summaries for Amazon product by link of the product.",
      image: amzSummLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Gemini API"],
      github: "https://github.com/apoorwa46/AmzProductCompareFrontend",
      webapp: "https://apoorwa46.github.io/AmzProductCompareFrontend/",
    },
    {
      id: 2,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with HTML,CSS and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["API", "Image Processing", "HTML", "CSS", "Javascript", "Node.js", "Express"],
      github: "https://github.com/apoorwa46",
      webapp: "https://github.com/apoorwa46",
    },
    {
      id: 3,
      title: "Interactive Quiz App",
      description:
        "A web-based application that offers interactive quizzes on various topics. Users can take quizzes, track their progress, and compete with others. Built using React.js and Node.js, it provides a seamless user experience.",
      image: quizLogo,
      tags: ["React JS", "HTML", "CSS",],
      github: "https://github.com/apoorwa46/react-quiz-app",
      webapp: "https://apoorwa46.github.io/react-quiz-app/",
    },
    {
      id: 4,
      title: "Engineering India",
      description:
        "A website dedicated to various engineering entrance exams in India. It provides information about different exams for students aspiring to pursue engineering.",
      image: engIndiaLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/apoorwa46/engineerindia.github.io",
      webapp: "https://apoorwa46.github.io/engineerindia.github.io/",
    },
    {
      id: 5,
      title: "To-Do List",
      description:
        "A simple and intuitive to-do list application built with HTML, CSS, and JavaScript. It allows users to create, edit, and delete tasks, helping them stay organized and manage their time effectively.",
      image: todoLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/apoorwa46/To-Do-List",
      webapp: "https://apoorwa46.github.io/To-Do-List/",
    },
  ];  

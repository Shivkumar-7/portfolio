// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// CP Platform Logos
import codeforcesLogo from './assets/tech_logo/codeforces.png';
import leetcodeLogo from './assets/tech_logo/leetcode.png';
import codechefLogo from './assets/tech_logo/codechef.png';

// Experience Section Logo's
import ybiLogo from './assets/company_logo/ybi_logo.png';
import hashedbitLogo from './assets/company_logo/hashedbit_logo.png';

// Education Section Logo's
import ietLogo from './assets/education_logo/iet_logo.png';
import svm10Logo from './assets/education_logo/svm10_logo.png';
import svm12Logo from './assets/education_logo/svm12_logo.png';

// Project Section Logo's
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import codedeckLogo from './assets/work_logo/codedeck.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
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
  {
    title: 'CP Platforms',
    skills: [
      { name: 'Codeforces', logo: codeforcesLogo },
      { name: 'LeetCode', logo: leetcodeLogo },
      { name: 'CodeChef', logo: codechefLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hashedbitLogo,
      role: "Fullstack Developer",
      company: "Hashbit Innovation",
      date: "April 2025 - June 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Node Js",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: ybiLogo,
      role: "DSA in Python",
      company: "YBI Foundation",
      date: "Aug 2023 - Sept 2023",
      desc: "Learned Python in DSA and made project on machine learning technology and enhance skill in python using it in machine learning projects.",
      skills: [
        "Python",
        "Kaggle",
        "Numpy",
        "Machine Learning",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ietLogo,
      degree: "IET LUCKNOW",
      date: "Nov 2022 - May 2026 ",
      grade: "8 CGPA",
      desc: "I am currently in Final Year in B.TECH in Electronics and Communication Engineering from Institue of Engineering and Technology, LUCKNOW. ",
    },
    {
      id: 1,
      img: svm10Logo,
      school: "SVM Sr. Sec. School, Aligarh",
      date: "Apr 2020 - March 2021",
      grade: "82%",
      desc:"I completed my class 12 education from Saraswati Vidya Mandir Sr. Sec. School, Aligarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: svm12Logo,
      school: "SVM Sr. Sec. School, Aligarh",
      date: "Apr 2018 - March 2019",
      grade: "92.7%",
      desc: "I completed my class 10 education from Saraswati Vidya Mandir Sr. Sec. School, Aligarh, under the CBSE board, where I studied Science with Computer.",      
      degree: "CBSE(X) - Science with Information Technology",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
     {
      id: 1,
      title: "Code Deck",
      description:
        "Developed a responsive online code editor supporting multiple programming languages.",
      image: codedeckLogo,
      tags: ["React JS", "CodeMirror", "Judge0", "API", "Javascript"],
      github: "https://github.com/Shivkumar-7/Code_Deck",
      webapp: "https://codedeck-rouge.vercel.app/",
    },
    {
      id: 2,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Shivkumar-7/Image-Background-Remover",
      webapp: "https://image-background-remover-navy.vercel.app/",
    },
  ];  
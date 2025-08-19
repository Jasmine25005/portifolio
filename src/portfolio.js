/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jasmine Fahmy",
  title: "Hi all, I'm Jasmine",
  subTitle: emoji(
    "A highly motivated Computing & Data Science student with a passion for building innovative AI solutions. I specialize in turning complex problems into working applications, from computer vision models to cloud-deployed services. 💻"
  ),
resumeLink: "https://drive.google.com/uc?export=download&id=1o7xLdR_0K8cQC783S32O8WFo8flDWl-I",

  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jasmine25005",
  linkedin: "https://www.linkedin.com/in/jasmine-mohamed-36790329a/",
  gmail: "jasminemohamed2545@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A PASSIONATE MACHINE LEARNING DEVELOPER & DATA SCIENCE STUDENT, BUILDING AI-POWERED SOLUTIONS.",
  skills: [
    "⚡ Build and train robust Machine Learning models for Computer Vision and NLP using Python, TensorFlow, and PyTorch.",
    "⚡ Engineer and deploy full-stack applications, integrating cloud services like AWS for scalable, real-world solutions.",
    "⚡ Analyze and preprocess complex datasets using Pandas and NumPy to extract actionable insights and fuel model performance."
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Machine Learning", // Representing TensorFlow, PyTorch, Scikit-learn
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Alexandria University",
      logo: require("C:\\Users\\jasmi\\developerFolio\\src\\assets\\images\\ImageHandler (1).png"), // CORRECTED PATH
      subHeader: "Bachelor of Science in Computing and Data Science",
      duration: "October 2023 - June 2027",
      desc: "Studying core concepts of computer science with a focus on machine learning, data analysis, and AI-driven solutions.",
      descBullets: [
        "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Linear Algebra, Advanced Calculus"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud & Full-Stack Deployment",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Science Fundamentals",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI & Data Science Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      companylogo: require("./assets/images/4d6a311c-01e3-4eb4-bdac-c338d1983b2b_Screenshot-20231109-113612-Photos.webp"), // CORRECTED PATH
      date: "June 2025 – Dec 2025",
      desc: "Selected for an intensive 190-hour program covering advanced machine learning concepts, technical project development, and professional freelancing skills."
    },
    {
      role: "Computer Vision Intern",
      company: "National Telecommunication Institute (NTI)",
      companylogo: require("./assets/images/333617716_132237679579314_1527315796461876174_n.jpg"), // CORRECTED PATH
      date: "July 2025 – Aug 2025",
      desc: "Engaged in a competitive 120-hour summer internship focused on practical computer vision applications and enhancing professional soft skills."
    },
    {
      role: "Quantum Computing Summer Trainee",
      company: "Alamein International University (AIU)",
      companylogo: require("./assets/images/ImageHandler.png"), // CORRECTED PATH
      date: "June 2025 – Aug 2025",
      desc: "Participated in a specialized training program to explore the fundamentals and applications of quantum computing in collaboration with AleQCG and QWorld."
    },
    {
      role: "Agile & Software Testing Trainee",
      company: "Alexandria University",
      companylogo: require("C:\\Users\\jasmi\\developerFolio\\src\\assets\\images\\ImageHandler (1).png"), // CORRECTED PATH
      date: "July 2025 – Sept 2025",
      desc: "Acquired foundational knowledge in Agile methodologies and software testing principles through a university-led professional training program."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "A SELECTION OF PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/90b6f2_f5931c1ef3e540a6b90207f92170e1ab~mv2.avif"), // CORRECTED PATH
      projectName: "Pneumonia Detection from Chest X-Rays",
      projectDesc: "Developed a CNN model with TensorFlow to classify chest X-ray images, achieving 90% accuracy on the test set."
    },
    {
      image: require("C:\\Users\\jasmi\\developerFolio\\src\\assets\\images\\1_KGDS0XWdEKvFE7ufnZHUQg.webp"), // CORRECTED PATH
      projectName: "Handwritten vs. AI-Generated Text Classifier",
      projectDesc: "Engineered an NLP model to distinguish between AI-generated and scanned handwritten text using linguistic feature extraction."
    },
    {
      image: require("./assets/images/R.jpeg"), // CORRECTED PATH
      projectName: "Cloud-Based File Uploader",
      projectDesc: "Built and deployed a full-stack web application on AWS with a Node.js backend, allowing users to upload files to cloud storage."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Key accomplishments, certifications, and hackathon experiences.",

  achievementsCards: [
    {
      title: "Build with AI Hackathon",
      subtitle:
        "Participated in the GDG Alexandria hackathon, building 'Roshetta AI' using Google Cloud Platform services.",
      image: require("C:\\Users\\jasmi\\developerFolio\\src\\assets\\images\\1631329712398.jpeg"), // CORRECTED PATH to .jpg
      imageAlt: "GDG Alexandria Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1PT6cqUOx_hULO7cLSSA3T50kF4U8Z_Qj/view?usp=drive_link" // Add a link to the project if available
        }
      ]
    },
    {
      title: "Machine Learning Specialization",
      subtitle:
        "Completed the comprehensive specialization by Andrew Ng on Coursera, covering foundational and advanced ML concepts.",
      image: require("C:\\Users\\jasmi\\developerFolio\\src\\assets\\images\\stanford_online_logo.jpeg"), // ERROR: This file is missing. Add the file to your assets/images folder and uncomment this line.
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1aBkYCqRnX7rYRxMbYqu57sEvC4EFkQca/view?usp=drive_link" // Add link to your certificate
        }
      ]
    },
    {
      title: "AWS Academy Cloud Foundations",
      subtitle:
        "Earned a certificate of course completion, demonstrating foundational knowledge of AWS cloud services.",
      image: require("./assets/images/amazon_web_services_logo.jpeg"), // CORRECTED PATH
      imageAlt: "AWS Academy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "" // Add link to your certificate
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// ADDED BACK TO FIX COMPILATION ERRORS
const blogSection = {
  title: "Blogs",
  subtitle: "Some of my thoughts on technology and development.",
  blogs: [],
  display: false // Set to false to hide this section
};

const talkSection = {
  title: "Talks",
  subtitle: "I enjoy sharing my knowledge with the community.",
  talks: [],
  display: false // Set to false to hide this section
};

const podcastSection = {
  title: "Podcast",
  subtitle: "My podcast appearances.",
  podcast: [],
  display: false // Set to false to hide this section
};

// Resume Section
const resumeSection = {
  display: true // Set this to true to display the resume section.
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201102992104",
  email_address: "jasminemohamed2545@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection, // ADDED BACK
  talkSection, // ADDED BACK
  podcastSection, // ADDED BACK
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

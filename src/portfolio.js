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
  username: "Syed Minhal Nadeem",
  title: "Hi, I'm Minhal",
  subTitle: emoji(
    "Senior Flutter Developer 🚀 with 5+ years of experience building scalable, high-performance mobile applications. Specialized in Flutter, Dart, BLoC, Clean Architecture, Firebase, Stripe payments, and Azure Speech AI."
  ),
  resumeLink: "https://drive.google.com/file/d/1pKdHB2c8iol9nnIxWRq_ZUKkt9za3_fO/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minhalatgit",
  linkedin: "https://www.linkedin.com/in/syedminhalnadeem/",
  gmail: "minhalnadeem@gmail.com",
  medium: "https://medium.com/@minhalnadeem",
  stackoverflow: "https://stackoverflow.com/users/13685153/syed-minhal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "MOBILE & AI-POWERED APPLICATION DEVELOPMENT",
  skills: [
    emoji("⚡ Build scalable Flutter apps using Clean Architecture, BLoC & MVVM"),
    emoji("⚡ Native SDK integrations using MethodChannel & EventChannel"),
    emoji("⚡ AI-powered apps using Azure Speech SDK, Avatar & WebRTC"),
    emoji("⚡ Payments, Monetization & App Deployment (Play Store & App Store)")
  ],

  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "BLoC", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "GetX", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Stripe", fontAwesomeClassname: "fab fa-cc-stripe" },
    { skillName: "WebRTC", fontAwesomeClassname: "fas fa-video" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Karachi (UBIT)",
      logo: require("./assets/images/uok.png"),
      subHeader: "Bachelor of Computer Science (BSCS)",
      duration: "2016 – 2020",
      desc: "Studied core Computer Science subjects including Data Structures, OOP, OS & Software Engineering.",
      descBullets: [
        "Final Year Project: IoT-based Baby Monitoring System"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter / Mobile Development", progressPercentage: "90%" },
    { Stack: "Architecture & State Management", progressPercentage: "85%" },
    { Stack: "Native & AI Integrations", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "Veraqor",
      companylogo: require("./assets/images/veraqor.png"),
      date: "Mar 2025 – Present",
      desc: "Working on AI-powered Flutter applications with real-time voice & avatar interaction.",
      descBullets: [
        "Built AI Flutter app using Azure Avatar & Speech SDK",
        "Integrated native WebRTC services using MethodChannel & EventChannel",
        "Implemented voice recognition & speech synthesis workflows",
        "Collaborated with AI & backend teams for seamless integration"
      ]
    },
    {
      role: "Senior Flutter Developer",
      company: "TekRevol",
      companylogo: require("./assets/images/tekrevol.png"),
      date: "Nov 2021 – Mar 2025",
      desc: "Led Flutter & Android app development for enterprise and consumer applications.",
      descBullets: [
        "Developed apps from concept to production",
        "Worked on large-scale Flutter codebases",
        "Collaborated with cross-functional teams",
        "Represented team at CodeLaunch Accelerator Hackathon 2022"
      ]
    },
    {
      role: "Android Developer",
      company: "Technado Pvt Ltd",
      companylogo: require("./assets/images/technado.png"),
      date: "Jan 2021 – Nov 2021",
      desc: "Developed Android applications using Java & Kotlin with REST API integration."
    },
    {
      role: "Android Developer",
      company: "Avialdo Solutions",
      companylogo: require("./assets/images/avialdo.png"),
      date: "Dec 2019 – Dec 2020",
      desc: "Worked on Android apps, feature development, bug fixing & production releases."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "PRODUCTION APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/alfardan.png"),
      projectName: "Alfardan Exchange – Send Money",
      projectDesc:
        "Integrated Azure Avatar Bot & Speech SDK using native SDKs for real-time AI interaction.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.synergates.alfardanapp.prod"
        }
      ]
    },
    {
      image: require("./assets/images/pbpark.png"),
      projectName: "Peanut Butter Park",
      projectDesc:
        "Flutter-based social media app for dog owners with real-time chat & Google Maps.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/peanut-butter-park/id1635347261"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to senior Flutter & mobile opportunities",
  number: "+92 331 2226066",
  email_address: "minhalnadeem@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

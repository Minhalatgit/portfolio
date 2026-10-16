/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syed Minhal Nadeem",
  title: "Hi, I'm Minhal",
  headline: "Flutter apps, engineered to scale.",
  subTitle:
    "Senior Flutter Developer with 6+ years of experience delivering production mobile apps end to end — strong in scalable architecture, clean code practices, and integrating complex native, AI, and third-party services.",
  resumeLink: "https://drive.google.com/file/d/1bZ9zWVIPW--Sq_5ORbZR6ejbfjngmYMN/view",
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
  subTitle: "Mobile & AI-powered application development",
  skills: [
    "Build scalable Flutter apps using Clean Architecture, BLoC & MVVM",
    "Native SDK integrations using MethodChannel & EventChannel",
    "AI-powered apps using Azure Speech SDK, Avatar & WebRTC",
    "Payments, Monetization & App Deployment (Play Store & App Store)"
  ],

  skillGroups: [
    {
      title: "Mobile",
      icon: "fas fa-mobile-alt",
      items: ["Flutter", "Dart", "Kotlin", "Java"]
    },
    {
      title: "Architecture",
      icon: "fas fa-sitemap",
      items: ["Clean Architecture", "BLoC", "GetX", "MVC / MVVM"]
    },
    {
      title: "Integrations",
      icon: "fas fa-plug",
      items: [
        "Firebase",
        "FCM Push",
        "Stripe",
        "RevenueCat",
        "In-App Purchases",
        "Ads Monetization",
        "WebRTC",
        "REST APIs"
      ]
    },
    {
      title: "Delivery",
      icon: "fas fa-rocket",
      items: ["CI/CD", "Unit Testing", "Play Store / App Store", "Git"]
    }
  ],

  aiWorkflow: {
    kicker: "AI in my workflow",
    title: "I use AI to ship faster, without cutting corners.",
    desc:
      "I use LLMs and AI coding tools every day to move faster without lowering the bar. Architecture decisions, code review and production quality stay with me — AI handles the grind.",
    points: [
      { icon: "fas fa-bolt", text: "Scaffolding features and boilerplate in minutes" },
      { icon: "fas fa-search", text: "Exploring unfamiliar SDKs, native APIs and codebases faster" },
      { icon: "fas fa-vial", text: "Drafting unit tests and edge cases to cover" },
      { icon: "fas fa-bug", text: "Debugging, refactoring and reviewing diffs with a second pair of eyes" }
    ]
  },
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
      duration: "Jan 2016 – Jan 2020",
      desc: "Bachelor’s in Computer Science, UBIT, University of Karachi.",
      descBullets: [
        "Modern Computer Science curriculum",
        "Final Year Project: IoT-based Baby Monitoring System"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "Octdaily",
      companylogo: require("./assets/images/octdaily_logo.jpeg"),
      date: "Jan 2026 – Present",
      desc: "Building healthcare Flutter products with clean, scalable architecture.",
      descBullets: [
        "Built healthcare products using Flutter with a focus on production-ready quality",
        "Leveraged BLoC state management with Clean Architecture for maintainable solutions",
        "Handled API integrations and end-to-end delivery of production features"
      ]
    },
    {
      role: "Senior Flutter Developer",
      company: "Veraqor",
      companylogo: require("./assets/images/veraqor.png"),
      date: "Mar 2025 – Jul 2025",
      desc: "Built an AI-powered Flutter assistant with real-time voice and avatar interaction.",
      descBullets: [
        "Built AI-powered Flutter app with Azure Avatar/Speech SDK for real-time voice and avatar interaction",
        "Integrated native SDKs using MethodChannel/EventChannel for Azure WebRTC services",
        "Developed voice recognition and synthesis workflows for seamless AI responses"
      ]
    },
    {
      role: "Senior Flutter Developer",
      company: "TekRevol",
      companylogo: require("./assets/images/tekrevol.png"),
      date: "Nov 2021 – Mar 2025",
      desc: "Delivered Flutter & Android apps from concept to Play Store and App Store release.",
      descBullets: [
        "Led Flutter/Android app development from concept to deployment",
        "Enhanced a large-scale codebase for smooth feature releases",
        "Represented the team at CodeLaunch Accelerator Hackathon 2022"
      ]
    },
    {
      role: "Android Developer",
      company: "Technado Pvt Ltd",
      companylogo: require("./assets/images/technado.png"),
      date: "Jan 2021 – Nov 2021",
      desc: "Developed and maintained Android apps in Java and Kotlin.",
      descBullets: [
        "Developed Android apps using Java and Kotlin",
        "Collaborated with designers and backend teams on UI/UX and RESTful API integration"
      ]
    },
    {
      role: "Android Developer",
      company: "Avialdo Solutions",
      companylogo: require("./assets/images/avialdo.png"),
      date: "Dec 2019 – Dec 2020",
      desc: "Supported production Android apps through features, fixes, and Play Store releases.",
      descBullets: [
        "Built and enhanced Android apps, delivering features and fixes",
        "Supported the flagship product with issue resolution and rollouts"
      ]
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
  projects: [
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Confidential Healthcare Product",
      projectDesc:
        "Scalable Flutter application built on a modular architecture with BLoC and Clean Architecture.",
      footerLink: []
    },
    {
      image: require("./assets/images/alfardan.png"),
      projectName: "Alfardan Exchange – Send Money",
      projectDesc:
        "Integrated an interactive WebRTC bot for real-time, face-to-face digital avatar communication, using Azure Avatar & Speech native SDKs.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.synergates.alfardanapp.prod"
        }
      ]
    },
    {
      image: require("./assets/images/riseupkings.jpg"),
      projectName: "Rise Up King",
      projectDesc:
        "Self-improvement app with daily challenges, progress tracking and social community features.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/rise-up-kings/id6497878712"
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
  subtitle: "Open to Senior Flutter & Mobile opportunities",
  number: "+92 331 2226066",
  email_address: "minhalnadeem@gmail.com",
  location: "Karachi, Pakistan",
  interests: ["Book Reading", "Travelling"]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};


// Apps live on the App Store / Play Store

const liveAppsSection = {
  title: "Apps Live on the Stores",
  subtitle: "A selection of production apps I have built and shipped.",
  display: true
};

const liveApps = [
  {
    name: "LinkedUnion",
    image: require("./assets/images/apps/linkedunion.jpg"),
    ios: "https://apps.apple.com/us/app/linkedunion/id1274702587",
    android: "https://play.google.com/store/apps/details?id=com.lu.linkedunion&hl=en",
    website: "https://linkedunion.com/"
  },
  {
    name: "Rise Up King",
    image: require("./assets/images/apps/riseupking.jpg"),
    ios: "https://apps.apple.com/us/app/rise-up-kings/id6497878712",
    android: "https://play.google.com/store/apps/details?id=com.app.riseupkings&hl=en",
    website: "https://www.riseupkings.com/"
  },
  {
    name: "Roll",
    image: require("./assets/images/apps/roll.jpg"),
    ios: "https://apps.apple.com/us/app/roll-jiu-jitsu-mma-training/id6498894329",
    android: "https://play.google.com/store/apps/details?id=com.roll.app.roll_app&hl=en",
    website: "https://www.rjja.ca/"
  },
  {
    name: "Pets Vet Connect",
    image: require("./assets/images/apps/petsvetconnect.jpg"),
    ios: "https://apps.apple.com/pk/app/pets-vet-connect/id6736534307",
    android: "https://play.google.com/store/apps/details?id=com.app.pets.vet.app&hl=en",
    website: "http://www.petsvetconnect.com/"
  },
  {
    name: "Houze Hookup",
    image: require("./assets/images/apps/houzehookup.jpg"),
    ios: "https://apps.apple.com/us/app/houze-hookup/id6461727762",
    website: "https://www.houze-hookup.com/"
  },
  {
    name: "Catalink",
    image: require("./assets/images/apps/catalink.jpg"),
    ios: "https://apps.apple.com/us/app/catalink/id6756884712",
    android: "https://play.google.com/store/apps/details?id=com.cata.link.app&hl=en",
    website: "https://catalink.app/"
  },
  {
    name: "Myndify",
    image: require("./assets/images/apps/myndify.jpg"),
    ios: "https://apps.apple.com/us/app/myndify/id6502792485",
    android: "https://play.google.com/store/apps/details?id=com.app.mynder.app&hl=en_US",
    website: "https://myndifyapp.com/"
  },
  {
    name: "Libido",
    image: require("./assets/images/apps/libido.jpg"),
    ios: "https://apps.apple.com/us/app/libido/id6476115459",
    android: "https://play.google.com/store/apps/details?id=com.libidohealth.app&hl=en",
    website: "https://libido.health/"
  },
  {
    name: "The OneSource",
    image: require("./assets/images/apps/onesource.jpg"),
    ios: "https://apps.apple.com/pk/app/the-onesource/id6754937721",
    android: "https://play.google.com/store/apps/details?id=com.one.source.app&hl=en"
  },
  {
    name: "Alfardan Exchange",
    image: require("./assets/images/apps/alfardan.jpg"),
    ios: "https://apps.apple.com/pk/app/alfardan-exchange-send-money/id6478163453",
    android: "https://play.google.com/store/apps/details?id=com.synergates.alfardanapp.prod&hl=en",
    website: "https://alfardanexchange.com/"
  }
];

// Hero stats

const heroStats = [
  {value: "6+", label: "Years shipping mobile"},
  {value: "5", label: "Teams & companies"},
  {value: "10+", label: "Apps live on the stores"}
];

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
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
  resumeSection,
  heroStats,
  liveApps,
  liveAppsSection
};

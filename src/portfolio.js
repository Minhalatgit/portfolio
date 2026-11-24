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
  headline: "Senior Flutter Developer | 7 Years | AI-Assisted Development",
  subTitle:
    "Senior Flutter Developer with 7 years of mobile development experience, starting in native Android (Java, Kotlin) and building in Flutter since 2021.",
  about: [
    "Senior Flutter Developer with 7 years of mobile development experience, starting in native Android (Java, Kotlin) and building in Flutter since 2021.",
    "Specializes in Flutter/Dart with BLoC and Clean Architecture, architecting modular products, reviewing pull requests, and shipping features end to end.",
    "Hands-on with real-time calling and chat (Vonage, WebRTC, SignalR, Zoom), native SDK integration through platform channels, offline-first systems, and AI-powered voice/avatar interaction (Azure Speech & Avatar SDK).",
    "Uses AI tools (Cursor, Claude Code) for feature planning, faster implementation, and PR reviews. Open to Senior Flutter roles, remote or in Karachi."
  ],
  resumeLink: "https://drive.google.com/file/d/1bZ9zWVIPW--Sq_5ORbZR6ejbfjngmYMN/view",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minhalatgit",
  linkedin: "https://linkedin.com/in/syedminhalnadeem",
  gmail: "minhalnadeem@gmail.com",
  medium: "https://medium.com/@minhalnadeem",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Mobile & AI-powered application development",
  skills: [
    "Modular, feature-first Flutter products with BLoC and Clean Architecture",
    "Real-time calling and chat with Vonage, WebRTC, SignalR and Zoom",
    "Native SDK integration through platform channels, and AI voice/avatar interaction with Azure Speech & Avatar SDK",
    "Offline-first systems, payments, and Play Store / App Store publishing"
  ],

  skillGroups: [
    {
      title: "Languages & Frameworks",
      icon: "fas fa-mobile-alt",
      items: ["Flutter", "Dart", "Kotlin", "Java"]
    },
    {
      title: "Architecture & State Management",
      icon: "fas fa-sitemap",
      items: [
        "BLoC",
        "GetX",
        "Clean Architecture",
        "MVVM",
        "MVC",
        "Modular / Feature-First Architecture",
        "Dependency Injection"
      ]
    },
    {
      title: "Native Integration",
      icon: "fas fa-microchip",
      items: ["MethodChannel", "EventChannel", "WorkManager"]
    },
    {
      title: "Local Storage & Offline-First",
      icon: "fas fa-database",
      items: ["Hive", "SQLite", "Room"]
    },
    {
      title: "Real-Time & Communication",
      icon: "fas fa-video",
      items: [
        "WebRTC",
        "Vonage Video API",
        "SignalR",
        "Zego Cloud",
        "Zoom SDK",
        "Azure Speech & Avatar SDK"
      ]
    },
    {
      title: "Backend & Integrations",
      icon: "fas fa-plug",
      items: [
        "RESTful APIs",
        "Firebase (Auth, Firestore, Cloud Functions)",
        "FCM",
        "Webhooks"
      ]
    },
    {
      title: "Monetization & Payments",
      icon: "fas fa-credit-card",
      items: [
        "RevenueCat",
        "Stripe",
        "PayPal",
        "Apple Pay / Google Pay",
        "Ads"
      ]
    },
    {
      title: "Engineering Practices",
      icon: "fas fa-rocket",
      items: [
        "Unit Testing",
        "CI/CD",
        "Git",
        "Git Flow",
        "SSL Pinning",
        "Code Reviews",
        "Play Store / App Store Publishing"
      ]
    },
    {
      title: "AI-Assisted Development",
      icon: "fas fa-magic",
      items: ["Cursor", "Claude Code"]
    }
  ],

  aiWorkflow: {
    kicker: "AI in my workflow",
    title: "AI-assisted development with Cursor and Claude Code.",
    desc:
      "I use AI tools for feature planning, faster implementation, and pull request reviews.",
    points: [
      { icon: "fas fa-map", text: "Feature planning" },
      { icon: "fas fa-bolt", text: "Faster implementation" },
      { icon: "fas fa-code-branch", text: "Pull request reviews" }
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
      subHeader: "BS Computer Science",
      duration: "2016 – 2020",
      desc: "Graduation project: IoT-based Baby Monitoring System.",
      descBullets: []
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "OctDaily · Karachi",
      companylogo: require("./assets/images/octdaily_logo.jpeg"),
      date: "Jan 2026 – Nov 2026",
      desc: "Modular Flutter platform for 2 EMR products.",
      descBullets: [
        "Architected a modular, feature-first Flutter platform (Clean Architecture, BLoC) with a shared core of contracts wired per host app via dependency injection, reused across 2 EMR products and enabling parallel development across a 4-developer squad.",
        "Built an offline-first data capture system for a wound-care app designed for low-connectivity regions, combining WorkManager and Hive to queue and sync images and clinical data.",
        "Engineered a configurable, JSON-driven form engine with dynamic fields, data mapping, prefilled values, and host-level overrides.",
        "Built a LiDAR wound-assessment proof of concept by integrating a native SDK as a Flutter plugin, for an AI team to analyze wound depth.",
        "Integrated Vonage video/audio calling and SignalR live chat; delivered authentication, RBAC, and SSL pinning with HIPAA data-protection requirements in mind.",
        "Reviewed pull requests and managed day-to-day task delivery."
      ]
    },
    {
      role: "Senior Flutter Developer",
      company: "Veraqor · Karachi",
      companylogo: require("./assets/images/veraqor.png"),
      date: "Mar 2025 – Jul 2025",
      desc: "AI voice-avatar assistant with Azure Avatar and Speech SDKs.",
      descBullets: [
        "Built an AI voice-avatar assistant using Azure Avatar and Speech SDKs, integrated through MethodChannel/EventChannel to stream WebRTC avatar sessions and connected to a backend LLM layer.",
        "Debugged native crashes and worked through connection-drop, latency, and rendering issues in real-time streaming."
      ]
    },
    {
      role: "Senior Flutter Developer",
      company: "TekRevol · Karachi",
      companylogo: require("./assets/images/tekrevol.png"),
      date: "Nov 2021 – Mar 2025",
      desc: "15+ Flutter apps across social, e-commerce, pet health, and community products.",
      descBullets: [
        "Built or contributed to 15+ Flutter apps across social, e-commerce, pet health, and community products. Joined at mid-level, promoted to senior.",
        "Authored the team's standard GetX boilerplate, introduced Git Flow, and began pull request reviews.",
        "Built reusable chat, payment, and notification modules; integrated Stripe, PayPal, Apple Pay, Google Pay, RevenueCat, and Google Ads.",
        "Built features with Firebase, Zego Cloud, Zoom, and webhooks; offline-first Hive app; Bluetooth mesh networking with Bridgefy; video caching."
      ]
    },
    {
      role: "Android Developer",
      company: "Technado Pvt Ltd · Karachi",
      companylogo: require("./assets/images/technado.png"),
      date: "Jan 2021 – Nov 2021",
      desc: "Android apps in Java and Kotlin.",
      descBullets: [
        "Android apps in Java/Kotlin with MVVM, Retrofit, Room, and Google Maps; REST APIs with Node.js."
      ]
    },
    {
      role: "Android Developer",
      company: "Avialdo Solutions · Karachi",
      companylogo: require("./assets/images/avialdo.png"),
      date: "Dec 2019 – Dec 2020",
      desc: "Maintained LinkedUnion, a white-labeled Java app.",
      descBullets: [
        "Maintained LinkedUnion, an offline-first, white-labeled Java app (Retrofit, SQLite, build flavors, Firebase Realtime Database versioning)."
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
  title: "Featured Projects",
  projects: [
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Healthcare Platform (Confidential)",
      projectDesc:
        "Modular Flutter platform powering 2 EMR products, designed for offline wound-data capture, video consultations, and live chat in low-connectivity regions.",
      tech: ["Flutter", "BLoC", "Hive", "WorkManager", "Vonage", "SignalR"],
      footerLink: []
    },
    {
      image: require("./assets/images/apps/petsvetconnect.jpg"),
      projectName: "Pets Vet Connect",
      projectDesc:
        "Built a two-role Flutter app end to end for pet owners and vets, with appointment booking and Zoom SDK video consultations.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.app.pets.vet.app"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/pk/app/pets-vet-connect/id6736534307"
        }
      ]
    },
    {
      image: require("./assets/images/apps/catalink.jpg"),
      projectName: "Catalink",
      projectDesc:
        "Flutter social app with chat, posting, follow/unfollow, and offline Bluetooth mesh discovery and messaging via Bridgefy.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.cata.link.app"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/catalink/id6756884712"
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
  subtitle: "Open to Senior Flutter roles, remote or in Karachi",
  email_address: "minhalnadeem@gmail.com",
  location: "Karachi, Pakistan (Open to Remote)",
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
  subtitle: "Apps I've built or contributed to",
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
  }
];

// Hero stats

const heroStats = [
  {value: "7", label: "Years of mobile development"},
  {value: "5", label: "Teams & companies"},
  {value: "15+", label: "Flutter apps built or contributed"}
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

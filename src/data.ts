export type LinkSet = {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  notes?: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  summary: string[];
  tech: string[];
  image?: string;   
  links: { code?: string; demo?: string };
};

export type PublicationItem = {
  title: string;
  venue: string;
  link?: string;
};

export type PortfolioData = {
  name: string;
  tagline: string;
  location?: string;
  about: string;
  links: LinkSet;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  publications: PublicationItem[];
};
// Add this next to your existing exports
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Swift", "SQL", "Kotlin", "HTML", "CSS", "Java", "C#"],
  },
  {
    category: "Web & Databases",
    items: [
      "React", "Typescript", "Firebase", "Flask", "Node.js",
      "MongoDB", "MySQL", "Postgres"
    ],
  },
  {
    category: "Frameworks & Cloud",
    items: [
      "SwiftUI", "Tailwind CSS", "Flutter", "Springboot", "Hadoop",
      "REST", "AWS (EC2, DynamoDB)", "GCP"
    ],
  },
  {
    category: "Other & OS",
    items: [
      "Postman", "Unity", "Xcode", "Git", "Jira/Confluence",
      "Azure DevOps", "Linux", "MS Office"
    ],
  },
  {
    category: "Data Science & Analysis",
    items: [
      "Statistics", "Machine Learning", "Tableau", "NLP", "LLM",
      "Web Scraping", "Data Analytics"
    ],
  },
];

// (optional) keep your old flat list in sync:
export const skills = Array.from(
  new Set(skillGroups.flatMap(g => g.items))
);

const data: PortfolioData = {
  name: "Rhushabh Madurwar",
  tagline: "Computer Science grad at USC",
  location: "Los Angeles, CA",
  links: {
    email: "rushmadurwar@email.com",
    github: "https://github.com/mrhushabh",
    linkedin: "https://www.linkedin.com/in/rhushabh-madurwar",
    resume: "Rhushabh Madurwar.pdf",
  },
  about:
    "I enjoy building reliable apps and data systems. I care about clean design, performance, and solving real problems.",

  education: [
    {
      school: "University of Southern California",
      degree: "MS in Computer Science",
      period: "Jan 2024 to Dec 2025",
      notes: "Coursework: Analysis of Algorithms, Web Technologies, Advanced Data Stores, Foundation of Data Management, Information Retrieval, Advanced Mobile Devices and Game consoles, Security Systems.",
    },
    {
      school: "Savitribai Phule Pune Univsersity",
      degree: "Bachelors in Computer Engineering and Honors in Data Science",
      period: "Aug 2019 to May 2023",
      notes: "Coursework: OOPs, Software Engineering, Data Structures, DBMS, NLP",
    }


  ],

  experience: [
    {
      title: "Application Developer Intern",
      company: "Hudson Advisors L.P.",
      period: "May 2025 to Aug 2025",
      bullets: [
        "Built a Tax Compliance Tracker using .NET and Blazor UI, enabling efficient management of compliance deliverables.",
        "Created an end-to-end implementation of a Microsoft Dynamics 365 CRM platform tailored to manage relationships and deal flow with Bond Investors and Originators.",
        "Migrated eBAM software application to FIS’s cloud, optimizing infrastructure costs and ensuring support continuity."
      ],
    },
    {
      title: "Student Developer",
      company: "USC Facilities and Planning Management",
      period: "May 2024 to Present",
      bullets: [
        "Led a cross-functional team to develop a real-time integration log tracking system for Assetworks–Workday data flows, reducing issue resolution time by 40%.",
        "Architected and developed a full-stack internal web dashboard from scratch using React, Node.js, Express, and MongoDB to monitor integration logs between AssetWorks and Workday .",
        "Programmed scripts to automate daily API data updates, ensuring APIs remain up to date with new data while reducing manual data insertion and update time by 50%, improving accuracy and efficiency.",
        "Completed Data migration, API migration and API testing processes, increasing API performance by 25%"
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "PTC.Inc",
      period: "July 2022 to June 2023",
      bullets: [
        "Developed Python automation scripts leveraging Selenium, BeautifulSoup, and Kafka for Help Center web pages,optimizing content update pipelines and reducing manual effort by 75%.",
        "Designed and implemented a Kafka-based event-driven architecture for processing real-time updates to Help Center content, ensuring low-latency and high-throughput data synchronization."
      ],
    }
  ],

  projects: [
    {
      slug: "stock-search",
      name: "Stock Search",
      summary:
      [
        "Created a Flask-based stock search app with autocomplete functionality and interactive charts",
        "Used Finnhub API to fetch and display real-time stock prices, company info, charts and market data."
      ],
      tech: ["Python", "Flask", "Charts"],
      image: "/stocksearch.jpeg",
      links: {
        code: "https://github.com/mrhushabh/Stock_analysis_web_application",
        demo: "https://mywebpj-2024.nn.r.appspot.com/"
      },
    },
    {
      slug: "stock-ios-web",
      name: "Stock Trading and Digital Wallet iOS/Web App",
      summary:
      [
        "Built a cross-platform stock trading and portfolio analysis app, developing a SwiftUI iOS app and a MERN stack web app with Finnhub APIs for real-time stock data and MongoDB for portfolio management.",
        "Implemented portfolio tracking, virtual trading, and interactive financial visualizations using HighCharts, WebKit (iOS), and React (Web)."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      image: "/stockapp.jpeg",
      links: {
        code: "https://github.com/mrhushabh/iOS_StockApp/tree/main/StockApp",
        demo: "https://www.youtube.com/watch?v=F8raFihjc6c"
      },
    },
    {
      slug: "chatdb",
      name: "ChatDB",
      summary:
      [
        "Devised a Python NLP system with NLTK to generate and execute SQL/NoSQL queries, reducing query time by 50% and improving execution by 30%.",
        "Developed a Flask-based web interface for intuitive query input, real-time execution, and visualization of database results."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      image: "/chatdb.png",
      links: {
        code: "https://github.com/mrhushabh/your-nl2sql",
      },
    },
    {
      slug: "twist-tile-golf",
      name: "Twist Tile Golf",
      summary:
      [
        "Designed and developed a 2D game using Unity and C# for game mechanics and scripting; integrated Firebase to store and manage real-time game analytics.",
        "Established real-time analytics tracking by embedding Firebase database calls within Unity C# scripts, dynamically updating player behavior data and in-game events to generate actionable insights for continuous gameplay improvement."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      image: "/twisttilegolf.png",
      links: {
        code: "https://github.com/CSCI-526-Spring-2025/csci-526-final-project-putter-pirates",
        demo: "https://csci-526-spring-2025.github.io/csci-526-final-project-putter-pirates/BetaBuild2/"
      },
    },
    {
      slug: "basic-ios-apps",
      name: "Productivity iOS Apps",
      summary:
      [
       "Developed two productivity-focused iOS applications: a Habit Tracker and a To-Do List app to help users manage time, goals, and daily habits effectively.",
       "Designed clean, responsive UI/UX with real-time engagement features like customized notifications and visual feedback.",
       "Implemented data persistence and modular architecture using iOS frameworks to ensure efficiency, scalability, and a seamless user experience."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      image: "/habittrack.jpeg",
      links: {
        code: "https://github.com/mrhushabh/iOSapp_HabitTracker/tree/main/HabitTracker",
        demo: "https://github.com/mrhushabh/iOSapps-TodoList/tree/main/TodoList"
      },
    },


  ],

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "SQL",
    "MongoDB",
    "AWS",
    "GCP",
    "Docker",

  ],

  publications: [
    {
      title: "Digitization of Physical Notes: A Comprehensive Approach Using OCR, CNN, RNN, and NMF",
      venue: "",
      link: "https://ieeexplore.ieee.org/document/10391967",
    },
    {
      title: "Digitizing Notes using Optical Character Recognition and Automatic Topic Identification and Classification using Natural Language Processing",
      venue: "",
      link: "https://www.ijraset.com/research-paper/digitizing-notes-using-optical-character-recognition-and-automatic-topic-identification",
    },
    {
      title: "Copyright for Sentiment Analysis of Financial News",
      venue: "",
      link: "https://drive.google.com/file/d/1aO1H7jI3c6qlMDJXKc64Kexc3hlqYDQ5/view?usp=drive_link",
    },

  ],
};

export default data;


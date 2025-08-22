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
  name: string;
  summary: string[];
  tech: string[];
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

const data: PortfolioData = {
  name: "Rhushabh Madurwar",
  tagline: "Computer Science grad at USC",
  location: "Los Angeles, CA",
  links: {
    email: "rushmadurwar@email.com",
    github: "https://github.com/mrhushabh",
    linkedin: "https://www.linkedin.com/in/rhushabh-madurwar",
    resume: "https://github.com/mrhushabh/rhushabh-portfolio-site/blob/main/public/Rhushabh%20Madurwar.pdf",
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
      name: "Stock Search",
      summary:
      [
        "Created a Flask-based stock search app with autocomplete functionality and interactive charts",
        "Used Finnhub API to fetch and display real-time stock prices, company info, charts and market data."
      ],
      tech: ["Python", "Flask", "Charts"],
      links: {
        code: "https://github.com/mrhushabh/your-stocksearch",
      },
    },
    {
      name: "Stock Trading and Digital Wallet iOS/Web App",
      summary:
      [
        "Built a cross-platform stock trading and portfolio analysis app, developing a SwiftUI iOS app and a MERN stack web app with Finnhub APIs for real-time stock data and MongoDB for portfolio management.",
        "Implemented portfolio tracking, virtual trading, and interactive financial visualizations using HighCharts, WebKit (iOS), and React (Web)."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      links: {
        code: "https://github.com/mrhushabh/your-nl2sql",
      },
    },
    {
      name: "ChatDB",
      summary:
      [
        "Devised a Python NLP system with NLTK to generate and execute SQL/NoSQL queries, reducing query time by 50% and improving execution by 30%.",
        "Developed a Flask-based web interface for intuitive query input, real-time execution, and visualization of database results."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      links: {
        code: "https://github.com/mrhushabh/your-nl2sql",
      },
    },
    {
      name: "Twist Tile Golf",
      summary:
      [
        "Designed and developed a 2D game using Unity and C# for game mechanics and scripting; integrated Firebase to store and manage real-time game analytics.",
        "Established real-time analytics tracking by embedding Firebase database calls within Unity C# scripts, dynamically updating player behavior data and in-game events to generate actionable insights for continuous gameplay improvement."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      links: {
        code: "https://github.com/mrhushabh/your-nl2sql",
      },
    },
    {
      name: "Productivity iOS Apps",
      summary:
      [
       "Developed two productivity-focused iOS applications: a Habit Tracker and a To-Do List app to help users manage time, goals, and daily habits effectively.",
       "Designed clean, responsive UI/UX with real-time engagement features like customized notifications and visual feedback.",
       "Implemented data persistence and modular architecture using iOS frameworks to ensure efficiency, scalability, and a seamless user experience."
      ],
      tech: ["Python", "NLTK", "MySQL", "MongoDB"],
      links: {
        code: "https://github.com/mrhushabh/your-nl2sql",
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
      link: "https://drive.google.com/drive/folders/1F0V7_CwWeSDeFydVtIDtxysh_nE6eH3C?usp=drive_link",
    },

  ],
};

export default data;


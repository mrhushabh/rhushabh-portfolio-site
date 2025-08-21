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
  summary: string;
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
    email: "your@email.com",
    github: "https://github.com/mrhushabh",
    linkedin: "https://www.linkedin.com/in/your-profile",
    resume: "/resume.pdf",
  },
  about:
    "I enjoy building reliable apps and data systems. I care about clean design, performance, and solving real problems.",

  education: [
    {
      school: "University of Southern California",
      degree: "MS in Computer Science",
      period: "2023 to 2025",
      notes: "Relevant work: systems, data, AI.",
    },
  ],

  experience: [
    {
      title: "Software Engineer Intern",
      company: "Company Name",
      period: "May 2024 to Aug 2024",
      bullets: [
        "Shipped features that improved X by Y percent.",
        "Built tooling used by Z teams.",
      ],
    },
  ],

  projects: [
    {
      name: "Stock Search",
      summary:
        "Flask-based stock explorer with autocomplete, charts, and API integration.",
      tech: ["Python", "Flask", "Charts"],
      links: {
        code: "https://github.com/mrhushabh/your-stocksearch",
      },
    },
    {
      name: "Natural Language to SQL/NoSQL",
      summary:
        "Converts natural language to SQL and NoSQL queries for MySQL and MongoDB.",
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
      title: "Background Verification of Employees using Blockchain",
      venue: "IEEE BDCSS 2022",
      link: "https://doi.org/your-doi",
    },
  ],
};

export default data;


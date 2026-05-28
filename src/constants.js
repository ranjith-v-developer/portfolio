export const PERSONAL_INFO = {
  name: "Ranjith V",
  title: "Full-Stack Software Engineer",
  location: "Chennai, India",
  email: "venuranjith4505@gmail.com",
  phoneNumber: "+91-6383046764",
  linkedin: "https://linkedin.com/in/ranjithv-engineer",
  github: "https://github.com/ranjithv-engineer",
  summary: "Full-Stack Software Engineer with 5+ years of experience building scalable web applications using React.js, Node.js, NestJS, GraphQL, and PostgreSQL. Primarily focused on React-based frontend development with strong backend integration skills. Passionate about writing clean, maintainable code and delivering high-performance enterprise applications."
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Redux", "Redux Toolkit", "React Hooks", "Context API", "Vue.js", "Angular", "Responsive UI Development", "Recharts", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "NestJS", "Express.js", "GraphQL", "RESTful APIs", "Strapi CMS", "PostgreSQL", "MySQL", "Redis", "Query Optimization"]
  },
  {
    category: "Cloud & Tools",
    items: ["AWS Lambda", "AWS S3", "JWT Auth", "RBAC", "Secure Data Handling", "Git", "Postman", "Jira", "Agile/Scrum", "Data Visualization", "Geospatial Mapping"]
  }
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Cloud Ripples Private Limited, Chennai",
    duration: "Apr 2023 – Present",
    points: [
      "Led development of high-traffic React.js applications with responsive and performant enterprise-grade user interfaces",
      "Built reusable UI components and integrated backend services using React.js, Node.js, NestJS, and GraphQL for end-to-end feature delivery",
      "Optimized GraphQL APIs using Redis caching and query enhancements, reducing response time by 50%",
      "Improved frontend performance by ~40% through code splitting, lazy loading, and optimization techniques",
      "Implemented Role-Based Access Control (RBAC) for secure access management across 500+ users",
      "Developed interactive dashboards and real-time data visualizations using Recharts to improve business insights"
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Cloud Ripples Private Limited, Chennai",
    duration: "Apr 2022 – Mar 2023",
    points: [
      "Built React.js frontend integrated with Strapi CMS for managing dynamic content",
      "Automated CSV import workflows in Strapi CMS, processing 10,000+ records and reducing manual effort",
      "Engineered serverless data processing workflows using AWS Lambda",
      "Developed RESTful APIs with Node.js and JWT authentication for secure enterprise workflows"
    ]
  },
  {
    role: "Trainee Software Engineer",
    company: "Cloud Ripples Private Limited, Chennai",
    duration: "Apr 2021 – Mar 2022",
    points: [
      "Built React.js components and integrated NestJS REST APIs",
      "Developed Angular components for enterprise media distribution platform",
      "Built Vue.js + Strapi CMS certification management system from scratch"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    institution: "St. Peter's Institute of Higher Education and Research, Chennai",
    duration: "2022 – 2025",
    details: "Completed alongside full-time professional experience through a flexible academic schedule. test"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Murugappa Polytechnic College, Chennai",
    duration: "2018 – 2020"
  }
];

export const PROJECTS = [
  {
    title: "Data Analytics & Management Platform",
    tech: ["React.js", "Redux", "Redux Toolkit", "Node.js", "PostgreSQL", "Redis", "Recharts", "Geospatial Mapping"],
    description: "Developed a scalable two-tier platform consisting of a React.js-based CMS and a public-facing application, enabling non-technical users to manage and publish complex datasets efficiently.",
    highlights: [
      "Built 5+ interactive dashboards using Recharts (bar, pie, and line charts) for real-time business insights",
      "Integrated geospatial mapping features to visualize regional data trends and improve user engagement",
      "Optimized API performance using Redis caching and PostgreSQL query optimization, reducing response time by 50%"
    ]
  },
  {
    title: "Data Repository & Management System",
    tech: ["React.js", "Redux", "Redux Toolkit", "Strapi CMS", "Node.js", "AWS Lambda", "PostgreSQL"],
    description: "Developed a React.js-based frontend integrated with Strapi CMS to manage structured datasets and dynamic content through a centralized admin dashboard.",
    highlights: [
      "Automated large-scale data ingestion by implementing custom CSV import functionality within Strapi CMS",
      "Built serverless data processing workflows using AWS Lambda to efficiently fetch, transform, and manage large datasets",
      "Developed interactive data visualization features, including charts and geospatial map overlays"
    ]
  },
  {
    title: "Certification & Form Review Management System",
    tech: ["Vue.js", "Strapi CMS", "PostgreSQL"],
    description: "Developed a Vue.js and Strapi CMS application to streamline multi-step certification form submissions with an intuitive and user-friendly onboarding experience.",
    highlights: [
      "Built reviewer workflows supporting approval and rejection processes with automated status tracking",
      "Developed a responsive admin dashboard to simplify reviewer operations and improve efficiency",
      "Implemented frontend form validation and structured data handling to maintain data accuracy"
    ]
  },
  {
    title: "Media Management & Distribution System",
    tech: ["Angular", "NestJS", "TypeScript", "RESTful APIs", "PostgreSQL"],
    description: "Developed an enterprise-grade digital media distribution platform using Angular and NestJS for managing high-volume media asset libraries across global platforms.",
    highlights: [
      "Built advanced media search and content-sharing features to streamline asset distribution",
      "Implemented workflow-based approval processes for theatrical content releases ensuring compliance",
      "Designed responsive web interfaces optimized for high-performance digital asset previews"
    ]
  }
];

import { IconType } from "react-icons";
import { CloudCog, LucideIcon, Brain, Code2, Database, Zap, Package, BarChart } from "lucide-react";
import {
  SiFastapi,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiDocker,
  SiGit,
  SiAngular,
  SiMongodb,
  SiFlask,
  SiTensorflow,
  SiScikitlearn,
  SiPostman,
  SiJest,
  SiCypress,
  SiGithubactions,
  SiSpringboot,
  SiMysql
} from "react-icons/si";

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  architecture: string;
  decisions: string[];
  aiIntegration?: string;
  awsModel?: string;
  impact: string[];
  lessons: string;
  links: { label: string; href: string }[];
  featured?: boolean;
  deepDive?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const profile: Profile = {
  name: "Dinol Siriwardena",
  role: "Software Developer | AI Engineer | Full Stack Developer",
  summary:
    "Full Stack Developer specializing in Machine Learning, Backend Systems, and Modern Web Technologies. Computer Software Engineering graduate with hands-on experience in AI-based systems, enterprise applications, and scalable web solutions. Passionate about building intelligent systems and creating exceptional user experiences.",
  location: "Colombo, Sri Lanka",
  email: "dinolransukasiriwardena2005@gmail.com",
  phone: "+94 77 202 6501",
  linkedin: "https://www.linkedin.com/in/dinol-siriwardena-29b2932b1",
  github: "https://github.com/dinolsiri"
};

type StackIcon = IconType | LucideIcon;

export const stackIcons: { label: string; icon: StackIcon; iconColor: string; glow: string }[] = [
  { label: "TypeScript", icon: SiTypescript, iconColor: "#2F74C0", glow: "rgba(47, 116, 192, 0.3)" },
  { label: "React", icon: SiReact, iconColor: "#61DAFB", glow: "rgba(97, 218, 251, 0.3)" },
  { label: "Next.js", icon: SiNextdotjs, iconColor: "#F8FAFC", glow: "rgba(248, 250, 252, 0.26)" },
  { label: "Python", icon: SiPython, iconColor: "#FFD447", glow: "rgba(255, 212, 71, 0.27)" },
  { label: "FastAPI", icon: SiFastapi, iconColor: "#00C7B7", glow: "rgba(0, 199, 183, 0.26)" },
  { label: "Node.js", icon: SiNodedotjs, iconColor: "#8CC84B", glow: "rgba(140, 200, 75, 0.28)" },
  { label: "Java", icon: Code2, iconColor: "#007396", glow: "rgba(0, 115, 150, 0.28)" },
  { label: "PostgreSQL", icon: SiPostgresql, iconColor: "#3F7EBA", glow: "rgba(63, 126, 186, 0.28)" },
  { label: "Docker", icon: SiDocker, iconColor: "#2496ED", glow: "rgba(36, 150, 237, 0.28)" },
  { label: "Git", icon: SiGit, iconColor: "#F1502F", glow: "rgba(241, 80, 47, 0.28)" }
];

// Comprehensive skill to icon mapping for enhanced skills display
export const skillIcons: { [key: string]: { icon: StackIcon; color: string } } = {
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#F8FAFC" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  TypeScript: { icon: SiTypescript, color: "#2F74C0" },
  JavaScript: { icon: Code2, color: "#F7DF1E" },
  "HTML/CSS": { icon: Code2, color: "#E34C26" },
  "Tailwind CSS": { icon: Zap, color: "#38B2AC" },
  "Responsive UI": { icon: Package, color: "#94a3b8" },
  "Frontend Performance Optimization": { icon: Zap, color: "#94a3b8" },
  
  // Backend
  Java: { icon: Code2, color: "#007396" },
  "Java EE": { icon: Code2, color: "#007396" },
  Python: { icon: SiPython, color: "#3776AB" },
  Flask: { icon: SiFlask, color: "#000000" },
  FastAPI: { icon: SiFastapi, color: "#00C7B7" },
  NestJS: { icon: Code2, color: "#E0234E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "C#": { icon: Code2, color: "#239120" },
  "C++": { icon: Code2, color: "#00599C" },
  "REST API Development": { icon: Code2, color: "#94a3b8" },
  "PHP": { icon: Code2, color: "#777BB4" },
  
  // ML & AI
  TensorFlow: { icon: SiTensorflow, color: "#3b82f6" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#60a5fa" },
  "Machine Learning (ML)": { icon: Brain, color: "#3b82f6" },
  "Data Analysis": { icon: BarChart, color: "#60a5fa" },
  "Feature Engineering": { icon: Zap, color: "#3b82f6" },
  "Model Optimization": { icon: Zap, color: "#60a5fa" },
  "Neural Networks": { icon: Brain, color: "#3b82f6" },
  "Google Colab": { icon: CloudCog, color: "#2563eb" },
  "Streamlit": { icon: Package, color: "#60a5fa" },
  
  // Databases
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#00758F" },
  SQL: { icon: Database, color: "#336791" },
  "SQL Server": { icon: Database, color: "#CC2927" },
  SQLite: { icon: Database, color: "#003B57" },
  "Database Design": { icon: Database, color: "#94a3b8" },
  "Query Optimization": { icon: Zap, color: "#94a3b8" },
  "Stored Procedures": { icon: Database, color: "#94a3b8" },
  
  // DevOps & Cloud
  Docker: { icon: SiDocker, color: "#2496ED" },
  Containerization: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F1502F" },
  "GitHub Workflows": { icon: SiGithubactions, color: "#2088FF" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "GitHub": { icon: SiGit, color: "#F1502F" },
  "Google Cloud Platform (GCP)": { icon: CloudCog, color: "#4285F4" },
  "Web Hosting": { icon: Package, color: "#94a3b8" },
  "CI/CD Pipelines": { icon: Zap, color: "#94a3b8" },
  "Version Control": { icon: SiGit, color: "#F1502F" },
  
  // Testing & Tools
  Jest: { icon: SiJest, color: "#C63161" },
  Cypress: { icon: SiCypress, color: "#17202C" },
  Postman: { icon: SiPostman, color: "#3b82f6" },
  APIDOG: { icon: Package, color: "#94a3b8" },
  JUnit: { icon: Code2, color: "#25A95B" },
  "Test-Driven Development": { icon: Code2, color: "#94a3b8" },
  "VS Code": { icon: Code2, color: "#0078D4" },
  "Visual Studio": { icon: Code2, color: "#68217A" },
  Blazor: { icon: Code2, color: "#512BD4" },
  ".NET Core": { icon: Package, color: "#512BD4" },
  Figma: { icon: Package, color: "#F24E1E" },
};

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Core Focus", value: "AI, Full Stack, ML Systems" },
  { label: "Technologies", value: "React, Python, Java, TypeScript" }
];

export const EXPERIENCE_START_YEAR = 2023;

export function getYearsBuildingProducts(now = new Date()): string {
  const year = now.getFullYear();
  const years = Math.max(1, year - EXPERIENCE_START_YEAR);
  return `${years}+`;
}

export const experience: ExperienceItem[] = [
  {
    company: "Manderston Clinical Services Limited",
    role: "Data Analyst | Software Developer",
    period: "Jan 2025 - Jun 2025",
    highlights: [
      "Developed custom data retrieval software using R, streamlining internal data access and extraction processes.",
      "Automated data collection from multiple sources, improving retrieval efficiency and accuracy.",
      "Collaborated with the data team to ensure integration with existing workflows and improved reporting turnaround times."
    ]
  },
  {
    company: "Cardiff Metropolitan University",
    role: "Software Engineering Student",
    period: "2022 - 2026",
    highlights: [
      "Completed BSc Software Engineering with focus on AI, Machine Learning, and Full Stack Development.",
      "Built AI-powered systems including Breast Cancer Detection and Personality Prediction models.",
      "Developed enterprise applications using Java EE, Python, and React technologies."
    ]
  },
  {
    company: "Personal Projects",
    role: "Full Stack Developer | ML Engineer",
    period: "2023 - Present",
    highlights: [
      "Architected and deployed AI-based systems achieving 90%+ accuracy on classification tasks.",
      "Built responsive web applications with React, Next.js, and modern UI frameworks.",
      "Developed robust backend APIs using Python, FastAPI, Java, and NestJS.",
      "Implemented containerized solutions with Docker and cloud deployment strategies."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "breast-cancer-detection",
    title: "AI-Powered Breast Cancer Detection System",
    summary:
      "ML system for breast tumor classification achieving 90%+ accuracy with Flask/FastAPI backend and React frontend.",
    role: "Full Stack AI Engineer",
    timeline: "2024",
    stack: ["Python", "Scikit-learn", "Flask", "FastAPI", "React.js", "PostgreSQL", "Docker"],
    architecture:
      "Web-based ML system with Python backend (Flask/FastAPI) for real-time predictions, React frontend for data entry and visualization, PostgreSQL for persistence, and Docker for containerization.",
    decisions: [
      "Used SVM, Random Forest, and Logistic Regression for ensemble accuracy.",
      "Implemented confidence scores and feature importance visualization for clinical trust.",
      "Containerized entire solution for cloud deployment and scalability."
    ],
    aiIntegration:
      "Implemented Support Vector Machine (SVM), Random Forest, and Logistic Regression algorithms achieving 90%+ accuracy on Wisconsin Diagnostic Breast Cancer Database.",
    awsModel:
      "Deployed on Docker with <2-second prediction response times using cloud platforms for healthcare scalability.",
    impact: [
      "Achieved 90%+ classification accuracy serving as clinical decision-support tool.",
      "Sub-2-second prediction response time enabling real-time clinical decisions.",
      "HTTPS encryption and secure data handling for healthcare compliance."
    ],
    lessons:
      "Healthcare ML systems require both accuracy and interpretability. Feature importance visualization builds clinician confidence in AI-based diagnostics.",
    links: [
      { label: "View on GitHub", href: "https://github.com/dinolsiri" },
      { label: "Learn More", href: "/contact" }
    ],
    featured: true,
    deepDive: true
  },
  {
    slug: "personality-prediction",
    title: "AI-Based Personality Prediction System",
    summary:
      "ML system predicting personality traits using behavioral data with Flask/Streamlit interface and end-to-end ML pipeline.",
    role: "Machine Learning Engineer",
    timeline: "2024",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Flask", "Streamlit", "Docker"],
    architecture:
      "End-to-end ML pipeline with Python backend implementing Logistic Regression, Random Forest, and Neural Network models. Streamlit and Flask frontends for real-time predictions and model evaluation.",
    decisions: [
      "Compared multiple ML algorithms selecting Random Forest for accuracy and interpretability.",
      "Built modular pipeline supporting training, evaluation, and deployment phases.",
      "Created Streamlit interface for instant user predictions with confidence scores."
    ],
    aiIntegration:
      "Implemented Logistic Regression, Random Forest, and Artificial Neural Network models with hyperparameter tuning for optimal personality classification.",
    awsModel: "Deployed using Docker and cloud platforms for scalable ML inference.",
    impact: [
      "Created complete computational intelligence solution from data to deployment.",
      "Enabled real-time personality predictions with model confidence scoring.",
      "Built interpretable system allowing users to understand prediction drivers."
    ],
    lessons:
      "End-to-end ML pipelines benefit from modular design. Separating data processing, modeling, and deployment phases improves maintainability and scalability.",
    links: [
      { label: "View Repository", href: "https://github.com/dinolsiri/Personality_prediction" },
      { label: "GitHub Link", href: "https://github.com/dinolsiri" }
    ],
    featured: true,
    deepDive: true
  },
  {
    slug: "pahana-bookshop",
    title: "Pahana Edu Online Billing System",
    summary:
      "Enterprise Java EE billing system with 85%+ test coverage, role-based access control, and real-time reporting.",
    role: "Full Stack Java Developer",
    timeline: "2023 - 2024",
    stack: ["Java EE", "Servlets", "JSP", "MySQL", "Apache Tomcat", "Bootstrap", "JUnit"],
    architecture:
      "Three-tier MVC architecture with RESTful web services, connection pooling, stored procedures, and comprehensive test suites.",
    decisions: [
      "Implemented enterprise design patterns (MVC, Singleton, Factory, DAO) for scalability.",
      "Used Apache Commons DBCP2 for connection pooling and performance optimization.",
      "Applied TDD with JUnit achieving 85%+ code coverage."
    ],
    aiIntegration: "No primary AI integration; focused on transactional reliability and business logic automation.",
    awsModel:
      "Deployed on Apache Tomcat with MySQL backend database with stored procedures for data integrity.",
    impact: [
      "Automated customer management, inventory tracking, and bill generation workflows.",
      "85%+ code coverage through Test-Driven Development ensuring robustness.",
      "Role-based access control for staff and admin users with session management."
    ],
    lessons:
      "Enterprise applications need strong testing practices. TDD and high code coverage significantly reduce production bugs and improve maintainability.",
    links: [
      { label: "GitHub Repository", href: "https://github.com/dinolsiri/Pahana-Edu-Bookshop-JavaEE" },
      { label: "View More", href: "/projects" }
    ],
    featured: true,
    deepDive: true
  },
  {
    slug: "banking-system",
    title: "Banking System",
    summary:
      "C-based banking system demonstrating core system design and data structure implementation.",
    role: "Systems Developer",
    timeline: "2026",
    stack: ["C", "Data Structures", "File I/O"],
    architecture:
      "Console-based banking application with account management, transactions, and file persistence.",
    decisions: [
      "Focused on core systems programming and efficient data handling.",
      "Implemented file-based persistence for transaction history."
    ],
    impact: [
      "Demonstrated strong fundamentals in low-level systems programming.",
      "Built robust account and transaction management logic."
    ],
    lessons:
      "Core systems programming skills remain valuable. Understanding memory management and data structures improves optimization skills across all languages.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/Banking-System" }
    ]
  },
  {
    slug: "code-smell-detection",
    title: "Code Smell Prediction System",
    summary:
      "Machine Learning system for detecting code quality issues and predicting code smells.",
    role: "ML Engineer",
    timeline: "2026",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    architecture:
      "ML pipeline analyzing code metrics to predict and identify potential code quality issues.",
    decisions: [
      "Focused on code quality metrics analysis for software engineering workflows."
    ],
    impact: [
      "Improved code quality analysis capabilities.",
      "Enabled earlier detection of maintenance issues."
    ],
    lessons:
      "Code quality prediction can guide development practices and architectural decisions early in projects.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/Code-Smell-Prediction" }
    ]
  },
  {
    slug: "resume-nlp-classification",
    title: "Resume NLP Classification System",
    summary:
      "NLP system for automated resume classification and candidate screening using natural language processing.",
    role: "NLP Engineer",
    timeline: "2026",
    stack: ["Python", "NLP", "Machine Learning", "Text Processing"],
    architecture:
      "NLP pipeline for resume parsing, feature extraction, and classification for HR automation.",
    decisions: [
      "Implemented text processing and feature engineering for resume data.",
      "Built scalable classification pipeline for recruitment workflows."
    ],
    impact: [
      "Automated resume screening and candidate classification.",
      "Reduced manual HR workload through intelligent categorization."
    ],
    lessons:
      "NLP applications in HR can significantly improve recruitment efficiency. Proper data preprocessing and feature engineering are crucial for accurate classification.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/RESUME-NLP-CLASSIFICATION" }
    ]
  },
  {
    slug: "library-management",
    title: "Smart Library Management System",
    summary:
      "C++ system for intelligent library management with book catalog and circulation tracking.",
    role: "Systems Developer",
    timeline: "2026",
    stack: ["C++", "Object-Oriented Design", "Data Structures"],
    architecture:
      "Object-oriented library system with book management, user tracking, and circulation logistics.",
    decisions: [
      "Used C++ OOP principles for maintainable library management system.",
      "Implemented efficient data structures for book and user catalog management."
    ],
    impact: [
      "Built comprehensive library management solution.",
      "Automated book circulation and user tracking workflows."
    ],
    lessons:
      "Object-oriented design principles create modular, maintainable systems. Strong C++ fundamentals enable building complex system applications.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/Smart-Library-Management-System--C---" }
    ]
  },
  {
    slug: "syncsphere",
    title: "SyncSphere - Multi-Branch Business Management",
    summary:
      "JavaScript-based business management system for coordinating operations across multiple branches.",
    role: "Full Stack Developer",
    timeline: "2026",
    stack: ["JavaScript", "Web Development", "Business Logic"],
    architecture:
      "Web-based application for multi-branch business coordination and centralized management.",
    decisions: [
      "Designed for scalable multi-branch operations.",
      "Implemented real-time synchronization across branch locations."
    ],
    impact: [
      "Enabled seamless coordination across multiple business branches.",
      "Improved operational efficiency through centralized management."
    ],
    lessons:
      "Business applications require strong coordination logic. Real-time synchronization and multi-user support are essential for distributed systems.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/SyncSphere-multi-branch-business-management-system" }
    ]
  },
  {
    slug: "techfix-solution",
    title: "TechFix Solution",
    summary:
      "C# application for technical support and IT service management.",
    role: "Backend Developer",
    timeline: "2026",
    stack: ["C#", ".NET", "Software Systems"],
    architecture:
      "C# .NET application for IT service management and technical support workflows.",
    decisions: [
      "Leveraged .NET for enterprise-grade IT solutions.",
      "Built robust service management workflows."
    ],
    impact: [
      "Created comprehensive IT support management system.",
      "Automated technical support workflows and ticket tracking."
    ],
    lessons:
      "C# and .NET provide powerful tools for enterprise applications. Strong typing and OOP principles catch errors early in development.",
    links: [
      { label: "GitHub", href: "https://github.com/dinolsiri/TechFixSolution" }
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "Angular", "Blazor", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Responsive UI", "Frontend Performance Optimization"]
  },
  {
    title: "Backend Development",
    items: ["Java", "Java EE", "Python", "Flask", "FastAPI", "NestJS", "C#", ".NET Core", "PHP", "REST API Development"]
  },
  {
    title: "Machine Learning & AI",
    items: ["Machine Learning (ML)", "Scikit-learn", "TensorFlow", "Streamlit", "Google Colab", "Neural Networks", "Data Analysis", "Feature Engineering", "Model Optimization"]
  },
  {
    title: "Databases",
    items: ["SQL", "SQL Server", "SQLite", "MongoDB", "PostgreSQL", "Database Design", "Query Optimization", "Stored Procedures"]
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Containerization", "Web Hosting", "Google Cloud Platform (GCP)", "Git", "GitHub Workflows", "CI/CD Pipelines", "Version Control"]
  },
  {
    title: "Testing & Tools",
    items: ["Jest", "React Testing Library", "Cypress", "Postman", "APIDOG", "JUnit", "Test-Driven Development", "VS Code", "Visual Studio"]
  }
];

export const certifications: Certification[] = [
  { title: "BSc Software Engineering", issuer: "Cardiff Metropolitan University", year: "2026" },
  { title: "HD Computer Software Engineering (Merit)", issuer: "Cardiff Metropolitan University", year: "2024" },
  { title: "Foundation Program in Higher Education (Distinction)", issuer: "OTHM Qualification, UK", year: "2023" }
];

export const education = {
  degree: "BSc Software Engineering",
  school: "Cardiff Metropolitan University, UK | ICBT Campus, Colombo",
  period: "2022 - 2026"
};

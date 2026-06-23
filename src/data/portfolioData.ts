export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string; // Used for Institution / Company
  role: string;    // Used for Degree / Role
  duration: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    phone: string;
    subtitle: string;
    description: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl?: string;
    socials: SocialLinks;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[]; // Will serve as Education & Timeline
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amit Bhorale",
    role: "Computer Science Graduate",
    phone: "+91 70195562010",
    subtitle: "Developing innovative solutions with strong programming and collaborative skills.",
    description: "Motivated Computer Science Graduate with a passion for developing innovative solutions. Eager to apply strong programming skills and a collaborative mindset in a dynamic role that challenges my abilities and fosters growth.",
    bio: "I am a Computer Science Graduate with a solid foundation in programming, core concepts like Data Structures, Algorithms, and Object-Oriented Programming, and a growing interest in Machine Learning. I enjoy turning complex problems into elegant software solutions, as shown in my projects ranging from voice-guided applications to algorithmic solvers.",
    location: "Bangalore, India",
    email: "amitbhorale123@gmail.com",
    socials: {
      github: "https://github.com", // Placeholder, can be updated by user
      linkedin: "https://www.linkedin.com/in/amit-bhorale-16a674331",
      email: "mailto:amitbhorale123@gmail.com"
    }
  },
  skills: [
    {
      title: "Programming",
      skills: ["Java", "SQL", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Machine Learning (ML)", "Backtracking Algorithms"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Attention to Detail", "Professionalism", "Time Management", "Leadership", "Teamwork", "Creativity"]
    }
  ],
  experience: [
    {
      id: "edu-1",
      company: "Nagarjuna College of Engineering and Technology",
      role: "Bachelor of Computer Science",
      duration: "Expected 2026",
      description: "Devanahalli, India",
      highlights: [
        "CGPA: 7.64",
        "Deepening knowledge in advanced algorithms, database management, and computer science systems."
      ]
    },
    {
      id: "edu-2",
      company: "Channabasaveshwara Gurukul PU College",
      role: "PCMB (Pre-University Education)",
      duration: "2022",
      description: "Kardyal, India",
      highlights: [
        "Percentage: 83.4%",
        "Focused study in Physics, Chemistry, Mathematics, and Biology with a strong analytical focus."
      ]
    },
    {
      id: "edu-3",
      company: "Sri Satya Sai Public School",
      role: "SSLC (Secondary School Leaving Certificate)",
      duration: "2020",
      description: "Bhalki, India",
      highlights: [
        "Percentage: 93.92%",
        "Completed general secondary education with distinction."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Sudoku Solver",
      description: "A fully automated Sudoku Solver that solves any valid 9x9 grid. Implemented constraint propagation, recursion, and pruning techniques to minimize execution search paths and speed up calculations.",
      tags: ["Java", "Backtracking Algorithm", "Recursion", "Constraint Propagation"],
      demoLink: "#",
      githubLink: "https://github.com"
    },
    {
      id: "proj-2",
      title: "Snap2Recipe Generator (Voice Guided)",
      description: "An Image-to-Recipe Generator utilizing CNN / Transfer Learning models (ResNet/VGG/Inception) to identify food items from images and generate structured recipes. Features a hands-free, real-time voice navigation system parsing commands like 'next step' or 'repeat step'.",
      tags: ["Python", "CNN", "Transfer Learning", "VGG", "ResNet", "Voice Navigation"],
      demoLink: "#",
      githubLink: "https://github.com"
    },
    {
      id: "proj-3",
      title: "Grocery Management System",
      description: "A web application that manages grocery cataloging and billing. Tracks inventory levels with alert warnings for low or out-of-stock items, generates invoices in real-time, and automates supplier restocking logs.",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage", "DOM Manipulation"],
      demoLink: "#",
      githubLink: "https://github.com"
    }
  ]
};

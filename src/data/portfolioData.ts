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
  company: string;
  role: string;
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
    subtitle: string;
    description: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl?: string;
    socials: SocialLinks;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Alex Morgan",
    role: "Senior Software Engineer",
    subtitle: "Building resilient distributed systems and beautiful user interfaces.",
    description: "I specialize in React, TypeScript, Node.js, and Cloud Infrastructure, helping companies build scalable, high-performance web applications.",
    bio: "I am a software engineer with over 6 years of experience designing and implementing complex systems. Passionate about software craftsmanship, clean code, and developer experience, I combine front-end attention to detail with robust backend architecture to deliver end-to-end digital solutions.",
    location: "San Francisco, CA (Open to Remote)",
    email: "alex.morgan@example.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex.morgan@example.com"
    }
  },
  skills: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL", "HTML5/CSS3"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Redux Toolkit", "Vue.js", "Websockets", "CSS Modules"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "Cloud & Devops",
      skills: ["AWS (S3, EC2, Lambda)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Vercel", "Terraform"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "TechCorp Solutions",
      role: "Senior Software Engineer",
      duration: "2024 - Present",
      description: "Leading a cross-functional team of 6 engineers to redesign and implement a high-traffic SaaS e-commerce dashboard, improving modularity and rendering speeds.",
      highlights: [
        "Migrated legacy monolithic frontend to React/Next.js with custom server-side rendering, reducing page load times by 40% (LCP from 3.2s to 1.4s).",
        "Designed and built a real-time analytics system utilizing WebSockets and Redis, capable of processing 10k+ events per second.",
        "Introduced automated CI/CD pipeline improvements that decreased deployment times by 25% and established a 90%+ test coverage standard."
      ]
    },
    {
      id: "exp-2",
      company: "Innovate Labs",
      role: "Software Engineer II",
      duration: "2021 - 2024",
      description: "Developed and maintained highly responsive microservices and responsive web applications for enterprise clients in fintech.",
      highlights: [
        "Led the implementation of a secure payment gateway integration using Node.js and PostgreSQL, processing over $2M in transactions monthly.",
        "Collaborated closely with design team to create a reusable component library, cutting frontend development cycles by 30%.",
        "Optimized database queries and added Redis caching layer, resulting in a 50% decrease in API response latency."
      ]
    },
    {
      id: "exp-3",
      company: "Launchpad Startups",
      role: "Full Stack Developer",
      duration: "2020 - 2021",
      description: "Built and launched MVPs for early-stage startups using React, Express, and MongoDB.",
      highlights: [
        "Built responsive, mobile-first web applications from scratch, deploying them on AWS and Vercel.",
        "Set up serverless endpoints for file uploads, mail triggers, and user authentication using JWT.",
        "Participated in agile sprints, daily standups, and regular client demo presentations."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Hyperion Analytics",
      description: "A comprehensive real-time web traffic analytics platform. Features a clean, interactive dashboard visualizing active visitors, bounce rates, geolocations, and customizable event funnels.",
      tags: ["React", "TypeScript", "Node.js", "Redis", "Chart.js"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      image: "analytics"
    },
    {
      id: "proj-2",
      title: "PayGuard Dashboard",
      description: "A secure, enterprise-grade merchant billing interface. Integrates multi-currency support, transaction filtering, automated recurring billing schedules, and fraud-detection alert indicators.",
      tags: ["React", "NestJS", "PostgreSQL", "TailwindCSS", "Stripe"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      image: "billing"
    },
    {
      id: "proj-3",
      title: "Apex Task Orchestrator",
      description: "A collaborative Kanban project management board with drag-and-drop mechanics, nested subtasks, activity log tracking, slack notifications, and role-based access control.",
      tags: ["React", "Express.js", "MongoDB", "Socket.io", "CSS Modules"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      image: "kanban"
    }
  ]
};

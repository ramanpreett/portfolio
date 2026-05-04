import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, ChevronRight, Code2, Database, LayoutTemplate } from "lucide-react";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiHtml5, SiPython, SiFigma, SiGit, SiGithub, SiWordpress, SiDotnet } from "react-icons/si";

export const PORTFOLIO_DATA = {
  name: "Ramanpreet Kaur",
  title: "Software Developer",
  tagline: "Building beautiful, scalable, and responsive web applications.",
  about: "I am a creative and technically sharp software developer who blends UI craftsmanship with solid full-stack engineering. I genuinely love building things—translating complex problems into elegant, user-centric solutions. With a strong foundation in modern web technologies, I strive to create fresh, energetic, and confident applications that leave a lasting impression.",
  contact: {
    email: "ramanpreetkaurr04@gmail.com",
    phone: "+91-9311854466",
    github: "https://github.com/ramanpreett",
    linkedin: "https://www.linkedin.com/in/ramanpreet-kaur-b9202b220",
  },
  skills: [
    {
      category: "Languages",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      items: [
        { name: "Java", icon: Code2 },
        { name: ".NET", icon: SiDotnet },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiHtml5 },
        { name: "Python", icon: SiPython },
      ]
    },
    {
      category: "Frameworks",
      icon: LayoutTemplate,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      items: [
        { name: "ReactJS", icon: SiReact },
        { name: "NodeJS", icon: SiNodedotjs },
        { name: "ExpressJS", icon: SiExpress },
      ]
    },
    {
      category: "Tools",
      icon: Database,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      items: [
        { name: "Figma", icon: SiFigma },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "WordPress", icon: SiWordpress },
      ]
    },
    {
      category: "Databases",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      items: [
        { name: "Firebase", icon: SiFirebase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ]
    }
  ],
  projects: [
    {
      title: "Freelance Client Management System",
      description: "Full-stack with Admin Dashboard, client/project/meeting/invoice management, JWT auth, deadline reminders.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
      liveLink: "#",
      githubLink: "#",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Multimodal Debugger Assistant",
      description: "LLM-driven agentic debugging tool with screenshot annotation, real-time collaborative debugging via WebSockets, secure file upload.",
      tech: ["ReactJS", "NodeJS", "PostgreSQL", "Socket.IO", "Ollama"],
      liveLink: "#",
      githubLink: "#",
      color: "from-orange-500 to-rose-500"
    }
  ],
  education: [
    {
      degree: "MCA",
      institution: "Amity University Haryana",
      period: "July 2024 – June 2026",
      status: "Current"
    },
    {
      degree: "BCA",
      institution: "Amity University Online",
      period: "July 2021 – June 2024",
      status: "Completed"
    }
  ]
};
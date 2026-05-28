import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lokita Goyal — Frontend Developer & Python Programmer",
  author: "Lokita Goyal",
  description:
    "Lokita Goyal is a BCA student and frontend developer from Noida, India. She builds web interfaces with HTML/CSS/JS and Python automations. Open to internships.",
  lang: "en",
  siteLogo: "/lokita-avatar.jpg", /* <!-- REPLACE: add your profile photo as /public/lokita-avatar.jpg --> */
  navLinks: [
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/lokita-goyal" },
    { text: "Github", href: "https://github.com/lokita-goyal" },
    { text: "Email", href: "mailto:your-email@example.com" }, /* <!-- REPLACE: your email here --> */
  ],
  socialImage: "/zen-og.png", /* <!-- REPLACE: link to a preview image of your portfolio --> */
  canonicalURL: "https://lokita-goyal.vercel.app", /* <!-- REPLACE: your deployed URL --> */
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lokita Goyal",
    specialty: "Frontend Developer & Python Programmer",
    summary:
      "BCA Student · GL Bajaj Institute · Noida, India. Building interfaces and automations that work.",
    email: "your-email@example.com", /* <!-- REPLACE: your email here --> */
  },
  experience: [
    {
      company: "GL Bajaj Institute of Technology and Management",
      position: "Bachelor of Computer Applications (BCA)",
      startDate: "Sept 2024",
      endDate: "May 2027",
      summary: [
        "Currently enrolled as a 2nd-year student. Relevant coursework includes Data Structures, Web Technologies, Database Management Systems, Python Programming, Computer Networks, and Software Engineering.",
        "Building web interfaces with HTML, CSS, and JavaScript — and writing Python scripts that solve repetitive, real-world problems. Learning React to expand frontend skills.",
        "Core skills: Python (75%) · HTML5 (85%) · CSS3 (80%) · JavaScript (65%) · Git & GitHub (70%) · MongoDB (55%). Familiar with React.js, REST APIs, DSA, openpyxl, VS Code, and Linux.",
      ],
    },
    {
      company: "Google",
      position: "AI-Powered Performance Ads Certification",
      startDate: "2024",
      endDate: "Verified ✓",
      summary:
        "Earned the AI-Powered Performance Ads Certification from Google, demonstrating knowledge of AI-driven advertising strategies and campaign optimization.",
    },
    {
      company: "Deloitte Australia",
      position: "Cyber Job Simulation",
      startDate: "2024",
      endDate: "Verified ✓",
      summary:
        "Completed the Cyber Job Simulation by Deloitte Australia, gaining hands-on experience with cybersecurity workflows, threat analysis, and incident response procedures.",
    },
    {
      company: "MongoDB University",
      position: "MongoDB Basics for Students",
      startDate: "2024",
      endDate: "Verified ✓",
      summary:
        "Completed MongoDB Basics for Students from MongoDB University, covering document databases, CRUD operations, and data modeling fundamentals.",
    },
  ],
  projects: [
    {
      name: "Task Manager Web App",
      summary:
        "Built a full-page task management interface from scratch using HTML, CSS, and JavaScript. Restructured DOM rendering logic which cut page load time from ~4s to under 2.5s (↓ 37.5%). Tasks persist across sessions using local storage — no backend required.",
      linkPreview: "/", /* <!-- REPLACE: your deployed link or remove if not deployed --> */
      linkSource: "https://github.com/lokita-goyal", /* <!-- REPLACE: your GitHub repo link for Task Manager --> */
      image: "/project-task-manager.png", /* <!-- REPLACE: screenshot of Task Manager project as /public/project-task-manager.png --> */
    },
    {
      name: "Data Entry Automator",
      summary:
        "Python script that reads a structured Excel spreadsheet using openpyxl and auto-fills a form automatically. Reduced a 40-minute manual data-entry process to under 3 minutes per run (↓ 92% time saved). Shared on GitHub and adopted by 2 classmates.",
      linkSource: "https://github.com/lokita-goyal", /* <!-- REPLACE: your GitHub repo link for Data Entry Automator --> */
      image: "/project-data-automator.png", /* <!-- REPLACE: screenshot or code preview as /public/project-data-automator.png --> */
    },
    {
      name: "Personal Portfolio Website",
      summary:
        "Designed and coded this portfolio from scratch — fully responsive, deployed on Vercel. Zero external dependencies. Built to load fast and present work clearly to recruiters and collaborators.",
      linkPreview: "/", /* <!-- REPLACE: your Vercel/Netlify link --> */
      linkSource: "https://github.com/lokita-goyal", /* <!-- REPLACE: your GitHub repo link for Portfolio --> */
      image: "/project-portfolio.png", /* <!-- REPLACE: screenshot of portfolio as /public/project-portfolio.png --> */
    },
  ],
  about: {
    description: `
      I'm Lokita Goyal, a second-year BCA student at GL Bajaj Institute of Technology and Management, Greater Noida. I build web interfaces using HTML, CSS, and JavaScript — and write Python scripts that solve repetitive, real-world problems.

      I learn best by building. Every project I take on teaches me something I couldn't get from a tutorial. I'm currently strengthening my Python skills with Data Structures and Algorithms, and learning React to expand my frontend stack.

      I'm actively looking for internship opportunities — remote or Noida-based — where I can contribute from day one, take feedback well, and grow fast.
    `,
    image: "/lokita-photo.jpg", /* <!-- REPLACE: your photo as /public/lokita-photo.jpg --> */
  },
};

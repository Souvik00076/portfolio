import { User, Code, Briefcase, FileText } from "lucide-react";
export const sections = {
  about: {
    title: "About Me",
    icon: <User />,
    content: `Hi! I'm a software engineer passionate about engineering.
           \n I specialize in architecting elegant solutions to complex technical challenges, with expertise in building scalable systems that solve real-world problems. `,
  },
  skills: {
    title: "Skills",
    icon: <Code />,
    content: [
      "Languages: JavaScript, TypeScript, Java, HTML, CSS.",
      "Frontend: React, Next.js, Tailwind CSS.",
      "Backend: Node.js, Express, Bun, WebSocket, Stripe, WebRTC, SSE.",
      "Database & Message Queue: SQL, MongoDB, Firebase, RabbitMQ.",
      "Tools: Docker, Git, Github.",
      "Cloud: Digital Ocean, AWS S3, AWS SES.",
      "AI/ML: LangChain.js.",
    ],
  },
  experience: {
    title: "Experience",
    icon: <Briefcase />,
    content: [
      {
        priority: 1,
        role: "Full Stack Engineer",
        company: "Plutonapps",
        period: "2024 - Present",
        details:
          "Architected and engineered microservices-based solutions across multi-tenant SaaS platform, email client management system, and startup investor platform.",
        problems: [
          "Designed and developed a complete microservice for Scupe, a cutting-edge email management client that intelligently analyzes and categorizes emails for better organization and insights by  splitting the monolith, reducing the API server's burden by 40% and improving system scalability and performance.",
          "Designed and developed a complete microservice for Scupe, a cutting-edge email management client that intelligently analyzes and categorizes emails for better organization and insights.",
          "Engineered a dynamic webpage parser that enable users to create and customize product launch pages within the application.",
          "Sigle-handedly developed the frontend admin application of pitch40.",
        ],
        technologies: [
          "Microservices",
          "Digital Ocean",
          "React",
          "Next",
          "Node",
          "Stripe",
          "Express",
          "Firebase",
          "RabbitMQ",
        ],
      },
      {
        priority: 2,
        role: "Full Stack Engineer Intern",
        company: "Plutonapps",
        period: "March, 2024 - September, 2024",
        details:
          "Designed and built high-performance systems, including a real-time auction platform, a secure wallet, and an in-app chat interface, optimizing speed, accuracy, and transaction efficiency.",
        problems: [
          "Architected a high performance database and robust api for a realtime auction platform achieveing a 25% reduction in query response times and increasing bid accuracy by 19%.",
          "Developed a secure wallet system for efficient transaction management.",
          "Developed the in-app chat interface for compareling.",
        ],
        technologies: [
          "React",
          "Node",
          "Express",
          "Stripe",
          "Websocket",
          "MongoDB",
        ],
      },
      {
        priority: 3,
        role: "Educator Associate",
        company: "Geekster",
        period: "February, 2024 - March, 2024 remote",
        details: "Worked as a frontend Educator.",
        problems: [
          "Mentored aspiring developers in frontend development.",
          "Simplified complex concepts like state management, component life cycle and performance optimization.",
          "Developed hands-on projects to give students practical experience in building real world application.",
        ],
        technologies: ["React", "Context API", "Javascript"],
      },
      {
        priority: 4,
        role: "Android Development Educator",
        company: "Euphoria Genx",
        period: "June, 2023 - July, 2023",
        details: "Worked as android development educator.",
        problems: [
          "Conducted project-based learning sessions to teach Java/Kotlin for Android development, ensuring practical, real-world application of concepts.",
          "Guided students through hands-on major projects, helping them build fully functional Android apps from scratch.",
        ],
        technologies: [
          "Android Studio",
          "Kotlin",
          "Java",
          "Firebase",
          "SQL",
          "XML",
          "Google Material Design",
        ],
      },
      {
        priority: 5,
        role: "Android Development Intern",
        company: "Indian Institute Of Technology, Kharagpur",
        period: "March, 2023 - May, 2023 remote",
        details:
          "Developed an android application that seamlessly translitrates between one braile language to another with utmost precision and convenience.",
        problems: [
          "Wrote an effective algorithm to effectively translitrate from one language to another.",
          "Implemented the UI so that it helps visually impaired users by supporting screen readers, high contrast modes, and intuitive navigation, while enabling both voice and text generation using Google Text-to-Speech.",
        ],
        technologies: [
          "Java Concurrency",
          "Speech Recognition",
          "Data Structures",
          "XML",
          "Android Development",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    icon: <FileText />,
    content: [
      {
        name: "BotX",
        description:
          "A full stack application that can generate artifacts like claude using known(free) AI model providers.",
        problems: [
          "Used langchain js to mimic the process of how claude generate artifacts.",
          "Achieved 78% accuracy in artifacts generation with known cloud model providers like groq,google, open AI.",
          "Used effective design pattern to generate chains that can be debugged at any phase of chain life cycle.",
          "Reduced input token consumption by effectively using langbranch.",
          "Implemented stream api using SSE.",
        ],
        notice:
          "This project's backend is almost completed with basic feature. Frontend is still remaining. ",
        techStack: [
          "Bun",
          "Express",
          "Langchain JS",
          "Design Pattern",
          "Server Sent Events",
          "Next JS",
          "Generative AI",
        ],
        priority: 1,
      },
      {
        name: "Code Query",
        description:
          "An AI powered webapp that generates code based on user prompt",
        problems: [
          "Used highlight.js and codemirror5 to effectively detect the correct language and code editor.",
          "Used google's gemini multimodal api to generate code based user prompt.",
          "Implemented custom hooks for network operation and tailwind css for pixel perfect responsive UI ",
        ],
        priority: 4,
        techStack: ["React", "Tailwind CSS", "Gemini"],
        link: "https://github.com/Souvik00076/Code-Query",
      },
      {
        name: "Real Code Nexus",
        description:
          "A a real time code editor where users can share and update code in realtime.",
        problems: [
          "Used Socket IO for real time communication",
          "Implemented multi room feature.",
          "Implemented automatic code detection feature using highlight js.",
          "Used React & Tailwind CSS for pixel perfect reesponsive UI.",
        ],
        priority: 3,
        techStack: ["Node", "Express", "Socket IO", "React", "Tailwind CSS"],
        link: "https://github.com/Souvik00076/RealCode-Nexus",
        live: "https://real-code-nexus.onrender.com/",
      },
      {
        name: "PizzifyHub",
        description: "A pizza delivery web app with real time tracking.",
        problems: [
          "Implemented session management using express and passport js",
          "For real-time update used socketIO.",
          "Prioritized clean code, reusable modules and a proper directory structure for maintainability.",
          "Used React & Tailwind CSS for pixel perfect reesponsive UI.",
        ],
        priority: 2,
        techStack: [
          "Node",
          "Express",
          "Socket IO",
          "EJS",
          "MongoDB",
          "Express Session",
          "REST API",
        ],
        link: "https://github.com/Souvik00076/PizzifyHub",
      },
    ],
  },
};

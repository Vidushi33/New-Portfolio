interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  image?: string;
  features?: string[];
  category: "onsite" | "frontend" | "backend" | "inprogress";
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Khan Global Studies – Store",
    description:
      "Solely engineered a production-grade e-commerce platform, slashing initial load times by 40% through Next.js performance optimizations. Developed a secure communication layer using custom Axios interceptors and Auth Middleware to mitigate unauthorized API requests. Designed a resilient checkout flow with Zustand-based persistence, ensuring state integrity and a seamless user experience across high-traffic shopping sessions.",
    tools: [
      "Next.js",
      "Zustand",
      "TypeScript",
      "Tailwind CSS",
      "SSR",
      "SEO Optimization",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://store.khanglobalstudies.com/",
    category: "frontend",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Pirafy",
    description:
      "Engineered a high-fidelity, production-ready platform and boosted conversions through optimized lead-capture workflows and seamless UI transitions.",
    tools: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "AOS(Animate on Scroll)",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://pirafy.com/",
    category: "frontend",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Catafy",
    description:
      "Engineered a pixel-perfect, fully responsive UI replication of the Catafy platform, achieving 100% design fidelity across all breakpoints while optimizing asset delivery for a seamless, high-performance user experience.",
    tools: ["NestJS", "TypeScript", "Tailwind CSS", "React Hook Form", "AOS"],
    role: "Frontend Developer",
    code: "",
    demo: "",
    category: "frontend",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Campaign Management & Bot Platform",
    description:
      "Built a campaign management platform with bot creation and automated conversation workflows. Implemented Redis-based caching and BullMQ queues for scalable background processing and reliable automation.",
    tools: [
      "ReactJS",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Ant Design",
      "Reactflow",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "",
    category: "onsite",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Multi-Tenant Platform",
    description:
      "Currently architecting a high-scale boilerplate for multi-tenant applications, focusing on enterprise-grade security and developer experience. This 'Work-in-Progress' project serves as a laboratory for implementing complex frontend patterns that go beyond standard CRUD apps.",
    tools: ["NestJS", "TypeScript", "MongoDB", "NextJs", "Zustand"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    category: "inprogress",
  },
  {
    id: 6,
    name: "Book Company Backend",
    description:
      "This is a CRUD Backend project. In this project we can read, add, update and delete any book as per the requirement.",
    tools: ["NodeJs", "ExpressJs", "MongoDB"],
    role: "Backend Developer",
    code: "https://github.com/Vidushi33/Book-Company-Backend",
    demo: "",
    category: "backend",
  },
];

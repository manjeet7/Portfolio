import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Pristyn Care",
    icon: "data:image/png;base64,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",
    iconBg: "#383E56",
    date: "March 2021 - November 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mean/Mern Stack Developer",
    company_name: "Trigyn Technology",
    icon: "data:image/png;base64,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",
    iconBg: "#E6DEDD",
    date: "November 2021 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

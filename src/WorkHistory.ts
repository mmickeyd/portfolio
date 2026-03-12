interface job {
  date: string;
  title: string;
  company: string;
  description: string;
  tech: string[];
}

export const WORKHISTORY: job[] = [
  {
    date: "2024 - TBD",
    title: "Freelance Software Developer",
    company: "DataAnnotation/Contract",
    description:
      "At DataAnnotation, I help build easy-to-use tools that make it faster and simpler for teams to label data used in training artificial intelligence. Since DataAnnotation is freelance work, I also take on side projects. I've designed and built responsive web and mobile applications for a few clients, including photography portfolios, content-sharing platforms, and data dashboards. My work focused on creating visually polished, accessible user interfaces with reusable components and consistent design systems. I developed interactive data visualizations to present complex information in a clear, engaging way, and prioritized mobile responsiveness and cross-browser compatibility to ensure a seamless experience across all devices.",

    tech: [
      "React.js",
      "TypeScript",
      "Redux",
      "NodeJS",
      "MaterialUI",
      "Machine Learning",
      "Chart.js",
    ],
  },
  {
    date: "2022 - 2023",
    title: "Software Engineer, Reporting",
    company: "OpenGov",
    description:
      "On the report team at OpenGov, I assisted with constructing modern government-facing cloud software on the reporting team, using React.js and TypeScript, focusing on high-performance, accessible UI components within a large-scale single-page application. I led development on a major reporting feature, adding the ability to calculate rows and columns, collaborating closely with design, QA, and backend teams. I architected and maintained reusable components for our internal UI library, modernized data visualizations with more interactive and performant tools, and ensured visual and functional consistency by adhering to the OpenGov design system. I paid particular attention to cross-browser performance and accessibility to ensure a smooth user experience for all users. I paid particular attention to cross-browser performance and accessibility to ensure a smooth user experience for all users.",

    tech: [
      "React.js",
      "TypeScript",
      "Redux",
      "NodeJS",
      "GraphQL",
      "SCSS",
      "HTML5",
    ],
  },
  {
    date: "2021 - 2022",
    title: "Frontend Software Engineer, Custom Apps",
    company: "Domo Inc.",
    description:
      "As part of the custom apps team, I helped build internal tools and applications that digitized key business processes and enabled better data analysis for clients. I co-led the architecture and development of a full-stack application for a national auto parts chain with over 1,000 U.S. locations, contributing across planning, frontend development, and backend integration. I developed and maintained modular UI components to support scalable forecasting tools, built interactive dashboards for executive use across international retail locations, and delivered custom features like a PDF generator for monthly reporting. Throughout, I partnered with backend and QA teams to ensure smooth integration, good performance and accessibility for all users.",

    tech: [
      "React.js",
      "React Native",
      "TypeScript",
      "Redux",
      "Material UI",
      "Styled Components",
      "CSS3",
    ],
  },
  {
    date: "2020 - 2021",
    title: "Full-Stack Software Engineer",
    company: "Hack Reactor",
    description:
      "I completed Hack Reactor’s immersive full-stack software engineering program in 2020, where I spent many weeks building a strong foundation in modern web technologies through intensive, hands-on tutorials. In the second half of the program, I worked on two team-based projects: first, developing a fully functional frontend clone of rental hosting website as part of a four-person team, focusing on component-based architecture and responsive UI. In the second project, I collaborated with another team to optimize the backend performance of an existing codebase, improving response times and scalability through database and server-side enhancements like load balancing, caching, and other optimization techniques.",

    tech: [
      "JavaScript",
      "React.js",
      "RESTful API",
      "NGINX",
      "jQuery",
      "Express.js",
      "HTML/CSS",
    ],
  },
];

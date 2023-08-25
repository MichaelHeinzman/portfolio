const projects = [
  {
    title: "ThreeJS OpenAI Shirt Modeling Site",
    image: "/assets/images/ThreeJS.jpg",
    github: "https://github.com/MichaelHeinzman/project_threejs_ai",
    description:
      "Developed a cutting-edge web application using Vite and ReactJS, seamlessly integrated with Three.js for stunning 3D visuals. Leveraged OpenAI to add intelligent and interactive features, while ensuring smooth functionality through a Node.js backend. The sleek design was achieved with Tailwind CSS. The application is proudly hosted on an AWS S3 Bucket for optimal performance and accessibility.",
    link: "https://ai-shirt-threejs.michaelheinzman.com",
    type: "react",
    level: 5,
  },
  {
    image: "",
    github: "https://github.com/MichaelHeinzman/FT-Capstone-Project",
    title: "FT Capstone Project",
    description: `Designed and developed a React Native application for calendar and time management. Applied best
          practices in software engineering, including a comprehensive report documenting the project's requirements,
          design, and testing. Demonstrated strong skills in project management and learning new technologies.`,
    pdf: "/assets/pdfs/FT Capstone Project (Final Draft).pdf",
    type: "react native",
    level: 5,
  },
  {
    image: "",
    github: "https://github.com/MichaelHeinzman/Automatic-NPG-Interface",
    title: "Automatic Network Packet Generator",
    description: `Automatic Network Packet Generator made with Python, a tool to generate and send different types of network packets. This
          tool is useful for network administrators, penetration testers and security professionals who want to generate
          and send packets for testing purposes. This project contains a user interface that allows the user to configure
          and generate different types of network packets.`,
    pdf: "/assets/pdfs/Automatic_Network_Generator_Interface_Report.pdf",
    type: "other",
    level: 5,
  },
  {
    image: "/assets/images/ChatApp.jpg",
    link: "https://chat-app.michaelheinzman.com",
    github: "https://github.com/MichaelHeinzman/messaging",
    title: "Chat App",
    type: "react",
    level: 3,
    description:
      "Built a complex chat application combining Firebase Authentication, Firestore, AWS App Runner, Next.js, and Tailwind to create a stylish responsive chat experience.",
  },
  {
    image: "",
    github:
      "https://github.com/MichaelHeinzman/Software-Architecture-and-Design",
    title: "Student Support App (Pseudocode with Java)",
    description: `In collaboration with my team, we leveraged software engineering methodologies to model and document the system's 
          architecture and functionality. This included developing fully dressed use cases, domain diagrams, system sequence diagrams, 
          sequence diagrams, and class diagrams. These artifacts showcased our ability to analyze and represent complex systems effectively.

          To lay the foundation for implementation, we utilized our Java programming skills to create pseudocode for the application. 
          This demonstrated our proficiency in Java development, as well as our understanding of fundamental programming concepts and algorithms.`,
    pdf: "/assets/pdfs/Arch_And_Design_Final_Report_Team2.pdf",
    type: "other",
    level: 3,
  },
  {
    image: "/assets/images/NetflixClone.jpg",
    link: "https://netflix-clone.michaelheinzman.com",
    github: "https://github.com/MichaelHeinzman/netflix-clone",
    title: "Netflix Clone",
    type: "react",
    level: 5,
    description:
      "React web application that was developed using Next.js and Tailwind. Mimics Netflix design to gain a better understanding of how Next.js and Tailwind work.",
  },

  {
    image: "/assets/images/ReactAdmin.jpg",
    link: "https://react-admin-smoky.vercel.app/",
    github: "https://github.com/MichaelHeinzman/react-admin",
    title: "React Admin",
    level: 2,
    description: `Created an administration site with JavaScript and Material UI, implementing advanced techniques for a
          Material UI theme with both light and dark modes.`,
    type: "react",
  },
  {
    image: "/assets/images/Pokedex.jpg",
    link: "https://pokedex-mauve-eight.vercel.app/",
    github: "https://github.com/MichaelHeinzman/pokedex",
    title: "Pokedex",
    level: 1,
    description: `Built a simple app in JavaScript and React for loading Pokemon data from the PokiAPI. Used Material UI for
          styling and React SWR for data loading.`,
    type: "react",
  },
];

const homeIntro =
  "Hi, I'm Michael Heinzman. A passionate Software Engineer based in Melbourne, Florida.";
const aboutMeText =
  "As a React Developer with a solid academic foundation, holding a Masters in Software Engineering, I bring a wealth of knowledge and expertise to the table. My proficiency extends beyond the realms of React and React Native, encompassing various programming languages and web development practices. My journey as a developer has equipped me with a diverse skill set that includes not only HTML, CSS, JavaScript, and TypeScript, but also extends to other programming languages. This holistic perspective enables me to craft dynamic and captivating interfaces while writing optimized code. My experience underscores my ability to harness cutting-edge development tools and techniques to ensure the creation of exceptional web and mobile applications. Beyond my technical prowess, I shine as a collaborative team player. Working seamlessly with cross-functional teams, I am adept at translating ideas into tangible, outstanding applications. My passion for creating impactful software solutions, coupled with my academic and practical background, positions me as a valuable asset in delivering remarkable results.";

export { projects, aboutMeText, homeIntro };

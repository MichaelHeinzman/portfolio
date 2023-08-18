import { Grid } from "@mui/material";
import React from "react";
import LayoutHelper from "../Components/LayoutHelper";
import Project from "../Components/Project";
import TextLayoutHelper from "../Components/TextLayoutHelper";

const Portfolio = () => {
  return (
    <LayoutHelper id="Portfolio" background fullView>
      <TextLayoutHelper text="Projects" className="subtitle" />
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        gap={5}
      >
        <Project
          image="/assets/images/ThreeJS.jpg"
          github="https://github.com/MichaelHeinzman/project_threejs_ai"
          title="ThreeJS OpenAI Shirt Modeling Site"
          description="Developed a cutting-edge web application using Vite and ReactJS, seamlessly integrated with Three.js for stunning 3D visuals. Leveraged OpenAI to add intelligent and interactive features, while ensuring smooth functionality through a Node.js backend. The sleek design was achieved with Tailwind CSS. The application is proudly hosted on an AWS S3 Bucket for optimal performance and accessibility."
          link="http://threejsopenaishirt.s3-website-us-east-1.amazonaws.com/"
        />
        <Project
          image=""
          github="https://github.com/MichaelHeinzman/FT-Capstone-Project"
          title="FT Capstone Project"
          description="Designed and developed a React Native application for calendar and time management. Applied best
          practices in software engineering, including a comprehensive report documenting the project's requirements,
          design, and testing. Demonstrated strong skills in project management and learning new technologies."
          pdf="/assets/pdfs/FT Capstone Project (Final Draft).pdf"
        />
        <Project
          image=""
          github="https://github.com/MichaelHeinzman/Automatic-NPG-Interface"
          title="Automatic Network Packet Generator"
          description="Automatic Network Packet Generator made with Python, a tool to generate and send different types of network packets. This
          tool is useful for network administrators, penetration testers and security professionals who want to generate
          and send packets for testing purposes. This project contains a user interface that allows the user to configure
          and generate different types of network packets."
          pdf="/assets/pdfs/Automatic_Network_Generator_Interface_Report.pdf"
        />
        <Project
          image=""
          github="https://github.com/MichaelHeinzman/Software-Architecture-and-Design"
          title="Student Support App (Pseudocode with Java)"
          description="In collaboration with my team, we leveraged software engineering methodologies to model and document the system's 
          architecture and functionality. This included developing fully dressed use cases, domain diagrams, system sequence diagrams, 
          sequence diagrams, and class diagrams. These artifacts showcased our ability to analyze and represent complex systems effectively.

          To lay the foundation for implementation, we utilized our Java programming skills to create pseudocode for the application. 
          This demonstrated our proficiency in Java development, as well as our understanding of fundamental programming concepts and algorithms."
          pdf="/assets/pdfs/Arch_And_Design_Final_Report_Team2.pdf"
        />
        <Project
          image="/assets/images/NetflixClone.jpg"
          link="https://netflix-clone-gilt-nu.vercel.app/"
          github="https://github.com/MichaelHeinzman/netflix-clone"
          title="Netflix Clone"
          description="React web application that was developed using Next.js and Tailwind. Mimics Netflix design to gain a better understanding of how Next.js and Tailwind work."
        />
        <Project
          image="/assets/images/ReactAdmin.jpg"
          link="https://gmyxrae9id.us-east-1.awsapprunner.com/"
          github="https://github.com/MichaelHeinzman/react-admin"
          title="React Admin"
          description="Created an administration site with JavaScript and Material UI, implementing advanced techniques for a
          Material UI theme with both light and dark modes."
        />
        <Project
          image="/assets/images/Pokedex.jpg"
          link="https://xgkgmayj3k.us-east-1.awsapprunner.com/"
          github="https://github.com/MichaelHeinzman/pokedex"
          title="Pokedex"
          description="Built a simple app in JavaScript and React for loading Pokemon data from the PokiAPI. Used Material UI for
          styling and React SWR for data loading."
        />
        <Project
          image="/assets/images/ChatApp.jpg"
          link="https://8urr7hhmpp.us-east-1.awsapprunner.com/"
          github="https://github.com/MichaelHeinzman/messaging"
          title="Chat App"
          description="Built a complex chat application combining Firebase Authentication, Firestore, AWS App Runner, Next.js, and Tailwind to create a stylish responsive chat experience."
        />
      </Grid>
    </LayoutHelper>
  );
};

export default Portfolio;

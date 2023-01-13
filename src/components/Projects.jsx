import { useEffect } from "react";
import db from "../store/db.json";
import Project from "./Project";
import PageStarter from "./PageStarter";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageStarter title="My recent projects.">
      {db.map((project) => (
        <Project
          key={crypto.randomUUID()}
          image={project.image}
          name={project.name}
          techStackImgs={project.techStackImgs}
          details={project.details}
          link={project.link}
          github={project.github}
        />
      ))}
    </PageStarter>
  );
};

export default Projects;

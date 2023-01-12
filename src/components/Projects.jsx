import { motion } from "framer-motion";
import { useEffect } from "react";
import db from "../store/db.json";
import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col gap-[6rem] pb-[7rem]">
        <h2 className="mt-[5rem] text-[3rem] text-center font-bold uppercase">
          My recent{" "}
          <span className="dark:text-primary tracking-wide">projects</span>
        </h2>
        {db.map((project) => (
          <Project
            key={crypto.randomUUID()}
            image={project.image}
            name={project.name}
            techStackImgs={project.techStackImgs}
            details={project.details}
            link={project.link}
          />
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;

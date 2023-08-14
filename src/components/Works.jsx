import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ProjectCard from "./ProjectCard";
import { OtherPP } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="project__desktop">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          <Link to="/others">
            <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[240px]">
                  <img
                    src={OtherPP}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">
                    Other Projects
                  </h3>
                </div>
              </Tilt>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="project__mobile">
        <div>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          <Link to="/others">
            <div>
              <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[240px]">
                  <img
                    src={OtherPP}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">
                    Other Projects
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

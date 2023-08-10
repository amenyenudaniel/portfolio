import React from "react";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";
import { otherProjects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
const Others = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div>
        <Link to="/">
          <BiArrowBack
            className="mb-[3rem] text-secondary text-[2rem] cursor-pointer hover:text-white"
            title="Go Back"
          />
        </Link>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My Work</p>
          <h2 className={`${styles.sectionHeadText}`}>Other Projects.</h2>
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
          {otherProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionWrapper(Others, "");

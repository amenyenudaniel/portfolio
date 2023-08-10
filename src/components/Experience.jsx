import React from "react";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} `}>Work Experience.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <h2 className="text-[32px]">
          Frontend Development [React JS & Next JS]
        </h2>
        <p className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Working with clients to develop the overall look and design of a
          website. Writing website code with programming languages such as HTML,
          CSS, Tailwind CSS, Javascript, React JS and Next JS. Producing,
          maintaining and modifying websites and user interfaces.
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

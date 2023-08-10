import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Cert, CertFile } from "../assets";

const Certificate = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {" "}
          Certificate In Frontend Development
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Certificate</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am proud to showcase my achievement of earning the Meta Frontend
          Developer Certificate. Through this program, I've gained mastery in
          HTML, CSS, JavaScript, and React, along with user-centered design
          principles. Ready to create immersive, responsive, and dynamic web
          experiences. Let's innovate together!
        </motion.p>
      </div>

      <img src={Cert} alt="certificate image" className="mt-[2rem]" />
      <a href={CertFile} download>
        <button type="button" className="cert__btn">
          View Certificate
        </button>
      </a>
    </div>
  );
};

export default SectionWrapper(Certificate, "");

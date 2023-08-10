import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
const Footer = () => {
  return (
    <div>
      <div className="h-[0.1px] w-full bg-secondary mt-[5rem] " />
      <div className="flex items-center justify-end gap-5 mr-[3rem] p-6">
        <a href="https://instagram.com/amenyenudaniel321" target="_blank">
          <FaInstagram className="text-[2rem] text-secondary hover:text-white" />
        </a>
        <a href="https://twitter.com/Daniel_Amenyenu" target="_blank">
          <FaTwitter className="text-[2rem] text-secondary hover:text-white" />
        </a>
        <a href="https://github.com/amenyenudaniel" target="_blank">
          <FaGithub className="text-[2rem] text-secondary hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-amenyenu-868020277/"
          target="_blank"
        >
          <FaLinkedin className="text-[2rem] text-secondary hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");

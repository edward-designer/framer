import React from "react";

import { motion, dragControls } from "framer-motion";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Skill = ({ name }) => {
  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full font-semibold bg-primary/80 text-light py-3 px-6 shadow-dark cursor-pointer`}
      style={{
        top: randomIntFromInterval(0, 80) + "%",
        left: randomIntFromInterval(0, 80) + "%",
      }}
      whileHover={{ scale: 1.5, zIndex: 10 }}
      whileTap={{ cursor: "grabbing" }}
      drag
      dragConstraints={{
        top: -400,
        right: 400,
        bottom: 400,
        left: -400,
      }}
      dragTransition={{
        bounceStiffness: 1000000,
        bounceDamping: 100000000000000,
      }}
      dragElastic={0.1}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="aspect-square w-full relative flex items-center justify-center rounded-full bg-circularLight">
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="Javascript" />
        <Skill name="ReactJS" />
        <Skill name="Redux" />
        <Skill name="Three.js" />
        <Skill name="TailwindCSS" />
        <Skill name="NextJS" />
        <Skill name="Figma" />
        <Skill name="UI/UX" />
        <Skill name="Web Design" />
      </div>
    </>
  );
};

export default Skills;

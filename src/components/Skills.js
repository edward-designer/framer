import React, { useState, useEffect } from "react";

import { motion, dragControls } from "framer-motion";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Skill = ({ name }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  useEffect(() => {
    setPosition({
      x: randomIntFromInterval(-400, 400),
      y: randomIntFromInterval(-400, 400),
      opacity: 80,
    });
  }, []);

  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full font-semibold bg-primary text-light py-3 px-6 shadow-dark cursor-pointer`}
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      whileInView={position}
      viewport={{ once: true }}
      transition={{ duration: 1, easing: "easeInOut" }}
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:my-16 lg:mt-32 lg:text-4xl">
        Skills
      </h2>
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

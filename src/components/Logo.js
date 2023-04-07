import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="dark:border-2 dark:border-solid dark:border-dark w-16 h-16 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "hsl(0 0% 11%)",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "hsl(0 0% 11%)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        EC
      </MotionLink>
    </div>
  );
};

export default Logo;

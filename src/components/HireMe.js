import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-4 lg:top-2 lg:left-auto lg:bottom-auto lg:scale-[40%] lg:origin-top-right">
      <div className="w-48 h-auto fex items-center justify-center relative group">
        <CircularText className="fill-dark animate-spin-slow group-hover:animate-spin" />
        <Link
          href="mailto:abc@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

import React from "react";
import TransitionEffect from "./TransitionEffect";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <TransitionEffect />
      <div
        className={`w-full h-full inline-block z-0 bg-light text-dark p-32  xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ children, href, target = "", className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} text-dark relative group`}
      target={target ? target : undefined}
    >
      {children}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  children,
  toggle,
  href,
  target = "",
  className = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} text-dark relative group my-2`}
      target={target ? target : undefined}
      onClick={handleClick}
    >
      {children}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const IconLink = ({ children, href, target = "", className = "" }) => {
  return (
    <motion.a
      href={href}
      className={`w-6 origin-center scale-95 ${className}`}
      target="_blank"
      whileHover={{ y: -2, scale: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full px-32 lg:px-16 py-12 font-medium flex items-center justify-between">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm my-0.5 transition-all ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-8">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/projects">Projects</CustomLink>
          <CustomLink href="/articles">Articles</CustomLink>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="w-full flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-24  z-10 rounded-lg backdrop-blur-md  bg-white/70 dark:bg-black/10"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center mb-16">
            <CustomMobileLink href="/" toggle={handleClick}>
              Home
            </CustomMobileLink>
            <CustomMobileLink href="/about" toggle={handleClick}>
              About
            </CustomMobileLink>
            <CustomMobileLink href="/projects" toggle={handleClick}>
              Projects
            </CustomMobileLink>
            <CustomMobileLink href="/articles" toggle={handleClick}>
              Articles
            </CustomMobileLink>
          </nav>
          <nav className="relative flex items-center justify-center gap-6 sm:flex-wrap sm:gap-2">
            <IconLink href="https://twitter.com">
              <TwitterIcon />
            </IconLink>
            <IconLink href="/">
              <GithubIcon className="text-dark" />
            </IconLink>
            <IconLink href="/">
              <LinkedInIcon />
            </IconLink>
            <IconLink href="/">
              <PinterestIcon />
            </IconLink>
            <IconLink href="/">
              <DribbbleIcon />
            </IconLink>
            <button
              className="flex items-center justify-center rounded-full p-1 bg-dark"
              onClick={() =>
                setMode((mode) => (mode === "light" ? "dark" : "light"))
              }
            >
              {mode === "dark" ? (
                <SunIcon className="text-light" />
              ) : (
                <MoonIcon className="text-light" />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <nav className="relative flex items-center justify-center gap-6 lg:hidden">
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="/">
          <GithubIcon className="text-dark" />
        </IconLink>
        <IconLink href="/">
          <LinkedInIcon />
        </IconLink>
        <IconLink href="/">
          <PinterestIcon />
        </IconLink>
        <IconLink href="/">
          <DribbbleIcon />
        </IconLink>
        <button
          className="flex items-center justify-center rounded-full p-1 bg-dark"
          onClick={() =>
            setMode((mode) => (mode === "light" ? "dark" : "light"))
          }
        >
          {mode === "dark" ? (
            <SunIcon className="text-light" />
          ) : (
            <MoonIcon className="text-light" />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

const CustomLink = ({ children, href, target = "", className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group`}
      target={target ? target : false}
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
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex gap-8">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/projects">Projects</CustomLink>
        <CustomLink href="/articles">Articles</CustomLink>
      </nav>

      <nav className="relative flex items-center justify-center gap-6">
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="/">
          <GithubIcon />
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
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

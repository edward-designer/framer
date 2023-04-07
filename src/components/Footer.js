import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="flex py-8 items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary text-2xl px-1">&hearts;</span> by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Edward Chung
          </Link>
        </div>
        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

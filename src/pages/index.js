import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex item-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="flex-1 w-1/2 lg:inline-block lg:w-full">
              <Image
                src={profilePic}
                alt="Edward Chung"
                className="w-full h-auto lg:w-1/2 mx-auto md:w-full"
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw
                "
                priority
              />
            </div>
            <div className="flex-1 w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:abc@gmail.com"
                  className="ml-8 text-lg font-medium capitalize text-dark underline "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 w-24 lg:hidden">
          <Image src={lightbulb} alt="Edward" className="w-full h-auto" />
        </div>
      </main>
      <Footer />
    </>
  );
}

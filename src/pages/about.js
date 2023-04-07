import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

import profilPic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Edward | About Page</title>
        <meta name="description" content="about me" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-8xl mb-16 lg:text-7xl sm:text-6xl xs:text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 sm:col-span-8 sm:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty - it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  lg:col-span-4 sm:col-span-8 sm:order-1 sm:m-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilPic}
                alt="Edward"
                className="w-full h-auto rounded-2xl"
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw
                "
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col item-end justify-between lg:col-span-8 lg:flex-row lg:items-center sm:order-3">
              <div className="flex flex-col items-end justify-center flex-1 lg:items-center  sm:scale-75">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capital text-dark text-right lg:text-center">
                  satified clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center flex-1 lg:items-center  sm:scale-75">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capital text-dark text-right lg:text-center">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center flex-1 lg:items-center  sm:scale-75">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capital text-dark text-right lg:text-center">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default about;

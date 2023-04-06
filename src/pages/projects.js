import React from "react";
import Head from "next/head";

import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
  return (
    <>
      <Head>
        <title>Edward | Project Page</title>
        <meta name="description" content="projects" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="" />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default projects;

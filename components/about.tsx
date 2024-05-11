"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[65rem] mx-4 left leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <p>
        I'm currently a senior software engineer at <span className="font-medium">Amazon</span> with 5+ years of experience. I'm
        well-versed in full-stack development with a focus on <span className="font-medium">AWS, Spring, and ReactJS</span>.
        I've had the privilege of contributing to impactful projects within Amazon's Physical Stores and Amazon Prime teams,
        tackling a range of frontend and backend challenges with precision and creativity.
        </p>
        <br/>
        <p>
        My journey began at the esteemed {" "}<span className="font-medium">Indian Institute Of Technology (BHU), Varanasi</span>, where I graduated in
        2019. I kicked off my career as a full-stack developer at <span className="italic">GetActive</span>, a startup that allowed me to dive into web and mobile app development headfirst.
        </p>

        <p>
        <span className="italic">What truly drives me is solving complex business problems,
          and my diverse experience across multiple technologies enables me to do so efficiently and effectively.</span>
        </p>
        <br/>
        <p>
        <span className="font-medium">Here's a snapshot of my expertise:</span>
        <br/>
          <span className="font-medium">Programming Languages:</span> Java, Python, Typescript, JavaScript, Kotlin, C, C#<br/>
          <span className="font-medium">Development Technologies:</span> Spring, AWS, ReactJS, Firebase, NextJS,
          Native Android Development, Flutter, JMeter.<br/>
          <span className="font-medium">Development Technologies:</span> Data Technologies: OpenCV, SciKitLearn, Tensorflow, Keras,
          Numpy, Pandas, SQL.<br/>
        </p>
      </p>

      <p>
        <span className="italic">Beyond coding, I have a passion for staying active and engaged with life.</span>{" "}
        You'll often find me on the tennis or badminton court, unwinding with a good movie, or reading a captivating book.
        If you're curious about my latest reads, you can find them <a target="_new" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
           href="https://www.goodreads.com/review/list/67231946-akhand-mishra?ref=nav_mybooks&shelf=read">here</a>.
      </p>
    </motion.section>
  );
}

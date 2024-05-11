"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {DotLottiePlayer} from "@dotlottie/react-player";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <DotLottiePlayer
        className="w-1/2 h-1/2 mx-auto max-w-[25rem] mb-4"
        src="/Software Engineer.lottie"
        autoplay
        loop
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 align-middle justify-items-center">
        {projectsData.map((project, index) => (
            <Project {...project} />
        ))}
      </div>
    </section>
  );
}

"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen b h-screen bg-center bg-cover relative ">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover -z-10 "
        style={{ backgroundImage: "url(/mountains.jpg)" }}
      />

      {/* Scrollable Content */}
      <div className="pt-20 md:pt-0">
      <div className="overflow-y-auto h-screen flex justify-center items-center md:pt-0 pt-72">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:my-0 my-72">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Page;

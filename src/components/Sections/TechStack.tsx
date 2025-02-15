"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCcStripe,
  FaTrello,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiCloudinary, SiAxios, SiReactquery, SiExpress } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechStack = () => {
  return (
    <TooltipProvider>
      <section id="TechStack" className="pt-20 ">
        <h1 className="text-center text-4xl text-white mb-4">Tech Stack</h1>
        <div className="h-0.5 border-b border-[#292524] my-5"></div>

        {/* >Programming Language */}
        <div className="mb-6">
          <h2 className="text-xl text-white font-semibold mb-3">Programming Language</h2>
          <div className="flex flex-wrap gap-6 text-4xl">
            {[
              {
                icon: <SiJavascript className="text-yellow-500" />,
                label: "JavaScript",
              },
              {
                icon: <SiTypescript className="text-blue-500" />,
                label: "TypeScript",
              },
            ].map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger className="cursor-pointer">
                  {tech.icon}
                </TooltipTrigger>
                <TooltipContent>{tech.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-6">
          <h2 className="text-xl text-white font-semibold mb-3">Frontend</h2>
          <div className="flex flex-wrap gap-6 text-4xl">
            {[
              {
                icon: <FaReact className="text-blue-400" />,
                label: "React.js",
              },
              {
                icon: <SiNextdotjs className="text-white" />,
                label: "Next.js",
              },
              {
                icon: <TbBrandRedux className="text-blue-600" />,
                label: "Redux",
              },
              { icon: <SiAxios className="text-white" />, label: "Axios" },
              {
                icon: <SiReactquery className="text-orange-300" />,
                label: "TanStack Query",
              },
              {
                icon: <SiTailwindcss className="text-teal-400" />,
                label: "Tailwind CSS",
              },
              {
                icon: <SiShadcnui className="text-teal-400" />,
                label: "Shadcn Ui",
              },
              { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
              { icon: <SiCss3 className="text-blue-600" />, label: "CSS3" },
            ].map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger className="cursor-pointer">
                  {tech.icon}
                </TooltipTrigger>
                <TooltipContent>{tech.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h2 className="text-xl text-white font-semibold mb-3">Backend</h2>
          <div className="flex flex-wrap gap-6 text-4xl">
            {[
              {
                icon: <FaNodeJs className="text-green-500" />,
                label: "Node.js",
              },
              {
                icon: <SiExpress className="text-white" />,
                label: "Express.js",
              },
              {
                icon: <IoLogoFirebase className="text-orange-500" />,
                label: "Firebase",
              },
              {
                icon: <SiJsonwebtokens className="text-yellow-500" />,
                label: "JWT",
              },
              {
                icon: <SiMongodb className="text-green-500" />,
                label: "MongoDB",
              },
              {
                icon: <SiCloudinary className="text-indigo-500" />,
                label: "Cloudinary",
              },
              {
                icon: <SiPostman className="text-orange-600" />,
                label: "Postman",
              },
              {
                icon: <FaCcStripe className="text-indigo-500" />,
                label: "Stripe",
              },
            ].map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger className="cursor-pointer">
                  {tech.icon}
                </TooltipTrigger>
                <TooltipContent>{tech.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Developer & Design Tools */}
        <div className="mb-6">
          <h2 className="text-xl text-white font-semibold mb-3">
            Developer & Design Tools
          </h2>
          <div className="flex flex-wrap gap-6 text-4xl">
            {[
              {
                icon: <VscVscode className="text-blue-400" />,
                label: "VS Code",
              },
              {
                icon: <IoLogoVercel className="text-white" />,
                label: "VS Code",
              },
              {
                icon: <FaGitAlt className="text-red-500" />,
                label: "Git & GitHub",
              },
              { icon: <SiFigma className="text-pink-500" />, label: "Figma" },
              { icon: <FaTrello className="text-blue-300" />, label: "Trello" },
              {
                icon: <SiAdobephotoshop className="text-blue-600" />,
                label: "Adobe Photoshop",
              },
              { icon: <SiCanva className="text-cyan-500" />, label: "Canva" },
            ].map((tool, index) => (
              <Tooltip key={index}>
                <TooltipTrigger className="cursor-pointer">
                  {tool.icon}
                </TooltipTrigger>
                <TooltipContent>{tool.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechStack;

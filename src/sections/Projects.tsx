"use client";

import cypressImage from "../../public/images/projects/cypresss.png";
import breaditImage from "../../public/images/projects/breadit.png";
import bookmarkImage from "../../public/images/projects/bookmark.jpg";
import ecommerceImage from "../../public/images/projects/ecommerce.png";
import galleryImage from "../../public/images/projects/gallery.png";
import rockImage from "../../public/images/projects/rockpaperscissor.png";
import spaceImage from "../../public/images/projects/space.jpg";
import tmsImage from "../../public/images/projects/tms.png";
import threadsImage from "../../public/images/projects/threads.png";
import ratemyuniImage from "../../public/images/projects/ratemyuni.jpg";
import RPS from "../../public/images/RPS.png";
import krakens from "../../public/images/krakens.png";
import tictactoe from "../../public/images/tictactoe.png";
import whatscookin from "../../public/images/whatscookin.png";
import walmart from "../../public/images/walmart.png";
import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";
import web from "../../public/images/web.png";
import what from "../../public/images/what.png";
import guard from "../../public/images/guard.png";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import tigatImage from "../../public/images/tigat-new.png";
import nileodeImage from "../../public/images/nileode-new.png";
import whalersImage from "../../public/images/whalers.png";
import LalibelaImage from "../../public/images/lalibela.png";
import calmifyImage from "../../public/images/calmify-home.png";
import servicenowImage from "../../public/service.png";
import HUHTImage from "../../public/images/huht-new.png";
import DidecoImage from "../../public/images/dideco.png";
import MojoImage from "../../public/images/mojo.png";
import { Globe2 } from "lucide-react";

const sideProjects = [
  
  {
    name: "Hand Gesture Rock-Paper-Scissors",
    description:
      "Engineered a real-time Rock-Paper-Scissors game using webcam-based hand gesture recognition for an immersive and interactive experience. Integrated TensorFlow.js Hand Pose Detection (MediaPipe Hands backend) with react-webcam for accurate, real-time gesture tracking. Designed gameplay logic for gesture aggregation, countdowns, and scoring, enhancing user engagement and responsiveness.",
    image: RPS,
    link: "https://gesture-rps-jyuy.vercel.app/",
    repo: "https://github.com/Adii1106/Gesture-RPS-",
    tech: ["React", "TensorFlow.js", "MediaPipe Hands", "JavaScript", "Vite"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "WhatsCookin – Recipe Remix Web App",
    description:
      "Developed an interactive recipe platform that enables users to remix and personalize recipes through live ingredient modifications and preview updates. Built modular React components with a responsive, mobile-optimized UI for a seamless cooking experience across devices. Leveraged Vite for fast rendering and real-time state management for an engaging and intuitive user experience.",
    image: whatscookin,
    link: "https://whats-cookin-lac.vercel.app/",
    repo: "https://github.com/Adii1106/Whats-Cookin",
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Krekens",
    description:
      "Developed Krekens, a modern and visually engaging website built using React and Tailwind CSS. Designed to showcase the team’s projects, achievements, and collaborative spirit with smooth animations and responsive layouts. Focused on building a clean, scalable frontend architecture and delivering a dynamic user experience.",
    image: krakens,
    link: "https://the-krekens.vercel.app/",
    repo: "https://github.com/Harshit-jain-57/The-Kreken-Kins",
    tech: ["React", "TailwindCSS", "JavaScript", "Vite"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },

  {
    name: "GuardianTrack",
    description:
      "Built GuardianTrack, a mobile safety and emergency alert app developed with React Native. Enables users to quickly share their live location and SOS messages with saved contacts during emergencies. Integrated GPS tracking, local data storage with AsyncStorage, and responsive UI for reliability and ease of use in critical moments.",
    image: guard,
    link: "",
    repo: "https://github.com/Adii1106/MAD_Project",
    tech: ["React Native", "Expo", "JavaScript", "AsyncStorage", "Location API"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Walmart Sales Data Analysis",
    description:
      "Constructed a complete data analysis pipeline to derive actionable business insights from large-scale Walmart sales datasets. Processed and transformed raw data using Python and Pandas for high-quality feature engineering, and performed SQL-based analytics using MySQL to answer domain-specific business queries. Automated workflows through Kaggle API and SQLAlchemy integration for reproducibility and efficiency.",
    image: walmart,
    link: "https://github.com/Adii1106/Walmart_SQL_Python",
    repo: "https://github.com/Adii1106/Walmart_SQL_Python",
    tech: ["Python", "Pandas", "MySQL", "SQLAlchemy", "Jupyter Notebook"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Web-to-Sheet Logger",
    description:
      "Developed a Chrome extension that automates data logging from websites directly into Google Sheets. Designed to streamline repetitive workflows by capturing structured data from web pages and syncing it to Sheets in real time. Focused on improving productivity, automation, and understanding of browser extension architecture.",
    image: web,
    link: "",
    repo: "https://github.com/Adii1106/web-to-sheet-logger",
    tech: ["JavaScript", "Chrome Extensions", "Manifest V3", "HTML5", "CSS3"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "WhatsBlitz",
    description:
      "Created WhatsBlitz, a Chrome extension that enhances WhatsApp Web by introducing quick-access automation features. Implemented efficient DOM manipulation and event handling to deliver a smooth, responsive experience. Focused on UI minimalism, performance optimization, and learning browser APIs for extension development.",
    image: what,
    link: "",
    repo: "https://github.com/Adii1106/WhatsBlitz",
    tech: ["JavaScript", "Chrome Extensions", "HTML5", "CSS3"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },

  {
    name: "Tic Tac Toe",
    description:
      "Built a responsive and interactive Tic Tac Toe game using React and JavaScript. Implemented real-time game logic, win detection, and player turns for a smooth gameplay experience. Designed a clean, minimal interface and optimized component re-rendering for better performance.",
    image: tictactoe,
    link: "https://tic-tac-toe-bay-seven.vercel.app/",
    repo: "https://github.com/Adii1106/TIC_TAC_TOE",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  
];

const projects = [
  {
    name: "Hand Gesture Rock-Paper-Scissors",
    description:
      "Engineered a real-time Rock-Paper-Scissors game using webcam-based hand gesture recognition for an immersive and interactive experience. Integrated TensorFlow.js Hand Pose Detection (MediaPipe Hands backend) with react-webcam for accurate, real-time gesture tracking. Designed gameplay logic for gesture aggregation, countdowns, and scoring, enhancing user engagement and responsiveness.",
    image: RPS,
    link: "https://gesture-rps-jyuy.vercel.app/",
    repo: "https://github.com/Adii1106/Gesture-RPS-",
    tech: ["React", "TensorFlow.js", "MediaPipe Hands", "JavaScript", "Vite"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "WhatsCookin – Recipe Remix Web App",
    description:
      "Developed an interactive recipe platform that enables users to remix and personalize recipes through live ingredient modifications and preview updates. Built modular React components with a responsive, mobile-optimized UI for a seamless cooking experience across devices. Leveraged Vite for fast rendering and real-time state management for an engaging and intuitive user experience.",
    image: whatscookin,
    link: "https://whats-cookin-lac.vercel.app/",
    repo: "https://github.com/Adii1106/Whats-Cookin",
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Krekens",
    description:
      "Developed Krekens, a modern and visually engaging website built using React and Tailwind CSS. Designed to showcase the team’s projects, achievements, and collaborative spirit with smooth animations and responsive layouts. Focused on building a clean, scalable frontend architecture and delivering a dynamic user experience.",
    image: krakens,
    link: "https://the-krekens.vercel.app/",
    repo: "https://github.com/Harshit-jain-57/The-Kreken-Kins",
    tech: ["React", "TailwindCSS", "JavaScript", "Vite"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },

  {
    name: "GuardianTrack",
    description:
      "Built GuardianTrack, a mobile safety and emergency alert app developed with React Native. Enables users to quickly share their live location and SOS messages with saved contacts during emergencies. Integrated GPS tracking, local data storage with AsyncStorage, and responsive UI for reliability and ease of use in critical moments.",
    image: guard,
    link: "",
    repo: "https://github.com/Adii1106/MAD_Project",
    tech: ["React Native", "Expo", "JavaScript", "AsyncStorage", "Location API"],
    isTopProject: true,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Walmart Sales Data Analysis",
    description:
      "Constructed a complete data analysis pipeline to derive actionable business insights from large-scale Walmart sales datasets. Processed and transformed raw data using Python and Pandas for high-quality feature engineering, and performed SQL-based analytics using MySQL to answer domain-specific business queries. Automated workflows through Kaggle API and SQLAlchemy integration for reproducibility and efficiency.",
    image: walmart,
    link: "https://github.com/Adii1106/Walmart_SQL_Python",
    repo: "https://github.com/Adii1106/Walmart_SQL_Python",
    tech: ["Python", "Pandas", "MySQL", "SQLAlchemy", "Jupyter Notebook"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: false,
  }
  
  
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <ScrollArea className="w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Top Projects</p>
          <ProjectList chosenStack="top-projects" />
        </ScrollArea>
      ),
    },
    {
      title: "Next.js",
      value: "nextjs",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Next Js</p>
          <ProjectList chosenStack="nextjs" />
        </ScrollArea>
      ),
    },
    {
      title: "MERN Stack",
      value: "mern",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
          <ProjectList chosenStack="mern" />
        </ScrollArea>
      ),
    },
    {
      title: "HTML/CSS",
      value: "html-css",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">HTML/CSS</p>
          <ProjectList chosenStack="html-css" />
        </ScrollArea>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">All Projects</p>
          <ProjectList chosenStack="all-projects" />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center backdrop-blur-sm">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">Featured Projects</h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* main projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 font-poppins w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-4 ${index % 2 !== 0 ? "mt-8" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="flex flex-row gap-4 p-2 bg-gradient-to-br from-emerald-300 to-sky-500 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={project.image} alt={project.name} className="rounded-lg" />
              </motion.div>
              <motion.div
                className="flex flex-row gap-1 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-2xl font-cursive">{project.name}</h3> -
                <p className="text-white/60">{project.location}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link href={project.link} className="w-1/3" target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-1/3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300 capitalize ">
                    <span> check it out </span>
                    <ArrowRightIcon className="size-4 " />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        {/* other side projects */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-2xl font-cursive">Selected Side Projects</h2>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = sideProjects.filter((project) => {
    if (chosenStack === "nextjs") return project.isNextjs;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "html-css") return project.isHtmlCss;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-0 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">{project.name}</h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">{project.description}</p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link href={project.link} className="w-2/3 md:w-2/5" target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};

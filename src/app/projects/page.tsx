"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Teamz",
    description:
      "Real time communication platform, role based access control, authentication with Next auth, channels creation, workspaces creation, invite system/Invite codes, DMs, user profile, data storage and management with Convex",
    image: "/projects/teamz.jpeg",
    technologies: [
      "Convex",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn-ui",
    ],
    sourceCode: "https://github.com/PeterDiyo/Teamz",
    liveDemo: "https://teamz-seven.vercel.app/",
  },
  {
    title: "Modern Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, Framer Motion, and Convex backend to store contacts' data submission. Features a modern design with smooth animations and dark mode support.",
    image: "/projects/profp.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Convex",
    ],
    sourceCode: "https://github.com/PeterDiyo/Portfolio",
    liveDemo: "https://peterdiyo.vercel.app",
  },
  {
    title: "AgroHub",
    description:
      "A Marketing Platform for Farmers built with React, Node.js, and Express. Features secure-token-based authentication with JWT, real-time messaging with Socket.IO, and data management using MongoDB and Prisma ORM.",
    image: "/projects/agrohub.jpg",
    technologies: [
      "MongoDB",
      "Node.js ",
      "Express",
      "Socket.IO",
      "Prisma ORM",
      "React",
    ],
    sourceCode: "https://github.com/PeterDiyo/AgroHub",
    liveDemo: "https://github.com/PeterDiyo/AgroHub",
  },
];

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={item} className="mb-12">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#4EC9B0]">Projects</span>{" "}
              <span className="text-[#D4D4D4]">= () =&gt;</span>{" "}
              <span className="text-[#D4D4D4]">{}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-8 font-mono text-4xl font-bold tracking-tight"
          >
            Featured Projects
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-12 max-w-2xl text-lg text-muted-foreground"
          >
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </motion.p>

          <motion.div
            variants={item}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <GlobeAltIcon className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12 text-center">
            <a
              href="https://github.com/PeterDiyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>View more on github</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

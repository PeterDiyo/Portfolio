"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiHtml5,
  SiJavascript,
  SiPrisma,
  SiSocketdotio,
  SiGithub,
  SiVercel,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiRadixui,
} from "react-icons/si";
import Navbar from "@/components/Navbar";
import { Database } from "lucide-react";

const skills = {
  "Frontend Development": {
    description: "Building responsive and performant user interfaces",
    skills: [
      { name: "React", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "HTML/CSS", icon: SiHtml5, level: 95 },
      { name: "Redux", icon: SiRedux, level: 85 },
      { name: "React Query", icon: SiReactquery, level: 80 },
      { name: "Framer Motion", icon: SiFramer, level: 80 },
      { name: "Shadcn/Radix UI", icon: SiRadixui, level: 85 },
    ],
  },
  "Backend Development": {
    description: "Creating scalable and secure server-side applications",
    skills: [
      { name: "Convex", icon: Database, level: 85 },
      { name: "Node.js/Express.js", icon: SiNodedotjs, level: 85 },
      { name: "Supabase", icon: SiSupabase, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 80 },
      { name: "Prisma ORM", icon: SiPrisma, level: 80 },
      { name: "Socket.IO", icon: SiSocketdotio, level: 80 },
    ],
  },
  "DevOps & Tools": {
    description: "Managing deployment and development workflows",
    skills: [
      { name: "Docker", icon: SiDocker, level: 75 },
      { name: "AWS", icon: SiAmazon, level: 50 },
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 90 },
      { name: "Vercel", icon: SiVercel, level: 85 },
      { name: "Postman", icon: SiPostman, level: 90 },
    ],
  },
};

export default function SkillsPage() {
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

  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
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
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={item} className="mb-12">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">interface</span>{" "}
              <span className="text-[#4EC9B0]">Skills</span>{" "}
              <span className="text-[#D4D4D4]">{}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-8 font-mono text-4xl font-bold tracking-tight"
          >
            Technical Skills
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-12 max-w-2xl text-lg text-muted-foreground"
          >
            Here's an overview of my technical skills and expertise in various
            technologies and tools.
          </motion.p>

          <motion.div variants={item} className="space-y-12">
            {Object.entries(skills).map(
              ([category, { description, skills }]) => (
                <motion.div key={category} variants={item}>
                  <h2 className="mb-4 text-2xl font-bold">{category}</h2>
                  <p className="mb-6 text-muted-foreground">{description}</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={item}
                        className="rounded-lg border border-border bg-card p-6"
                      >
                        <div className="mb-4 flex items-center space-x-4">
                          <motion.div
                            variants={iconAnimation}
                            className="text-primary"
                          >
                            <skill.icon className="h-8 w-8" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold">{skill.name}</h3>
                            <div className="mt-2 h-2 w-full rounded-full bg-primary/10">
                              <motion.div
                                className="h-2 rounded-full bg-primary"
                                initial={{ width: 0 }}
                                animate={
                                  inView
                                    ? { width: `${skill.level}%` }
                                    : { width: 0 }
                                }
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Let's Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

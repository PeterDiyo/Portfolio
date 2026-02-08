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
  SiPostman,
  SiHtml5,
  SiJavascript,
  SiPrisma,
  SiGithub,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiSpringboot,
  SiExpress,
  SiKubernetes,
  SiGithubactions,
  SiCloudflare,
  SiDrizzle,
} from "react-icons/si";
import Navbar from "@/components/Navbar";
import { Database } from "lucide-react";
import { FaJava } from "react-icons/fa";

const skills = {
  Languages: {
    description: "Programming languages I use day to day",
    skills: [
      { name: "TypeScript", icon: SiTypescript, docs: "https://www.typescriptlang.org/docs", tag: "Type Safety" },
      { name: "JavaScript", icon: SiJavascript, docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", tag: "Web" },
      { name: "Java", icon: FaJava, docs: "https://docs.oracle.com/en/java/", tag: "Enterprise" },
      { name: "Python", icon: SiPython, docs: "https://docs.python.org/3/", tag: "General Purpose" },
      { name: "C / C++", icon: SiCplusplus, docs: "https://en.cppreference.com/w/cpp", tag: "Systems" },
      { name: "SQL", icon: Database, docs: "https://www.w3schools.com/sql/", tag: "Database" },
      { name: "HTML/CSS", icon: SiHtml5, docs: "https://developer.mozilla.org/en-US/docs/Web/HTML", tag: "Markup & Styling" },
    ],
  },
  Frameworks: {
    description: "Frameworks and libraries I build with",
    skills: [
      { name: "React", icon: SiReact, docs: "https://react.dev", tag: "UI Library" },
      { name: "Next.js", icon: SiNextdotjs, docs: "https://nextjs.org/docs", tag: "Full Stack" },
      { name: "Node.js", icon: SiNodedotjs, docs: "https://nodejs.org/docs", tag: "Runtime" },
      { name: "Express", icon: SiExpress, docs: "https://expressjs.com/", tag: "Web Framework" },
      { name: "Spring Boot", icon: SiSpringboot, docs: "https://docs.spring.io/spring-boot/", tag: "Java Framework" },
      { name: "Tailwind CSS", icon: SiTailwindcss, docs: "https://tailwindcss.com/docs", tag: "Styling" },
    ],
  },
  "Cloud & DevOps": {
    description: "Cloud platforms, containers, and CI/CD",
    skills: [
      { name: "AWS", icon: SiAmazon, docs: "https://docs.aws.amazon.com", tag: "SNS, SES, EC2, IAM, Amplify" },
      { name: "Docker", icon: SiDocker, docs: "https://docs.docker.com", tag: "Containers" },
      { name: "Kubernetes", icon: SiKubernetes, docs: "https://kubernetes.io/docs", tag: "Orchestration" },
      { name: "GitHub Actions", icon: SiGithubactions, docs: "https://docs.github.com/en/actions", tag: "CI/CD" },
      { name: "Vercel", icon: SiVercel, docs: "https://vercel.com/docs", tag: "Deployment" },
      { name: "Cloudflare", icon: SiCloudflare, docs: "https://developers.cloudflare.com", tag: "Edge & CDN" },
    ],
  },
  "Tools & DBs": {
    description: "Databases, ORMs, and development tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, docs: "https://www.postgresql.org/docs", tag: "SQL DB" },
      { name: "MySQL", icon: SiMysql, docs: "https://dev.mysql.com/doc", tag: "SQL DB" },
      { name: "MongoDB", icon: SiMongodb, docs: "https://www.mongodb.com/docs", tag: "NoSQL DB" },
      { name: "Prisma ORM", icon: SiPrisma, docs: "https://www.prisma.io/docs", tag: "Type-safe ORM" },
      { name: "Drizzle ORM", icon: SiDrizzle, docs: "https://orm.drizzle.team/docs", tag: "TypeScript ORM" },
      { name: "Convex", icon: Database, docs: "https://docs.convex.dev", tag: "Reactive Backend" },
      { name: "Git/GitHub", icon: SiGithub, docs: "https://git-scm.com/doc", tag: "Version Control" },
      { name: "Postman", icon: SiPostman, docs: "https://learning.postman.com/docs", tag: "API Testing" },
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

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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

          <motion.div variants={item} className="space-y-16">
            {Object.entries(skills).map(
              ([category, { description, skills }]) => (
                <motion.div key={category} variants={item}>
                  <div className="mb-8">
                    <h2 className="mb-2 text-2xl font-bold">{category}</h2>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                      <motion.a
                        key={skill.name}
                        href={skill.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={cardAnimation}
                        whileHover="hover"
                        className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              variants={iconAnimation}
                              className="rounded-lg bg-primary/10 p-2.5"
                            >
                              <skill.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <motion.div variants={textAnimation}>
                              <h3 className="font-medium">{skill.name}</h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {skill.tag}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Let's Work Together
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "ClarityText",
    period: "Oct 2024 - Present",
    description: [
      "Designing and implementing ClarityText email notifications using AWS SES for email sending and AWS SNS for message fanout",
      "Used bluefox.email for email template design",
    ],
    tech: ["Convex", "TypeScript", "Next.js", "React", "AWS", "bluefox.email"],
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Software Agency",
  //   period: "2020 - 2022",
  //   description: [
  //     "Developed and maintained multiple client projects using React and Node.js",
  //     "Implemented responsive designs and improved website performance",
  //     "Collaborated with design team to create intuitive user interfaces",
  //     "Integrated third-party APIs and services",
  //   ],
  //   tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "REST APIs"],
  // },
];

export default function ExperiencePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-24">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={item} className="mb-12">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#4EC9B0]">experience</span>{" "}
              <span className="text-[#D4D4D4]">=</span>{" "}
              <span className="text-[#CE9178]">"Professional Journey"</span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-8 font-mono text-4xl font-bold tracking-tight"
          >
            Work Experience
          </motion.h1>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`mb-12 md:flex ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div
                    className={`relative rounded-lg border border-border bg-card p-6 ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-6 h-4 w-4 rounded-full border-4 border-background bg-primary ${
                        index % 2 === 0
                          ? "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      }`}
                    />

                    <h3 className="mb-1 text-lg font-semibold">{exp.title}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {exp.company} • {exp.period}
                    </p>
                    <ul className="mb-4 list-disc space-y-1 pl-4 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

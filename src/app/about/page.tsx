"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
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
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={item} className="mb-12">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">class</span>{" "}
              <span className="text-[#4EC9B0]">About</span>{" "}
              <span className="text-[#D4D4D4]">{}</span>
            </div>
          </motion.div>

          <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <motion.div variants={item} className="mb-8 md:mb-0 md:w-1/3">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/profile.jpg"
                  alt="Peter Diyo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="md:w-2/3">
              <motion.h1
                variants={item}
                className="mb-8 font-mono text-4xl font-bold tracking-tight"
              >
                About Me
              </motion.h1>

              <motion.div
                variants={item}
                className="prose prose-lg dark:prose-invert"
              >
                <p>
                  I'm a Full-stack software engineer who loves building things
                  that solve real problems. I enjoy working in fast-paced
                  environments where I can make an impact, whether it's
                  implementing real-time features or designing responsive
                  systems. What drives me is curiosity, clear problem-solving,
                  and the chance to create products that make a difference in
                  people's lives.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={item}
            className="my-8 grid gap-6 md:grid-cols-3"
          >
            <div className="rounded-lg border border-border bg-card p-6">
              <CodeBracketIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Technical Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Specialized in modern web, mobile app technologies and cloud
                architecture
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <AcademicCapIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground">
                Computer Science Graduate with focus on software engineering
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <BriefcaseIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Experience</h3>
              <p className="text-sm text-muted-foreground">
                1+ years of professional software development experience
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="prose prose-lg dark:prose-invert"
          >
            <h2 className="mb-4 text-2xl font-bold">What I Do</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Design and implement scalable web and mobile applications using
                modern frameworks and best practices
              </li>
              <li>
                Develop efficient backend systems and APIs with a focus on
                performance and security
              </li>
              <li>
                Create intuitive user interfaces with attention to detail and
                user experience
              </li>
              <li>
                Collaborate with cross-functional teams to deliver high-quality
                software solutions
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Core Values</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Clean, maintainable, and well-documented code</li>
              <li>User-centered design and development</li>
              <li>Continuous learning and improvement</li>
              <li>Effective communication and collaboration</li>
            </ul>
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

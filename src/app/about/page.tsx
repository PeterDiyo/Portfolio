"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  CpuChipIcon,
  CloudIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
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
              <span className="text-[#D4D4D4]">{ }</span>
            </div>
          </motion.div>

          <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <motion.div variants={item} className="mb-8 md:mb-0 md:w-1/3">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/Peter_diyo_sma.jpg"
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
                  I'm a Software Engineer with a strong focus on Full Stack, Cloud and
                  DevOps - building scalable systems, reliable infrastructure, and
                  shipping products that users depend on. I thrive in
                  high-impact environments where ownership, operational
                  excellence, and clean engineering matter. Whether it's
                  full-stack development, cloud architecture, or improving
                  CI/CD and observability, I'm driven by solving hard problems
                  and raising the bar for quality and velocity.
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
              <h3 className="mb-2 font-semibold">Software Engineering</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Full-stack development</li>
                <li>System design</li>
                <li>Scalable applications</li>
                <li>Modern frameworks</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <CloudIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Cloud Engineering</h3>
              <p className="text-sm text-muted-foreground">
                Cloud architecture, infrastructure as code, and designing
                reliable, cost-effective systems at scale
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <Cog6ToothIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">DevOps & SRE</h3>
              <p className="text-sm text-muted-foreground">
                CI/CD pipelines, observability, automation, and improving
                deployment velocity and system reliability
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
                Design and ship full-stack applications with a focus on
                scalability, performance, and maintainability
              </li>
              <li>
                Build and operate cloud-native infrastructure - reliable, secure,
                and cost-conscious
              </li>
              <li>
                Own CI/CD, monitoring, and automation to increase deployment
                velocity and system reliability
              </li>
              <li>
                Work with cross-functional teams to deliver high-impact products
                and raise the engineering bar
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">What I Care About</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Ownership and operational excellence - building systems that hold up in production</li>
              <li>Clear, maintainable code and thoughtful system design</li>
              <li>Bias for action and shipping - iterating quickly without sacrificing quality</li>
              <li>Collaboration and high standards - learning from others and raising the bar</li>
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

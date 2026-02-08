"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";

const experiences = [
  {
    title: "Software Engineer",
    company: "ClarityText",
    period: "May 2025 - Present",
    description: [
      "Implemented custom Link Unfurling for ClarityText's Messages, threads, SEO optimized articles, and space channels, enabling rich social previews (X, Discord, iMessage, and more) that display dynamic metadata like thread titles and space banners, and message content. This directly supports the platform mission of creating an open-access knowledge base by making conversations publicly viewable without requiring a sign-in.",
      "Improving application reliability through targeted bug resolution and design refinement across the full stack.",
      "Leading UI/UX development (designed a professional mobile web UI, Profile page UI design), dark mode feature, professional url sharing previews for channels, threads, and messages.",
      "Improved the inconsistent backend channel reordering logic using the Lexorank algorithm.",
      "Wrote backend queries and mutations using Convex DB and framework, achieving 100% data sync",
      "Led the migration from Quill to Tiptap rich text editor, enabling advanced customization, modern UI integration, and improved mobile responsiveness. This transition enhanced the user experience and editor performance across all devices.",
      "Implemented Direct Reply feature to Messages with message quote, and smooth scroll to the replied message in conversation view, enhancing user interaction and context in conversations.",
      "Systematically identifying and resolving bugs across the frontend and backend.",
      "Collaborating with team members to reproduce bugs, write clean patches, and verify fixes in production.",
      "Conducting end-to-end testing of all app components to ensure functionality, reliability, and performance.",
    ],
    tech: [
      "Convex",
      "TypeScript",
      "Next.js",
      "React",
      "AWS",
      "Software Design and Development",
      "Software Testing",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "ClarityText",
    period: "Oct 2024 - May 2025",
    description: [
      "Architected an email notification system using AWS SNS and SES, enabling automated fanout to multiple recipients with high reliability, that successfully handles thousands of notifications daily without manual intervention.",
      "Developed end-to-end email notification system with error handling, retry mechanisms, and delivery tracking reducing undelivered messages to near 0 across multiple environments.",
      "Designing email templates via Bluefox.email, supporting dynamic content and mobile responsiveness that is now used across 2+ product workflows, significantly enhancing user communication.",
      "Integrated bounce and complaint handling mechanisms with SES webhooks, proactively surfacing delivery issues and protecting sender reputation, allowing early resolution of potential email delivery problems.",
      "Engineering an intuitive threaded messaging system that streamlines team communication by organizing conversations contextually, and providing real-time collaboration features - resulting in improved response times and clearer information flow. Built using Convex for the Backend, Next.js and Tailwind CSS for a polished, responsive UI with seamless thread navigation, preview, and rich message formatting",
      "Implementing real-time emoji reactions to messages, enabling quick, and expressive feedback while fostering a more engaging team environment",
      "Improving ClarityText UI for a better user experience with cleaner design and easier navigation. ",
    ],
    tech: ["Convex", "TypeScript", "Next.js", "React", "AWS", "bluefox.email"],
  },
  {
    title: "Software Developer",
    company: "Club Inferno",
    period: "Mar 2024 - Oct 2024",
    description: [
      "Worked on software applications for Club Inferno - The official student club for the dept of Computer Science, SRM Institute of Science and Technology",
    ],
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "MySQL"],
  },
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
                className={`mb-12 md:flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="md:w-1/2">
                  <div
                    className={`relative rounded-lg border border-border bg-card p-6 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                      }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-6 h-4 w-4 rounded-full border-4 border-background bg-primary ${index % 2 === 0
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

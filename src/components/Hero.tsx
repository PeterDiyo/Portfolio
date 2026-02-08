"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
  }; const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const titles = [
    "Software Engineer",
    "Cloud Engineering",
    "DevOps Engineering",
  ];
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const unpauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentPhrase = titles[phraseIndex];
    const typeSpeed = isDeleting ? 30 : 80;
    const pauseAtEnd = 2000;
    const pauseBetweenPhrases = 600;

    if (isPaused) return;

    if (!isDeleting && displayText === currentPhrase) {
      const id = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return () => clearTimeout(id);
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % titles.length);
      setIsPaused(true);
      if (unpauseTimeoutRef.current) clearTimeout(unpauseTimeoutRef.current);
      unpauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        unpauseTimeoutRef.current = null;
      }, pauseBetweenPhrases);
      return;
    }

    const id = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentPhrase.slice(0, displayText.length - 1)
          : currentPhrase.slice(0, displayText.length + 1)
      );
    }, typeSpeed);
    return () => clearTimeout(id);
  }, [displayText, phraseIndex, isDeleting, isPaused]);

  return (
    <section className="relative flex min-h-screen items-center justify-center py-20">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div variants={item} className="mb-6">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#4EC9B0]">developer</span>{" "}
              <span className="text-[#D4D4D4]">=</span>{" "}
              <span className="text-[#CE9178]">"Peter Diyo"</span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 min-h-[1.2em] font-mono text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            {displayText}
            <span className="ml-0.5 inline-block h-[0.9em] w-0.5 animate-blink bg-primary align-middle" />
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 text-lg text-foreground/80 md:text-xl"
          >
            // Empowering ideas with code - building scalable, meaningful solutions for the real world.
          </motion.p>

          <motion.div variants={item} className="space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex justify-center space-x-6"
          >
            <div className="flex items-center space-x-2 font-mono text-sm text-foreground/60">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
    </section>
  );
}

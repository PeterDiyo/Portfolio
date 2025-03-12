"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Building elegant solutions to complex problems";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

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
            className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Full-Stack Software Engineer
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 h-6 text-lg text-foreground/80 md:text-xl"
          >
            {text}
            {!isTypingComplete && (
              <span className="ml-1 inline-block h-5 w-2 animate-blink bg-primary" />
            )}
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

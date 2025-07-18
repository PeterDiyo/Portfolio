"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { MailIcon, MapPinIcon } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const submitContact = useMutation(api.contact.submitContactForm);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus("success");
      // Clear form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={item} className="mb-12">
            <div className="inline-block rounded-lg bg-editor-background px-3 py-1 font-mono text-sm text-editor-text">
              <span className="text-[#569CD6]">async function</span>{" "}
              <span className="text-[#4EC9B0]">contact</span>{" "}
              <span className="text-[#D4D4D4]">()</span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-8 font-mono text-4xl font-bold tracking-tight"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-12 max-w-2xl text-lg text-muted-foreground"
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </motion.p>

          <motion.div
            variants={item}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/PeterDiyo"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent"
            >
              <img src="/github.jpg" alt="GitHub" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-diyo-a38451289"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent"
            >
              <img src="/link.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/@peter_diyo"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent"
            >
              <img src="/twitter.png" alt="X (Twitter)" className="h-6 w-6" />
            </a>
            <a
              href="https://www.claritytext.com/u/peter-diyo-o7aw"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent sm:w-auto w-full justify-center"
            >
              <img
                src="/claritytext-logo.svg"
                alt="ClarityText"
                className="h-6 w-6"
              />
              <span className="ml-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Professional profile on ClarityText
              </span>
            </a>
          </motion.div>

          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="block w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="block w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto ${
                isSubmitting ? "cursor-wait" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-500"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}

            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500"
              >
                Oops! Something went wrong. Please try again later.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            variants={item}
            className="mt-12 grid gap-8 rounded-lg border border-border bg-card p-6 md:grid-cols-2"
          >
            <div className="flex items-center space-x-3">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:princediyo93@gmail.com"
                  className="text-primary hover:underline"
                >
                  princediyo93@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Lusaka, Zambia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

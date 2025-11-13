"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "WCAG 2.2",
];

export default function Skills() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">Skills / Stack</h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-bg-light)] text-[var(--color-primary)] rounded-full text-sm font-medium hover:bg-[var(--color-border)] transition-smooth cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}


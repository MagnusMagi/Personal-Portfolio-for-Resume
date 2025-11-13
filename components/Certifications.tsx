"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Advanced Front-End Web Development with React",
    issuer: "Coursera",
    year: "2025",
    description: "An in-depth certification covering React 18+. Next.js, TypeScript, GraphQL, performance optimizatio, accessibility standards (WCAG 2.2), and Core Web Vitals for production-ready interfaces.",
    href: "https://www.coursera.org/",
  },
  {
    title: "UX Design for Accessibility",
    issuer: "Interaction Design Foundation",
    year: "2024",
    description: "Specialized course on designing inclusive digital experiences, focusing on WCAG compliance, semantic structure, keyboard navigation, screen reader testing, and inclusive UX research methodologies.",
    href: "https://www.coursera.org/",
  },
];

export default function Certifications() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">Certifications</h3>
      <div className="space-y-5 sm:space-y-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-smooth"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h4 className="text-body font-medium group-hover:text-[var(--color-accent)] transition-smooth">
                  {cert.title}
                </h4>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--color-secondary)] rotate-45 group-hover:rotate-90 transition-transform transition-smooth"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-sm">
                <span className="text-[var(--color-primary)]">{cert.issuer}</span>
                <span className="text-[var(--color-primary)]">·</span>
                <span className="text-[var(--color-secondary)]">{cert.year}</span>
              </div>
              <p className="text-body">{cert.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}


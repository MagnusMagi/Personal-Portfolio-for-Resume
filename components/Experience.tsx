"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    logo: "https://framerusercontent.com/images/M2xKtEXTt09Bk4OcuKw4NzsWIqQ.png?width=80&height=78",
    title: "Data Analyst",
    company: "VIG",
    period: "2024-NOW",
    description: "Led end-to-end analysis of VIG's customer data, translating complex datasets into actionable insights for business growth.",
  },
  {
    logo: "https://framerusercontent.com/images/M2xKtEXTt09Bk4OcuKw4NzsWIqQ.png?width=80&height=78",
    title: "Financial Assurance Consultant",
    company: "VIG",
    period: "2020-2024",
    description: [
      "Advised clients on risk management and financial assurance, ensuring compliance with regulatory standards.",
      "Delivered data-driven insights to optimize financial reporting accuracy and strengthen audit readiness.",
    ],
  },
  {
    logo: "https://framerusercontent.com/images/tULrsX5tNRIBV7R74S4pJBjeGZg.png?width=225&height=225",
    title: "Founder",
    company: "Noord7",
    period: "2024-NOW",
    description: "Founded Noord7, an artificial intelligence agency uniting Nordic/Estonia design principles with digital innovation, helping businesses craft scalable, cross-cultural brand identities.",
  },
];

export default function Experience() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">Experience</h3>
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-7 h-7 flex-shrink-0 mt-1">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 space-y-1.5 sm:space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                <h4 className="text-body font-medium">{exp.title}</h4>
                <span className="text-sm text-[var(--color-primary)]">{exp.company}</span>
                <span className="text-sm text-[var(--color-primary)]">·</span>
                <span className="text-sm text-[var(--color-secondary)]">{exp.period}</span>
              </div>
              <div>
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-1 text-body ml-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-body">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-body">{exp.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


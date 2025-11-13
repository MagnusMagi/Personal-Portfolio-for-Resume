"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Fluent" },
];

export default function Languages() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">Languages</h3>
      <div className="space-y-2.5 sm:space-y-3">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-body font-medium">{lang.name}</span>
            <span className="text-body">{lang.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


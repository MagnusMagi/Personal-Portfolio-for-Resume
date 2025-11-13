"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    type: "Email",
    value: "hello@aydingundeger.com",
    href: "mailto:hello@aydingundeger.com",
  },
  {
    type: "LinkedIn",
    value: "/in/aydin-gundeger",
    href: "https://www.linkedin.com/in/aydin-gundeger",
  },
  {
    type: "Instagram",
    value: "@aydingundeger",
    href: "https://instagram.com/aydingundeger",
  },
];

export default function Contact() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">CONTACT</h3>
      <div className="space-y-3 sm:space-y-4">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-body font-medium min-w-[70px] sm:min-w-[80px]">{contact.type}</span>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline transition-smooth"
              aria-label={`Contact via ${contact.type}: ${contact.value}`}
            >
              {contact.value}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


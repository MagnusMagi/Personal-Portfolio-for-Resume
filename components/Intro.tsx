"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="space-y-4 sm:space-y-6">
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <motion.div
          className="w-[70px] h-[70px] rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
        >
          <Image
            src="https://framerusercontent.com/images/gIuAGowCe76ovxh9SE9Uj5g3q4.jpg?width=1024&height=1536"
            alt="Aydin Gundeger"
            width={70}
            height={70}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </motion.div>
        <motion.div
          className="text-center space-y-1.5 sm:space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
        >
          <h1 className="text-heading-1">Aydin Gundeger</h1>
          <h2 className="text-heading-2">
            Founder at Noord7 | Data Analyst at VIG
          </h2>
        </motion.div>
      </div>
    </section>
  );
}


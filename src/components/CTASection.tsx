"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.0 }}
      className="text-right"
    >
      <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-primary leading-[1.15] tracking-tight uppercase">
        We can combine
        <br />
        nature & home
        <br />
        comfort
      </h2>
      <Link
        href="#learn-more"
        className="inline-block mt-3 text-[13px] font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all duration-300"
      >
        LEARN MORE
      </Link>
    </motion.div>
  );
}

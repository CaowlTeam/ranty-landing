"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="flex items-center gap-4"
    >
      {/* Avatar Cluster */}
      <div className="flex -space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warm to-warm-dark border-2 border-white shadow-sm" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-primary border-2 border-white shadow-sm" />
      </div>

      {/* Customer Count */}
      <div>
        <p className="font-script text-4xl text-primary leading-none">
          12m<span className="text-2xl align-super">+</span>
        </p>
        <p className="text-xs text-muted -mt-0.5">Customers</p>
      </div>
    </motion.div>
  );
}

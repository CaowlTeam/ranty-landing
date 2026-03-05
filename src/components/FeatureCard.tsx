"use client";

import { motion } from "framer-motion";

export default function FeatureCard() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="bg-warm-dark/95 backdrop-blur-sm rounded-2xl p-5 w-full sm:w-[220px] lg:w-[240px]"
    >
      <h4 className="text-white text-[16px] lg:text-[18px] font-semibold leading-tight mb-1">
        We use best
        <br />
        materials!
      </h4>
      <p className="text-white/60 text-xs mb-4">
        Working with verified suppliers.
      </p>

      {/* Material Cross-Section Visual */}
      <div className="w-full h-20 lg:h-24 rounded-xl overflow-hidden">
        <div className="w-full h-full flex">
          <div className="flex-1 bg-gradient-to-b from-amber-100 to-amber-200" />
          <div className="w-px bg-white/20" />
          <div className="flex-1 bg-gradient-to-b from-amber-700 to-amber-800" />
          <div className="w-px bg-white/20" />
          <div className="flex-1 bg-gradient-to-b from-stone-200 to-stone-300" />
          <div className="w-px bg-white/20" />
          <div className="flex-1 bg-gradient-to-b from-yellow-600 to-yellow-700" />
          <div className="w-px bg-white/20" />
          <div className="flex-1 bg-gradient-to-b from-orange-100 to-orange-200" />
        </div>
      </div>
    </motion.div>
  );
}

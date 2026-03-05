"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingCard, { tabContent, type TabId } from "./FloatingCard";
import FeatureCard from "./FeatureCard";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabId>("3D");
  const content = tabContent[activeTab];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Background Atmosphere ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #d4c0a8 0%,
              #cbb8a0 12%,
              #c2ad98 22%,
              #b8a48e 32%,
              #a89478 42%,
              #9a8668 52%,
              #887458 60%,
              #76644a 68%,
              #6b5d3e 76%,
              #5e5134 84%,
              #4e4328 92%,
              #443a22 100%
            )`,
          }}
        />

        {/* Mountain silhouettes */}
        <svg
          className="absolute left-0 right-0 w-full"
          style={{ top: "22%", height: "50%" }}
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 L0,320 Q100,140 240,260 Q380,80 520,220 Q660,30 800,200 Q940,60 1100,180 Q1260,90 1440,160 L1440,500 Z"
            fill="#a09070"
            opacity="0.35"
          />
          <path
            d="M0,500 L0,360 Q200,200 440,300 Q680,140 920,260 Q1160,170 1440,220 L1440,500 Z"
            fill="#908060"
            opacity="0.3"
          />
          <path
            d="M0,500 L0,400 Q360,300 720,370 Q1080,280 1440,340 L1440,500 Z"
            fill="#807050"
            opacity="0.25"
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-16">
        {/* Navbar clearance */}
        <div className="pt-24 lg:pt-28 shrink-0" />

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* ── Left Column: Hero Copy ── */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:py-12">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="font-serif font-black leading-[0.88] tracking-tight text-primary"
              style={{ fontSize: "clamp(3.5rem, 7.5vw, 7.5rem)" }}
            >
              THE
              <br />
              PERFECT
              <br />
              HOME
              <sup className="text-lg lg:text-2xl font-sans font-normal align-super ml-1">
                ®
              </sup>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 lg:mt-8 text-[15px] text-primary/50 tracking-[0.2em] font-light"
            >
              / We craft custom homes /
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7 lg:mt-9 w-fit bg-primary text-cream text-[13px] font-semibold tracking-widest px-8 py-3.5 rounded-full hover:bg-primary-light transition-colors duration-300 cursor-pointer"
            >
              START
            </motion.button>
          </div>

          {/* ── Right Column: House Render + Floating Card ── */}
          <div className="lg:col-span-7 relative flex items-start justify-end">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-[580px] mt-4 lg:mt-0"
            >
              {/* Floating Card overlay */}
              <div className="absolute -left-4 lg:-left-10 top-0 z-20">
                <FloatingCard
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
              </div>

              {/* House Image */}
              <div className="mt-16 lg:mt-20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 relative aspect-[16/11]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={content.heroImage}
                    alt={content.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pb-6 lg:pb-10 shrink-0">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 lg:gap-8">
            <FeatureCard />
            <StatsSection />
            <CTASection />
          </div>
        </div>
      </div>
    </section>
  );
}

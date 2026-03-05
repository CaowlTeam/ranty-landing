"use client";

import { motion, AnimatePresence } from "framer-motion";

export const tabs = ["Interior", "Design", "3D"] as const;
export type TabId = (typeof tabs)[number];

export const tabContent: Record<
  TabId,
  {
    title: React.ReactNode;
    description: string;
    label: string;
    image: string;
    heroImage: string;
    alt: string;
  }
> = {
  Interior: {
    title: (
      <>
        Unique design &
        <br />
        ergonomics
      </>
    ),
    description: "From blueprints to renders.",
    label: "Roomtour",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=90",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=90",
    alt: "Interior room preview",
  },
  Design: {
    title: (
      <>
        Blueprint to
        <br />
        reality
      </>
    ),
    description: "Every detail planned.",
    label: "Plans",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=90",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
    alt: "Architectural design",
  },
  "3D": {
    title: (
      <>
        Experience before
        <br />
        you build
      </>
    ),
    description: "Virtual walkthroughs.",
    label: "3D Tour",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=90",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90",
    alt: "3D house render",
  },
};

type FloatingCardProps = {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
};

export default function FloatingCard({ activeTab, onTabChange }: FloatingCardProps) {

  const content = tabContent[activeTab];

  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="bg-white rounded-3xl p-5 lg:p-7 shadow-2xl shadow-black/8 w-[280px] lg:w-[360px]"
    >
      {/* Tab Pills */}
      <div className="flex items-center gap-2 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`text-[12px] lg:text-[13px] px-3 lg:px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? "bg-primary text-white border-primary"
                : "border-primary/15 text-primary/80 hover:bg-primary hover:text-white border-primary/15"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Row */}
      <div className="flex items-start justify-between gap-3 lg:gap-4">
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-base lg:text-xl font-bold text-primary leading-snug mb-1.5 lg:mb-2">
                {content.title}
              </h3>
              <p className="text-[12px] lg:text-[13px] text-muted leading-relaxed">
                {content.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <span className="text-[9px] lg:text-[10px] font-semibold tracking-widest text-primary/50 uppercase">
            {content.label}
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-xl overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.image}
                alt={content.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                  <svg
                    width="9"
                    height="11"
                    viewBox="0 0 10 12"
                    fill="none"
                    className="ml-0.5"
                  >
                    <path d="M10 6L0 12V0L10 6Z" fill="#2C2118" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

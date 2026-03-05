"use client";

import { motion } from "framer-motion";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    category: "Residential",
    area: "4,200 sq ft",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    title: "Urban Minimalist",
    location: "Brooklyn, New York",
    category: "Modern Villa",
    area: "3,100 sq ft",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    title: "Coastal Living",
    location: "Malibu, California",
    category: "Beach House",
    area: "5,800 sq ft",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    title: "Contemporary Estate",
    location: "Austin, Texas",
    category: "Luxury Home",
    area: "6,500 sq ft",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ProjectsSection() {
  return (
    <section id="homes" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-18"
        >
          <div>
            <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-warm-dark mb-4">
              Portfolio
            </p>
            <h2
              className="font-serif font-black text-primary leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Featured homes
            </h2>
          </div>
          <p className="text-muted text-base max-w-md leading-relaxed md:text-right">
            Each project is a unique collaboration — designed around how you live,
            built with materials that endure.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer ${
                i === 0 || i === 3 ? "md:aspect-[4/3]" : "md:aspect-[4/3]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category Pill */}
              <div className="absolute top-5 left-5">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white/90 bg-white/15 backdrop-blur-md rounded-full px-4 py-1.5">
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  <span>{project.area}</span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

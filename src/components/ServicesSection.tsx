"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="20" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 4L4 20H44L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="18" y="30" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Architecture Design",
    description:
      "Complete architectural solutions from concept sketches to detailed construction blueprints for your dream home.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    title: "Interior Design",
    description:
      "Curated interior spaces that blend aesthetics with functionality, tailored to your lifestyle and preferences.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 40L20 8L28 28L36 16L40 40H8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="34" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders and virtual walkthroughs so you can experience your home before it's built.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18H40" stroke="currentColor" strokeWidth="2" />
        <path d="M18 18V40" stroke="currentColor" strokeWidth="2" />
        <circle cx="13" cy="13" r="2" fill="currentColor" />
        <circle cx="24" cy="13" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring timely delivery, budget adherence, and uncompromising quality standards.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-warm-dark mb-4">
            What we do
          </p>
          <h2
            className="font-serif font-black text-primary leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Services crafted
            <br />
            for perfection
          </h2>
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg">
            From initial concept to the final walkthrough, we provide a comprehensive
            suite of services to bring your vision to life.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-7 lg:p-8 hover:shadow-xl hover:shadow-warm/10 transition-shadow duration-500"
            >
              <div className="text-warm-dark mb-5 group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

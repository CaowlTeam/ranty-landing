"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site";

const testimonials = [
  {
    quote: `${site.name} turned our vague ideas into a stunning reality. The attention to detail in every corner of our home is beyond what we imagined.`,
    name: "Sarah & David Mitchell",
    role: "Homeowners, Aspen CO",
    initials: "SM",
    gradient: "from-warm to-warm-dark",
  },
  {
    quote:
      "From the 3D walkthrough to the final handover, everything was seamless. Our beach house feels like it belongs on the cover of a magazine.",
    name: "James Chen",
    role: "Homeowner, Malibu CA",
    initials: "JC",
    gradient: "from-primary/60 to-primary",
  },
  {
    quote:
      "The team understood our vision for a sustainable modern home and delivered beyond expectations. The energy efficiency is remarkable.",
    name: "Elena Rodriguez",
    role: "Homeowner, Austin TX",
    initials: "ER",
    gradient: "from-warm-dark to-primary",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="cases" className="bg-primary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Header + Navigation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-warm mb-4">
              Testimonials
            </p>
            <h2
              className="font-serif font-black text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              What our clients
              <br />
              say about us
            </h2>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              Real stories from real homeowners who trusted us with their most
              important investment.
            </p>

            {/* Navigation Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    active === i
                      ? "bg-warm w-10"
                      : "bg-white/20 w-2.5 hover:bg-white/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Testimonial Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-8 lg:p-10"
            >
              {/* Quote Mark */}
              <svg
                width="48"
                height="36"
                viewBox="0 0 48 36"
                fill="none"
                className="mb-6 text-warm/40"
              >
                <path
                  d="M0 36V22.5C0 16.5 1.5 11.5 4.5 7.5C7.5 3.5 11.5 1 16.5 0L19.5 6C16.5 7 14 8.75 12 11.25C10 13.75 9 16.25 9 18.75H18V36H0ZM27 36V22.5C27 16.5 28.5 11.5 31.5 7.5C34.5 3.5 38.5 1 43.5 0L46.5 6C43.5 7 41 8.75 39 11.25C37 13.75 36 16.25 36 18.75H45V36H27Z"
                  fill="currentColor"
                />
              </svg>

              <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-light">
                {testimonials[active].quote}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center text-sm font-bold text-white`}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {testimonials[active].name}
                  </p>
                  <p className="text-white/50 text-sm">
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { site } from "@/lib/site";

const stats = [
  { value: 15, suffix: "+", label: "Years experience" },
  { value: 840, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 12, suffix: "M+", label: "Happy customers" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Composition */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80"
                alt="Modern home interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-white rounded-2xl p-6 shadow-xl"
            >
              <p className="font-script text-4xl leading-none mb-1">15+</p>
              <p className="text-sm text-white/70">Years of crafting</p>
              <p className="text-sm text-white/70">dream homes</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-warm-dark mb-4">
              About us
            </p>
            <h2
              className="font-serif font-black text-primary leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              We build with
              <br />
              passion & precision
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed mb-5">
              Founded on the belief that every home should be a masterpiece, {site.name}{" "}
              brings together visionary architects, skilled craftspeople, and
              cutting-edge technology to create residences that are as unique as their
              owners.
            </p>
            <p className="text-muted text-base leading-relaxed mb-10">
              Our approach merges timeless design principles with sustainable building
              practices, ensuring every project stands the test of time — both
              structurally and aesthetically.
            </p>

            {/* Stats Grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-primary/10 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl lg:text-4xl font-bold text-primary">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

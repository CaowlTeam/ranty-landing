"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const contactDetails = [
  {
    label: "Visit us",
    value: "1247 Riverside Drive\nAustin, TX 78701",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Call us",
    value: "+1 (512) 555-0198",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Email us",
    value: site.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[13px] font-semibold tracking-[0.25em] uppercase text-warm-dark mb-4">
              Get in touch
            </p>
            <h2
              className="font-serif font-black text-primary leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Let&apos;s build your
              <br />
              dream home
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              Ready to start your journey? Reach out and our team will guide you
              through every step of the process.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted mb-1">
                      {item.label}
                    </p>
                    <p className="text-primary text-sm font-medium whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-cream rounded-2xl lg:rounded-3xl p-8 lg:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full bg-white rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 outline-none border border-transparent focus:border-warm transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 outline-none border border-transparent focus:border-warm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 outline-none border border-transparent focus:border-warm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  defaultValue=""
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm text-primary outline-none border border-transparent focus:border-warm transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>New Construction</option>
                  <option>Renovation</option>
                  <option>Interior Design</option>
                  <option>3D Visualization</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-wider uppercase text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dream project..."
                  className="w-full bg-white rounded-xl px-4 py-3 text-sm text-primary placeholder:text-primary/30 outline-none border border-transparent focus:border-warm transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-cream text-sm font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-primary-light transition-colors duration-300 cursor-pointer"
              >
                Send message
              </motion.button>

              <p className="text-xs text-muted text-center">
                We&apos;ll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

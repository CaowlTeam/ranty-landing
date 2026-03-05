import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

const footerLinks = {
  Company: [
    { name: "About us", href: "#about" },
    { name: "Our team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Services: [
    { name: "Architecture", href: "#services" },
    { name: "Interior Design", href: "#services" },
    { name: "3D Visualization", href: "#services" },
    { name: "Renovation", href: "#services" },
  ],
  Resources: [
    { name: "Portfolio", href: "#homes" },
    { name: "Case Studies", href: "#cases" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialIcons = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10V17M7 7V7.01M11 17V13C11 11.5 12 10.5 13.5 10.5C15 10.5 16 11.5 16 13V17M11 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 4L10.5 12.5M20 20L13.5 11.5M10.5 12.5L20 4M10.5 12.5L4 20M13.5 11.5L10.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7C9.5 7 8 8.5 8 11C8 12.5 9 14 10 14.5C10 14.5 9.5 17 9 19M12 7C14.5 7 16 8.5 16 11C16 13.5 14 15 12 15C10.5 15 10 14.5 10 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-primary/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-5" />
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
              Crafting custom homes that blend nature, comfort, and timeless design.
              From blueprints to reality.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-md transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8 border-t border-primary/5">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {site.copyrightName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

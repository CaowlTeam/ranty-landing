import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Company logo: icon + wordmark. Replace the icon div with an <Image> or custom SVG if you have an asset.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo mark: house silhouette. Replace with your own image/SVG if needed. */}
      <div className="relative w-8 h-8 shrink-0" aria-hidden>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-full h-full text-primary"
        >
          <path
            d="M16 4L4 14v14h8v-8h8v8h8V14L16 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 4v10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-[0.12em] text-primary font-sans">
        {site.name.toUpperCase()}
      </span>
    </Link>
  );
}

/* ================= LOGO MARK (SVG) ================= */
/* A hard-hat / building-block glyph inside a solid roundsquare — evokes
   construction + structure without needing an external asset. Reused as-is
   on both light (Navbar) and dark (Footer) backgrounds since the shape
   carries its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="40" height="40" rx="9" fill="#0F1B2E" />
    <path d="M10 27V17.5L20 12l10 5.5V27" stroke="#F97316" strokeWidth="2.4" strokeLinejoin="round" />
    <path d="M15 27v-7h10v7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M20 12v-3.5" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-7 h-7", text: "text-lg" },
  md: { icon: "w-9 h-9", text: "text-xl" },
  lg: { icon: "w-11 h-11", text: "text-2xl" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span
        className={`font-bold leading-none whitespace-nowrap tracking-tight ${text} ${
          variant === "dark" ? "text-brand-900" : "text-white"
        }`}
      >
        Constructa
      </span>
    </span>
  );
};

export default Logo;

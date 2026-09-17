import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "onLight" | "onDark";
}

export default function TextLink({
  href,
  children,
  className = "",
  tone = "onLight",
}: TextLinkProps) {
  const toneClasses =
    tone === "onDark"
      ? "text-white decoration-white/40 hover:decoration-accent"
      : "text-ink decoration-line hover:decoration-accent";
  return (
    <a
      href={href}
      className={`group inline-flex items-baseline text-[13px] font-medium tracking-[0.02em] underline decoration-[1px] underline-offset-[6px] transition-[text-decoration-color] duration-[225ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-sm ${toneClasses} ${className}`}
    >
      <span>{children}</span>
    </a>
  );
}

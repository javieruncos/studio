import { useState } from "react";
import { AnimatePresence, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { brand, navigation } from "../../data/siteData";
import MobileMenu from "./MobileMenu";

/**
 * Header — fixed typographic layer over the Hero photograph.
 * Transparent at top → solid Ink once scrolled past 24px.
 * No hide-on-scroll, no pills, no glassmorphism.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled((prev) => {
      const next = y > 24;
      return prev === next ? prev : next;
    });
  });

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled && !menuOpen
            ? "border-b border-white/10 bg-ink"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-16 xl:px-20"
        >
          <a
            href="#top"
            className="text-[13px] font-semibold tracking-[0.08em] text-white uppercase"
          >
            {brand.name}
          </a>

          {/* Desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 text-[13px] font-medium tracking-[0.06em] text-white uppercase transition-colors duration-[225ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white/70"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center gap-2 py-2 text-[13px] font-medium tracking-[0.06em] text-white uppercase lg:hidden"
          >
            Menu
            <Menu size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            key="mobile-menu"
            reduceMotion={reduceMotion ?? false}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

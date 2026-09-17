import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { brand, navigation } from "../../data/siteData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface MobileMenuProps {
  onClose: () => void;
  reduceMotion: boolean;
}

/**
 * MobileMenu — fullscreen Ink extension of the site's visual direction.
 * Big Manrope navigation, no generic drawer patterns.
 */
export default function MobileMenu({ onClose, reduceMotion }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-ink text-white"
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-8">
        <p className="text-[13px] font-semibold tracking-[0.08em] uppercase">
          {brand.name}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex items-center gap-2 py-2 text-[13px] font-medium tracking-[0.06em] uppercase"
        >
          Close
          <X size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-5 md:px-8">
        <ul className="space-y-2">
          {navigation.map((item, i) => (
            <li key={item.href} className="overflow-hidden">
              <motion.a
                href={item.href}
                onClick={onClose}
                className="block py-2 font-sans text-5xl font-semibold tracking-[-0.01em] uppercase transition-colors duration-[225ms] hover:text-white/70"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE }
                }
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-mono text-[11px] tracking-[0.08em] text-white/50 uppercase">
          {brand.descriptor}
        </p>
      </nav>
    </motion.div>
  );
}

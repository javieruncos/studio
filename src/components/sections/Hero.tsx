import { motion, useReducedMotion } from "motion/react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import TextLink from "../ui/TextLink";
import { hero } from "../../data/siteData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Hero — full-bleed architectural background, typography integrated
 * into the photograph's dark zone (left concrete mass).
 * No scrim, no gradient, no overlay: legibility relies on the
 * photographic shadow verified by contrast sampling.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [line1, line2, line3] = hero.titleLines;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Background — anchored to keep the dark mass under the type */}
      {reduceMotion ? (
        <img
          src={hero.figure.src}
          alt={hero.figure.alt}
          width={1376}
          height={768}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[18%_center] lg:object-center"
        />
      ) : (
        <motion.img
          src={hero.figure.src}
          alt={hero.figure.alt}
          width={1376}
          height={768}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[18%_center] lg:object-center"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
        />
      )}

      {/* Content */}
      <Container className="relative flex min-h-[100svh] flex-col pb-8 pt-24 md:pb-12 lg:min-h-[88svh] lg:justify-center lg:pb-16 lg:pt-16">
        <p className="self-end font-mono text-[11px] tracking-[0.08em] text-white/70 uppercase">
          {hero.marker}
        </p>

        <div className="mt-auto lg:mt-0">
          <p className="text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase md:text-xs">
            {hero.eyebrow}
          </p>
            {reduceMotion ? (
              <h1 id="hero-title" className="hero-display mt-5 md:mt-6">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
                <span className="block">{line3}</span>
              </h1>
            ) : (
              <motion.h1
                id="hero-title"
                className="hero-display mt-5 md:mt-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
                <span className="block">{line3}</span>
              </motion.h1>
            )}
          </div>

          <Reveal y={16} delay={0.2}>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.65] text-white/80 md:text-base">
              {hero.supporting}
            </p>
            <div className="mt-6">
              <TextLink href={hero.cta.href} tone="onDark">
                {hero.cta.label}
              </TextLink>
            </div>
          </Reveal>

        <p className="mt-10 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/60">
          {hero.figure.caption}
        </p>
      </Container>
    </section>
  );
}

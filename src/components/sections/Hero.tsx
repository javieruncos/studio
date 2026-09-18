import { motion, useReducedMotion } from "motion/react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import TextLink from "../ui/TextLink";
import { hero } from "../../data/siteData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Hero — full-bleed cinematográfico, tipografía integrada en la masa
 * oscura izquierda de la fotografía.
 *
 * GESTO ÚNICO DE LA SECCIÓN: indent asimétrico de la línea 2 + titular
 * a 11/12 columnas que rompe el borde de la grilla.
 *
 * Restricciones respetadas: sin scrim, sin gradiente, sin overlay;
 * sin parallax ni scroll hijacking; sin animación por letra; Manrope
 * protagonista; terracota solo en el tick del marcador; legibilidad
 * por contraste con la zona de sombra (object-position anclado a la
 * izquierda en todos los breakpoints).
 *
 * Integración Navbar: el header fijo (h-16, transparente → ink tras
 * 24px) flota sobre la foto; `pt-24 / lg:pt-28` libera la banda
 * técnica superior para que nunca colisione con la navegación.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [line1, line2, line3] = hero.titleLines;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* Fondo — anclado a la izquierda para mantener la masa oscura
          bajo el titular en 390 / 768 / 1280. Escala sutil única. */}
      {reduceMotion ? (
        <img
          src={hero.figure.src}
          alt={hero.figure.alt}
          width={1376}
          height={768}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[16%_center]"
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
          className="absolute inset-0 h-full w-full object-cover object-[16%_center]"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
        />
      )}

      {/* Contenido — titular anclado abajo-izquierda, grilla 12 */}
      <Container className="relative flex min-h-[100svh] flex-col pb-8 pt-24 md:pb-10 lg:pb-12 lg:pt-28">
        {/* Banda técnica superior — bajo el header fijo */}
        <div className="flex items-center justify-between gap-4">
          <p className="min-w-0 text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase md:text-xs">
            {hero.eyebrow}
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-white/60 uppercase">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 bg-accent"
            />
            {hero.marker}
          </p>
        </div>

        {/* Titular — 11/12 en desktop, línea 2 con indent asimétrico */}
        <div className="mt-auto grid grid-cols-12 pt-16 md:pt-20">
          {reduceMotion ? (
            <h1
              id="hero-title"
              className="hero-display col-span-12 lg:col-span-11"
            >
              <span className="block">{line1}</span>
              <span className="block ml-[9vw] md:ml-[12%] lg:ml-[10%]">
                {line2}
              </span>
              <span className="block">{line3}</span>
            </h1>
          ) : (
            <motion.h1
              id="hero-title"
              className="hero-display col-span-12 lg:col-span-11"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span className="block">{line1}</span>
              <span className="block ml-[9vw] md:ml-[12%] lg:ml-[10%]">
                {line2}
              </span>
              <span className="block">{line3}</span>
            </motion.h1>
          )}
        </div>

        {/* Fila inferior — apoyo izquierda, caption técnica derecha */}
        <div className="mt-8 grid grid-cols-12 items-end gap-6 md:mt-10">
          <Reveal
            y={16}
            delay={0.2}
            className="col-span-12 md:col-span-7 lg:col-span-5"
          >
            <p className="max-w-[42ch] text-[15px] leading-[1.65] text-white/80 md:text-base">
              {hero.supporting}
            </p>
            <div className="mt-6">
              <TextLink href={hero.cta.href} tone="onDark">
                {hero.cta.label}
              </TextLink>
            </div>
          </Reveal>

          <p className="col-span-12 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/60 md:col-span-5 md:text-right lg:col-span-4 lg:col-start-9">
            {hero.figure.caption}
          </p>
        </div>
      </Container>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import TextLink from "../ui/TextLink";
import { featured, hero } from "../../data/siteData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Featured — momento cinematográfico, cambio de ritmo tras el índice.
 * Superficie ink + fotografía full-bleed real (ancho de viewport).
 *
 * GESTO ÚNICO DE LA SECCIÓN: el full-bleed. Todo lo demás es grilla
 * disciplinada: sin solapamientos, sin scrims, titular blanco sobre
 * ink con contraste garantizado en los tres breakpoints.
 *
 * La imagen reutiliza el estudio del Hero con un crop inédito
 * (anclado a la derecha: la residencia bajo el sol) declarado en el
 * caption con PLACEHOLDER visible. Contenido de `featured` verbatim.
 */
export default function Featured() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="featured-title" className="bg-ink text-white">
      <Container className="pt-24 md:pt-32 lg:pt-40">
        {/* Fila técnica superior */}
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-white/60 uppercase">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 shrink-0 bg-accent"
              />
              {featured.eyebrow}
            </p>
            <p className="font-mono text-[11px] tracking-[0.08em] text-white/40 uppercase">
              Fig. F
            </p>
          </div>
        </Reveal>

        {/* Titular — 10/12, blanco sobre ink */}
        <div className="mt-8 grid grid-cols-12 md:mt-10">
          <Reveal
            className="col-span-12 lg:col-span-10"
            y={20}
          >
            <h2
              id="featured-title"
              className="font-sans text-[clamp(44px,9vw,128px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase"
            >
              {featured.title}
            </h2>
          </Reveal>
        </div>
      </Container>

      {/* Fotografía protagonista — full-bleed, crop inédito a la derecha */}
      <div className="mt-10 overflow-hidden md:mt-14">
        {reduceMotion ? (
          <img
            src={hero.figure.src}
            alt={hero.figure.alt}
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover object-[72%_center] md:aspect-[16/8]"
          />
        ) : (
          <motion.img
            src={hero.figure.src}
            alt={hero.figure.alt}
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover object-[72%_center] md:aspect-[16/8]"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1, ease: EASE }}
          />
        )}
      </div>

      <Container className="pb-24 md:pb-32 lg:pb-40">
        {/* Fila inferior asimétrica — descripción izquierda, meta derecha */}
        <div className="mt-8 grid grid-cols-12 gap-6 md:mt-10">
          <Reveal
            className="col-span-12 md:col-span-7 lg:col-span-5"
            y={16}
          >
            <p className="max-w-[52ch] text-[15px] leading-[1.65] text-white/80 md:text-base">
              {featured.description}
            </p>
            <div className="mt-6">
              <TextLink href={featured.cta.href} tone="onDark">
                {featured.cta.label}
              </TextLink>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
            <p className="font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/60 uppercase">
              {featured.meta}
              <span className="mt-2 block normal-case text-white/40">
                Fig. F — Residence under evening sun, Casa Ladera
                (study reused from Hero, alternate crop).
                [PLACEHOLDER — final featured photography pending]
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

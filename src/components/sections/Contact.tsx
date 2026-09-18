import Reveal from "../ui/Reveal";
import { contact } from "../../data/siteData";

/**
 * Contact — cierre del recorrido, rima estructural con el Hero.
 * Abre el bloque ink continuo que Footer continúa.
 *
 * COMPOSICIÓN: pregunta y acción en dos columnas (H2 a la izquierda,
 * CTA a la derecha, alineados abajo). El CTA "Write to the studio"
 * es la única acción (mailto funcional, contenido verbatim). Sin
 * email gigante, sin imagen, sin full-bleed, sin solapamientos.
 * Placeholder explícito conservado en la nota.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-24 pb-24 md:px-8 md:pt-32 md:pb-32 lg:px-16 lg:pt-40 lg:pb-40 xl:px-20">
        <Reveal>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-white/60 uppercase">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 bg-accent"
            />
            {contact.eyebrow}
          </p>
        </Reveal>

        {/* Pregunta + acción en dos columnas */}
        <Reveal className="mt-6 grid grid-cols-12 items-start gap-6" y={20}>
          <h2
            id="contact-title"
            className="col-span-12 font-sans text-[clamp(32px,5vw,60px)] leading-[0.95] font-semibold tracking-[-0.01em] text-white uppercase lg:col-span-7"
          >
            {contact.title}
          </h2>
          <a
            href={contact.cta.href}
            aria-label={`${contact.cta.label} — ${contact.email}`}
            className="col-span-12 font-sans text-[clamp(32px,5vw,60px)] leading-[0.95] font-semibold tracking-[-0.01em] text-white uppercase transition-colors duration-[225ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white/70 lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8"
          >
            {contact.cta.label}
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-6 md:mt-14">
          <Reveal className="col-span-12 lg:col-span-5" y={16}>
            <p className="max-w-[42ch] text-[15px] leading-[1.65] text-white/80 md:text-base">
              {contact.supporting}
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/40">
              {contact.emailNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

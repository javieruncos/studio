import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import TextLink from "../ui/TextLink";
import { hero, studio } from "../../data/siteData";

/**
 * Studio — dirección A (Shared top axis).
 * Texto y figura comparten eje superior: la cercanía es intimidad.
 * H2 susurrado (override local 36–60px: la escala global de
 * SectionHeading gritaría "quiet"), figura-objeto a 6 columnas con
 * presencia real, una sola entrada compartida para ambos bloques.
 * Contenido de `studio` verbatim; `alt` corregido a lo visible.
 */
export default function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="bg-paper text-ink"
    >
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 bg-accent"
            />
            {studio.eyebrow}
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-12 gap-6 md:mt-16" y={20}>
          {/* Título + texto — misma altura que la figura */}
          <div className="col-span-12 flex h-full flex-col md:col-span-6">
            <h2
              id="studio-title"
              className="max-w-[16ch] font-sans text-[clamp(36px,5.5vw,60px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase"
            >
              {studio.title}
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-ink md:text-base">
              {studio.body}
            </p>
            <div className="mt-auto pt-6">
              <TextLink href={studio.link.href}>
                {studio.link.label}
              </TextLink>
            </div>
          </div>

            {/* Figura-objeto — 6 columnas, mismo arranque vertical */}
            <figure className="col-span-12 md:col-span-6">
              <div className="w-full overflow-hidden bg-surface">
                <img
                  src={hero.figure.src}
                  alt="Evening light on board-formed concrete wall at Casa Ladera — study reused from Hero"
                  width={1376}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover object-[12%_center]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted">
                {studio.figure.caption} (study reused from Hero,
                alternate crop). [PLACEHOLDER — final studio
                photography pending]
              </figcaption>
            </figure>
        </Reveal>
      </Container>
    </section>
  );
}

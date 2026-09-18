import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { approach, hero } from "../../data/siteData";

/**
 * Approach — tres estudios visuales del método.
 * Superficie surface (transición estructural ink → surface).
 *
 * Cada principio combina fotografía (tres crops distintos del mismo
 * estudio, cada uno declarado) y micro-grafía arquitectónica hecha
 * solo con líneas, ejes y marcas — sin iconos, sin infografía, sin
 * cifras inventadas. Números como referencias mono, títulos 32–52,
 * hairlines como estructura de secuencia. Contenido verbatim.
 */
const CROPS = {
  light: {
    position: "object-[42%_center]",
    alt: "Daylight and shadow across courtyard walls — Casa Ladera study detail reused from Hero",
    note: "Alternate crop: courtyard light and shadow.",
  },
  material: {
    position: "object-[12%_center]",
    alt: "Board-formed concrete surface in evening light — Casa Ladera study detail reused from Hero",
    note: "Alternate crop: board-formed concrete detail.",
  },
  proportion: {
    position: "object-[75%_center]",
    alt: "Stepped residence mass against sky — Casa Ladera study detail reused from Hero",
    note: "Alternate crop: stepped mass and sky.",
  },
} as const;

function StudyFigure({
  crop,
  caption,
  placeholder,
}: {
  crop: (typeof CROPS)[keyof typeof CROPS];
  caption: string;
  placeholder: string;
}) {
  return (
    <figure>
      {/* Altura fija por breakpoint: las tres figuras miden lo mismo */}
      <div className="h-64 w-full overflow-hidden bg-ink/5 md:h-96 lg:h-[480px]">
        <img
          src={hero.figure.src}
          alt={crop.alt}
          width={1376}
          height={768}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${crop.position}`}
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted">
        {caption} ({crop.note}) [{placeholder}]
      </figcaption>
    </figure>
  );
}

export default function Approach() {
  const [light, material, proportion] = approach.principles;

  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-surface text-ink"
    >
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <SectionHeading
            eyebrow={approach.eyebrow}
            title={approach.title}
            lead={approach.lead}
            titleId="approach-title"
          />
        </Reveal>

        <div className="mt-16 md:mt-24">
          {/* 01 — LIGHT: imagen 1–7, texto 8–12 */}
          <Reveal y={24}>
            <article className="grid grid-cols-12 gap-6 border-t border-line pt-8 md:pt-10">
              <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
                <StudyFigure
                  crop={CROPS.light}
                  caption={light.caption ?? ""}
                  placeholder="PLACEHOLDER — final Light study photography pending"
                />
              </div>
              <div className="col-span-12 flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-1">
                <p className="font-mono text-[12px] tracking-[0.08em] text-muted uppercase md:text-sm">
                  {light.number}
                </p>
                <h3 className="mt-4 font-sans text-[clamp(40px,6vw,72px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase">
                  <span className="sr-only">Principle {light.number}: </span>
                  {light.title}
                </h3>
                <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.65] text-ink md:text-base">
                  {light.description}
                </p>
                {/* Anotación de estudio: línea de luz + referencia horaria */}
                <div
                  aria-hidden="true"
                  className="mt-6 flex items-center gap-3"
                >
                  <span className="inline-block h-2 w-2 shrink-0 bg-accent" />
                  <span className="inline-block h-px w-16 bg-ink/40" />
                  <span className="inline-block h-px w-8 bg-ink/20" />
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                  17:40 — West / Opening E-02
                </p>
              </div>
              <div aria-hidden="true" className="col-span-12 pb-12 md:pb-16" />
            </article>
          </Reveal>

          {/* 02 — MATERIAL: texto 1–5, imagen 6–12 */}
          <Reveal y={24}>
            <article className="grid grid-cols-12 gap-6 border-t border-line pt-8 md:pt-10">
              <div className="col-span-12 flex flex-col lg:col-span-5 lg:col-start-1">
                <p className="font-mono text-[12px] tracking-[0.08em] text-muted uppercase md:text-sm">
                  {material.number}
                </p>
                <h3 className="mt-4 font-sans text-[clamp(40px,6vw,72px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase">
                  <span className="sr-only">
                    Principle {material.number}:{" "}
                  </span>
                  {material.title}
                </h3>
                <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.65] text-ink md:text-base">
                  {material.description}
                </p>
                <p className="mt-auto pt-4 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                  Board-formed concrete
                </p>
              </div>
              <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7">
                <StudyFigure
                  crop={CROPS.material}
                  caption={material.caption ?? ""}
                  placeholder="PLACEHOLDER — final Material study photography pending"
                />
              </div>
              <div aria-hidden="true" className="col-span-12 pb-12 md:pb-16" />
            </article>
          </Reveal>

          {/* 03 — PROPORTION: imagen 1–7, texto 8–12 + diagrama de medida */}
          <Reveal y={24}>
            <article className="grid grid-cols-12 gap-6 border-t border-b border-line pt-8 md:pt-10">
              <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
                <StudyFigure
                  crop={CROPS.proportion}
                  caption={proportion.caption ?? ""}
                  placeholder="PLACEHOLDER — final Proportion study photography pending"
                />
              </div>
              <div className="col-span-12 flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-1">
                <p className="font-mono text-[12px] tracking-[0.08em] text-muted uppercase md:text-sm">
                  {proportion.number}
                </p>
                <h3 className="mt-4 font-sans text-[clamp(40px,6vw,72px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase">
                  <span className="sr-only">
                    Principle {proportion.number}:{" "}
                  </span>
                  {proportion.title}
                </h3>
                <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.65] text-ink md:text-base">
                  {proportion.description}
                </p>
                {/* Micro-diagrama: eje vertical con marcas relativas, sin cifras */}
                <div
                  aria-hidden="true"
                  className="mt-6 flex items-stretch gap-3"
                >
                  <span className="inline-block w-px self-stretch bg-ink/40" />
                  <span className="flex flex-col justify-between py-0.5 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                    <span>I — Mass</span>
                    <span>II — Void</span>
                    <span>III — Threshold</span>
                  </span>
                </div>
              </div>
              <div aria-hidden="true" className="col-span-12 pb-12 md:pb-16" />
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

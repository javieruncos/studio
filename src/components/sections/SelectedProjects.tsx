import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { hero, projects, selectedProjectsHeading } from "../../data/siteData";

/**
 * SelectedProjects — índice en dos columnas simétricas.
 * Izquierda: N°01 completo (label, título, descripción, figura,
 * meta). Derecha: índice 02–04 en filas hairline idénticas.
 * Sin offsets, sin vacíos estructurales, sin overlap, sin hovers.
 * Tres Reveals en total. Contenido de `siteData` verbatim.
 */
export default function SelectedProjects() {
  const [first, ...rest] = projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-paper text-ink"
    >
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <SectionHeading
            eyebrow={selectedProjectsHeading.eyebrow}
            indexMeta={selectedProjectsHeading.index}
            title={selectedProjectsHeading.title}
            lead={selectedProjectsHeading.lead}
            titleId="projects-title"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 lg:gap-x-12">
          {/* N°01 — columna izquierda */}
          <Reveal className="col-span-12 lg:col-span-6" y={20}>
            <figure>
              <div className="w-full overflow-hidden bg-surface">
                <img
                  src={hero.figure.src}
                  alt={hero.figure.alt}
                  width={1376}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted">
                Fig. 01 — Evening light across concrete and stone, Casa
                Ladera (study reused from Hero). [PLACEHOLDER — final
                photography pending]
              </figcaption>
              <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted uppercase">
                {first.category} / {first.location} / {first.year}
              </p>
            </figure>
          </Reveal>

          {/* Índice 02–04 — columna derecha */}
          <Reveal className="col-span-12 lg:col-span-6" y={20}>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 shrink-0 bg-accent"
              />
              N°{first.number} — {first.title}
            </p>
            <h3 className="mt-4 font-sans text-[clamp(36px,5.5vw,60px)] leading-[0.95] font-semibold tracking-[-0.01em] uppercase">
              {first.title}
            </h3>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.65] text-ink md:text-base">
              {first.description}
            </p>
            <div className="mt-8">
              {rest.map((project, i) => (
                <article
                  key={project.number}
                  className={`grid grid-cols-12 border-t border-line py-6 md:py-8 ${
                    i === rest.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="col-span-12">
                    <h3 className="font-sans text-[clamp(24px,3.5vw,32px)] leading-[1] font-semibold tracking-[-0.01em] uppercase">
                      N°{project.number} — {project.title}
                    </h3>
                    <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted uppercase">
                      {project.category} / {project.year} /{" "}
                      {project.location}
                    </p>
                  </div>
                </article>
              ))}
              <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted">
                [PLACEHOLDER — photography for N°02–04 pending]
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

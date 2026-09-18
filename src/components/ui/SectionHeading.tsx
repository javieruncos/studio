interface SectionHeadingProps {
  eyebrow: string;
  indexMeta?: string;
  title: string;
  lead?: string;
  titleId?: string;
  tone?: "onLight" | "onDark";
}

/**
 * SectionHeading — marcador ultra-moderno de sección.
 * Manrope display protagonista, fila técnica mono, acento terracota
 * puntual (tick de 8px). Sin regla editorial `border-t`, sin serif
 * por defecto. La composición asimétrica la define cada sección;
 * este marcador solo aporta jerarquía y medida, no el gesto.
 */
export default function SectionHeading({
  eyebrow,
  indexMeta,
  title,
  lead,
  titleId,
  tone = "onLight",
}: SectionHeadingProps) {
  const labelColor = tone === "onDark" ? "text-white/60" : "text-muted";
  const titleColor = tone === "onDark" ? "text-white" : "text-ink";
  const leadColor = tone === "onDark" ? "text-white/80" : "text-ink";
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p
          className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase ${labelColor}`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 shrink-0 bg-accent"
          />
          {eyebrow}
        </p>
        {indexMeta ? (
          <p
            className={`font-mono text-[11px] tracking-[0.08em] uppercase ${labelColor}`}
          >
            {indexMeta}
          </p>
        ) : null}
      </div>
      <h2 id={titleId} className={`display-section mt-6 ${titleColor}`}>
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 max-w-[46ch] text-[15px] leading-[1.65] md:text-base ${leadColor}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

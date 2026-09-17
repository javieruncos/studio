interface SectionHeadingProps {
  eyebrow: string;
  indexMeta?: string;
  title: string;
  lead?: string;
  titleId?: string;
}

export default function SectionHeading({
  eyebrow,
  indexMeta,
  title,
  lead,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="border-t border-line pt-3">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
          {eyebrow}
        </p>
        {indexMeta ? (
          <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
            {indexMeta}
          </p>
        ) : null}
      </div>
      <h2 id={titleId} className="mt-6 max-w-[20ch] font-serif text-ink">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.65] text-ink md:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

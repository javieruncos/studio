interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
  eager?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function Figure({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  eager = false,
  className = "",
  width,
  height,
}: FigureProps) {
  return (
    <figure className={className}>
      <div className="w-full overflow-hidden bg-surface" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

import { footer, navigation } from "../../data/siteData";

/**
 * Footer — índice técnico de cierre, no footer de plantilla.
 * Continúa el bloque ink de Contact: hairline superior, marca,
 * navegación por los cuatro anclajes existentes, índice, legal,
 * aviso de ficción y retorno a `#top`. Contenido de `footer`
 * verbatim.
 */
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-4 md:px-8 lg:px-16 lg:pb-12 xl:px-20">
        <div className="grid grid-cols-12 gap-6 border-t border-white/10 pt-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[13px] font-semibold tracking-[0.08em] uppercase">
              {footer.mark}
            </p>
            <p className="mt-3 max-w-[32ch] text-[14px] leading-[1.6] text-white/60">
              {footer.line}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-6 md:col-span-3 md:col-start-7"
          >
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] font-medium tracking-[0.06em] text-white/80 uppercase transition-colors duration-[225ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3 md:col-start-10">
            <a
              href={footer.toTop.href}
              className="font-mono text-[11px] tracking-[0.08em] text-white/60 uppercase transition-colors duration-[225ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white"
            >
              {footer.toTop.label}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-baseline md:justify-between md:gap-6">
          <p className="font-mono text-[11px] tracking-[0.04em] text-white/40 uppercase">
            {footer.legal}
          </p>
          <p className="font-mono text-[11px] tracking-[0.04em] text-white/40 uppercase">
            {footer.index}
          </p>
          <p className="max-w-[52ch] font-mono text-[11px] leading-relaxed tracking-[0.04em] text-white/40">
            {footer.fiction}
          </p>
        </div>
      </div>
    </footer>
  );
}

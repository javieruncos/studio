import heroImage from "../assets/images/hero/hero-luz-materia.jpg";

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  caption: string;
  image: string;
  imageAlt: string;
  meta: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  caption?: string;
}

export const brand = {
  name: "FORMA / ESTUDIO",
  descriptor: "Architecture / Interiors / Objects",
  email: "hello@forma-estudio.com",
  /** PLACEHOLDER — fictional contact. No real inbox. */
  emailNote: "PLACEHOLDER — fictional contact",
} as const;

export const navigation: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "ARCHITECTURE / INTERIORS / OBJECTS",
  title: "Spaces shaped by light.",
  /** Editorial line breaks only — same approved copy, split for composition. */
  titleLines: ["SPACES", "SHAPED", "BY LIGHT."] as const,
  /** Compositional section marker. No total — the narrative defines no page count. */
  marker: "SEC.01",
  supporting:
    "FORMA is an independent architecture studio creating considered environments through material, proportion, and natural light.",
  cta: { label: "View selected projects ↘", href: "#projects" },
  figure: {
    src: heroImage,
    alt: "Evening light across board-formed concrete and stone residence — Casa Ladera study",
    caption: "Fig. 00 — Evening light across concrete and stone, Casa Ladera.",
    ratio: "16 / 9",
  },
} as const;

export const selectedProjectsHeading = {
  eyebrow: "01 — SELECTED PROJECTS",
  title: "An index of decisions.",
  lead: "Four studies in light, matter, and measure.",
  index: "INDEX / 04",
} as const;

export const projects: Project[] = [
  {
    number: "01",
    title: "Casa Ladera",
    category: "Residential",
    location: "Mendoza",
    year: "2025",
    description:
      "A residence stepped with the slope. Daytime rooms face east; sheltered courtyards hold shade and extend the interior outward.",
    caption: "Fig. 01 — Morning light across stepped mass, Casa Ladera.",
    image: "/images/casa-ladera.jpg",
    imageAlt: "Morning light across stepped mass, Casa Ladera",
    meta: "N°01 — CASA LADERA / RESIDENTIAL / MENDOZA / 2025",
  },
  {
    number: "02",
    title: "Patio Norte",
    category: "Residential",
    location: "[PLACEHOLDER — location]",
    year: "2024",
    description:
      "A house around a single courtyard. Circulation borders the void; every room keeps one wall open to sky.",
    caption: "Fig. 02 — Courtyard wall and shadow line, Patio Norte.",
    image: "/images/patio-norte.jpg",
    imageAlt: "Courtyard wall and shadow line, Patio Norte",
    meta: "N°02 — PATIO NORTE / RESIDENTIAL / [LOCATION] / 2024",
  },
  {
    number: "03",
    title: "Estudio Línea",
    category: "Workspace",
    location: "[PLACEHOLDER — location]",
    year: "2024",
    description:
      "A working space reduced to sequence. Oak table, concrete shell, north light measured for long hours of making.",
    caption: "Fig. 03 — North light on working surface, Estudio Línea.",
    image: "/images/estudio-linea.jpg",
    imageAlt: "North light on working surface, Estudio Línea",
    meta: "N°03 — ESTUDIO LÍNEA / WORKSPACE / [LOCATION] / 2024",
  },
  {
    number: "04",
    title: "Casa Umbral",
    category: "Residential",
    location: "[PLACEHOLDER — location]",
    year: "2023",
    description:
      "A threshold house. Entry, shade, and room unfold in order; doors frame landscape rather than close it.",
    caption: "Fig. 04 — Threshold and framed view, Casa Umbral.",
    image: "/images/casa-umbral.jpg",
    imageAlt: "Threshold and framed view, Casa Umbral",
    meta: "N°04 — CASA UMBRAL / RESIDENTIAL / [LOCATION] / 2023",
  },
];

export const featured = {
  eyebrow: "FEATURED — N°01 / CASA LADERA",
  title: "A house that follows the sun.",
  description:
    "Casa Ladera is organized around shifting light and sheltered courtyards. Mass retains cool; openings release heat. Rooms step with the terrain, keeping a continuous relation between interior, shade, and landscape. Nothing decorative — orientation, thickness, and interval do the work.",
  meta: "RESIDENTIAL / MENDOZA / 2025 / [PLACEHOLDER — area / plan data if needed]",
  /** No detail route exists by design. CTA resolves to the method behind the project. */
  cta: { label: "Read the project note ↗", href: "#approach" },
  figure: {
    src: "/images/casa-ladera-featured.jpg",
    alt: "Late afternoon shadow across courtyard wall — Casa Ladera",
    caption:
      "Fig. F — Late afternoon shadow across courtyard wall. Concrete, oak, and sky. Casa Ladera.",
    ratio: "16 / 10",
  },
} as const;

export const approach = {
  eyebrow: "02 — APPROACH",
  title: "We begin with light.",
  lead: "Form follows orientation. Materials are chosen for how they age. Dimensions are set by the body moving through rooms.",
  principles: [
    {
      number: "01",
      title: "Light",
      description:
        "We orient before we compose. Openings are sized and placed to filter day — morning into rooms, midday into shade, evening along walls. Shadow is kept as material; a room is judged by how it holds 5pm. Evening is the test: if a room keeps the last hour of sun, the orientation is right.",
      caption: "Light study — opening, depth, hour.",
    },
    {
      number: "02",
      title: "Material",
      description:
        "Concrete, stone, oak, glass, blackened steel — few surfaces, left legible. Joints are drawn, edges stay sharp, grain stays visible. We prefer what patinas over what shines; texture should record use, not resist it. Five surfaces are enough for a whole house; repetition keeps every joint honest.",
      caption: "Detail — oak against cast concrete.",
    },
    {
      number: "03",
      title: "Proportion",
      description:
        "Measure orders mass and void. Widths, heights, and thresholds are set by sequence: entry, compression, release. A corridor is not leftover; it paces the house and frames what comes next. When the measure is right, the house needs no explanation.",
      caption: "Sequence — threshold, compression, room.",
    },
  ] satisfies Principle[],
} as const;

export const studio = {
  eyebrow: "03 — STUDIO",
  title: "A quiet practice.",
  body: "FORMA is an independent studio working across architecture, interiors, and objects. We observe how daylight moves, how surfaces wear, how rooms are actually used. We prioritize few materials, clear structure, and dimensions set by the body. We avoid noise — formal, material, and verbal. What matters is not expression, but attention: a joint aligned, a threshold at the right depth, a wall that keeps afternoon light a little longer.",
  figure: {
    src: "/images/studio-mesa.jpg",
    alt: "Working table with models, samples, and daylight",
    caption: "Fig. S — Working table. Models, samples, and daylight.",
    ratio: "3 / 2",
  },
  link: { label: "More about the studio →", href: "#approach" },
} as const;

export const contact = {
  eyebrow: "04 — CONTACT",
  title: "Have a space in mind?",
  supporting:
    "For commissions, collaborations, and project inquiries, get in touch with the studio. Write plainly — a few lines about place, use, and time are enough to begin.",
  email: "hello@forma-estudio.com",
  /** PLACEHOLDER — fictional contact. No phone, address, or response time invented. */
  emailNote: "PLACEHOLDER — fictional contact",
  cta: { label: "Write to the studio ↗", href: "mailto:hello@forma-estudio.com" },
} as const;

export const footer = {
  mark: "FORMA / ESTUDIO",
  line: "Spaces shaped by light, material, and intent.",
  index: "INDEX — 04 PROJECTS / 01 FEATURED",
  legal: "© 2026 FORMA / ESTUDIO",
  fiction:
    "Fictional studio concept — portfolio project. No real clients, awards, or locations.",
  toTop: { label: "Back to top ↑", href: "#top" },
} as const;

export const seo = {
  title: "FORMA / ESTUDIO — Spaces shaped by light",
  description:
    "FORMA is an independent architecture studio working across architecture, interiors, and objects. Light, material, proportion.",
  ogTitle: "FORMA / ESTUDIO — Spaces shaped by light",
  ogDescription:
    "An independent studio concept. Selected works, method, and contact. Fictional portfolio project.",
  /** OG image pending final hero photograph curation. */
  ogImage: undefined as string | undefined,
} as const;

# AGENTS.md

## 1. Project Identity

### Project

**FORMA / ESTUDIO**

### Project Type

Premium editorial landing page for a fictional contemporary architecture and spatial design studio.

### Primary Objective

Create a refined, responsive, portfolio-quality website that presents FORMA as an independent architecture studio focused on architecture, interiors, and objects.

The website must feel like the official digital presence of a considered design practice, not a generic agency template, real-estate company, construction company, or SaaS product.

### Core Concept

> Spaces shaped by light, material, and intent.

### Brand Perception

FORMA should communicate:

* architectural authorship
* restraint
* material sensitivity
* proportion
* natural light
* spatial intelligence
* permanence
* contemporary culture
* editorial sophistication

The design should feel quiet but distinctive.

---

## 2. Design Direction

### Visual Direction

**CONTEMPORARY EDITORIAL ARCHITECTURE**

The visual language combines:

* contemporary architecture
* editorial art direction
* Swiss-inspired grid systems
* architectural photography
* warm minimalism
* material-focused composition
* precise typography
* restrained interactions

The design should resemble a contemporary architecture monograph or an independent design studio publication translated into a digital experience.

### Desired Emotional Qualities

* calm
* precise
* tactile
* intentional
* spacious
* intelligent
* warm
* timeless
* quietly confident

### Avoid Generic Design Patterns

Do not create:

* generic SaaS layouts
* startup landing page patterns
* oversized marketing banners
* excessive rounded cards
* dashboard-like sections
* icon grids
* pricing tables
* testimonial carousels
* KPI/statistic walls
* excessive badges
* floating glass panels
* neumorphism
* neon accents
* excessive gradients
* exaggerated shadows
* huge pill buttons
* decorative blobs
* random geometric decorations without architectural purpose
* excessive scroll effects
* template-like “Our Services” card sections
* stock-agency visual language

---

## 3. Technology

Use the existing project stack.

Expected stack:

* Vite
* React
* Tailwind CSS
* Motion / Framer Motion
* Lucide React only when a meaningful interface icon is required
* pnpm

### Rules

* Do not change the stack.
* Do not introduce a new framework.
* Do not install dependencies without explicit authorization.
* Do not install global packages.
* Use pnpm.
* Do not replace existing dependencies with alternatives.
* Do not add a state-management library.
* Do not add a backend.
* Do not add a CMS.
* Do not add a database.
* Do not add authentication.
* Do not add external APIs unless explicitly authorized.

This is a frontend portfolio project.

---

## 4. Brand and Content

### Brand Name

```text
FORMA / ESTUDIO
```

Use the brand consistently.

Do not alternate randomly between:

* Forma Studio
* Forma Architecture
* Forma Design
* FORMA Atelier

unless a specific approved content decision requires it.

### Brand Positioning

FORMA is an independent studio working across:

* architecture
* interiors
* objects

It is not:

* a real-estate company
* a construction company
* a property developer
* a furniture store
* a large multinational architecture firm

### Tone of Voice

Copy should be:

* concise
* editorial
* intelligent
* calm
* specific
* architectural
* non-promotional
* contemporary

Avoid:

* empty marketing language
* exaggerated claims
* generic inspirational phrases
* corporate jargon
* excessive adjectives
* fake achievements
* unsupported statistics
* invented awards
* invented clients
* invented sustainability certifications
* invented project performance data

### Copy Style

Prefer:

> Spaces shaped by light, material, and intent.

Avoid:

> We transform your dreams into extraordinary spaces that inspire the future.

Use short paragraphs and meaningful line breaks.

Do not use all-caps paragraphs.

---

## 5. Color System

Use a restrained warm architectural palette.

Define and reuse tokens rather than scattering arbitrary colors throughout components.

### Core Tokens

```css
--color-paper: #F1F0EB;
--color-surface: #E7E5DE;
--color-ink: #1C1D1A;
--color-muted: #777873;
--color-line: #C9C8C0;
--color-accent: #A35F3F;
--color-white: #FFFFFF;
```

### Color Roles

#### Paper

Primary page background.

```text
#F1F0EB
```

#### Surface

Secondary background for alternating sections.

```text
#E7E5DE
```

#### Ink

Primary text and dark sections.

```text
#1C1D1A
```

#### Muted

Secondary copy, metadata, captions, and supporting information.

```text
#777873
```

Verify contrast before using muted text on light backgrounds.

#### Line

Dividers, borders, and structural rules.

```text
#C9C8C0
```

#### Accent

Restrained terracotta accent.

```text
#A35F3F
```

Use sparingly for:

* small indicators
* selected states
* subtle hover states
* project numbers
* small editorial details

Do not make terracotta the dominant visual color.

### Color Restrictions

Do not introduce:

* neon colors
* saturated gradients
* metallic gold
* purple-blue gradients
* random arbitrary Tailwind colors
* excessive pure black
* excessive white cards
* decorative color blocks without purpose

---

## 6. Typography

### Primary Display Font

Use a refined contemporary serif for major editorial headings.

Preferred:

```text
Instrument Serif
```

If the project already uses another approved serif, preserve the existing decision rather than replacing it without authorization.

### Supporting Sans

Use:

```text
Manrope
```

Manrope should handle:

* navigation
* body text
* labels
* buttons
* metadata when appropriate
* functional interface elements

### Optional Mono

A mono font may be used only for technical metadata, project codes, years, or small editorial indexing.

Preferred:

```text
JetBrains Mono
```

Do not use mono as the main body font.

### Typography Roles

#### Display H1

* large editorial serif
* strong but not excessively heavy
* tight visual control
* responsive scaling
* short phrase or sentence
* no unnecessary line breaks forced through `<br>` unless composition requires it

#### Section Headings

* serif or approved display treatment
* clear hierarchy
* restrained line length
* avoid oversized headings in every section

#### Body

* Manrope
* 15–18px depending on context
* comfortable line-height
* readable measure
* muted color only when contrast remains accessible

#### Metadata

* Manrope or JetBrains Mono
* 10–12px
* uppercase only for short labels
* moderate letter spacing
* never use tiny unreadable text

### Typography Restrictions

Do not use:

* more than two

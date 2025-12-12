# Asset & Export Specs

Use these sizes and names when exporting from the provided SVG templates in `/public/social`.

## Profile & Cover
- Avatar: 800×800 PNG, circular-safe. Use brand gradient + “EV”.
- LinkedIn cover: 1584×396 PNG, gradient + EchoVault tagline.
- X header: 1500×500 PNG, keep text centered.
- Facebook cover: 1640×624 PNG.

## Link/OG preview
- Size: 1200×630 PNG.
- Templates: `public/social/og-link-card.svg`, `public/social/og-announcement.svg`.
- CTA text: “Preserve their story” or “Invest once to keep their voice close.”

## Instagram/Facebook feed
- Square: 1080×1080 PNG, use `og-announcement.svg` or crop.
- Portrait: 1080×1350 PNG for higher feed prominence.

## Stories
- 1080×1920 PNG; use `public/social/story-template.svg` as a base.

## Naming convention
- `og-{slug}-{yyyymmdd}.png` e.g., `og-launch-20241205.png`
- `story-{theme}-{yyyymmdd}.png`
- `cover-{platform}-{yyyymmdd}.png`
- `avatar-ev-{yyyymmdd}.png`

## Export steps (SVG → PNG)
1) Open the SVG in your editor (Figma/Illustrator/Sketch/Inkscape).
2) Update text fields (title/CTA/date).
3) Export at 1× (1200×630 for OG, 1080×1920 for stories).
4) Compress with TinyPNG or Squoosh before upload.

## Colors
- Background: `#0E1117`
- Surface: `#1F2635`
- Surface-alt: `#273244`
- Border: `#2F3A4D`
- Accent: `#6F2EE5`
- Accent-light: `#A78BFA`
- Text: `#E5E7EB`
- Text-dim: `#9CA3AF`
- Text-faint: `#6B7280`

## Fonts
- Use a clean sans (e.g., Inter, SF Pro, or system) with bold weights for headings and medium for body. Keep letter spacing tight and line-height ~1.4–1.5 for readability on dark.

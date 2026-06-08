# JWTechDev.ai Design System

> Open Design-compatible brand contract for JWTechDev.ai. Use this for client-facing site pages, article visuals, study guides, Codex assets, social drafts, and Nucleus-facing JW reviews.

## Visual Theme & Atmosphere
Client-facing cloud infrastructure authority with builder energy. The experience should feel clear, practical, senior, and quietly creative. Use white space, strong information hierarchy, crisp system diagrams, and warm accent moments. The site should feel like a trusted infrastructure expert who can also explain modern AI workflows without making clients feel lost.

## Color Palette & Roles
- **Background:** `#FFFFFF` — primary canvas.
- **Subtle Background:** `#FAFAFB` — section separation and quiet bands.
- **Foreground:** `#0E0E11` — primary text and high-confidence UI.
- **Muted Foreground:** `#4A4A51` — body support copy and metadata.
- **Primary Accent:** `#0B6E4F` — CTAs, active states, constructive proof points.
- **Primary Hover:** `#074833` — CTA hover and strong green states.
- **Strategic Accent:** `#2B4162` — links, technical navigation, cool authority.
- **Warm Accent:** `#FA9F42` — sparing highlights, diagram energy, attention markers.
- **Risk Accent:** `#721817` — warnings, security/risk concepts, never decorative.
- **Neutral Border:** `#E0E0E2` — cards, dividers, inputs.

Use green and navy as the default brand system. Orange is a controlled highlight. Burgundy is reserved for risk/security emphasis.

## Typography Rules
- **Display:** `Roboto Condensed`, then `Roboto`, then system sans. Use for H1/H2 and large stat labels.
- **Body/UI:** `Roboto`, then system sans.
- **Mono:** system monospace only for code, file paths, and technical labels.
- **Display headlines:** bold, compact, and readable. Avoid extreme wrap patterns on article pages.
- **Body copy:** 16-18px, 1.55-1.7 line-height.
- **Letter spacing:** keep normal for most text. Use uppercase tracking only for short labels and eyebrows.

## Component Stylings
- **Buttons:** 10px radius, strong fill for primary, quiet outline for secondary. CTAs should say the action plainly.
- **Cards:** 10-16px radius, 1px neutral border, minimal shadow. Cards are for repeated items, not entire page sections.
- **Article visuals:** contained, not cropped. Use 2:1 desktop and 16:10 mobile frames. Diagrams should be readable at tablet width.
- **Tags/chips:** pill shape, low-contrast border, clear label text.
- **Forms:** grouped by decision tree, no public pricing, clear service intent, all lead-capture copy should set expectations.
- **Diagrams:** dark technical canvas, brand accent circles, restrained grid, short node labels.

## Layout Principles
- Use a 1200px outer container for marketing sections.
- Use a 900-960px article shell for long-form pages.
- Keep article media narrower than the text shell when it is decorative/supporting.
- Avoid nested cards and oversized UI chrome.
- Show proof and next actions above decoration.
- On one-page client experiences, every section should answer: what is this, why should I trust it, what can I do next?

## Depth & Elevation
Mostly flat. Use small shadows only for cards, modals, and hover affordance. Avoid glassmorphism, heavy glow effects, and ornamental gradient blobs.

## Do's and Don'ts
- Do make infrastructure concepts feel concrete with maps, checklists, decision trees, and examples.
- Do make client-facing pages benefit-led and plainspoken.
- Do keep internal terms like AEO, orchestration, and backend processes out of public-facing copy unless they are explained as client value.
- Do use real visuals, screenshots, or useful diagrams when a page asks the user to trust a technical claim.
- Don't expose internal strategy labels as marketing copy.
- Don't use generic "unlock potential" language.
- Don't create giant article posters that compete with the headline.
- Don't quote prices publicly unless Josh explicitly approves it.

## Responsive Behavior
- **Desktop:** dense but calm layouts, strong H1, supporting diagrams contained.
- **Tablet:** reduce headline scale, keep diagrams readable, stack proof panels.
- **Mobile:** single-column, compact nav, no horizontal overflow, no text clipping in buttons/chips.

## Motion & Interaction
Use motion for state feedback and orientation only. Fade/translate reveals should be subtle. Respect reduced-motion preferences. Hover states should clarify clickability, not decorate.

## Agent Prompt Guide
When generating JWTechDev.ai artifacts:
- Start from existing tokens in `css/tokens.css`.
- Preserve the logo, Roboto family, green/navy/orange/burgundy palette, and client-facing tone.
- If improving an existing page, patch the current HTML/CSS instead of creating a disconnected redesign.
- Run browser QA for desktop and mobile widths.
- Stop for approval before DNS, payment, backend/storage exposure, outbound sends, deletion, or public lead-capture changes.

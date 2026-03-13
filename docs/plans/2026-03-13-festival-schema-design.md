# Festival Sanity Schema Design

## Goal
Add a "Festivals" document type in Sanity CMS so editors can manage festival pages (Hockley Hustle, Green Hustle, Young Hustlers, Hustle Cinematic) without code changes.

## Schema Fields

| Field | Type | Notes |
|-------|------|-------|
| name | `string` | Required |
| slug | `slug` | Auto-generated from name |
| tagline | `string` | Short subtitle |
| established | `number` | Year founded |
| accentColor | `color` | `@sanity/color-input` picker |
| accentColorLight | `color` | Light variant |
| heroImage | `image` | With hotspot + alt |
| intro | `text` | Large opening paragraph |
| sections | `array` of `{title, body}` | Editorial content blocks |
| pullQuote | `text` | Featured quote |
| stats | `array` of `{value, label}` | Key statistics grid |
| externalLink | `url` | Festival website |
| galleryImages | `array` of `image` | With alt text |
| order | `number` | Hidden — fixed ordering (HH=1, GH=2, YH=3) |

## Data Flow
- Sanity-first fetch with static data fallback (same pattern as programmes)
- Draft mode support for visual editing in Presentation Tool
- Color picker returns `{hex}` object; extract `.hex` when mapping to component props

## Fixed Ordering
Hockley Hustle (1) > Green Hustle (2) > Young Hustlers (3) > others (alphabetical)

## Files to Create/Modify
- **Create:** `sanity/schemaTypes/festival.ts`
- **Modify:** `sanity/schemaTypes/index.ts`, `sanity/structure.ts`, `lib/sanity.ts`, `app/festivals/[slug]/page.tsx`, `sanity.config.ts`
- **Install:** `@sanity/color-input`

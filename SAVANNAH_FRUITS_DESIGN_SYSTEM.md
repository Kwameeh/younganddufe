# The Savannah Fruits Company — Design System & Clone Blueprint
> **Website Analyzed:** [savannahfruits.com](https://www.savannahfruits.com/)  
> **Brand Focus:** Empowering African women through traditionally hand-crafted Shea butter, Coconut oil, Baobab oil, and Black soap with 100% traceable supply chains.  
> **Aesthetic Mood:** Warm African terroir, organic luxury, sustainable craftsmanship, high-contrast editorial typography, earthy warmth.

---

## Table of Contents
1. [Brand Overview & Visual Identity](#1-brand-overview--visual-identity)
2. [Logo & Emblem Specification](#2-logo--emblem-specification)
3. [Typography System](#3-typography-system)
   - [Font Families & Licensing](#font-families--licensing)
   - [Typographic Hierarchy & Scale](#typographic-hierarchy--scale)
   - [Text Styling Rules](#text-styling-rules)
4. [Color Palette & Design Tokens](#4-color-palette--design-tokens)
   - [Core Brand Colors](#core-brand-colors)
   - [Product & Card Palette](#product--card-palette)
   - [Functional UI Colors](#functional-ui-colors)
5. [Layout Architecture & Screen Breakpoints](#5-layout-architecture--screen-breakpoints)
   - [Responsive Grid & Container Rules](#responsive-grid--container-rules)
   - [Desktop vs. Mobile Breakdown](#desktop-vs-mobile-breakdown)
6. [Component Library & Section Blueprints](#6-component-library--section-blueprints)
   - [Header & Navigation (Desktop & Mobile Drawer)](#header--navigation)
   - [Hero Section (Full-screen Video)](#hero-section)
   - [Interactive Impact Stat Cards](#interactive-impact-stat-cards)
   - [Partner Marquee Banner](#partner-marquee-banner)
   - [Signature Product Showcase Cards](#signature-product-showcase-cards)
   - [Principles of Sustainability (Accordion)](#principles-of-sustainability-accordion)
   - [Impact Report Video Banner](#impact-report-video-banner)
   - [Editorial Bento Grid (Highlights)](#editorial-bento-grid-highlights)
   - [Country Presence Grid (Ghana, Ivory Coast, Burkina Faso, Mali)](#country-presence-grid)
   - [Trace to Source Feature Section](#trace-to-source-feature-section)
   - [News & Stories Carousel/Grid](#news--stories-carouselgrid)
   - [UN Sustainable Development Goals (SDG Grid)](#un-sustainable-development-goals-sdg-grid)
   - [Footer Architecture](#footer-architecture)
7. [Ready-to-Use Tailwind CSS Config & CSS Tokens](#7-ready-to-use-tailwind-css-config--css-tokens)
8. [Component Code Snippets (HTML & CSS)](#8-component-code-snippets-html--css)

---

## 1. Brand Overview & Visual Identity

The design language of **The Savannah Fruits Company (SFC)** combines **authentic African craftsmanship** with **modern Scandinavian/European editorial minimalism**. 

- **Organic & Earthy:** Dominated by natural clay tones (terracotta red `#9D2D20`), desert sand (`#D6B78F`), fresh botanical green (`#8BC832`), and rich soil brown (`#775024`).
- **High Impact & Modern:** Headings utilize condensed, bold uppercase display typography (`Oswald`) set against creamy off-white (`#F8F2EC`) and full-bleed high-definition imagery/video.
- **Handcrafted Accents:** Accents and conversational callouts utilize a rounded, artisanal font (`Bobby Jones Soft`), reflecting the hand-crafted nature of the products made by women's cooperatives.
- **Dynamic Interaction:** Interactive elements favor tactile animations:
  - Cards scale down gently on hover (`scale-95 duration-300`).
  - Stat cards hide numbers and slide in narrative text on hover.
  - Photography gently expands on hover (`scale-105 duration-300`).

---

## 2. Logo & Emblem Specification

### Visual Anatomy
The Savannah Fruits Company logo is an intricate silhouette combining:
1. **The Canopy:** A lush circular crown of stylized leaves rendered in vibrant organic leaf green (`#8BC832`).
2. **The Trunk & Figure:** A female silhouette seamlessly integrated into the tree trunk, carrying a harvesting vessel on her head — symbolizing the 40,000+ rural women who harvest the shea nuts and botanical seeds.
3. **The Base / Wordmark:** The tree roots branch out directly into uppercase typographic lettering: **"THE SAVANNAH FRUITS COMPANY"** in earthy bark brown (`#7E4E18`).

```
          🌿 🌿 🌿 🌿 🌿       <- Circular leafy crown (#8BC832)
        🌿 🌿 🌿 🌿 🌿 🌿 
          \     👩     /       <- Silhouette of African woman with bowl
           \    ||    /
            \   ||   /         <- Tree trunk in earthy brown (#7E4E18)
             /  ||  \
      THE SAVANNAH FRUITS CO   <- Integrated root wordmark
```

### SVG Dimensions & ViewBox
- **Native SVG ViewBox:** `0 0 675.74 542.44`
- **Native Aspect Ratio:** ~`1.245 : 1` (Width: 675.74px, Height: 542.44px)

### Color Variations
| Context | Treatment | CSS Classes | Color Codes |
| :--- | :--- | :--- | :--- |
| **Transparent Header (over Video)** | Monochromatic Pure White | `invert brightness-0` | White `#FFFFFF` |
| **Mobile Header (over Video)** | Monochromatic Pure White | `invert brightness-0` | White `#FFFFFF` |
| **Light Backgrounds & Footer** | Full Brand Colors | Direct SVG fills | Leaves: `#8BC832`, Trunk & Text: `#7E4E18` |

### Sizing Scale Across Breakpoints
| Viewport | Placement | Class | Computed Size |
| :--- | :--- | :--- | :--- |
| **Desktop (>1024px)** | Header Nav Center | `lg:size-28` | **112px × 112px** |
| **Mobile (<1024px)** | Header Nav Left | `size-24` | **96px × 96px** |
| **Desktop Footer** | Footer Brand Info | `lg:size-40` | **160px × 160px** |
| **Mobile Footer** | Footer Brand Info | `size-28` | **112px × 112px** |

---

## 3. Typography System

The site implements a 3-tier font system balancing structural strength, human warmth, and clinical legibility.

### Font Families & Licensing

```css
/* 1. Primary Display / Headings / Uppercase UI */
font-family: 'Oswald', 'Oswald Fallback: Arial', sans-serif;

/* 2. Artisanal Accent / Highlights / Organic Callouts */
font-family: 'Bobby Jones Soft', sans-serif;

/* 3. Primary Body Text / Subtitles / Narrative Copy */
font-family: 'Outfit', 'Outfit Fallback: Times New Roman', sans-serif;
```

1. **`Oswald`** (Google Fonts — SIL Open Font License)
   - Available weights: `200` (ExtraLight), `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold)
   - Characteristics: Narrow, condensed, architectural uppercase, evoking strong editorial posters.
2. **`Bobby Jones Soft`** (Custom display font, loaded via `/fonts/bobby-jones-soft.otf`)
   - Weight: `400` (Regular)
   - Characteristics: Rounded, playful, rustic vintage monoline with soft terminals.
   - Recommended Google Font Alternates if custom font is unavailable:
     - **`Comfortaa`** (Rounded geometric display)
     - **`Quicksand`** (Rounded organic sans)
     - **`Sniglet`** (Soft handwritten look)
3. **`Outfit`** (Google Fonts — SIL Open Font License)
   - Available weights: `100` to `900`
   - Characteristics: Clean, geometric, contemporary neo-grotesque with open counters, perfect for multi-line storytelling.

---

### Typographic Hierarchy & Scale

| Element / Level | Font Family | Weight | Desktop Size | Mobile Size | Line Height | Tracking | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display / Trace** | Oswald | 700 / 900 | `text-8xl` (96px) | `text-[3.52rem]` (56px) | `1.0` | `-0.05em` | Uppercase |
| **Impact Video Title** | Oswald | 900 | `text-7xl` (72px) | `text-[2.6rem]` (41.6px)| `1.1` | `-0.025em` | Uppercase |
| **Section H2 (News/SDG)**| Oswald | 700 | `text-6xl` (60px) | `text-5xl` (48px) | `1.1` | `-0.05em` | Uppercase |
| **Stat Big Numbers** | Oswald | 500 | `text-7xl` (72px) | `text-5xl` (48px) | `1.0` | `-0.05em` | None |
| **Principles / H3** | Oswald | 700 | `text-3xl` (30px) | `text-2xl` (24px) | `1.2` | `-0.05em` | Uppercase |
| **Product Card Title** | Oswald | 700 | `text-2xl` (24px) | `text-2xl` (24px) | `1.33` | `-0.025em` | Uppercase |
| **Accordion Item Title**| Oswald | 500 | `text-xl` (20px) | `text-lg` (18px) | `1.4` | `-0.025em` | Uppercase |
| **Button Text (Primary)**| Oswald | 500 | `text-xl` (20px) | `text-lg` (18px) | `1.4` | `-0.025em` | Uppercase / Cap |
| **Button Text (Outline)**| Outfit | 500 | `text-sm` (14px) | `text-sm` (14px) | `1.42` | `-0.025em` | Uppercase |
| **Navbar Links** | Outfit | 500 | `text-sm` (14px) | `text-2xl` (24px) | `1.42` | `-0.025em` | Uppercase |
| **Editorial Body Lead** | Outfit | 300 / 400 | `text-4xl` (36px) | `text-xl` (20px) | `1.5` | `-0.025em` | Capitalize |
| **Standard Body Text** | Outfit | 400 | `text-base` (16px)| `text-sm` (14px) | `1.62` | Normal | None |
| **Artisanal Card Claims**| Bobby Jones Soft| 400 | `text-sm` (14px) | `text-xs` (12px) | `1.4` | Normal | None |
| **Micro Labels / Tags** | Outfit | 600 | `text-xs` (12px) | `text-xs` (12px) | `1.33` | `+0.025em` | Uppercase |

---

## 4. Color Palette & Design Tokens

### Core Brand Colors

| Token Name | Hex Code | RGB | OKLCH Equivalent | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **`brand-accent`** | `#F8F2EC` | `rgb(248, 242, 236)` | `oklch(96.2% 0.015 65)` | Primary page background, warm off-white cream |
| **`brand-red`** | `#9D2D20` | `rgb(157, 45, 33)` | `oklch(48.5% 0.175 32)` | Hero headings, country banner, SDG titles, mobile drawer |
| **`brand-brown`** | `#775024` | `rgb(119, 80, 36)` | `oklch(43.8% 0.088 68)` | Headings on light background, logo text, footer headers |
| **`brand-tan`** | `#D6B78F` | `rgb(214, 183, 143)`| `oklch(78.5% 0.055 75)` | SDG card borders, muted warm borders, stat cards |
| **`brand-green`** | `#8BC832` | `rgb(139, 200, 50)` | `oklch(76.2% 0.185 125)`| Logo leaves, regenerative icons, positive sustainability badge |

### Product & Card Palette

Each hero product has its own custom identity card color:

| Product | Background Hex | Text Color | Key Aesthetic Details |
| :--- | :--- | :--- | :--- |
| **Shea Butter** | `#000000` (Pure Black) | `#FFFFFF` (White) | Ultra-premium noir contrast, photo scaled `1.7x` from top |
| **Baobab Oil** | `#F5BD41` (Golden Amber) | `#FFFFFF` (White) | Golden superfruit glow, photo rotated 45° |
| **Coconut Oil** | `#F7F6F4` (Alabaster Cream) | `#1A1A1A` (Charcoal) | Pure pristine coconut milk feel, Roloway monkey callout |
| **Black Soap** | `#913729` (Terracotta Brick) | `#FFFFFF` (White) | Earthy plant-ash lather, antibacterial callouts |

### Functional UI Colors
- **Buttons / Highlights:** `#F5BD41` (Golden Yellow), `#AB7E4A` (Warm Caramel Brown)
- **Accent Lines:** `#FFCC00` (Vibrant Sun Yellow), `#000000` (Solid Black)
- **Card Background Tones:** `#C0A47F` (Warm Desert Sand), `#99C454` (Fresh Leaf Green)
- **Overlays:** `rgba(0, 0, 0, 0.20)` (Light photo tint), `rgba(0, 0, 0, 0.70)` (Video narrative overlay)

---

## 5. Layout Architecture & Screen Breakpoints

### Responsive Grid & Container Rules
- **Base Grid:** 12-column flexible grid system built on CSS Grid and Flexbox.
- **Maximum Widths (`container`):**
  - `sm` (40rem / 640px)
  - `md` (48rem / 768px)
  - `lg` (64rem / 1024px)
  - `xl` (80rem / 1280px)
  - `2xl` (96rem / 1536px)
- **Container Padding:**
  - Mobile: `px-4` (16px)
  - Desktop: `px-8` (32px) to `px-12` (48px)
- **Corner Radii (`border-radius`):**
  - Cards, Buttons, Accordions, Video wrappers: `rounded-2xl` (`1rem` / 16px)
  - Smaller UI pills / Badges: `rounded-lg` (`0.5rem` / 8px)
  - Circular buttons: `rounded-full` (`9999px`)

---

### Desktop vs. Mobile Breakdown

```
========================================================================
DESKTOP VIEWPORT (>= 1024px)
========================================================================
[  Header: Centered Logo + Horizontal Nav Links (gap-12)               ]
------------------------------------------------------------------------
[  Hero: Fullscreen Autoplay Video + Dark Vignette                     ]
------------------------------------------------------------------------
[  Stats: 2-Column Grid (Left: Bold Graphic, Right: 2x2 Stat Cards)    ]
------------------------------------------------------------------------
[  Partners: Infinite Horizontal Auto-Scroll Marquee Banner             ]
------------------------------------------------------------------------
[  Products: 4-Column Grid of 630px High Product Cards                 ]
------------------------------------------------------------------------
[  About: 2-Column (Left: Accent line + Red SVG, Right: Accordion)     ]
------------------------------------------------------------------------
[  Impact Banner: 100vh Fullscreen Video + Big Typography + Outline CTA]
------------------------------------------------------------------------
[  Highlights: 3-Card Bento Grid (Left 2x2 Big Card + Right 2 Stacked) ]
------------------------------------------------------------------------
[  Countries: 4-Column Grid with Country Map Outlines in Terracotta Red]
------------------------------------------------------------------------
[  Trace to Source: Split Screen (Left: Text + CTA, Right: Video)      ]
------------------------------------------------------------------------
[  Story: 70vh Background Photo + Narrative Copy + "Find out more" CTA ]
------------------------------------------------------------------------
[  News: 3-Column Video/Image News Card Grid                           ]
------------------------------------------------------------------------
[  SDGs: 9-Column Grid of 18 Square SDG Badges                         ]
------------------------------------------------------------------------
[  Footer: 4 Columns (Logo + Address, Links, Legal, Social Icons)       ]
========================================================================
```

```
========================================================================
MOBILE VIEWPORT (< 1024px / 375px - 430px)
========================================================================
[  Header: Logo Left (size-24) ---------------- Hamburger Menu Right   ]
[  * Drawer: Slides down/over in Brand Red (#9D2D20) with Accordion +  ]
------------------------------------------------------------------------
[  Hero: Fullscreen Autoplay Video (h-screen)                          ]
------------------------------------------------------------------------
[  Stats: Stacked (Graphic Top -> 2x2 Interactive Stat Cards)          ]
------------------------------------------------------------------------
[  Partners: Touch Marquee Carousel                                    ]
------------------------------------------------------------------------
[  Products: Horizontal Touch Swiper with Pill Indicator Dots          ]
------------------------------------------------------------------------
[  About: Stacked (Yellow Bar + Red SVG Top -> Accordion Below)        ]
------------------------------------------------------------------------
[  Impact Banner: 50vh Video Height + Compact Typography               ]
------------------------------------------------------------------------
[  Highlights: Vertical Stack (Square Hero Card -> Secondary Cards)    ]
------------------------------------------------------------------------
[  Countries: Fullscreen Vertical Snap Slider (1 Screen per Country)   ]
------------------------------------------------------------------------
[  Trace to Source: Text Top -> Video Bottom                           ]
------------------------------------------------------------------------
[  Story: Fullscreen Photo Narrative Card                              ]
------------------------------------------------------------------------
[  News: Mobile News Slider with Bullet Indicators                     ]
------------------------------------------------------------------------
[  SDGs: 3-Column Grid of Square SDG Icons                             ]
------------------------------------------------------------------------
[  Footer: Clean Vertical Stack with Full-Color Logo & Contact Details ]
========================================================================
```

---

## 6. Component Library & Section Blueprints

### Header & Navigation

#### Desktop (>= 1024px)
- **Positioning:** `absolute top-0 left-0 w-full z-50 py-4`
- **Background:** Transparent (floats cleanly over the hero video).
- **Structure:**
  1. Centered white inverted SVG logo (`size-28`, 112px).
  2. Horizontal navigation links row below the logo:
     - `flex items-center gap-12 py-6 text-sm uppercase tracking-tight text-white`
  3. Dropdown Menu on hover:
     - Container: `absolute top-8 left-1/2 -translate-x-1/2 w-64 bg-white shadow-lg z-50 py-2`
     - Links: `block px-4 py-2 text-gray-800 hover:bg-zinc-100 hover:text-brand-brown transition-colors`
     - Menu items: **About Us** (*Our Story, Partners, Team*), **Our Products** (*Shea Butter, Coconut Oil, Baobab Oil, Black Soap*), **Impact** (*Sustainability, Biodiversity*), **Faq**, **Contact**.

#### Mobile (< 1024px)
- **Positioning:** `fixed` or `absolute top-0 left-0 w-full z-50 py-4 px-4`
- **Structure:**
  - Left: Logo `size-24` (96px), white inverted.
  - Right: Hamburger button with 3 horizontal white bars (`size-7 fill-white`).
- **Drawer Overlay:**
  - Full viewport slide-over drawer in brand red (`bg-brand-red` / `#9D2D20`).
  - Vertical links in large Oswald uppercase typography (`text-2xl tracking-tight text-white`).
  - Expandable accordion items for submenus indicated by a `+` toggle.

---

### Hero Section
- **Height:** Full viewport height (`h-screen`).
- **Media Background:** Autoplay, muted, looping, playsinline HTML5 video (`/sfc.mp4`).
- **Video Styling:** `w-full h-full object-cover scale-110 object-center`.
- **Overlay:** Subtle vignette gradient overlay preventing bright spots from obscuring the white logo and navigation.

---

### Interactive Impact Stat Cards
- **Container:** `py-8 lg:py-12 bg-brand-accent` (`#F8F2EC`).
- **Layout:** 2-column grid on desktop (`grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`).
  - Left: Giant graphic vector typography in `fill-brand-red`.
  - Right: 2×2 grid of stat cards (`grid grid-cols-2 gap-4`).
- **Card Interactive Animation:**
  - Each card is a `relative group rounded-2xl p-8 py-12 lg:py-20 flex flex-col justify-center items-center overflow-hidden`.
  - **Default State:**
    - Number in Oswald Bold `text-5xl lg:text-7xl tracking-tighter text-white`.
    - Metric label below (e.g., "Rural Women", "Cut in firewood use").
  - **Hover State:**
    - Number fades out and shifts: `group-hover:opacity-0 group-hover:translate-y-4 duration-300`.
    - Story text fades in and slides into place: `opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 w-[80%] text-center text-white`.
- **Card Color Coding:**
  1. Card 1 (`47554+ Rural Women`): Golden Yellow `#F1BA40`
  2. Card 2 (`4 Regenerative Value Chains`): Terracotta Red `#913729`
  3. Card 3 (`10% Profit Reinvestment`): Fresh Green `#99C454`
  4. Card 4 (`89% Cut in Firewood Use`): Warm Sand Tan `#C0A47F`

---

### Partner Marquee Banner
- **Background:** `bg-brand-accent py-4 overflow-hidden`
- **Heading:** `text-brand-red uppercase font-bold font-oswald tracking-tight text-sm text-center mb-4` ("OUR PARTNERS")
- **Mechanism:** Continuous CSS marquee animation scrolling partner logos (L'Occitane, NOË, Unilever, Sofi Tucker Foundation, etc.) smoothly from right to left with pause-on-hover.

---

### Signature Product Showcase Cards
The 4 product cards are one of the most distinctive visual signatures of the website.

- **Height:** `h-[600px] lg:h-[630px]`
- **Border Radius:** `rounded-2xl` (16px)
- **Hover Micro-interaction:** `cursor-pointer hover:scale-95 duration-300` (tactile "press" feel).
- **Internal Spacing:** `p-4 flex relative overflow-hidden`

```
+---------------------------+   +---------------------------+
| SHEA BUTTER               |   | BAOBAB OIL                |
| [Photo top scale 1.7x]    |   | BAOBAB OIL                |
|                           |   | - Intense Hydration       |
|                           |   | - Non Comedogenic         |
|                           |   |                           |
| SHEA BUTTER               |   | [Photo rotated 45 deg]    |
| * 40,000+ Women           |   |                           |
| * Sustains Biodiversity   |   | "6x More Vitamin C..."    |
+---------------------------+   +---------------------------+
  Black Background (#000000)      Mustard Yellow (#F5BD41)

+---------------------------+   +---------------------------+
| COCONUT OIL               |   | BLACK SOAP                |
| Made by local coop...     |   | Made from plant ashes...  |
| Protects roloway monkey   |   |                           |
|                           |   | [Photo bottom-left]       |
|                           |   |                           |
| [Photo bottom-right 0.9x] |   | "Antibacterial properties"|
+---------------------------+   +---------------------------+
  Alabaster White (#F7F6F4)       Terracotta Red (#913729)
```

#### Detailed Styling Per Product:
1. **Shea Butter:**
   - Background: `bg-[#000000]`
   - Text color: `text-white`
   - Image arrangement: `photo absolute top-0 left-1/2 -translate-x-1/2 scale-[1.7] origin-top`
   - Content: Aligned bottom (`self-end`), with list in `font-bobby`.
2. **Baobab Oil:**
   - Background: `bg-[#F5BD41]`
   - Text color: `text-white`
   - Image arrangement: `photo absolute bottom-[240px] lg:bottom-60 left-1/2 -translate-x-1/2 scale-200 rotate-45`
   - Content: Heading top-left; nutritional callout bottom-right ("Known as the African Superfruit / 6x More Vitamin C Than Oranges").
3. **Coconut Oil:**
   - Background: `bg-[#F7F6F4]`
   - Text color: `text-gray-900`
   - Image arrangement: `photo absolute bottom-0 right-0 scale-90 origin-bottom-right`
   - Content: Story at top-left highlighting community resilience and Roloway monkey habitat protection.
4. **Black Soap:**
   - Background: `bg-[#913729]`
   - Text color: `text-white`
   - Image arrangement: `photo absolute bottom-24 left-0 origin-bottom-left`
   - Content: Sustainable cleanser intro top-left; antibacterial & antifungal benefit bottom-right in `font-bobby`.

---

### Principles of Sustainability (Accordion)
- **Container:** `py-8 lg:pt-0 lg:pb-12 bg-brand-accent`
- **Left Column:**
  - Yellow top accent dash: `h-1 w-1/3 lg:w-1/6 bg-[#FFCC00] mb-4`
  - Stylized terracotta brand motif SVG.
- **Right Column:**
  - Title: `text-brand-red uppercase font-bold font-oswald tracking-tighter text-3xl mb-8` ("OUR STRUCTURAL PRINCIPLES OF SUSTAINABILITY")
  - 3 Pill Accordion items:
    - Container: `border border-black rounded-2xl`
    - Header: `px-6 py-4 flex items-center cursor-pointer`
    - Title: `uppercase font-oswald text-brand-brown text-xl font-medium`
    - Icon: `+` / `−` in `ms-auto shrink-0 text-xl`
    - Items:
      1. *Environmental Sustainability*
      2. *Social Sustainability*
      3. *Business Sustainability*

---

### Impact Report Video Banner
- **Container:** `h-[50vh] lg:h-screen relative overflow-hidden isolate flex items-end px-8 py-16`
- **Background Video:** Background video with heavy dark overlay (`after:bg-black/70`).
- **Top Right Investment Tag:**
  - `text-right text-white text-lg tracking-tight`: `"A $4 MILLION MULTI-COUNTRY INVESTMENT IN WOMEN-OWNED GREEN CENTERS"`
- **Main Heading:**
  - `text-[2.6rem] md:text-7xl leading-tight tracking-tight font-black text-white font-oswald uppercase`: `"SHEA GETS GREENER"`
- **CTA Button:**
  - `flex items-center gap-2 w-fit text-white border border-white px-8 py-4 tracking-tight text-sm rounded-2xl uppercase hover:bg-white hover:text-black transition-colors`
  - Includes rotated arrow icon (`-rotate-90`).

---

### Editorial Bento Grid (Highlights)
- **Grid Setup:** `grid lg:grid-flow-col grid-rows-1 lg:grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-4`
- **Featured Card (Left):**
  - Spans `col-span-2 row-span-2 rounded-2xl lg:h-[650px] max-lg:aspect-square relative isolate overflow-hidden group`
  - Image: Full-bleed with subtle dark tint (`bg-black/20`), zoom on hover (`group-hover:scale-105 duration-300`).
  - Text: `text-white capitalize tracking-tight font-light w-full lg:w-[90%] text-xl lg:text-4xl self-end p-6` ("A $15 Million Scale Up : Building A Blueprint That Protects 16 Million Women & 8 Million Trees")
- **Stacked Cards (Right):**
  - Card 1: *Net Zero Fresh Water Footprint*
  - Card 2: *Clean Energy Made From Shea Waste*

---

### Country Presence Grid
Highlights the 4 West African countries where Savannah Fruits operates:
- **Countries:** **Ghana**, **Ivory Coast**, **Burkina Faso**, **Mali**
- **Desktop (>=1024px):** 4-column row (`grid-cols-4 gap-2`) on a rich terracotta background (`bg-brand-red` / `#9D2D20`).
- **Mobile (<1024px):** Fullscreen snapping view (`h-screen snap-start py-20 px-4`).
- **Card Elements:**
  - Detailed white vector country boundary SVG.
  - Hover zoom interaction: `hover:scale-95 duration-300`.
  - Country Label: `text-center uppercase text-2xl tracking-tight text-white font-oswald mt-4`.

---

### Trace to Source Feature Section
- **Layout:** 2-column split (`grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center py-20 px-4 lg:px-8`)
- **Left Column (Story & CTA):**
  - Black top dash: `h-1 w-1/3 lg:w-1/6 bg-black mb-4`
  - H2 Heading: `text-brand-red uppercase font-bold font-oswald tracking-tighter text-[3.52rem] lg:text-8xl` ("TRACE TO SOURCE")
  - Body: Editorial paragraph highlighting supply chain transparency from farm to shelf.
  - Button: `uppercase font-medium bg-[#f5bd41] text-black w-fit py-2 px-6 font-oswald text-xl tracking-tight rounded-lg hover:brightness-105 transition-all` ("ACCESS LIVE TRACE")
- **Right Column (Video Showcase):**
  - `overflow-hidden rounded-2xl aspect-video lg:h-full`
  - Autoplay looping video with `scale-110 object-cover`.

---

### News & Stories Carousel/Grid
- **Header:** Centered Oswald H2 in brand brown: `text-brand-brown uppercase font-bold font-oswald tracking-tighter text-5xl lg:text-6xl text-center mb-8` ("NEWS")
- **Card Format (3 Columns Desktop, Swiper Mobile):**
  - `box aspect-video relative isolate overflow-hidden rounded-lg group`
  - Full-bleed photography with `hover:scale-105 duration-300`.
  - Gradient overlay with white Oswald headline at bottom: `text-white uppercase font-bold tracking-tighter text-2xl lg:text-3xl font-oswald p-4`.
- **Bottom Button:** Centered button `text-white bg-[#ab7e4a] w-fit mx-auto py-2 px-6 font-oswald text-xl capitalize tracking-tight rounded-lg hover:brightness-105` ("View all news").

---

### UN Sustainable Development Goals (SDG Grid)
- **Header:** `text-brand-red uppercase font-bold font-oswald tracking-tighter text-5xl lg:text-6xl text-center mb-8` ("SUSTAINABLE GOALS")
- **Grid Layout:**
  - Desktop: 9 columns × 2 rows = 18 tiles (`grid-cols-9 gap-4`).
  - Mobile: 3 columns × 6 rows (`grid-cols-3 gap-4`).
- **Tile Styling:**
  - `col-span-1 aspect-square bg-brand-tan rounded-lg overflow-hidden p-1`
  - Contains official UN SDG icon badge.

---

### Footer Architecture
- **Background:** Crisp pure white (`bg-white py-8 lg:py-16 px-4 lg:px-12`).
- **4-Column Layout:**
  1. **Brand Identity & Address:**
     - Large full-color SVG tree logo (`size-28 lg:size-40`) in green `#8BC832` and brown `#7E4E18`.
     - Phone: `+233 302737709`
     - Address: *Head Office Tamale, P.O. Box TL 20, Tamale, Northern Region, Ghana*
  2. **Internal Links:**
     - Title: `font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl mb-4`
     - Links: *Our Story, Sustainability, Biodiversity, Faq, Contact Us*
  3. **Legal Links:**
     - Links: *Terms, Privacy*
  4. **Social Links:**
     - Title: `font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl mb-4`
     - Icons: Facebook, LinkedIn, YouTube, Instagram in solid black fill (`fill-black hover:fill-brand-red transition-colors`).

---

## 7. Ready-to-Use Tailwind CSS Config & CSS Tokens

Add this configuration to your project's `tailwind.config.js` or modern `@theme` directive:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#F8F2EC',  // Warm off-white / cream background
          red: '#9D2D20',     // Deep earthy terracotta red
          brown: '#775024',   // Deep tree-bark brown
          tan: '#D6B78F',     // Warm sand / beige
          green: '#8BC832',   // Vibrant natural leaf green
          darkGreen: '#2D5016',
          amber: '#F5BD41',   // Amber / mustard gold
          caramel: '#AB7E4A', // Warm caramel
          soil: '#7E4E18',    // Deep logo brown
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'Arial', 'sans-serif'],
        bobby: ['Bobby Jones Soft', 'Comfortaa', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      }
    }
  }
}
```

### Google Fonts Import
Paste this into your `<head>` or main `index.css`:

```html
<!-- Google Fonts: Oswald & Outfit -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700;900&family=Outfit:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Artisanal Accent Fallback (Comfortaa) -->
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 8. Component Code Snippets (HTML & CSS)

### A. Desktop Navigation Bar
```html
<header class="absolute top-0 left-0 w-full z-50 py-4 hidden lg:block">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <!-- White Inverted Logo for Transparent Video Header -->
    <a href="/" class="mb-2">
      <img src="/logo-white.svg" alt="Savannah Fruits" class="size-28 invert brightness-0" />
    </a>
    
    <!-- Nav Links Row -->
    <ul class="flex items-center gap-12 py-4 text-sm uppercase tracking-tight text-white font-medium">
      <li><a href="/" class="hover:text-brand-amber transition-colors">Home</a></li>
      <li class="relative group">
        <button class="flex items-center gap-1 hover:text-brand-amber transition-colors">
          About Us <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
        </button>
        <div class="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl rounded-lg py-2 hidden group-hover:block">
          <a href="/our-story" class="block px-4 py-2 text-gray-800 hover:bg-zinc-100 hover:text-brand-brown">Our Story</a>
          <a href="/partners" class="block px-4 py-2 text-gray-800 hover:bg-zinc-100 hover:text-brand-brown">Partners</a>
          <a href="/team" class="block px-4 py-2 text-gray-800 hover:bg-zinc-100 hover:text-brand-brown">Team</a>
        </div>
      </li>
      <li><a href="/products" class="hover:text-brand-amber transition-colors">Our Products</a></li>
      <li><a href="/impact" class="hover:text-brand-amber transition-colors">Impact</a></li>
      <li><a href="/faq" class="hover:text-brand-amber transition-colors">FAQ</a></li>
      <li><a href="/contact" class="hover:text-brand-amber transition-colors">Contact</a></li>
    </ul>
  </div>
</header>
```

### B. Interactive Hover Stat Card
```html
<div class="relative group flex flex-col justify-center items-center bg-[#F1BA40] rounded-2xl p-8 py-12 lg:py-20 overflow-hidden cursor-pointer">
  <!-- Front State: Number & Metric -->
  <div class="flex flex-col gap-2 text-center text-white duration-300 group-hover:opacity-0 group-hover:translate-y-4 capitalize">
    <h3 class="font-oswald text-5xl lg:text-7xl font-medium tracking-tighter">
      47,554+
    </h3>
    <p class="font-outfit text-base tracking-wide">Rural Women</p>
  </div>
  
  <!-- Hover Reveal State: Narrative Story -->
  <div class="absolute w-[80%] text-center text-white duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
    <p class="font-outfit text-sm lg:text-base leading-relaxed">
      Directly engaged through women-led cooperatives with democratic self-governance.
    </p>
  </div>
</div>
```

### C. Signature Shea Butter Product Card
```html
<div class="h-[600px] lg:h-[630px] bg-black text-white rounded-2xl p-6 flex relative overflow-hidden cursor-pointer hover:scale-95 duration-300">
  <!-- Top Center Scaled Product Photo -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 scale-[1.7] origin-top w-72 h-72">
    <img src="/shea-butter-pack.png" alt="Hand-crafted Shea Butter" class="w-full h-full object-contain" />
  </div>

  <!-- Bottom Content -->
  <div class="self-end flex flex-col gap-2 z-10">
    <h3 class="font-oswald font-bold tracking-tight uppercase text-2xl">
      Shea Butter
    </h3>
    <ul class="font-bobby text-sm space-y-1 text-white/90">
      <li>• 40,000+ Women Producers</li>
      <li class="ms-2">• Sustains Savanna Biodiversity</li>
      <li class="ms-4">• High Oleic & Stearic Acid Profile</li>
    </ul>
  </div>
</div>
```

---

## 9. Supply-Chain & Traceability Clone Strategy

If you are cloning or creating an equivalent experience for your own venture:
1. **Hero Video First:** Use authentic video of the women producers, raw botanical harvesting, and traditional processing. Keep overlays subtle so human expressions shine.
2. **High-Contrast Cards:** Leverage the 4 distinct signature card colors (Black, Mustard Yellow, Alabaster White, Terracotta Red) to establish high-end shelf presence.
3. **Typographic Polish:** Never mix too many fonts. Stick strictly to:
   - **`Oswald`** for bold, impactful, high-contrast headings and statistics.
   - **`Outfit`** for clean, effortless readability in narrative copy.
   - **Artisanal font** sparingly for handwritten bullet points and claims.
4. **Interactive Delight:** The card press (`hover:scale-95`) and stat flip reveal are memorable micro-interactions that communicate craft and care.

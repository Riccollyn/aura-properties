# AURA Properties

AURA Properties is a responsive residential property landing page. The site presents the development, residence types, amenities, location, and enquiry experience in a polished interface designed for desktop, tablet, and mobile devices.

## Live Demo

View the deployed website: [https://aura-properties.vercel.app/](https://aura-properties.vercel.app/)

## Audience and Primary Action

The website is designed for prospective homebuyers interested in modern residential living. Its primary journey encourages visitors to explore the available residence types and then register their interest through the demo enquiry form.

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Full-screen Hero section with primary calls to action
- About section with poster-based video playback and browser controls
- Interactive residence floor plans for Types A, B, C, and D
- Filterable property Gallery with responsive images
- Location section with development details and a map
- Register Interest contact form with accessible fields and submission feedback
- Smooth section navigation, active navigation highlighting, and a mobile menu
- Subtle scroll-reveal animations with reduced-motion support

> **Note:** The Register Interest form is a demonstration only. It does not send, store, or log enquiry details.

## Tech Stack

- [React](https://react.dev/) for the component-based interface
- [Vite](https://vite.dev/) for development and production builds
- [Tailwind CSS v4](https://tailwindcss.com/) for responsive styling
- JavaScript (ES modules)
- [Lucide React](https://lucide.dev/) for interface icons
- ESLint for code quality checks

## Technical Approach

React was selected to organize the page into focused components and manage interactive state for the navigation, residence tabs, gallery filters, video playback, and form feedback. Vite provides a lightweight development server and optimized production build, while Tailwind CSS v4 keeps responsive and state-based styling close to each component.

The page sections, responsive layouts, navigation behavior, residence selector, gallery filtering, demo form feedback, reveal animations, and branded favicon were implemented specifically for this project. Custom utilities handle section scrolling and active navigation, while a reusable `Reveal` component and `useReveal` hook coordinate one-time viewport animations.

Supporting tooling includes React DOM, the Vite React and Tailwind plugins, Lucide React, and ESLint with React Hooks and React Refresh rules.

## Design Decisions

### Navy-and-white visual direction

Deep navy backgrounds, white content areas, and restrained warm accent colors create a professional residential-property identity. Strong contrast separates major sections and keeps calls to action visually distinct without competing with the property imagery.

### Clear content hierarchy

Each section uses a consistent sequence of eyebrow text, heading, supporting copy, and focused interaction. The page moves from the development proposition to lifestyle context, residence comparisons, imagery, location, and enquiry. This helps prospective homebuyers scan key information and move naturally toward exploring a residence or registering interest.

### Figma and final implementation

The [Figma design](https://www.figma.com/design/r2Mtpy7okliUG26K7BRC6s/AURA-Properties?node-id=9-42&t=3KCDECv1FJ3HxoQG-0) established the visual direction for the project. The final implementation translates that direction into breakpoint-specific navigation, responsive grids, adaptive image sizing, mobile gallery scrolling, and fixed-header anchor offsets. A pixel-by-pixel comparison is not documented, so no additional design differences are claimed.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Riccollyn/aura-properties.git
cd aura-properties
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Build Instructions

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the project lint checks:

```bash
npm run lint
```

## Project Structure

```text
aura-properties/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── gallery/
│   │   ├── about-optimized.mp4
│   │   ├── about-poster.jpg
│   │   ├── AURA_Floor_Plan_Type_*.png
│   │   └── property images and location map
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Location.jsx
│   │   ├── Residences.jsx
│   │   └── Reveal.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── utils/
│   │   └── sectionNavigation.js
│   ├── animations.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Responsive Design and Testing

The code includes responsive breakpoints for mobile, tablet, and desktop layouts. Responsive checks were completed at the representative viewport widths below. Browser names and physical devices were not recorded, so no browser- or device-specific claims are made.

| Screen width | Test | Result |
| --- | --- | --- |
| 320px and 375px | Layout, mobile menu, horizontal overflow, touch targets, and gallery scrolling | **Passed** |
| 768px | Tablet layout, navigation transition, grids, media, and form | **Passed** |
| 1024px | Desktop navigation, section alignment, tabs, gallery, and map | **Passed** |
| 1440px | Large-screen spacing, maximum widths, imagery, and section balance | **Passed** |

### Functional verification

| Area | Test | Result |
| --- | --- | --- |
| Navigation | Test desktop and mobile links, smooth scrolling, fixed-header offsets, active highlighting, and menu closing | **Passed** |
| Residence tabs | Select Types A–D and confirm the matching floor plan and specifications | **Passed** |
| Gallery filters | Select every category and confirm the expected images and result count | **Passed** |
| Video playback | Confirm the poster, play button, optimized video, and browser controls work | **Passed** |
| Form validation | Confirm required fields block empty submission and valid input displays the demo message without sending data | **Passed** |
| Lint | Run `npm run lint` | **Passed in the development environment** |
| Production build | Run `npm run build` | **Passed in the development environment** |

### Accessibility verification

| Check | Current evidence | Result |
| --- | --- | --- |
| Keyboard navigation | Links, buttons, tabs, form controls, and interruption keys are implemented with native interactive elements | **Manual verification required** |
| Visible focus | Interactive controls include `focus-visible` or focus-ring styles | **Passed static code inspection; manual browser verification required** |
| Labels and names | Navigation landmarks, form labels, button labels, tab roles, and status messaging are present | **Passed static code inspection; assistive-technology verification required** |
| Image alt text | Content images include descriptive `alt` text; decorative icons are hidden from assistive technology | **Verified by static code inspection** |
| Color contrast | Navy, white, slate, and accent combinations require measurement with a contrast tool | **Manual measurement required** |
| Reduced motion | CSS and JavaScript check `prefers-reduced-motion` and disable or bypass animation | **Passed static code inspection; operating-system preference verification required** |

## Resolved Issue / Verification

The About section source video was re-encoded for web delivery using H.264 and reduced from approximately **84.87 MiB** to **10.04 MiB**, an asset-size reduction of approximately **88.17%**. The optimized file was validated through a complete decode check before integration.

This confirms a substantially smaller video asset. No claim is made about measured page-load, rendering, or Core Web Vitals improvements because those performance measurements have not been conducted.

## Deployment and Maintenance

### Deploying to Vercel

1. Import the GitHub repository into Vercel.
2. Select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Configure `master` as the Production Branch.
5. Deploy the project.

When the GitHub integration is connected and `master` is configured as the Production Branch, pushing a commit to `master` triggers a new production deployment automatically. The local repository is currently on `master`; the Vercel dashboard setting should be confirmed manually before submission.

### Updating content

| Content | Primary file or directory |
| --- | --- |
| Header navigation and mobile menu | `src/components/Header.jsx` |
| Hero copy and calls to action | `src/components/Hero.jsx` |
| About copy, features, poster, and video | `src/components/About.jsx` and `src/assets/` |
| Residence types, specifications, and floor plans | `src/components/Residences.jsx` and `src/assets/AURA_Floor_Plan_Type_*.png` |
| Gallery categories and images | `src/components/Gallery.jsx`, `src/components/Gallery.css`, and `src/assets/gallery/` |
| Location, map, and demo form | `src/components/Location.jsx` and the location map in `src/assets/` |
| Footer content and contact details | `src/components/Footer.jsx` |
| Global theme and reveal animations | `src/index.css` and `src/animations.css` |

### Restoring a previous version

- **Git:** use `git revert <commit-hash>` to create a safe reversal commit, review it locally, and push it to `master`.
- **Vercel:** select a known-good deployment in the Vercel dashboard and use the available redeploy or rollback action. Confirm the exact control available for the project plan and account.

## Known Limitations and Future Improvements

- The Register Interest form is demonstration-only; no enquiries are sent, stored, or logged.
- Production form handling would require a secure backend or form service, server-side validation, spam protection, privacy-consent handling, and success/error states.
- Browser, physical-device, keyboard, assistive-technology, and measured color-contrast testing should be completed before production release.
- Image delivery could be moved to an image CDN with automated format selection and responsive transformations.
- Performance should be measured with browser profiling and tools such as Lighthouse before setting optimization targets.
- Real property content, contact details, privacy documentation, analytics consent, and asset usage rights require stakeholder approval before launch.

## Time Spent

**Approximate development time:** 5 hours

## Credits and Assistance Disclosure

ChatGPT and OpenAI Codex were used for planning, implementation guidance, code generation, debugging, and documentation assistance. AI-assisted work affected the responsive component implementation, navigation and fixed-header offsets, residence icons, About video optimization and integration, reveal-animation timing, favicon creation, lint/build troubleshooting, and README preparation.

The candidate remains responsible for reviewing the final implementation and submission. Automated lint and production-build checks and the responsive and functional checks recorded above have been completed. Browser-specific, physical-device, assistive-technology, measured-contrast, and pixel-comparison results are not claimed because those details have not been confirmed.

Open-source libraries and tools used by the project include React, React DOM, Vite, Tailwind CSS, Lucide React, ESLint, the Vite React plugin, and the Tailwind Vite plugin. Their respective project licenses apply.

**Visual Assets**

- Some property photography and video assets were sourced from [Pexels](https://www.pexels.com/).
- Additional visual assets were AI-generated and used to support the fictional AURA Properties concept.
- The website layout, visual styling, and responsive implementation were customized for this project.

## Submission Links

- Live website: [https://aura-properties.vercel.app/](https://aura-properties.vercel.app/)
- GitHub repository: [https://github.com/Riccollyn/aura-properties](https://github.com/Riccollyn/aura-properties)
- Figma design: [https://www.figma.com/design/r2Mtpy7okliUG26K7BRC6s/AURA-Properties?node-id=9-42&t=3KCDECv1FJ3HxoQG-0](https://www.figma.com/design/r2Mtpy7okliUG26K7BRC6s/AURA-Properties?node-id=9-42&t=3KCDECv1FJ3HxoQG-0)

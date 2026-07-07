# Epya Contact Settings

Front-end assignment: a responsive **Contact Setting** page implemented from the [Figma design](https://www.figma.com/design/m71i8XL0VoFfqpUZk2nCbo/Test-front-end?node-id=1-8738&m=dev).

**Repository:** [github.com/AhmadAdnan93/epya-contact-settings](https://github.com/AhmadAdnan93/epya-contact-settings)  
**Live demo:** [epya-contact-settings.vercel.app](https://epya-contact-settings.vercel.app) *(update this URL after deployment)*

---

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | SCSS + Bootstrap 5 / React Bootstrap |
| i18n | react-i18next (English + Arabic, LTR/RTL) |
| Icons | Bootstrap Icons + custom PNG assets |

---

## Prerequisites

- **Node.js** 18 or newer ([nodejs.org](https://nodejs.org/))
- **npm** 9 or newer (included with Node.js)
- **Git** (to clone the repository)

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmadAdnan93/epya-contact-settings.git
   cd epya-contact-settings
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

No environment variables or API keys are required for local development.

---

## Running locally

**Development server** (hot reload):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Production build:**

```bash
npm run build
```

**Preview production build:**

```bash
npm run preview
```

**Lint:**

```bash
npm run lint
```

---

## Configuration

| Item | Details |
| --- | --- |
| **Port** | Default `5173` (Vite). Vite picks the next free port if busy. |
| **Languages** | Toggle **EN / AR** via the floating switcher (bottom-right). Arabic sets `dir="rtl"` on the document. |
| **Translations** | `src/i18n/locales/en.json`, `src/i18n/locales/ar.json` |
| **Design tokens** | `src/styles/_variables.scss` |
| **Env vars** | None required |

---

## Features

- **App shell:** page header, icon sidebar, profile sidebar
- **Contact Setting page:** stats row, privacy settings, field configuration, view & preview cards, contacts table
- **Responsive layout:** desktop, tablet, and mobile (contacts table becomes stacked cards on small screens)
- **Accessibility:** semantic HTML, ARIA labels on icon-only controls, keyboard support on preview cards

---

## Project structure

```
epya-contact-settings/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images (icons, avatars, flags)
│   ├── components/
│   │   ├── contact-settings/   # Header, form, table
│   │   └── layout/             # AppShell, sidebars, page header
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/        # en.json, ar.json
│   ├── pages/
│   │   └── ContactSettingsPage.tsx
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _base.scss
│   │   └── main.scss
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Deployment (live demo)

This project is a static Vite SPA. Deploy the `dist/` folder after `npm run build`.

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Use these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Vercel will provide a live URL.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
```

Drag and drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo with build command `npm run build` and publish directory `dist`.

---

## Browser support

Latest versions of Chrome, Edge, Firefox, and Safari.

---

## Author

**Ahmad Adnan** — [GitHub @AhmadAdnan93](https://github.com/AhmadAdnan93)

Epya Solutions front-end assignment.

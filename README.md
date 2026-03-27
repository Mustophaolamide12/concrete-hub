# Concrete Contributor Hub

An unofficial contributor hub for the Concrete protocol community — built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## Run Locally

### Prerequisites
- Node.js 18 or higher → https://nodejs.org
- npm (comes with Node.js)

### Steps

```bash
# 1. Unzip the project
unzip concrete-hub.zip
cd concrete-hub

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser. The page hot-reloads as you edit files.

### Build for production (optional local test)

```bash
npm run build
npm start
```

---

## Push to GitHub

### First time setup

```bash
# 1. Initialise git inside the project folder
git init
git add .
git commit -m "Initial commit — Concrete Contributor Hub"

# 2. Create a new repository on GitHub
#    Go to https://github.com/new
#    Name it: concrete-contributor-hub
#    Leave it empty (no README), then copy the repo URL

# 3. Link and push
git remote add origin https://github.com/YOUR_USERNAME/concrete-contributor-hub.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Future updates

```bash
git add .
git commit -m "describe your changes here"
git push
```

---

## Deploy to Vercel (free hosting)

### Option A — Import from GitHub (recommended)

1. Go to **https://vercel.com** and sign up / log in with your GitHub account
2. Click **"Add New Project"**
3. Select your `concrete-contributor-hub` repository
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **"Deploy"**

Your site will be live at `https://concrete-contributor-hub.vercel.app` within ~60 seconds.

Every time you push to GitHub, Vercel automatically redeploys.

### Option B — Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Inside the project folder, run:
vercel

# Follow the prompts:
#   - Link to existing project? No
#   - Project name: concrete-contributor-hub
#   - Which directory? ./  (press Enter)
#   - Override settings? No

# 3. For production deployment:
vercel --prod
```

---

## Project Structure

```
concrete-hub/
├── app/
│   ├── globals.css        # Global styles + Tailwind + Google Fonts
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky navbar
│   ├── Hero.tsx           # Hero section
│   ├── StartHere.tsx      # 4-card info grid
│   ├── TeamSection.tsx    # Team grid + modal trigger
│   ├── TeamCard.tsx       # Individual team card
│   ├── ProfileModal.tsx   # Profile modal on card click
│   ├── WhoToTalkTo.tsx    # Most Active Contributors section
│   ├── Recaps.tsx         # Weekly recap cards
│   ├── Footer.tsx         # Footer
│   └── Divider.tsx        # Section divider line
├── data/
│   ├── team.json          # All team member data
│   └── types.ts           # TypeScript interfaces
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Customising Content

### Add / edit team members
Edit `data/team.json`. Schema:

```json
{
  "id": 6,
  "name": "Full Name",
  "initials": "FN",
  "role": "Role Title",
  "description": "Short card bio",
  "avatar": "https://image-url.png",
  "gradient": "135deg, #4ade80, #22d3ee",
  "socials": {
    "x": "twitterhandle",
    "xUrl": "https://x.com/twitterhandle"
  },
  "activity": ["Activity 1", "Activity 2"],
  "whyFollow": "One-line reason.",
  "whatTheyDo": "Longer modal description."
}
```

### Change colours
Edit the CSS variables in `app/globals.css` and mirror them in `tailwind.config.ts`.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Space Mono + Inter (Google Fonts)
- **Images**: Next.js `<Image>` with CryptoRank CDN


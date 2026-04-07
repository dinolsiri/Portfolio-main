# Dinol Siriwardena Portfolio

A modern, premium dark-themed portfolio showcasing AI/ML expertise, full-stack development, and machine learning projects. Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Dark Theme**: Modern #020617 background with professional blue (#3b82f6) accents
- **Glassmorphism UI**: Blurred cards with transparency and subtle glow effects
- **Smooth Animations**: Reveal animations, hover effects, and smooth transitions
- **Responsive Design**: Fully responsive from mobile to desktop
- **Performance Optimized**: Fast load times with optimized assets

## 🚀 Sections

- `/` - Hero section with profile spotlight
- `/about` - Professional background and expertise
- `/experience` - Career timeline and highlights
- `/projects` - Featured AI/ML and full-stack projects with deep dives
- `/projects/[slug]` - Detailed project case studies
- `/skills` - Categorized technical skills (Frontend, Backend, AI/ML, DevOps, Testing)
- `/contact` - Modern contact section with social links

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Lucide, simple-icons)
- **UI Components**: Reusable glass-card components with reveal animations

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## 🔧 Build & Deploy

```bash
npm run build
npm start
```

**Note:** On Windows machines with limited memory, you may need to increase Node.js memory allocation:

```powershell
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run build
```

### GitHub Pages Hosting

- Auto-deploys from `main` branch via GitHub Actions
- Workflow: `.github/workflows/deploy-pages.yml`
- Settings: Set **Pages** source to **GitHub Actions**
- URL: `https://dinolsiri.github.io/Portfolio/`

## 📄 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects listing and detail pages
│   ├── skills/            # Skills showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI primitives (GlassCard, Reveal, SectionHeading)
│   ├── nav.tsx           # Navigation
│   ├── footer.tsx        # Footer
│   ├── project-card.tsx  # Project card component
│   ├── cta-banner.tsx    # Call-to-action banner
│   └── stack-strip.tsx   # Tech stack display
├── data/                  # Site configuration
│   └── site.ts           # Profile, projects, skills, experience
├── public/                # Static assets
│   ├── cv/               # CV files
│   └── images/           # Images
└── tailwind.config.ts    # Tailwind configuration
```

## 🎯 Key Features

### Featured Projects
- **AI-Powered Breast Cancer Detection System** - ML system achieving 90%+ accuracy
- **AI-Based Personality Prediction System** - End-to-end ML pipeline with predictions
- **Pahana Edu Online Billing System** - Enterprise Java EE system with 85%+ test coverage

### Skills Categories
- Frontend Development (React, Next.js, TypeScript)
- Backend Development (Java, Python, FastAPI, NestJS)
- Machine Learning & AI (Scikit-learn, TensorFlow, neural networks)
- Databases (SQL, PostgreSQL, MongoDB)
- DevOps & Cloud (Docker, GCP, Git, CI/CD)
- Testing & Tools (Jest, Cypress, JUnit, etc.)

## 💬 Contact

- Email: dinolransukasiriwardena2005@gmail.com
- Phone: +94 77 202 6501
- GitHub: https://github.com/dinolsiri
- LinkedIn: https://www.linkedin.com/in/dinol-siriwardena-29b2932b1
- Location: Colombo, Sri Lanka

## 📝 Notes

- All content is user-provided and verified
- Professional contact details only
- CV available at `/cv/` (if added)
- Projects feature GitHub links and detailed descriptions

---

**Built with ❤️ for recruiters and AI/ML engineers**

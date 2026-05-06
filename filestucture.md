resume-zenith-48/
├── 📁 Backend/ # Express.js backend server
│ ├── 📄 index.js # Main server entry point
│ ├── 📄 form.js # PDF generation routes & logic
│ └── 📁 template/
│ ├── 📄 resume_template.tex # LaTeX resume template
│ └── 📁 userLatex/ # Generated user-specific .tex files
│
├── 📁 src/ # React frontend source
│ ├── 📄 main.jsx # React app entry point
│ ├── 📄 index.css # Global styles
│ ├── 📁 components/
│ │ ├── 📄 HomePage.jsx # Landing page component
│ │ ├── 📄 ResumeBuilder.jsx # Main resume form component
│ │ ├── 📁 orginal/
│ │ │ └── 📄 ResumeBuilder.jsx # Original/backup version
│ │ └── 📁 ui/ # Reusable UI components
│ │ ├── 📄 accordion.tsx
│ │ ├── 📄 button.jsx
│ │ ├── 📄 input.jsx
│ │ ├── 📄 label.jsx
│ │ ├── 📄 textarea.jsx
│ │ ├── 📄 toast.jsx
│ │ ├── 📄 toaster.jsx
│ │ ├── 📄 tooltip.jsx
│ │ ├── 📄 sonner.jsx
│ │ └── 📄 use-toast.js
│ ├── 📁 pages/
│ │ ├── 📄 Index.jsx # Home page
│ │ └── 📄 NotFound.jsx # 404 page
│ ├── 📁 hooks/
│ │ ├── 📄 use-mobile.jsx # Mobile detection hook
│ │ └── 📄 use-toast.js # Toast notifications hook
│ ├── 📁 lib/
│ │ └── 📄 utils.js # Utility functions
│ └── 📁 template/ # Frontend LaTeX templates
│ ├── 📄 resume_template.tex
│ └── 📁 orginal/
│ └── 📄 resume_template.tex
│
├── 📁 public/ # Static assets
│ ├── 📄 favicon.ico
│ ├── 📄 placeholder.svg
│ └── 📄 robots.txt
│
├── 📁 dist/ # Vite build output
│ ├── 📄 index.html
│ ├── 📄 favicon.ico
│ ├── 📄 placeholder.svg
│ └── 📄 robots.txt
│
├── 📁 node_modules/ # NPM dependencies (auto-generated)
│
├── 📄 package.json # NPM dependencies & scripts
├── 📄 package-lock.json # Locked dependency versions
├── 📄 bun.lockb # Bun lockfile
├── 📄 index.html # Main HTML template
├── 📄 vite.config.js # Vite bundler configuration
├── 📄 tailwind.config.js # Tailwind CSS configuration
├── 📄 postcss.config.js # PostCSS configuration
├── 📄 jsconfig.json # JavaScript project configuration
├── 📄 components.json # UI components configuration
├── 📄 README.md # Project documentation
├── 📄 Dockerfile # Container build instructions
├── 📄 .dockerignore # Docker ignore patterns
├── 📄 .gitignore # Git ignore patterns
├── 📄 docker-compose.yml # Multi-container setup
├── 📄 netlify.toml # Netlify deployment config
└── 📄 .env.example # Environment variables template

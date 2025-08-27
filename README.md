# Resume Generator

A Vite + React app with a Node/Express backend that generates PDF resumes from a LaTeX template using Handlebars and the `tectonic` LaTeX engine.

## Tech Stack

- Frontend: React 18, Vite 5, Tailwind, shadcn/ui
- Backend: Node.js, Express
- PDF: Handlebars templates + `tectonic` CLI
- Routing: react-router-dom

## Project Structure

- `src/` — React app (UI, forms, pages)
- `Backend/` — Express server and PDF generation logic
  - [Backend/form.js](cci:7://file:///c:/Users/amman/Downloads/project%20two/resume-zenith-48/Backend/form.js:0:0-0:0) — endpoints `/form` and `/form/preview`, LaTeX compilation
  - `Backend/template/` — LaTeX templates and output ([userLatex/](cci:1://file:///c:/Users/amman/Downloads/project%20two/resume-zenith-48/Backend/form.js:17:0-30:1))
- `index.html`, `vite.config.js`, `tailwind.config.js`

## Prerequisites

- Node.js 18+
- For local PDF generation: `tectonic` must be installed and available on PATH
  - Linux (Debian/Ubuntu): `sudo apt-get install tectonic`
  - macOS: `brew install tectonic`
  - Windows: install from Tectonic releases or use WSL/Docker

## Installation

```bash
# install deps
npm install
```

## Running Locally

1.  **Start the Backend Server:**

    ```bash
    node Backend/index.js
    ```

    The backend server will be running on `http://localhost:3000`.

2.  **Start the Frontend Development Server:**

    ```bash
    npm run dev
    ```

    The frontend development server will be running on `http://localhost:5173`.

## Live Site

This project is deployed as the **ATS Resume Builder**.


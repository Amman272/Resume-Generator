# Resume Generator
[A Vite + React app with a Node/Express backend that generates PDF resumes from a LaTeX template using Handlebars and the `tectonic` LaTeX engine.


🔗 **Live Site**: [ATS Resume Builder]([https://your-live-site-url.com](https://resume-generator-tfp4.onrender.com/))

## Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind, shadcn/ui
- **Backend**: Node.js, Express
- **PDF Generation**: Handlebars templates + `tectonic` CLI
- **Routing**: react-router-dom

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher.
- **Tectonic**: Required for local PDF generation. You can download it from the [official Tectonic website](https://tectonic-typesetting.github.io/).

### Tectonic Installation

- **Linux (Debian/Ubuntu)**:
  ```bash
  sudo apt-get install tectonic
  ```
- **macOS**:
  ```bash
  brew install tectonic
  ```
- **Windows**: Install from the [Tectonic releases page](https://github.com/tectonic-typesetting/tectonic/releases) or use WSL/Docker.

## Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd resume-zenith-48
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

## Running Locally

To run the application on your local machine, follow these steps:

1.  **Start the Backend Server**:

    Open a terminal and run the following command:

    ```bash
    node Backend/index.js
    ```

    The backend server will start on `http://localhost:3000`.

2.  **Start the Frontend Development Server**:

    In a separate terminal, run this command:](https://resume-generator-tfp4.onrender.com/)

    ```bash
    npm run dev
    ```

    The frontend development server will be available at `http://localhost:5173`.

## Live Site

This project is deployed and live as the **ATS Resume Builder**.

# Kriti Shukla — Personal Portfolio

A professional, responsive personal portfolio for **Kriti Shukla**, a BCA student focused on **Full-Stack Development and AI integration**.

The project is intentionally built with **HTML5, CSS3 and Vanilla JavaScript only**. There is no React, Bootstrap, Tailwind, backend or database in the portfolio itself.

## Overview

The portfolio presents:

- A developer-focused hero section
- About and focus areas
- Categorized technical skills with filtering
- BCA education timeline
- Three real projects: SchedAI, AirWatch AI and Expensely
- Hackathon, certification and academic achievements
- Frontend-only contact form validation
- Responsive mobile navigation
- Project filtering and detail modals
- Scroll reveal animations
- Typing/rotating role animation
- Scroll-to-top control
- Dynamic copyright year
- Accessibility and SEO metadata

## Featured Projects

### SchedAI
**AI-Powered Department Scheduling & Academic Coordination System**

A department-focused system for timetable generation, scheduling constraints, teacher workload fairness, substitutions, academic reports, notes/PYQs and Gemini-assisted academic support.

Technologies represented in the project: React, TypeScript, FastAPI, Python, MySQL, Google Gemini API and OR-Tools.

- GitHub: https://github.com/kritika7268/SchedAI
- Live Demo: https://schedai-frontend-qy8g.onrender.com

### AirWatch AI
**AI-powered Hyperlocal Air Pollution Detection & Civic Action Platform**

A full-stack environmental intelligence platform using Google Gemini 2.0 Flash for multimodal citizen-photo verification and physics-informed risk reasoning, with Leaflet hotspot mapping and municipal alert workflows.

Verified stack: React 18, Vite, Tailwind CSS, Leaflet, FastAPI, Python, Pillow, Axios and Google Gemini 2.0 Flash.

- GitHub: https://github.com/kritika7268/airwatch-ai
- Live Demo: https://airwatch-ai-992k.onrender.com
- Real screenshots: `home.png`, `dashboard.png`, `ai-analysis.png`, `pollution-map.png`, `alerts.png`

### Expensely
**AI + JavaScript Personal Finance & Expense Tracking Platform**

A production-style full-stack finance application with a JavaScript/React frontend and FastAPI backend. It provides secure authentication, transaction management, budget guardrails, interactive financial analytics, CSV export and personalization.

Verified stack: React 18.3, Vite, Tailwind CSS, JavaScript, FastAPI, Python, SQLAlchemy, MySQL/SQLite, Recharts, Axios and JWT authentication.

- GitHub: https://github.com/kritika7268/expense-tracker
- Live Demo: https://expensely-frontend.onrender.com
- Real screenshots: `login.png`, `dashboard.png`, `transactions.png`, `analytics.png`, `budget.png`

## Features

- Sticky glass-style navigation
- Responsive hamburger menu
- Active section navigation
- Smooth scrolling
- Hero role typing animation
- Skill category filtering
- Project category filtering
- Project detail modal
- Escape-key and outside-click modal closing
- Frontend contact validation
- Accessible form labels and focus states
- Scroll reveal using IntersectionObserver
- Scroll-to-top button
- Dynamic footer year
- Reduced-motion support
- No external UI framework or runtime dependency

## Technologies Used

### Portfolio implementation
- HTML5
- CSS3
- Vanilla JavaScript

### Portfolio content
- Full-stack web development
- Python / FastAPI
- MySQL / SQL
- Google Gemini API
- Git / GitHub

## Folder Structure

```text
Personal_portfolio/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   │   ├── schedai.png
│   │   ├── airwatch.png
│   │   ├── airwatch.svg
│   │   ├── expensely.png
│   │   └── expensely.svg
│   │
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── github.svg
│   │   └── linkedin.svg
│   │
│   └── resume/
│       └── kriti_resume.pdf
│
└── screenshots/
```

## Run Locally

No package installation is required.

### Option 1 — Open directly

Open `index.html` in a modern browser.

### Option 2 — Use a local static server

From the project folder:

```bash
cd Personal_portfolio
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Screenshots

Project cards now use the official project screenshots from the corresponding GitHub repositories. The current primary images are:

- AirWatch AI: `screenshots/home.png`
- Expensely: `screenshots/dashboard.png`

The repositories also contain additional real screenshots for their login, dashboard, analytics, map and alert views.

## Customization

The main editable content is in `index.html`.

Project modal details and project links are kept in `js/script.js`.

For future updates, replace project images and resume files while keeping the existing relative paths, or update the corresponding HTML/JS references.

The LinkedIn navigation currently points to LinkedIn's public site because a personal profile URL was not available in the project data. Replace that single URL with the personal profile URL when available.

## Project Purpose

This portfolio is designed to present a serious BCA student profile for software-development, full-stack and AI-oriented internship/job applications without relying on a frontend framework.

## Future Improvements

- Add a real form backend or form-service integration
- Add a dedicated project case-study page
- Add a downloadable project-focused resume version
- Add automated deployment through GitHub Pages or another static host
- Add Lighthouse/performance monitoring to the deployment workflow

## Author

**Kriti Shukla**

BCA Student · Full-Stack Developer · AI Enthusiast

GitHub: https://github.com/kritika7268

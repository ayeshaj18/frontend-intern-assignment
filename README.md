# Frontend Intern Assignment

Welcome — this repository contains the frontend intern assignment. The goal of this project is to demonstrate core frontend skills: component design, responsive layout, accessibility, state management, and build tooling.


## Table of contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install dependencies](#install-dependencies)
  - [Run locally](#run-locally)
  - [Build for production](#build-for-production)
- [Testing & quality](#testing--quality)
- [Project structure](#project-structure)

## Project overview
Briefly describe the assignment here: what the app should do, user stories, and acceptance criteria. Example:
- A responsive single-page application that lists items, allows searching and filtering, and shows details for each item.
- Accessible UI (keyboard and screen reader-friendly).
- Mobile-first, responsive layout.

## Features (example)
- Responsive layout (mobile / tablet / desktop)
- Search and filter
- Item detail view (modal or route)
- Form with validation
- Accessible interactions (ARIA roles, keyboard focus management)
- Basic unit / integration tests

## Tech stack
List the technologies used. Example:
- Framework: React (or Vue, Svelte, plain HTML/CSS/JS — replace as appropriate)
- Bundler / dev server: Vite / Create React App / Next.js / other
- Styling: CSS Modules / Tailwind / SASS / plain CSS
- Testing: Jest + Testing Library / Cypress (E2E)
- Linting / formatting: ESLint / Prettier

Update this section to reflect the actual repo stack.

## Getting started

### Prerequisites
- Node.js (LTS) installed
- npm >= 8, or yarn / pnpm if used

### Install dependencies
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn
```
Or using pnpm:
```bash
pnpm install
```

### Run locally
Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open http://localhost:5173 (or the port shown in your terminal) to view the app.

### Build for production
```bash
npm run build
# or
yarn build
# or
pnpm build
```
Production files will be in the `dist/` (or `build/`) directory — update path according to your tooling.

## Testing & quality
Run unit and integration tests:
```bash
npm test
# or
yarn test
```
Run linter and formatter:
```bash
npm run lint
npm run format
```
Update these commands to match the scripts defined in package.json.

## Project structure (example)
Adjust to match the repository structure.
```
/src
  /components     # Reusable components
  /pages          # Page-level components or routes
  /styles         # Global styles / variables
  /utils          # Utility functions and helpers
  main.jsx|ts     # App bootstrap
/package.json
/vite.config.js   # or equivalent bundler config
/README.md
```





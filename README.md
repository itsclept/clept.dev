# clept.dev

A modern, responsive web application built with **React 19**, **TypeScript**, **Tailwind CSS**, and **SCSS**.
Designed to be sleek, theme-aware (dark/light mode), and easy to extend.

---

## 🚀 Features

- ⚛️ React 19 with modern JSX runtime
- 🧠 TypeScript for type safety and DX
- 🎨 Tailwind CSS for utility-first styling
- 💅 SCSS for structured custom styles
- 🌙 System-based dark mode support
- ⚡ Vite for fast builds and hot reload
- 📁 Modular file structure

---

## 📦 Stack

| Tech         | Purpose                     |
| ------------ | --------------------------- |
| React 19     | Frontend framework          |
| TypeScript   | Static typing               |
| Tailwind CSS | Utility-based styling       |
| SCSS         | Custom and component styles |
| Vite         | Build tool and dev server   |
| ESLint       | Linting and best practices  |

---

## 🧪 Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

### 3. Lint the code

```bash
npm run lint
```

### 4. Build for production

```bash
npm run build
```

---

## 🌓 Theming

This app supports **light/dark mode** based on the user's system preference.

Theme colors are defined with CSS variables in `@layer base` via Tailwind. You can customize them in:

```
src/styles/global.scss
```

---

## 📁 Project Structure

```bash
src/
├── components/      # Reusable UI components
├── pages/           # Page-level components
├── styles/          # Global and modular styles
├── App.tsx          # Main app entry
├── main.tsx         # Vite/React bootstrap
```

---

## 📄 License

MIT © [itsclept](https://github.com/itsclept)

---

## Credits

Built by clept

---

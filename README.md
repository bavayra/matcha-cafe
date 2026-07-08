# Matcha — Vite + React + TypeScript + Tailwind

Краткое описание (русский)

Это одностраничный проект, созданный на базе Vite с использованием React и TypeScript. Для оформления используется Tailwind CSS; подключены кастомные шрифты и набор компонентов для отображения напитков, истории и контактов.

Short description (English)

Single-page project built with Vite, React and TypeScript. Styling is done with Tailwind CSS; custom fonts and a set of UI components are included for drinks, history and contacts.

Технологии (русский)

- Vite
- React + TypeScript
- Tailwind CSS (Preflight)
- PostCSS

Technologies (English)

- Vite
- React + TypeScript
- Tailwind CSS (Preflight)
- PostCSS

Ключевые особенности (русский)

- Минималистичный SPA-интерфейс
- Компонентная структура для повторного использования
- Кастомные шрифты локально в `fonts/`
- Доступность: видимые индикаторы фокуса и семантическая разметка

Key features (English)

- Minimal SPA layout
- Reusable component structure
- Local custom fonts in `fonts/`
- Accessibility: visible focus indicators and semantic markup

Быстрый старт (русский)

1. Установите зависимости:

```bash
npm install
```

2. Запустите режим разработки:

```bash
npm run dev
```

3. Сборка для продакшна:

```bash
npm run build
```

4. Просмотр собранного билда локально:

```bash
npm run preview
```

Quick start (English)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Скрипты (русский)

В `package.json` определены основные скрипты проекта:

- `dev` — запуск Vite в режиме разработки
- `build` — компиляция TypeScript (`tsc`) и сборка проекта (`vite build`)
- `preview` — превью собранного билда
- `lint` — запуск ESLint
- `format` — форматирование кода через Prettier

Scripts (English)

The main scripts in `package.json`:

- `dev` — runs Vite in development mode
- `build` — compiles TypeScript (`tsc`) and builds the app (`vite build`)
- `preview` — previews the production build
- `lint` — runs ESLint
- `format` — formats code with Prettier

Требования (русский)

- Node.js 18+ рекомендуется
- npm (или pnpm/yarn) для управления зависимостями

Prerequisites (English)

- Node.js 18+ recommended
- npm (or pnpm/yarn) to manage dependencies

Структура проекта (русский)

- `index.html` — точка входа
- `src/` — исходники приложения
  - `main.tsx` — инициализация приложения
  - `App.tsx` — корневой компонент
  - `index.css` — глобальные стили (Tailwind + кастомные правила)
  - `components/` — UI-компоненты (Hero, Nav, Drinks, Contacts и пр.)
  - `data/` — статические данные (например, `drinks.ts`)
  - `fonts/` — шрифты и лицензии
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` — конфигурационные файлы

Project structure (English)

- `index.html` — entry point
- `src/` — source code
  - `main.tsx` — app bootstrap
  - `App.tsx` — root component
  - `index.css` — global styles (Tailwind + custom rules)
  - `components/` — UI components (Hero, Nav, Drinks, Contacts, etc.)
  - `data/` — static data (e.g. `drinks.ts`)
  - `fonts/` — fonts and licenses
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` — config files

Стили и шрифты (русский)

Глобальные стили находятся в `src/index.css`. Tailwind Preflight выполняет базовый ресет; в `index.css` добавлены дополнительные правила для изображений, форм и видимых фокусов. Шрифты хранятся в `fonts/` и подключаются через `@font-face`.

Styling & fonts (English)

Global styles live in `src/index.css`. Tailwind Preflight provides a base reset; `index.css` contains extra rules for images, form controls and visible focus styles. Fonts are stored in `fonts/` and loaded via `@font-face`.

Доступность (русский)

Сохранены видимые индикаторы фокуса (`:focus`) — это важно для пользователей клавиатурной навигации. Пожалуйста, не удаляйте outline; лучше стилизовать его при необходимости.

Accessibility (English)

Visible focus indicators (`:focus`) are preserved — important for keyboard users. Do not remove outlines; style them if needed.

Контрибьютинг (русский)

1. Форкните репозиторий
2. Создайте ветку `feat/your-feature`
3. Откройте Pull Request с описанием изменений

Contributing (English)

1. Fork the repository
2. Create a branch `feat/your-feature`
3. Open a Pull Request describing your changes

Деплой и демо (русский)

Для быстрого деплоя подойдёт Vercel или Netlify — достаточно подключить репозиторий и указать команду сборки `npm run build`.

Deployment & demo (English)

Vercel or Netlify are suitable for quick deployment — connect the repo and use `npm run build` as the build command.

Лицензия (русский)

Добавьте файл `LICENSE` в корень репозитория или укажите существующую лицензию в этом файле.

License (English)

Add a `LICENSE` file to the repository root or reference the existing license in this file.

Дальше (русский)

Если нужно, могу:

- Перевести README полностью на английский
- Добавить разделы про CI, тесты, примеры компонентов или демо
- Подготовить простой CONTRIBUTING.md и шаблон PR

Next steps (English)

If you want, I can:

- Translate the README fully into English
- Add sections for CI, tests, example components or a demo
- Prepare a simple CONTRIBUTING.md and PR template

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
3dPortfolioPritesh
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-up-right.svg
│  │  ├─ check-circle.svg
│  │  ├─ chrome.svg
│  │  ├─ css3.svg
│  │  ├─ github.svg
│  │  ├─ html5.svg
│  │  ├─ react.svg
│  │  ├─ sparkle.svg
│  │  ├─ square-js.svg
│  │  └─ star.svg
│  ├─ images
│  │  ├─ ai-startup-landing-page.png
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-right.svg
│  │  ├─ bg.png
│  │  ├─ book-cover.png
│  │  ├─ chat.png
│  │  ├─ client1.png
│  │  ├─ client2.png
│  │  ├─ client3.png
│  │  ├─ client4.png
│  │  ├─ client5.png
│  │  ├─ client6.png
│  │  ├─ code.svg
│  │  ├─ concepts.svg
│  │  ├─ dark-saas-landing-page.png
│  │  ├─ designs.svg
│  │  ├─ devices.png
│  │  ├─ exp1.png
│  │  ├─ exp2.png
│  │  ├─ exp3.png
│  │  ├─ fav.png
│  │  ├─ fb.png
│  │  ├─ gold-star.png
│  │  ├─ grain.jpg
│  │  ├─ ideas.svg
│  │  ├─ insta.png
│  │  ├─ jsm-logo.png
│  │  ├─ light-saas-landing-page.png
│  │  ├─ linkedin.png
│  │  ├─ logo1.png
│  │  ├─ logo2.png
│  │  ├─ logo3.png
│  │  ├─ logos
│  │  │  ├─ company-logo-1.png
│  │  │  ├─ company-logo-10.png
│  │  │  ├─ company-logo-11.png
│  │  │  ├─ company-logo-2.png
│  │  │  ├─ company-logo-3.png
│  │  │  ├─ company-logo-4.png
│  │  │  ├─ company-logo-5.png
│  │  │  ├─ company-logo-6.png
│  │  │  ├─ company-logo-7.png
│  │  │  ├─ company-logo-8.png
│  │  │  ├─ company-logo-9.png
│  │  │  ├─ git.svg
│  │  │  ├─ node.png
│  │  │  ├─ python.svg
│  │  │  ├─ react.png
│  │  │  └─ three.png
│  │  ├─ map.png
│  │  ├─ memoji-avatar-1.png
│  │  ├─ memoji-avatar-2.png
│  │  ├─ memoji-avatar-3.png
│  │  ├─ memoji-avatar-4.png
│  │  ├─ memoji-avatar-5.png
│  │  ├─ memoji-computer.png
│  │  ├─ memoji-smile.png
│  │  ├─ menu.svg
│  │  ├─ person.png
│  │  ├─ project1.png
│  │  ├─ project2.png
│  │  ├─ project3.png
│  │  ├─ readme-bottom.png
│  │  ├─ readme.png
│  │  ├─ screen.mp4
│  │  ├─ seo.png
│  │  ├─ star.png
│  │  ├─ textures
│  │  │  └─ mat1.png
│  │  ├─ time.png
│  │  ├─ x.png
│  │  └─ x.svg
│  ├─ models
│  │  ├─ computer-optimized-transformed.glb
│  │  ├─ computer-optimized.glb
│  │  ├─ git-svg-transformed.glb
│  │  ├─ node-transformed.glb
│  │  ├─ optimized-room.glb
│  │  ├─ python-transformed.glb
│  │  ├─ react_logo-transformed.glb
│  │  └─ three.js-transformed.glb
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ GlowCard.jsx
│  │  ├─ HeroModels
│  │  │  ├─ HeroExperience.jsx
│  │  │  ├─ HeroLights.jsx
│  │  │  ├─ Particles.jsx
│  │  │  └─ Room.jsx
│  │  ├─ NavBar.jsx
│  │  └─ TitleHeader.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ sections
│     ├─ About.jsx
│     ├─ ExperienceSection.jsx
│     ├─ FeatureCards.jsx
│     ├─ Hero.jsx
│     └─ ShowcaseSection.jsx
└─ vite.config.js

```
```
3dPortfolioPritesh
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-up-right.svg
│  │  ├─ check-circle.svg
│  │  ├─ chrome.svg
│  │  ├─ css3.svg
│  │  ├─ github.svg
│  │  ├─ html5.svg
│  │  ├─ react.svg
│  │  ├─ sparkle.svg
│  │  ├─ square-js.svg
│  │  └─ star.svg
│  ├─ images
│  │  ├─ ai-startup-landing-page.png
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-right.svg
│  │  ├─ bg.png
│  │  ├─ book-cover.png
│  │  ├─ chat.png
│  │  ├─ client1.png
│  │  ├─ client2.png
│  │  ├─ client3.png
│  │  ├─ client4.png
│  │  ├─ client5.png
│  │  ├─ client6.png
│  │  ├─ code.svg
│  │  ├─ concepts.svg
│  │  ├─ dark-saas-landing-page.png
│  │  ├─ designs.svg
│  │  ├─ devices.png
│  │  ├─ exp1.png
│  │  ├─ exp2.png
│  │  ├─ exp3.png
│  │  ├─ fav.png
│  │  ├─ fb.png
│  │  ├─ gold-star.png
│  │  ├─ grain.jpg
│  │  ├─ ideas.svg
│  │  ├─ insta.png
│  │  ├─ jsm-logo.png
│  │  ├─ light-saas-landing-page.png
│  │  ├─ linkedin.png
│  │  ├─ logo1.png
│  │  ├─ logo2.png
│  │  ├─ logo3.png
│  │  ├─ logos
│  │  │  ├─ company-logo-1.png
│  │  │  ├─ company-logo-10.png
│  │  │  ├─ company-logo-11.png
│  │  │  ├─ company-logo-2.png
│  │  │  ├─ company-logo-3.png
│  │  │  ├─ company-logo-4.png
│  │  │  ├─ company-logo-5.png
│  │  │  ├─ company-logo-6.png
│  │  │  ├─ company-logo-7.png
│  │  │  ├─ company-logo-8.png
│  │  │  ├─ company-logo-9.png
│  │  │  ├─ git.svg
│  │  │  ├─ node.png
│  │  │  ├─ python.svg
│  │  │  ├─ react.png
│  │  │  └─ three.png
│  │  ├─ map.png
│  │  ├─ memoji-avatar-1.png
│  │  ├─ memoji-avatar-2.png
│  │  ├─ memoji-avatar-3.png
│  │  ├─ memoji-avatar-4.png
│  │  ├─ memoji-avatar-5.png
│  │  ├─ memoji-computer.png
│  │  ├─ memoji-smile.png
│  │  ├─ menu.svg
│  │  ├─ person.png
│  │  ├─ project1.png
│  │  ├─ project2.png
│  │  ├─ project3.png
│  │  ├─ readme-bottom.png
│  │  ├─ readme.png
│  │  ├─ screen.mp4
│  │  ├─ seo.png
│  │  ├─ star.png
│  │  ├─ textures
│  │  │  └─ mat1.png
│  │  ├─ time.png
│  │  ├─ x.png
│  │  └─ x.svg
│  ├─ models
│  │  ├─ computer-optimized-transformed.glb
│  │  ├─ computer-optimized.glb
│  │  ├─ git-svg-transformed.glb
│  │  ├─ node-transformed.glb
│  │  ├─ optimized-room.glb
│  │  ├─ python-transformed.glb
│  │  ├─ react_logo-transformed.glb
│  │  └─ three.js-transformed.glb
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ GlowCard.jsx
│  │  ├─ HeroModels
│  │  │  ├─ HeroExperience.jsx
│  │  │  ├─ HeroLights.jsx
│  │  │  ├─ Particles.jsx
│  │  │  └─ Room.jsx
│  │  ├─ NavBar.jsx
│  │  └─ TitleHeader.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ sections
│     ├─ About.jsx
│     ├─ ExperienceSection.jsx
│     ├─ FeatureCards.jsx
│     ├─ Hero.jsx
│     └─ ShowcaseSection.jsx
└─ vite.config.js

```
```
3dPortfolioPritesh
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-up-right.svg
│  │  ├─ check-circle.svg
│  │  ├─ chrome.svg
│  │  ├─ css3.svg
│  │  ├─ github.svg
│  │  ├─ html5.svg
│  │  ├─ react.svg
│  │  ├─ sparkle.svg
│  │  ├─ square-js.svg
│  │  └─ star.svg
│  ├─ images
│  │  ├─ ai-startup-landing-page.png
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-right.svg
│  │  ├─ bg.png
│  │  ├─ book-cover.png
│  │  ├─ chat.png
│  │  ├─ client1.png
│  │  ├─ client2.png
│  │  ├─ client3.png
│  │  ├─ client4.png
│  │  ├─ client5.png
│  │  ├─ client6.png
│  │  ├─ code.svg
│  │  ├─ concepts.svg
│  │  ├─ dark-saas-landing-page.png
│  │  ├─ designs.svg
│  │  ├─ devices.png
│  │  ├─ exp1.png
│  │  ├─ exp2.png
│  │  ├─ exp3.png
│  │  ├─ fav.png
│  │  ├─ fb.png
│  │  ├─ gold-star.png
│  │  ├─ grain.jpg
│  │  ├─ ideas.svg
│  │  ├─ insta.png
│  │  ├─ jsm-logo.png
│  │  ├─ light-saas-landing-page.png
│  │  ├─ linkedin.png
│  │  ├─ logo1.png
│  │  ├─ logo2.png
│  │  ├─ logo3.png
│  │  ├─ logos
│  │  │  ├─ company-logo-1.png
│  │  │  ├─ company-logo-10.png
│  │  │  ├─ company-logo-11.png
│  │  │  ├─ company-logo-2.png
│  │  │  ├─ company-logo-3.png
│  │  │  ├─ company-logo-4.png
│  │  │  ├─ company-logo-5.png
│  │  │  ├─ company-logo-6.png
│  │  │  ├─ company-logo-7.png
│  │  │  ├─ company-logo-8.png
│  │  │  ├─ company-logo-9.png
│  │  │  ├─ git.svg
│  │  │  ├─ node.png
│  │  │  ├─ python.svg
│  │  │  ├─ react.png
│  │  │  └─ three.png
│  │  ├─ map.png
│  │  ├─ memoji-avatar-1.png
│  │  ├─ memoji-avatar-2.png
│  │  ├─ memoji-avatar-3.png
│  │  ├─ memoji-avatar-4.png
│  │  ├─ memoji-avatar-5.png
│  │  ├─ memoji-computer.png
│  │  ├─ memoji-smile.png
│  │  ├─ menu.svg
│  │  ├─ person.png
│  │  ├─ project1.png
│  │  ├─ project2.png
│  │  ├─ project3.png
│  │  ├─ readme-bottom.png
│  │  ├─ readme.png
│  │  ├─ screen.mp4
│  │  ├─ seo.png
│  │  ├─ star.png
│  │  ├─ textures
│  │  │  └─ mat1.png
│  │  ├─ time.png
│  │  ├─ x.png
│  │  └─ x.svg
│  ├─ models
│  │  ├─ computer-optimized-transformed.glb
│  │  ├─ computer-optimized.glb
│  │  ├─ git-svg-transformed.glb
│  │  ├─ node-transformed.glb
│  │  ├─ optimized-room.glb
│  │  ├─ python-transformed.glb
│  │  ├─ react_logo-transformed.glb
│  │  └─ three.js-transformed.glb
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ arrow-down.svg
│  │  │  ├─ arrow-up-right.svg
│  │  │  ├─ check-circle.svg
│  │  │  ├─ chrome.svg
│  │  │  ├─ css3.svg
│  │  │  ├─ github.svg
│  │  │  ├─ html5.svg
│  │  │  ├─ react.svg
│  │  │  ├─ sparkle.svg
│  │  │  ├─ square-js.svg
│  │  │  └─ star.svg
│  │  └─ images
│  │     ├─ ai-startup-landing-page.png
│  │     ├─ book-cover.png
│  │     ├─ dark-saas-landing-page.png
│  │     ├─ grain.jpg
│  │     ├─ light-saas-landing-page.png
│  │     ├─ map.png
│  │     ├─ memoji-avatar-1.png
│  │     ├─ memoji-avatar-2.png
│  │     ├─ memoji-avatar-3.png
│  │     ├─ memoji-avatar-4.png
│  │     ├─ memoji-avatar-5.png
│  │     ├─ memoji-computer.png
│  │     └─ memoji-smile.png
│  ├─ components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ GlowCard.jsx
│  │  ├─ HeroModels
│  │  │  ├─ HeroExperience.jsx
│  │  │  ├─ HeroLights.jsx
│  │  │  ├─ Particles.jsx
│  │  │  └─ Room.jsx
│  │  ├─ NavBar.jsx
│  │  └─ TitleHeader.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ sections
│     ├─ About.jsx
│     ├─ ExperienceSection.jsx
│     ├─ FeatureCards.jsx
│     ├─ Hero.jsx
│     └─ ShowcaseSection.jsx
└─ vite.config.js

```
```
3dPortfolioPritesh
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ images
│  │  ├─ ai-startup-landing-page.png
│  │  ├─ arrow-down.svg
│  │  ├─ arrow-right.svg
│  │  ├─ bg.png
│  │  ├─ book-cover.png
│  │  ├─ chat.png
│  │  ├─ client1.png
│  │  ├─ client2.png
│  │  ├─ client3.png
│  │  ├─ client4.png
│  │  ├─ client5.png
│  │  ├─ client6.png
│  │  ├─ code.svg
│  │  ├─ concepts.svg
│  │  ├─ dark-saas-landing-page.png
│  │  ├─ designs.svg
│  │  ├─ devices.png
│  │  ├─ exp1.png
│  │  ├─ exp2.png
│  │  ├─ exp3.png
│  │  ├─ fav.png
│  │  ├─ fb.png
│  │  ├─ gold-star.png
│  │  ├─ grain.jpg
│  │  ├─ ideas.svg
│  │  ├─ insta.png
│  │  ├─ jsm-logo.png
│  │  ├─ light-saas-landing-page.png
│  │  ├─ linkedin.png
│  │  ├─ logo1.png
│  │  ├─ logo2.png
│  │  ├─ logo3.png
│  │  ├─ logos
│  │  │  ├─ company-logo-1.png
│  │  │  ├─ company-logo-10.png
│  │  │  ├─ company-logo-11.png
│  │  │  ├─ company-logo-2.png
│  │  │  ├─ company-logo-3.png
│  │  │  ├─ company-logo-4.png
│  │  │  ├─ company-logo-5.png
│  │  │  ├─ company-logo-6.png
│  │  │  ├─ company-logo-7.png
│  │  │  ├─ company-logo-8.png
│  │  │  ├─ company-logo-9.png
│  │  │  ├─ git.svg
│  │  │  ├─ node.png
│  │  │  ├─ python.svg
│  │  │  ├─ react.png
│  │  │  └─ three.png
│  │  ├─ map.png
│  │  ├─ memoji-avatar-1.png
│  │  ├─ memoji-avatar-2.png
│  │  ├─ memoji-avatar-3.png
│  │  ├─ memoji-avatar-4.png
│  │  ├─ memoji-avatar-5.png
│  │  ├─ memoji-computer.png
│  │  ├─ memoji-smile.png
│  │  ├─ menu.svg
│  │  ├─ person.png
│  │  ├─ project1.png
│  │  ├─ project2.png
│  │  ├─ project3.png
│  │  ├─ readme-bottom.png
│  │  ├─ readme.png
│  │  ├─ screen.mp4
│  │  ├─ seo.png
│  │  ├─ star.png
│  │  ├─ textures
│  │  │  └─ mat1.png
│  │  ├─ time.png
│  │  ├─ x.png
│  │  └─ x.svg
│  ├─ models
│  │  ├─ computer-optimized-transformed.glb
│  │  ├─ computer-optimized.glb
│  │  ├─ git-svg-transformed.glb
│  │  ├─ node-transformed.glb
│  │  ├─ optimized-room.glb
│  │  ├─ python-transformed.glb
│  │  ├─ react_logo-transformed.glb
│  │  └─ three.js-transformed.glb
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ arrow-down.svg
│  │  │  ├─ arrow-up-right.svg
│  │  │  ├─ check-circle.svg
│  │  │  ├─ chrome.svg
│  │  │  ├─ css3.svg
│  │  │  ├─ github.svg
│  │  │  ├─ html5.svg
│  │  │  ├─ react.svg
│  │  │  ├─ sparkle.svg
│  │  │  ├─ square-js.svg
│  │  │  └─ star.svg
│  │  └─ images
│  │     ├─ ai-startup-landing-page.png
│  │     ├─ book-cover.png
│  │     ├─ dark-saas-landing-page.png
│  │     ├─ grain.jpg
│  │     ├─ light-saas-landing-page.png
│  │     ├─ map.png
│  │     ├─ memoji-avatar-1.png
│  │     ├─ memoji-avatar-2.png
│  │     ├─ memoji-avatar-3.png
│  │     ├─ memoji-avatar-4.png
│  │     ├─ memoji-avatar-5.png
│  │     ├─ memoji-computer.png
│  │     └─ memoji-smile.png
│  ├─ components
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  ├─ GlowCard.jsx
│  │  ├─ HeroModels
│  │  │  ├─ HeroExperience.jsx
│  │  │  ├─ HeroLights.jsx
│  │  │  ├─ Particles.jsx
│  │  │  └─ Room.jsx
│  │  ├─ NavBar.jsx
│  │  └─ TitleHeader.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ sections
│     ├─ About.jsx
│     ├─ ExperienceSection.jsx
│     ├─ FeatureCards.jsx
│     ├─ Hero.jsx
│     └─ ShowcaseSection.jsx
└─ vite.config.js

```
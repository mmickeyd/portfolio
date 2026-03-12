import portfolio from '../screenshots/portfolio-screenshot-mac copy.png';
import pokedex from '../screenshots/pokedex-screenshot.png';
import avyoats from '../screenshots/avy-oats-screenshot.jpeg';

interface Project {
    title: string;
    description: string;
    url: string;
    image: any;
}

export const APPLICATIONS: Project[] = [
    {
        title: 'Pokédex',
        description: `A full-stack Pokédex application using Nuxt 3, Vue 3, and TypeScript, consuming the PokéAPI through a custom server-side API layer that shapes and validates all responses before they reach the UI. Features a paginated, searchable Pokémon grid with detailed profile pages displaying base stats, type badges, abilities, habitat, and more. Engineered for performance with server-side response caching via Nuxt's cachedEventHandler, client-side list persistence across navigation, and lazy image loading. No component libraries used, styled entirely in vanilla CSS with a custom Pokédex device UI. Codebase reflects production-minded decisions around type safety, separation of concerns, and long-term maintainability.`,
        url: 'https://github.com/mmickeyd/pok-dex/',
        image: pokedex,
    },
    {
        title: 'Personal Portfolio',
        description: `A fully custom portfolio built with React and TypeScript — no templates, no shortcuts, no compromises. Features a cinematic hero section with a live typewriter effect, a project showcase with consistent image handling, and a contact form hardened with client-side sanitisation, input validation, and EmailJS integration. Every component is hand-crafted with nested CSS and a sharp, cohesive dark theme that prioritises personality over cookie-cutter UI kits. Clean modular architecture keeps the codebase scalable and maintainable, while MUI handles structural consistency under the hood. From micro-interactions to security fundamentals, obsessive attention to detail runs through every layer of the stack. Built to impress, engineered to last.`,
        url: 'https://github.com/mmickeyd/portfolio/',
        image: portfolio,
    },
    {
        title: 'AvyOats',
        description: `Avy Oats is a web application engineered to reduce cognitive overhead for backcountry skiers making early-morning decisions in Utah's Wasatch Range. Built on a React, Express, and Node.js stack, it consolidates avalanche forecasts, weather reports, and snow telemetry into a single, fast-loading interface optimized for pre-dawn use cases.
The UI prioritizes information hierarchy over aesthetics with a deliberately minimal layout designed for rapid scanning under time pressure. On the infrastructure side, a decoupled dual-server architecture handles API rate limits from the Utah Avalanche Center: a background service polls and persists the daily forecast to a PostgreSQL database at 5 a.m., while a separate server handles client requests against the cached data, ensuring availability at peak usage windows without overloading upstream services.`,
        url: 'https://github.com/mmickeyd/avy-oats',
        image: avyoats,
    },
    {
        title: 'Fintech Frontend Mock-up',
        description:
            'This project is a dynamic frontend for a fintech dashboard built with React.js, Chart.js, and Material UI. It visualizes real-time financial metrics like equity, cash flow, and market performance using interactive bar and pie charts, delivering a clean and modern user interface. The app is component-driven and leverages reusable logic to structure financial sections, with a strong focus on data readability and dynamic responsiveness. Chart.js handles data visualizations, while Material UI ensures consistent design and accessibility. I built this as a way to demonstrate how modern frontend frameworks can present complex financial data in a visually intuitive format for non-technical users.',
        url: 'https://github.com/mmickeyd/fintech-front-end/',
        image: null,
    },
];

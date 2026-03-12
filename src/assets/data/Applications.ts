import portfolio from '../screenshots/portfolio-screenshot-mac copy.png';
import pokedex from '../screenshots/pokedex-screenshot.png';

interface Project {
    title: string;
    description: string;
    url: string;
    image: any;
}

export const APPLICATIONS: Project[] = [
    {
        title: 'Pokédex',
        description:
            'A full-stack Pokédex application using Nuxt 3, Vue 3, and TypeScript, consuming the PokéAPI through a custom server-side API layer. Features a paginated, searchable Pokémon grid with detailed profile pages displaying stats, type badges, abilities, and habitat data. Engineered for performance with server-side response caching, client-side list persistence across navigation, and lazy image loading. No component libraries used, styled entirely in vanilla CSS with a custom Pokédex device UI. Code is organized around reusable composables, strict TypeScript interfaces, and single-responsibility CSS partials.',
        url: 'https://github.com/mmickeyd/pok-dex/',
        image: pokedex,
    },
    {
        title: 'Personal Portfolio',
        description:
            'This portfolio is a React and TypeScript application architected with a modular, component-driven approach to effectively demonstrate technical proficiency and design sophistication. It leverages Material UI in conjunction with Emotion styled components to achieve encapsulated styling and dynamic theming capabilities. The UI supports runtime toggling between dark and light modes and allows users to customize accent colors, enabling a highly personalized theme experience. Advanced scroll-triggered animations are implemented to deliver smooth content transitions, enhancing user engagement. Additionally, a real-time cursor-tracking glow effect is integrated to create subtle interactive depth throughout the interface.',
        url: 'https://github.com/mmickeyd/personal-portfolio/',
        image: portfolio,
    },
    {
        title: 'AvyOats',
        description:
            'Avy Oats is a web application designed to streamline morning decision-making for backcountry skiers in Utah’s Wasatch Range. Built with React, Express, and Node.js, the app consolidates critical data like avalanche forecasts, weather reports, and snow telemetry into a single, fast-loading interface — ideal for early-morning dawn patrols. The interface features a clean, minimalist layout tailored for quick scanning and clarity. To avoid API rate limits from the Utah Avalanche Center, I implemented a dual-server setup: one server periodically fetched the daily forecast starting at 5 a.m., storing it in a PostgreSQL database, while the frontend accessed the cached version through a separate server. This ensured users always had access to the latest forecast without overloading external services.',
        url: 'https://github.com/mmickeyd/avy-oats',
        image: portfolio,
    },
    {
        title: 'Fintech Frontend Mock-up',
        description:
            'This project is a dynamic frontend for a fintech dashboard built with React.js, Chart.js, and Material UI. It visualizes real-time financial metrics like equity, cash flow, and market performance using interactive bar and pie charts, delivering a clean and modern user interface. The app is component-driven and leverages reusable logic to structure financial sections, with a strong focus on data readability and dynamic responsiveness. Chart.js handles data visualizations, while Material UI ensures consistent design and accessibility. I built this as a way to demonstrate how modern frontend frameworks can present complex financial data in a visually intuitive format for non-technical users.',
        url: 'https://github.com/mmickeyd/fintech-front-end/',
        image: portfolio,
    },
];

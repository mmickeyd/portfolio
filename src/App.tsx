import React from 'react';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { SocialLinks } from './components/SocialLinks/SocialLinks';

export const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <SocialLinks />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </header>
        </div>
    );
};

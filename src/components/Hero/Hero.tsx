import React, { useEffect, useState } from 'react';
import './Hero.css';

const ROLES = ['FULL-STACK DEVELOPER', 'REACT SPECIALIST', 'UI ENTHUSIAST'];

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const current = ROLES[roleIndex];

        if (paused) {
            const pause = setTimeout(() => {
                setDeleting(true);
                setPaused(false);
            }, 1800);
            return () => clearTimeout(pause);
        }

        if (!deleting && displayed.length < current.length) {
            const t = setTimeout(
                () => setDisplayed(current.slice(0, displayed.length + 1)),
                80,
            );
            return () => clearTimeout(t);
        }

        if (!deleting && displayed.length === current.length) {
            setPaused(true);
            return;
        }

        if (deleting && displayed.length > 0) {
            const t = setTimeout(
                () => setDisplayed(displayed.slice(0, -1)),
                40,
            );
            return () => clearTimeout(t);
        }

        if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
        }
    }, [displayed, deleting, paused, roleIndex]);

    const scrollToAbout = () => {
        document
            .querySelector('.aboutPage')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='heroPage'>
            <div className='heroContent'>
                <p className='heroGreeting'>Hello, I'm</p>
                <h1 className='heroName'>
                    MITCH<span className='heroNameAccent'> MCDERMOTT</span>
                </h1>
                <div className='heroRole'>
                    <span>{displayed}</span>
                    <span className='cursor'>|</span>
                </div>
                <button className='heroButton' onClick={scrollToAbout}>
                    LEARN MORE <span className='arrow'>↓</span>
                </button>
            </div>
        </div>
    );
};

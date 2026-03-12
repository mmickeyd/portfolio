import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className='aboutPage'>
            <div className='aboutContent'>
                <div className='aboutText'>
                    <h1 className='pageHeader'>ABOUT ME</h1>
                    <p className='pageSubtitle'>
                        Frontend-focused. Full-stack capable. Always learning.
                    </p>
                    <p className='bio'>
                        I'm a full-stack developer with 5 years of professional
                        experience building responsive, accessible, and
                        user-centered web applications. My expertise lies in
                        crafting seamless interfaces with React, TypeScript, and
                        modern styling frameworks like Tailwind and Material UI.
                    </p>
                    <p className='bio'>
                        I care deeply about performance, maintainability, and
                        delivering intuitive user experiences. I thrive in
                        collaborative environments and enjoy working across the
                        stack — from designing reusable frontend components to
                        wiring up efficient backend APIs.
                    </p>
                    <p className='bio'>
                        Whether I'm prototyping new ideas or shipping
                        production-ready features, I bring a balance of
                        thoughtful design, clean code, and a continuous learning
                        mindset.
                    </p>
                </div>

                <div className='aboutStats'>
                    <div className='statCard'>
                        <span className='statNumber'>5</span>
                        <span className='statLabel'>YEARS EXPERIENCE</span>
                    </div>
                    <div className='statCard'>
                        <span className='statNumber'>∞</span>
                        <span className='statLabel'>BUGS SQUASHED</span>
                    </div>
                    <div className='statCard'>
                        <span className='statNumber'>100%</span>
                        <span className='statLabel'>PASSION FOR CRAFT</span>
                    </div>
                </div>
            </div>
            <br />
            <hr />
        </div>
    );
};

import React from 'react';
import { APPLICATIONS } from '../../assets/data/Applications';
import githhubLogo from '../../assets/logos/github-mark-white.svg';
import './Projects.css';
import { Card, CardContent, Typography, Grid, Link } from '@mui/material';

export const Projects = () => {
    return (
        <div>
            <hr className='horizontalRuler' />
            <div className={'projectsPage'}>
                <h1 className={'header'}>PROJECTS</h1>
                <h5 className={'subHeader'}>
                    These are some of my recent projects. Some of them are under
                    development, while others are already completed. Feel free
                    to check all of my projects on my{' '}
                    <a
                        className={'githubLink'}
                        href={'https://github.com/mmickeyd'}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {'< GitHub Account />'}
                    </a>
                </h5>
                <div className={'container'}>
                    <Grid container spacing={4}>
                        {APPLICATIONS.map((app, index) => (
                            <Card className={'card'} key={index}>
                                <CardContent className={'cardContent'}>
                                    <div>
                                        {app.image ? (
                                            <img
                                                className='imageSection'
                                                src={app.image}
                                                alt={app.title}
                                            />
                                        ) : (
                                            <div className='imagePlaceholder'>
                                                <span>
                                                    WORKING ON A PREVIEW...
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={'textSection'}>
                                        <Typography className={'cardTitle'}>
                                            {app.title}
                                            <div className={'links'}>
                                                <Link
                                                    className={'url'}
                                                    href={app.url}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    <img
                                                        src={githhubLogo}
                                                        className={'githubLogo'}
                                                        alt='GitHub'
                                                    />
                                                </Link>
                                            </div>
                                        </Typography>
                                        <Typography className={'description'}>
                                            {app.description}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </div>
                <br />
                <hr />
            </div>
        </div>
    );
};

import React from 'react';
import { APPLICATIONS } from '../../assets/data/Applications';
import githhubLogo from '../../assets/logos/github-mark-white.svg';
import './Projects.css';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
    CardActionArea,
    Grid,
    Link,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
                    >
                        {'< GitHub Account />'}
                    </a>
                </h5>
                <div className={'container'}>
                    <Grid container spacing={4}>
                        {APPLICATIONS.map((app, index) => (
                            <Card className={'card'}>
                                <CardContent className={'cardContent'}>
                                    <div>
                                        <img
                                            className={'imageSection'}
                                            src={app.image}
                                        />
                                    </div>
                                    <div className={'textSection'}>
                                        <Typography className={'cardTitle'}>
                                            {app.title}
                                            <div className={'links'}>
                                                {/* <a
                          href="https://youtube.com/"
                          className={"playbackIcon"}
                          target="_blank"
                        >
                          <PlayCircleOutlineIcon className={"playbackIcon"} />
                        </a> */}
                                                <Link
                                                    className={'url'}
                                                    href={app.url}
                                                    target='_blank'
                                                >
                                                    <img
                                                        src={githhubLogo}
                                                        className={'githubLogo'}
                                                    />
                                                    {/* <Typography className={"githubText"}>
                      GitHub Repo
                      </Typography> */}
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

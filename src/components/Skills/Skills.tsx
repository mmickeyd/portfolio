import React from 'react';
import { FRONTENDSKILLS } from '../../assets/data/FrontendSkills';
import { BACKENDSKILLS } from '../../assets/data/BackendSkills';
import { TOOLSPRACTICES } from '../../assets/data/ToolsPractices';
import { Box, Grid, Tooltip, IconButton, Icon } from '@mui/material';
import { SkillBar } from './SkillBar';
import './Skills.css';
import { TOOLS } from '../../assets/constants';

export const Skills = () => {
    const allSkills = [FRONTENDSKILLS, BACKENDSKILLS, TOOLSPRACTICES];
    const splitCategory = (word: string) => {
        const first =
            word === TOOLS
                ? word.split('&')[0].toUpperCase()
                : word.split('e')[0].toUpperCase();
        const second =
            word === TOOLS
                ? '&' + word.split('&')[1].toUpperCase()
                : 'E' + word.split('e')[1].toUpperCase();
        return [first, second];
    };
    return (
        <div className={'skillsPage'}>
            {/* <div className={"pageHeader"}> */}
            <h1 className={'pageTitle'}>ENGINEERING TOOLKIT</h1>
            <span className={'pageSubtitle'}>
                A snapshot of what I use to build fast, accessible, and
                beautiful web experiences.
            </span>
            {/* </div> */}
            {allSkills.map((categories, idx) => (
                <Box key={idx} className={'categoryContainer'} sx={{ my: 4 }}>
                    <h3 className={'categoryName'}>
                        <span>{splitCategory(categories.category)[0]}</span>
                        <span className={'categoryNameEnd'}>
                            {splitCategory(categories.category)[1]}
                        </span>
                    </h3>
                    <Grid className={'skillContainer'} container spacing={3}>
                        {categories.skills.map(({ skill, level }) => (
                            <Grid className={'individualSkill'} key={skill}>
                                <SkillBar skill={skill} level={level} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
            <br />
            <hr />
        </div>
    );
};

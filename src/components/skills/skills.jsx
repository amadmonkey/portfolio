import React from 'react';
import SkillsList from '../../data/skills.js';
import SkillItem from '../../utilities/skill-item/skill-item';
import { ReactComponent as Html } from '../../img/html.svg';
import { ReactComponent as Braces } from '../../img/brackets.svg';
import './skills.scss';

const Skills = () => {
    return (
        <section id="_SKILLS_SECTION" className="skills">
            <div className="content skills-content">
                {SkillsList.skills.map((value, index) => {
                    return <SkillItem data={value} key={index} />
                })}
            </div>
            <div className="egg egg-yellow"></div>
            <div className="egg egg-purple"></div>
            <Html className="html" />
            <Braces className="braces" />
        </section>
    );
}

export default Skills;
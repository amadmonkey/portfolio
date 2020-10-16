import React, { useState } from 'react';
import Skills from '../../components/skills/skills.jsx';
import SkillsList from '../../data/skills.js';
import './app-card.scss';

function AppCard(props) {
    const [hasLoaded, setHasLoaded] = useState(false);
    let tools = [];
    const isImageLoaded = () => {
        setHasLoaded(true);
    }
    props.app.tools.map((value, index) => {
        let skills = SkillsList.skills;
        for (let x = 0; x < skills.length; x++) {
            if (value === skills[x].id) {
                tools.push(skills[x]);
            }
        }
    });
    return (
        <div className="hidden app-card">
            <div className="app-card-img-container">
                <img onLoad={isImageLoaded.bind(this)} src={props.app.path} />
            </div>
            <div className="app-card-details">
                <h1 className="title"><a href={props.app.link} className="link">{props.app.name}</a></h1>
                <p className="description">{props.app.description}</p>
                <div className="tools-container">
                    {tools.map((value, index) => {
                        return <img className="app-tool-image" src={value.path.light} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );

}

export default AppCard;
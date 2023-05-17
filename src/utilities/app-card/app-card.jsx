import React from 'react';
import SkillsList from '../../data/skills.js';
import './app-card.scss';

const AppCard = (props) => {
    let tools = [];
    props.app.tools.forEach((value, index) => {
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
                <img loading="lazy" src={props.app.path} alt={props.app.title + "img"} />
            </div>
            <div className="app-card-details">
                <h1 className="title"><a href={props.app.link} target="_blank" className="link" rel="noopener noreferrer">{props.app.name}</a></h1>
                <p className="description" dangerouslySetInnerHTML={{ __html: props.app.description }}></p>
                <div className="tools-container">
                    {tools.map((value, index) => {
                        return <img loading="lazy" className="app-tool-image" src={value.path.light} key={index} alt={value.path.title} />;
                    })}
                </div>
            </div>
        </div>
    );

}

export default AppCard;
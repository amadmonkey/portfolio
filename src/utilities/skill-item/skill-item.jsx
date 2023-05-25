import React from 'react';
import './skill-item.scss';
import { ReactComponent as Star } from '../../img/star.svg';

const SkillItem = (props) => {

    const generateRate = () => {
        let rates = [];
        for (let x = 0; x < 5; x++) {
            rates.push(React.createElement('div', { className: `skill-rate ${x < props.data.rate ? 'active' : ''}`, key: x }, <Star />));
        }
        return rates;
    }

    return (
        <div className="skill-item">
            <div>
                <img loading="lazy" className="skill-img" src={props.data.path.dark} alt={props.data.title} />
                <span className="title">{props.data.title}</span>
            </div>
            <div className="skill-rate-container">
                {generateRate()}
            </div>
        </div>
    );
}

export default SkillItem;
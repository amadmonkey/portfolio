import React from 'react';
import './skill-item.scss';
import { ReactComponent as Star } from '../../img/star.svg';

function SkillItem(props) {

    const generateRate = () => {
        let rates = [];
        for (let x = 0; x < 5; x++) {
            let rate;
            if (x < props.data.rate) {
                rate = React.createElement('div', { className: 'skill-rate active', key: x }, <Star />);
            } else {
                rate = React.createElement('div', { className: 'skill-rate', key: x }, <Star />);
            }
            rates.push(rate);
        }
        return rates;
    }

    return (
        <div className="skill-item">
            <img loading="lazy" className="skill-img" src={props.data.path.dark} alt={props.data.title} />
            <span className="title">{props.data.title}</span>
            <div className="skill-rate-container">
                {generateRate()}
            </div>
        </div>
    );
}

export default SkillItem;
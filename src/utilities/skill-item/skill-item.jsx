import React from 'react';
import './skill-item.scss';
import { ReactComponent as Star } from '../../img/star.svg';

function IllustrationCard(props) {

    const generateRate = () => {
        let rates = [];
        for (let x = 0; x < 5; x++) {
            let rate;
            if (x < props.rate) {
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
            <span className="title">{props.title}</span>
            <div className="skill-rate-container">
                {generateRate()}
            </div>
        </div>
    );
}

export default IllustrationCard;
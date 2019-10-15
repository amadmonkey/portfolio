import React from 'react';
import './illustration-card.scss';

function IllustrationCard(props) {
    return (
        <div className={"hidden illustration-card " + (props.isPortrait ? 'portrait' : 'landscape')}>
            <img src={props.path} alt="" />
        </div>
    );
}

export default IllustrationCard;
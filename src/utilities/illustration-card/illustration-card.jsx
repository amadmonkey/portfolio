import React from 'react';
import './illustration-card.scss';

function IllustrationCard(props) {
    let linkArray = props.path.split('.');
    function selectArt(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }
    return (
        <div className={"hidden illustration-card " + (props.isPortrait ? 'portrait' : 'landscape')}>
            <a href={linkArray[0] + 'x2.' + linkArray[1]} target="_blank"><img src={props.path} alt="" /></a>
        </div>
    );
}

export default IllustrationCard;
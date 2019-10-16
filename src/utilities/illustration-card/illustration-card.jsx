import React, { useState } from 'react';
import './illustration-card.scss';

function IllustrationCard(props) {
    let linkArray = props.path.split('.');

    const [hasLoaded, setHasLoaded] = useState(false);

    const isImageLoaded = () => {
        setHasLoaded(true);
    }

    return (
        <div className={"hidden illustration-card " + (props.isPortrait ? 'portrait' : 'landscape')}>
            <a href={linkArray[0] + 'x2.' + linkArray[1]} target="_blank"><img onLoad={isImageLoaded.bind(this)} src={props.path} alt="" className={!hasLoaded && 'blur'} /></a>
        </div>
    );

}

export default IllustrationCard;
import React, { useState } from 'react';
import './illustration-card.scss';

function IllustrationCard(props) {
    const [hasLoaded, setHasLoaded] = useState(false);

    const isImageLoaded = () => {
        setHasLoaded(true);
    }

    return (
        <div className={"hidden illustration-card " + (props.isPortrait ? 'portrait' : 'landscape')}>
            <a href={props.path.lg} target="_blank" rel="noopener noreferrer"><img loading="lazy" onLoad={isImageLoaded.bind(this)} src={props.path.sm} alt={props.title} className={!hasLoaded ? 'blur' : ''} /></a>
        </div>
    );

}

export default IllustrationCard;
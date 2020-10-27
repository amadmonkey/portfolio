import React from 'react';
import './illustrations.scss';
import IllustrationsList from '../../data/illustrations.js';
import Illustration from '../../utilities/illustration-card/illustration-card';
import Carousel from '../../utilities/carousel/carousel';
import { ReactComponent as PencilLeft, ReactComponent as PencilRight } from '../../img/pencil.svg';
import { ReactComponent as Ruler } from '../../img/ruler.svg';

function Illustrations() {
    return (
        <section id="_ART_SECTION" className="illustrations">
            <div className="content illustrations-content">
                <div className="gallery">
                    {IllustrationsList.illustrations.map((value, index) => {
                        return <Illustration path={value.path} isPortrait={value.isPortrait} key={index} />
                    })}
                </div>
                <div className="carousel" style={{ height: "700px" }}>
                    <Carousel images={IllustrationsList.illustrations} />
                </div>
            </div>
            <div className="egg egg-yellow"></div>
            <div className="egg egg-purple"></div>
            <PencilLeft className="pencil-left" />
            <PencilRight className="pencil-right" />
            <Ruler className="ruler" />
        </section >
    );
}

export default Illustrations;
import React from 'react';
import MoveIndicator from '../../utilities/move-indicator/move-indicator';
import { ReactComponent as Logo } from '../../img/mm.svg';
import './hero.scss';

function Hero() {
    return (
        <section id="_HERO_SECTION" className="hero">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <div className="hero-description">
                <h2>hiya!</h2>
                <h1><span className="capitalize">I</span>'m <span className="capitalize">A</span>rcie</h1>
                <p>I do web development and I love doing it with <span>style</span></p>
                <MoveIndicator />
            </div>
        </section>
    );
}

export default Hero;
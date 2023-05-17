import React from 'react';
import MoveIndicator from '../../utilities/move-indicator/move-indicator';
import { ReactComponent as Logo } from '../../img/mm.svg';
import { ReactComponent as Download } from "../../img/download-primary.svg";
import './hero.scss';

const Hero = () => {
    return (
        <section id="_HERO_SECTION" className="hero">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <div className="hero-description">
                <h2>hiya!</h2>
                <h1><span className="capitalize">I</span>'m <span className="capitalize">A</span>rcie</h1>
                <p>I do web development and I love doing it with <span>style</span></p>
                <button className="btn btn-lg btn-ghost">
                    <a href="https://docs.google.com/document/d/1aLYpKZIEethClyEmgjstThZ4tDD1GAZP/edit?usp=sharing&ouid=116576224972245876621&rtpof=true&sd=true" rel="noopener noreferrer" target="_blank">
                        <Download className="download-icon" />
                        <span>Get Resume</span>
                    </a>
                </button>
                <MoveIndicator />
            </div>
            <div className="egg egg-yellow active"></div>
            <div className="egg egg-purple active"></div>
        </section>
    );
}

export default Hero;
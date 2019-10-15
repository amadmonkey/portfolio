import React from 'react';
import { ReactComponent as Phone } from '../../img/phone.svg';
import { ReactComponent as Download } from '../../img/download.svg';
import { ReactComponent as Email } from '../../img/email.svg';
import './about.scss';

function About() {
    return (
        <section id="_ABOUT_SECTION" className="about">
            <div className="content about-content">
                <p>I do web development and I love doing it with style. I like thinking of ways to improve processes and make it easier for users to understand and navigate through applications. Life's hard as it is why add to it? For me making applications is not just about giving options to users. It's also about making them enjoy doing it too. I love creating algorithms to make user interfaces and just simply try and make things work.</p>
                <div className="about-container">
                    <div>
                        {/* EXPERIENCE */}
                        <div className="about-item">
                            <header>Experience</header>
                            <div className="about-item-content">
                                <div class="experience-item">
                                    <h1 className="title">ADEC Innovations</h1>
                                    <h2><span className="location-icon"></span> <span>Alabang, Metro Manila</span></h2>
                                    <span className="position">Systems Developer I</span>
                                    <span className="dates">November 2016 - September 2017</span>
                                    <span className="tools-header">Tools:</span>
                                    <ul>
                                        <li>HTML, CSS</li>
                                        <li>JavaScript / jQuery</li>
                                        <li>Java / Spring Boot</li>
                                        <li>Angular JS</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                                <div class="experience-item">
                                    <h1 className="title">Philus Technology Inc.</h1>
                                    <h2><span className="location-icon"></span> <span>Taguig, Metro Manila</span></h2>
                                    <span className="position">Angular JS Developer</span>
                                    <span className="dates">February 2018 - March 2019</span>
                                    <span className="tools-header">Tools:</span>
                                    <ul>
                                        <li>HTML, CSS</li>
                                        <li>JavaScript / jQuery</li>
                                        <li>Angular JS</li>
                                        <li>LESS / SASS</li>
                                    </ul>
                                </div>
                                <div class="experience-item">
                                    <h1 className="title">Security Bank Corporation</h1>
                                    <h2><span className="location-icon"></span> <span>Makati City</span></h2>
                                    <span className="position">Angular JS Developer</span>
                                    <span className="dates">March 2019 - October 2019</span>
                                    <span className="tools-header">Tools:</span>
                                    <ul>
                                        <li>HTML, CSS</li>
                                        <li>JavaScript / jQuery</li>
                                        <li>Angular JS</li>
                                        <li>LESS / SASS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* EDUCATION */}
                        <div className="about-item">
                            <header>Education</header>
                            <div className="about-item-content">
                                <h1>Tertiary:</h1>
                                <ul>
                                    <li>Cavite State University - Imus Campus</li>
                                    <li>Bachelor of Science in Information Technology</li>
                                    <li>2011 - 2016</li>
                                </ul>
                                <h1>Secondary:</h1>
                                <ul>
                                    <li>Saint Francis Institute</li>
                                    <li>2002 - 2006</li>
                                </ul>
                                <h1>Primary:</h1>
                                <ul>
                                    <li>Oak Tree Christian Academy</li>
                                    <li>1996 - 2002</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* AWARDS */}
                        <div className="about-item">
                            <header>Awards</header>
                            <div className="about-item-content">
                                <div>
                                    <h1>Developer Bootcamp</h1>
                                    <ul>
                                        <li>February 28, 2016</li>
                                        <li>1st place</li>
                                        <li>ADEC Innovations - Alabang, Metro Manila</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1>Developer Bootcamp</h1>
                                    <ul>
                                        <li>February 28, 2016</li>
                                        <li>Best in MS SQL</li>
                                        <li>ADEC Innovations - Alabang, Metro Manila</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1>Multimedia Skills Competition</h1>
                                    <ul>
                                        <li>October 2, 2014</li>
                                        <li>1st place</li>
                                        <li>Cavite State University - Imus Campus</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1>Poster Making Contest</h1>
                                    <ul>
                                        <li>October 2, 2014</li>
                                        <li>1st place</li>
                                        <li>Cavite State University - Imus Campus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* CONTACT */}
                        <div className="about-item">
                            <header>Hire Me (please?)</header>
                            <div className="about-item-content">
                                <button className="btn-lg btn-call"><a href="#"><Phone className="phone-icon" /> <span>DOWNLOAD DOC</span></a></button>
                                <button className="btn-lg btn-download"><a href="tel:916-552-3960"><Download className="download-icon" /> <span>09165523960</span></a></button>
                                <button className="btn-lg btn-email"><a href="mailto:aquinoarcie@gmail.com"><Email className="email-icon" /> <span>SEND ME AN EMAIL</span></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
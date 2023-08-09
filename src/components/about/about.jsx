import React from "react";
import { ReactComponent as Phone } from "../../img/phone.svg";
import { ReactComponent as Download } from "../../img/download.svg";
import { ReactComponent as Email } from "../../img/email.svg";
import ExperienceList from "../../data/experience.js";
import "./about.scss";

const About = () => {
	return (
		<section id="_ABOUT_SECTION" className="about">
			<div className="content about-content">
				<p>
					I do web development and I love doing it with style. I like thinking of new ways to
					improve processes and make it easier for users to understand and navigate through
					applications. Life's hard as it is why add to it? I love making applications fun to use. I
					love creating algorithms and just simply try and make things work.
				</p>
				<div className="about-container">
					<div>
						{/* EXPERIENCE */}
						<div className="about-item">
							<header>Experience</header>
							<div className="about-item-content">
								{ExperienceList.experience.map((value, index) => {
									return (
										<div className="experience-item" key={index}>
											<h1 className="title">{value.name}</h1>
											<h2>
												<span className="location-icon"></span> <span>{value.address}</span>
											</h2>
											<span className="position">{value.position}</span>
											<span className="dates">{value.dates}</span>
											<div className="tools-container">
												<span className="tools-header">Tools used:</span>
												<ul>
													{value.tools.map((value, index) => {
														return <li key={index}>{value}</li>;
													})}
												</ul>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div>
						{/* EDUCATION */}
						<div className="about-item">
							<header>Education</header>
							<div className="about-item-content education">
								<h1>Tertiary</h1>
								<h2>Cavite State University</h2>
								<h2>Imus Campus</h2>
								<h2>Bachelor of Science in Information Technology</h2>
								<h2>2011 - 2016</h2>
								<br />
								<h1>Secondary</h1>
								<h2>Saint Francis Institute</h2>
								<h2>2002 - 2006</h2>
								<br />
								<h1>Primary</h1>
								<h2>Oak Tree Christian Academy</h2>
								<h2>1996 - 2002</h2>
							</div>
						</div>
						{/* AWARDS */}
						{/* <div className="about-item">
                            <header>Awards</header>
                            <div className="about-item-content awards">
                                <h1>Developer Bootcamp</h1>
                                <h2>February 28, 2016</h2>
                                <h2>1st place</h2>
                                <h2>ADEC Innovations - Alabang, Metro Manila</h2>
                                <br />
                                <h1>Developer Bootcamp</h1>
                                <h2>February 28, 2016</h2>
                                <h2>Best in MS SQL</h2>
                                <h2>ADEC Innovations - Alabang, Metro Manila</h2>
                                <br />
                                <h1>Multimedia Skills Competition</h1>
                                <h2>October 2, 2014</h2>
                                <h2>1st place</h2>
                                <h2>Cavite State University - Imus Campus</h2>
                                <br />
                                <h1>Poster Making Contest</h1>
                                <h2>October 2, 2014</h2>
                                <h2>1st place</h2>
                                <h2>Cavite State University - Imus Campus</h2>
                            </div>
                        </div> */}
						{/* CONTACT */}
						<div className="about-item">
							<header>Contact</header>
							<div className="about-item-content">
								<button className="btn btn-download">
									<a
										href="https://drive.google.com/file/d/1SbRnN4dX969MTkY1IPThamb_1K2Pz2ZA/view?usp=sharing"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Download className="download-icon" /> <span>DOWNLOAD RESUME</span>
									</a>
								</button>
								<button className="btn btn-call">
									<a href="tel:916-552-3960">
										<Phone className="phone-icon" /> <span>09165523960</span>
									</a>
								</button>
								<button className="btn btn-email">
									<a href="mailto:aquinoarcie@gmail.com">
										<Email className="email-icon" /> <span>SEND ME AN EMAIL</span>
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="egg egg-yellow"></div>
			<div className="egg egg-purple"></div>
		</section>
	);
};

export default About;

import React, { useEffect } from "react";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import BackToTop from "./utilities/back-to-top/back-to-top";
import NavList from "./data/nav";
import UTILITIES from "./utilities/global-functions";

import "./Reset.css";
import "./App.scss";

const App = () => {
	const navList = NavList.nav;
	const d = document;
	const sections = {},
		position = {},
		isOn = {},
		navButtons = {};

	useEffect(() => {
		const listener = () => {
			const nav = d.getElementById("nav");
			const yOffset = window.pageYOffset;
			const backToTop = d.querySelector("#_BACK_TO_TOP");
			navList.forEach((navItem) => {
				if (navItem.isEnabled) {
					const { id, title, isShown, adjustment } = navItem;
					sections[title] = d.querySelector(`.${title}`);
					position[title] = sections[title.toLowerCase()].getBoundingClientRect().top;

					if (isShown) {
						navButtons[title] = d.querySelector(`#${id}_CLICK`);
						isOn[title] = position[title] >= -100 && position[title] <= 200;
					} else {
						isOn[title] = window.pageYOffset >= -100 && window.pageYOffset <= 100;
					}

					const activeSection = Object.keys(isOn).find((key) => isOn[key]);
					if (activeSection) {
						nav.classList.remove("hidden");
						navList.forEach((navItem) => {
							if (navItem.title === activeSection) {
								navItem.isDark ? nav.classList.add("light") : nav.classList.remove("light");
							}
						});
						activeSection === "hero" && backToTop.classList.add("hidden");
						if (activeSection !== "hero") {
							navButtons[activeSection].classList.add("active");
							navButtons[activeSection].parentElement.classList.add("active");
							backToTop.classList.remove("hidden");

							const carouselSections = [
								d.querySelectorAll(".carousel-primary"),
								d.querySelectorAll(".carousel-secondary"),
								d.querySelectorAll(".carousel-tertiary"),
								d.querySelectorAll(".carousel-button"),
								// d.querySelectorAll('.carousel-description')
							];
							const carouselContainer = d.querySelector(".carousel-container");
							const AppCards = d.querySelectorAll(".app-card");

							// specific actions for some sections
							// entered apps
							if (isOn.apps) {
								AppCards.forEach((appCard, i) => {
									const currentIndex = i;
									setTimeout(() => {
										appCard.classList.remove("fade-out-move-down");
										appCard.classList.add("fade-in-move-up");
									}, currentIndex * 200);
								});
							} else {
								AppCards.forEach((appCard, i) => {
									appCard.classList.remove("fade-in-move-up");
									appCard.classList.add("fade-out-move-down");
								});
							}
							// entered illustrations
							if (isOn.illustrations) {
								const illustrationCards = d.querySelectorAll(".illustration-card");
								illustrationCards.forEach((illustrationCard, i) => {
									const currentIndex = i;
									setTimeout(() => {
										illustrationCard.classList.remove("fade-out-move-down");
										illustrationCard.classList.add("fade-in-move-up");
									}, currentIndex * 200);
								});
								carouselContainer.classList.add("carousel-shown");
								carouselSections.forEach((carouselSection, i) => {
									const currentIndex = i;
									setTimeout(() => {
										if (carouselSection.length === 1) {
											carouselSection[0].classList.remove("carousel-fade-out-move-down");
											carouselSection[0].classList.add("carousel-fade-in-move-up");
										} else {
											carouselSection[0].classList.remove("carousel-fade-out-move-down");
											carouselSection[1].classList.remove("carousel-fade-out-move-down");
											carouselSection[0].classList.add("carousel-fade-in-move-up");
											carouselSection[1].classList.add("carousel-fade-in-move-up");
										}
									}, currentIndex * 200);
								});
							} else {
								const illustrationCards = d.querySelectorAll(".illustration-card");
								illustrationCards.forEach((illustrationCard, i) => {
									illustrationCard.classList.remove("fade-in-move-up");
									illustrationCard.classList.add("fade-out-move-down");
								});
								carouselContainer.classList.remove("carousel-shown");
								carouselSections.forEach((carouselSection, i) => {
									const currentIndex = i;
									setTimeout(() => {
										if (carouselSection.length === 1) {
											carouselSection[0].classList.remove("carousel-fade-in-move-up");
											carouselSection[0].classList.add("carousel-fade-out-move-down");
										} else {
											carouselSection[0].classList.remove("carousel-fade-in-move-up");
											carouselSection[1].classList.remove("carousel-fade-in-move-up");
											carouselSection[0].classList.add("carousel-fade-out-move-down");
											carouselSection[1].classList.add("carousel-fade-out-move-down");
										}
									}, currentIndex * 200);
								});
							}
						}
					} else {
						nav.classList.add("hidden");
						Object.values(navButtons).forEach((navButton) => {
							navButton.classList.remove("active");
							navButton.parentElement.classList.remove("active");
						});
					}
					// for eggs
					const totalAdjustment = sections[title].clientHeight * adjustment;
					if (yOffset > sections[title].getBoundingClientRect().top + totalAdjustment) {
						sections[title].classList.add("inactive");
					} else {
						sections[title].classList.remove("inactive");
					}
				}
			});
		};
		d.addEventListener("scroll", listener);
		return () => {
			d.removeEventListener("scroll", listener);
		};
	});

	// Apply event handlers. Example of firing the scrolling mechanism.
	useEffect(() => {
		const urlArray = window.location.href.split("/");
		const jumpTo = urlArray[urlArray.length - 1];

		if (jumpTo) {
			UTILITIES.handleScroll(1000, navList, `_${jumpTo.toUpperCase()}`);
		}

		const nav = d.querySelector("#nav");
		const quickLinks = d.querySelector(".quick-links");
		const backToTop = d.querySelector("#_BACK_TO_TOP");
		nav.addEventListener("click", UTILITIES.handleScroll.bind(null, 1000, navList));
		quickLinks.addEventListener("click", UTILITIES.handleScroll.bind(null, 1000, navList));
		backToTop.addEventListener("click", UTILITIES.handleScroll.bind(null, 1000, navList));

		return () => {
			nav.removeEventListener("click", UTILITIES.handleScroll);
			quickLinks.removeEventListener("click", UTILITIES.handleScroll);
			backToTop.removeEventListener("click", UTILITIES.handleScroll);
		};
	}, [navList]);

	return (
		<div className="app">
			<Nav></Nav>
			{navList.map(
				(navItem, index) =>
					navItem.isEnabled && <React.Fragment key={index}>{navItem.component}</React.Fragment>
			)}
			<BackToTop></BackToTop>
			<Footer></Footer>
		</div>
	);
};

export default App;

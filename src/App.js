import React from 'react';
import Nav from './components/nav/nav';
import Hero from './components/hero/hero';
import Apps from './components/apps/apps';
import Illustrations from './components/illustrations/illustrations';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Footer from './components/footer/footer';
import NavList from './data/nav';

import './Reset.css';
import './App.scss';

function App() {
	let navList = NavList.nav;
	let d = document;
	let moveCarousel = null;
	d.addEventListener('scroll', () => {
		let sections = {
			hero: d.querySelector('.hero'),
			apps: d.querySelector('.apps'),
			illustrations: d.querySelector('.illustrations'),
			skills: d.querySelector('.skills'),
			about: d.querySelector('.about')
		}
		let position = {
			apps: sections.apps.getBoundingClientRect().top,
			illustrations: sections.illustrations.getBoundingClientRect().top,
			skills: sections.skills.getBoundingClientRect().top,
			about: sections.about.getBoundingClientRect().top
		}
		let isOn = {
			hero: window.pageYOffset >= -100 && window.pageYOffset <= 100,
			apps: position.apps >= -100 && position.apps <= 100,
			illustrations: position.illustrations >= -100 && position.illustrations <= 100,
			skills: position.skills >= -100 && position.skills <= 200,
			about: position.about >= -100 && position.about <= 100
		}
		let navButtons = {
			apps: d.querySelector('#' + navList[1].id + '_CLICK'),
			illustrations: d.querySelector('#' + navList[2].id + '_CLICK'),
			skills: d.querySelector('#' + navList[3].id + '_CLICK'),
			about: d.querySelector('#' + navList[4].id + '_CLICK')
		}
		let carouselImages = [
			d.querySelectorAll('.carousel-primary'),
			d.querySelectorAll('.carousel-secondary'),
			d.querySelectorAll('.carousel-tertiary'),
			d.querySelectorAll('.carousel-button'),
			d.querySelectorAll('.carousel-description')
		]
		let carouselContainer = d.querySelector('.carousel-container');
		// if on a section that nav needs to show
		if (isOn.hero || isOn.apps || isOn.illustrations || isOn.skills || isOn.about) {
			d.getElementById('nav').classList.remove('hidden');
			let AppCards = d.querySelectorAll('.app-card');
			let illustrationCards = d.querySelectorAll('.illustration-card');
			// entered apps
			if (isOn.apps) {
				navButtons.apps.classList.add('active');
				navButtons.apps.parentElement.classList.add('active');
				AppCards.forEach((dom, i) => {
					let i2 = i;
					setTimeout(function () {
						dom.classList.remove('fade-out-move-down');
						dom.classList.add('fade-in-move-up');
					}, (i2 * 200));
				});
			} else {
				navButtons.apps.classList.remove('active');
				navButtons.apps.parentElement.classList.remove('active');
				AppCards.forEach((dom, i) => {
					dom.classList.remove('fade-in-move-up');
					dom.classList.add('fade-out-move-down');
				});
			}
			// entered illustrations
			if (isOn.illustrations) {
				navButtons.illustrations.classList.add('active');
				navButtons.illustrations.parentElement.classList.add('active');
				let illustrationCards = d.querySelectorAll('.illustration-card');
				illustrationCards.forEach((dom, i) => {
					let i2 = i;
					setTimeout(function () {
						dom.classList.remove('fade-out-move-down');
						dom.classList.add('fade-in-move-up');
					}, (i2 * 200));
				});
				carouselContainer.classList.add('carousel-shown');
				carouselImages.forEach((dom, i) => {
					let i2 = i;
					setTimeout(function () {
						if (dom.length == 1) {
							dom[0].classList.remove('carousel-fade-out-move-down');
							dom[0].classList.add('carousel-fade-in-move-up');
						} else {
							dom[0].classList.remove('carousel-fade-out-move-down');
							dom[1].classList.remove('carousel-fade-out-move-down');
							dom[0].classList.add('carousel-fade-in-move-up');
							dom[1].classList.add('carousel-fade-in-move-up');
						}
					}, (i2 * 200));
				})
				// moveCarousel = (e) => {
				// 	debugger
				// }
			} else {
				navButtons.illustrations.classList.remove('active');
				navButtons.illustrations.parentElement.classList.remove('active');
				let illustrationCards = d.querySelectorAll('.illustration-card');
				illustrationCards.forEach((dom, i) => {
					dom.classList.remove('fade-in-move-up');
					dom.classList.add('fade-out-move-down');
				});
				carouselContainer.classList.remove('carousel-shown');
				carouselImages.forEach((dom, i) => {
					let i2 = i;
					setTimeout(function () {
						if (dom.length == 1) {
							dom[0].classList.remove('carousel-fade-in-move-up');
							dom[0].classList.add('carousel-fade-out-move-down');
						} else {
							dom[0].classList.remove('carousel-fade-in-move-up');
							dom[1].classList.remove('carousel-fade-in-move-up');
							dom[0].classList.add('carousel-fade-out-move-down');
							dom[1].classList.add('carousel-fade-out-move-down');
						}
					}, (i2 * 200));
				})
				moveCarousel = null;
			}
			// entered skills
			if (isOn.skills) {
				navButtons.skills.classList.add('active');
				navButtons.skills.parentElement.classList.add('active');
			} else {
				navButtons.skills.classList.remove('active');
				navButtons.skills.parentElement.classList.remove('active');
			}
			// entered about
			if (isOn.about) {
				navButtons.about.classList.add('active');
				navButtons.about.parentElement.classList.add('active');
			} else {
				navButtons.about.classList.remove('active');
				navButtons.about.parentElement.classList.remove('active');
			}
			// manage nav mode
			if (isOn.apps || isOn.illustrations || isOn.about) {
				document.querySelector('nav').classList.add('light');
			} else {
				document.querySelector('nav').classList.remove('light');
			}
		} else {
			d.querySelector('nav').classList.add('hidden');
			navButtons.illustrations.classList.remove('active');
			navButtons.skills.classList.remove('active');
			navButtons.about.classList.remove('active');
		}
	});

	// scroll to
	function doScrolling(duration, element) {
		let startingY = window.pageYOffset
		let elementY = window.pageYOffset + document.querySelector('#' + element.target.id + '_SECTION').getBoundingClientRect().top
		// If element is close to page's bottom then window will scroll only to some position above the element.
		let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
		let diff = targetY - startingY
		// Easing function: easeInOutCubic
		// From: https://gist.github.com/gre/1650294
		let easing = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
		let start

		if (!diff) return

		// Bootstrap our animation - it will get called right before next frame shall be rendered.
		window.requestAnimationFrame(function step(timestamp) {
			if (!start) start = timestamp
			// Elapsed miliseconds since start of scrolling.
			let time = timestamp - start
			// Get percent of completion in range [0, 1].
			let percent = Math.min(time / duration, 1)
			// Apply the easing.
			// It can cause bad-looking slow frames in browser performance tool, so be careful.
			percent = easing(percent)

			window.scrollTo(0, startingY + diff * percent)

			// Proceed with animation as long as we wanted it to.
			if (time < duration) {
				window.requestAnimationFrame(step)
			}
		})
	}

	function ifNav(duration, element) {
		let op = navList.filter(data => (data.id === element.target.classList.value));
		if (op.length) {
			doScrolling(duration, element);
		}
	}

	// Apply event handlers. Example of firing the scrolling mechanism.
	document.addEventListener('click', ifNav.bind(null, 1000))

	// remove clip paths if internet explorer
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	return (
		<div className="app">
			<Nav></Nav>
			<Hero></Hero>
			<Apps></Apps>
			<Illustrations moveCarousel={(e) => moveCarousel()}></Illustrations>
			<Skills></Skills>
			<About></About>
			<Footer></Footer>
		</div>
	);
}

export default App;

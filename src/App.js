import React from 'react';
import Nav from './components/nav/nav';
import Hero from './components/hero/hero';
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
	d.addEventListener('scroll', () => {
		let sections = {
			hero: d.querySelector('.hero'),
			illustrations: d.querySelector('.illustrations'),
			skills: d.querySelector('.skills'),
			about: d.querySelector('.about')
		}
		let position = {
			illustrations: sections.illustrations.getBoundingClientRect().top,
			skills: sections.skills.getBoundingClientRect().top,
			about: sections.about.getBoundingClientRect().top
		}
		let isOn = {
			hero: window.pageYOffset >= -100 && window.pageYOffset <= 100,
			illustrations: position.illustrations >= -100 && position.illustrations <= 100,
			skills: position.skills >= -100 && position.skills <= 200,
			about: position.about >= -100 && position.about <= 100
		}
		let navButtons = {
			illustrations: d.querySelector('#' + navList[1].id + '_CLICK'),
			skills: d.querySelector('#' + navList[2].id + '_CLICK'),
			about: d.querySelector('#' + navList[3].id + '_CLICK')
		}

		// if on a section that nav needs to show
		if (isOn.hero || isOn.illustrations || isOn.skills || isOn.about) {
			d.getElementById('nav').classList.remove('hidden');
			// entered illustrations
			if (isOn.illustrations) {
				navButtons.illustrations.classList.add('active');
				let illustrationCards = d.querySelectorAll('.illustration-card');
				illustrationCards.forEach((dom, i) => {
					let i2 = i;
					setTimeout(function () {
						dom.classList.add('fade-move-up');
					}, (i2 * 200));
				});
			} else {
				navButtons.illustrations.classList.remove('active');
			}
			// entered skills
			if (isOn.skills) {
				navButtons.skills.classList.add('active');
			} else {
				navButtons.skills.classList.remove('active');
			}
			// entered about
			if (isOn.about) {
				navButtons.about.classList.add('active');
			} else {
				navButtons.about.classList.remove('active');
			}
			// manage nav mode
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
	// document.getElementById('scrollTop').addEventListener('click', doScrolling.bind(null, '#top', 1500))
	// document.getElementById('scrollBot').addEventListener('click', doScrolling.bind(null, '#bottom', 4000))

	// Or simply:
	// doScrolling('#mytarget', 1000)

	return (
		<div className="app">
			<Nav></Nav>
			<Hero></Hero>
			<Illustrations></Illustrations>
			<Skills></Skills>
			<About></About>
			<Footer></Footer>
		</div>
	);
}

export default App;

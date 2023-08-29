import React from "react";
import NavList from "../../data/nav";
import "./nav.scss";

const Nav = () => {
	return (
		<nav id="nav">
			<ul>
				{NavList.nav.map((navItem, index) => {
					const { id, title, label, isShown, isEnabled } = navItem;
					return (
						isShown &&
						isEnabled && (
							<li key={index}>
								<span id={`${id}_CLICK`}>
									<button id={id} className={id}>
										{label ? label : title}
									</button>
									<span className="sr-only">{label ? label : title}</span>
								</span>
							</li>
						)
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;

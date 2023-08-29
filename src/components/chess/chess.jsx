import React from "react";
import { ReactComponent as NewTab } from "../../img/new-tab.svg";
import "./chess.scss";

const Chess = () => {
	const urlChess = "https://amadmonkey.github.io/chess/";
	const urlBreachProtocol = "https://amadmonkey.github.io/breach-protocol/";
	// const url = "http://localhost:3001/chess";
	return (
		<section id="_PROJECTS_SECTION" className="projects">
			<div className="project-container chess">
				<div className="content chess-content">
					<iframe
						title="chess-app"
						src={urlChess}
						name="iframe"
						height="100%"
						width="100%"
						allow="clipboard-write"
						sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
					></iframe>
					<a
						href={urlChess}
						target="_blank"
						rel="noopener noreferrer"
						className="new-tab link link-no-deco"
					>
						<NewTab /> Open in a new tab
					</a>
				</div>
			</div>
			<div className="project-container breach-protocol">
				<div className="content breach-protocol-content">
					<iframe
						title="breach-protocol-app"
						src={urlBreachProtocol}
						name="iframe"
						height="100%"
						width="100%"
						allow="clipboard-write"
						sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
					></iframe>
					<a
						href={urlBreachProtocol}
						target="_blank"
						rel="noopener noreferrer"
						className="new-tab link link-no-deco"
					>
						<NewTab /> Open in a new tab
					</a>
				</div>
			</div>
		</section>
	);
};

export default Chess;

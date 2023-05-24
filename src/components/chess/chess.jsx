import React from 'react';
import { ReactComponent as NewTab } from '../../img/new-tab.svg';
import './chess.scss';

const Chess = () => {
	const url = "https://amadmonkey.github.io/chess/";
	// const url = "http://localhost:3001/chess";
	return (
		<section id="_CHESS_SECTION" className="chess">
			<div className="content chess-content">
				{/* <iframe title="chess-app" src={url} name="iframe" height="1000" width="100%"></iframe> */}
				<iframe title="chess-app" src={url} name="iframe" height="100%" width="100%" allow="clipboard-write"></iframe>
				<a href={url} target="_blank" rel="noopener noreferrer"><NewTab className="new-tab" /></a>
			</div>
		</section>
	)
};

export default Chess;

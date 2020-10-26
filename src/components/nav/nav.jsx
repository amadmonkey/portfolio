import React from 'react';
import NavList from '../../data/nav';
import './nav.scss';

function Nav() {
    return (
        <nav id="nav">
            <ul>
                {NavList.nav.map((value, index) => {
                    // value.isShown && <li key={index}><span id={value.id + '_CLICK'}><button id={value.id} href="#" className={value.id}>{value.title}</button></span></li>
                    return (
                        value.isShown && <li key={index}><span id={value.id + '_CLICK'}><a id={value.id} className={value.id}>{value.title}</a></span></li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Nav;
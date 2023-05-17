import React from 'react';
import NavList from '../../data/nav';
import './footer.scss';

const Footer = () => {

    var d = new Date();

    return (
        <footer className="footer">
            <div className="content">
                <ul className="quick-links">
                    {NavList.nav.map((navItem, index) => {
                        const { id, title, label, isEnabled } = navItem;
                        return isEnabled && <li key={index}><button id={id} className={`${id} button-link`}>{label ? label : title}</button></li>
                    })}
                </ul>
                <p>
                    Made with <a href="https://reactjs.org/" target="_blank" className="link" rel="noopener noreferrer">React JS</a>
                    <br /><br />
                    <a href="https://sass-lang.com/" target="_blank" className="link" rel="noopener noreferrer">SASS</a><br /><br />
                    and <a href="https://fonts.google.com/" target="_blank" className="link" rel="noopener noreferrer">Google Fonts</a>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    Brand icons from <a href="https://simpleicons.org" target="_blank" className="link" rel="noopener noreferrer">Simple Icons</a>
                </p>
                <span className="copyright">© {d.getFullYear()} Arcie Aquino. All rights reserved.</span>
            </div>
        </footer >
    );
}

export default Footer;
import React from 'react';
import NavList from '../../data/nav';
import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <ul className="quick-links">
                    {NavList.nav.map((value, index) => {
                        return <li key={index}><a id={value.id} className={value.id} href="#">{value.title}</a></li>
                    })}
                </ul>
                <p>Made with <a href="https://reactjs.org/" target="_blank" class="link">React JS</a><br /><br /><a href="https://sass-lang.com/" target="_blank" class="link">SASS</a><br /><br />and <a href="https://fonts.google.com/" target=" _blank" class="link">Google Fonts</a></p>
                <span class="copyright">© 2019 Arcie Aquino. All rights reserved.</span>
            </div>
            <div className="bar bar-left"></div>
            <div className="bar bar-right"></div>
        </footer >
    );
}

export default Footer;
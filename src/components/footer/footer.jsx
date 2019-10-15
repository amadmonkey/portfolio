import React from 'react';
import NavList from '../../data/nav';
import { ReactComponent as Bar } from '../../img/bars.svg';
import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <div>
                    <ul className="quick-links">
                        {NavList.nav.map((value, index) => {
                            return <li key={index}><a id={value.id} className={value.id} href="#">{value.title}</a></li>
                        })}
                    </ul>
                    <p>Made with React JS<br /><br />and<br /><br />Google Fonts</p>
                    <span>© 2019 Arcie Aquino. All rights reserved.</span>
                </div>
            </div>
            <Bar className="bar-left" />
            <Bar className="bar-right" />
        </footer>
    );
}

export default Footer;
import React from 'react';
import './apps.scss';
import AppsList from '../../data/apps.js';
import AppCard from '../../utilities/app-card/app-card';

function Apps() {

    return (
        <section id="_APPS_SECTION" className="apps">
            <div className="content apps-content">
                {AppsList.apps.map((value, index) => {
                    return <AppCard app={value} key={index}></AppCard>;
                })}
            </div>
        </section>
    );
}

export default Apps;
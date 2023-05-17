import React from 'react';
import Hero from '../components/hero/hero';
import Apps from '../components/apps/apps';
import Illustrations from '../components/illustrations/illustrations';
import Skills from '../components/skills/skills';
import About from '../components/about/about';

class Nav {
    constructor({ title = "", label = "", isShown = true, component = null, isEnabled = true, isDark = false }) {
        this.title = title;
        this.label = label;
        this.id = "_" + title.toUpperCase().replace(/ /g, '-');
        this.isShown = isShown;
        this.component = component;
        this.isEnabled = isEnabled;
        this.isDark = isDark;
    }
}

const obj = {
    nav: [
        new Nav({
            title: "hero",
            isShown: false,
            component: <Hero />,
            isEnabled: true,
            isDark: false
        }),
        new Nav({
            title: "about",
            isShown: true,
            component: <About />,
            isEnabled: true,
            isDark: true
        }),
        new Nav({
            title: "skills",
            isShown: true,
            component: <Skills />,
            isEnabled: true,
            isDark: false
        }),
        new Nav({
            title: "apps",
            isShown: true,
            component: <Apps />,
            isEnabled: false,
            isDark: true
        }),
        new Nav({
            title: "illustrations",
            label: "art",
            isShown: true,
            component: <Illustrations />,
            isEnabled: true,
            isDark: true
            
        })
    ]
};

export default obj;
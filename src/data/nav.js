import React from 'react';
import Hero from '../components/hero/hero';
import Apps from '../components/apps/apps';
import Illustrations from '../components/illustrations/illustrations';
import Skills from '../components/skills/skills';
import About from '../components/about/about';
import Chess from '../components/chess/chess'
import { ReactComponent as Pawn } from '../img/pawn.svg';

class Nav {
    constructor({ title = "", label = null, isShown = true, component = null, isEnabled = true, isDark = false, adjustment = null }) {
        this.title = title;
        this.label = label;
        this.id = "_" + title.toUpperCase().replace(/ /g, '-');
        this.isShown = isShown;
        this.component = component;
        this.isEnabled = isEnabled;
        this.isDark = isDark;
        this.adjustment = adjustment;
    }
}

const obj = {
    nav: [
        new Nav({
            title: "hero",
            isShown: false,
            component: <Hero />,
            isEnabled: true,
            isDark: false,
            adjustment: "0.5"
        }),
        new Nav({
            title: "about",
            isShown: true,
            component: <About />,
            isEnabled: true,
            isDark: true,
            adjustment: "1.7"
        }),
        new Nav({
            title: "skills",
            isShown: true,
            component: <Skills />,
            isEnabled: true,
            isDark: false,
            adjustment: "3.5"
        }),
        new Nav({
            title: "apps",
            isShown: true,
            component: <Apps />,
            isEnabled: false,
            isDark: true,
            adjustment: "3.5"
        }),
        new Nav({
            title: "illustrations",
            label: "art",
            isShown: true,
            component: <Illustrations />,
            isEnabled: true,
            isDark: true,
            adjustment: "5"
        }),
        new Nav({
            title: "chess",
            label: <Pawn />,
            isShown: true,
            component: <Chess />,
            isEnabled: true,
            adjustment: "10"
        })
    ]
};

export default obj;
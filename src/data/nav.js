class Nav {
    constructor({ title = "", isShown = false }) {
        this.title = title;
        this.isShown = isShown;
        this.id = "_" + title.toUpperCase().replace(/ /g, '-');
    }
}

export default {
    nav: [
        new Nav({
            title: "hero",
            isShown: false
        }),
        new Nav({
            title: "art",
            isShown: true
        }),
        new Nav({
            title: "skills",
            isShown: true
        }),
        new Nav({
            title: "about",
            isShown: true
        })
    ]
};
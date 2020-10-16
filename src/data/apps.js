class App {
    basePath = '/app-screenshots/';
    // basePath = '/portfolio/app-screenshots/';
    constructor({ name = "", link = "", imgName = "", description = "", lastUpdated = "", tools = [] }) {
        this.name = name;
        this.link = link;
        this.path = this.basePath + imgName;
        this.description = description;
        this.lastUpdated = lastUpdated;
        this.tools = tools;
    }
}

export default {
    apps: [
        new App({
            name: "Game Catalog Example (Under construction)",
            link: "https://amadmonkey.github.io/game-catalog/",
            imgName: "game-catalog.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            lastUpdated: "9/12/2020",
            tools: [
                1,
                2,
                3,
                4,
                6,
                11,
                12
            ]
        })
    ]
};
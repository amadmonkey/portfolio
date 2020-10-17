class App {
    // basePath = '/app-screenshots/';
    basePath = '/portfolio/app-screenshots/';
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
            description: "Ongoing sample project. Made with help from <a href='https://api.rawg.io/docs/' target='_blank' rel='noopener noreferrer'>RAWG</a> and <a href='https://www.gamespot.com/api/' target='_blank' rel='noopener noreferrer'>Gamespot</a> apis. Used ReactJS, SASS and <a href='https://xd.adobe.com/view/92904a32-7ded-438b-7d81-176e8d655e47-e4a1/' target='_blank' rel='noopener noreferrer'>XD</a> for the initial design. Tried to make something with a 'see-through' vibe dealing with lines and less solid colors.",
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
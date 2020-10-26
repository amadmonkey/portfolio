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
            name: "Game Catalog Example",
            link: "https://amadmonkey.github.io/game-catalog/",
            imgName: "game-catalog.png",
            description: "Made with help from <a href='https://api.rawg.io/docs/' target='_blank' rel='noopener noreferrer'>RAWG</a> and <a href='https://www.gamespot.com/api/' target='_blank' rel='noopener noreferrer'>Gamespot</a> apis. Used ReactJS, SASS and <a href='https://xd.adobe.com/view/92904a32-7ded-438b-7d81-176e8d655e47-e4a1/' target='_blank' rel='noopener noreferrer'>XD</a> for the initial design. Tried to make something with a 'see-through' vibe dealing with lines and less solid colors.",
            lastUpdated: "9/12/2020",
            update: [
                "Additional filtering for each section",
                "Responsive layout"
            ],
            tools: [
                1,
                2,
                3,
                4,
                6,
                11,
                12
            ]
        }),
        new App({
            name: "Just another Chess App",
            link: "https://amadmonkey.github.io/chess/",
            imgName: "just-another-chess-app.png",
            description: "Started as a chat app to teach myself socket.io, got the idea from <a href='https://www.chess.com' target='_blank' rel='noreferrer noopener'>chess.com</a> glad I added the game as it added to the challenge and made it more fun to create. Theme is based off of an icon pack from <a href='https://www.flaticon.com/authors/freepik' target='_blank' rel='noopener noreferrer' title='Freepik'>Freepik</a>. Was originally going to use it during the development process only but i like how it turned out. Going to create a custom more badass theme as an option next.",
            lastUpdated: "10/27/2020",
            update: [
                "Check/Checkmate UX",
                "Other chess rule UX i.e limiting moves when checked",
                "Themes"
            ],
            tools: [
                1,
                2,
                3,
                4,
                6,
                13
            ]
        })
    ]
};
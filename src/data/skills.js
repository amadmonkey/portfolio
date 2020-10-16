class Skill {
    basePath = '/tech/';
    // basePath = '/portfolio/tech/';
    constructor({ id = "", title = "", rate = "", imgName = "" }) {
        this.id = id;
        this.title = title;
        this.rate = rate > 5 ? 5 : rate;
        this.path = {
            dark: this.basePath + imgName + "-dark.svg",
            light: this.basePath + imgName + "-light.svg"
        }
    }
}

export default {
    skills: [
        new Skill({
            id: 1,
            title: "HTML",
            rate: 5,
            imgName: "html5"
        }),
        new Skill({
            id: 2,
            title: "CSS",
            rate: 5,
            imgName: "css3"
        }),
        new Skill({
            id: 3,
            title: "LESS/SASS",
            rate: 4,
            imgName: "sass"
        }),
        new Skill({
            id: 4,
            title: "JavaScript",
            rate: 5,
            imgName: "javascript"
        }),
        new Skill({
            id: 5,
            title: "AngularJS",
            rate: 4,
            imgName: "angularjs"
        }),
        new Skill({
            id: 6,
            title: "React JS",
            rate: 3,
            imgName: "react"
        }),
        new Skill({
            id: 7,
            title: "Java",
            rate: 3,
            imgName: "java"
        }),
        new Skill({
            id: 8,
            title: "Twitter Bootstrap",
            rate: 5,
            imgName: "bootstrap"
        }),
        new Skill({
            id: 8,
            title: "REST",
            rate: 5,
            imgName: "rest"
        }),
        new Skill({
            id: 9,
            title: "MySQL",
            rate: 4,
            imgName: "mysql"
        }),
        new Skill({
            id: 10,
            title: "Adobe Photoshop",
            rate: 5,
            imgName: "adobephotoshop"
        }),
        new Skill({
            id: 11,
            title: "Adobe Illustrator",
            rate: 3,
            imgName: "adobeillustrator"
        }),
        new Skill({
            id: 12,
            title: "Adobe XD",
            rate: 3,
            imgName: "adobexd"
        })
    ]
};
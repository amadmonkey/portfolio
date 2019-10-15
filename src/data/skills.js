class Skill {
    constructor({ title = "", rate = "" }) {
        this.title = title;
        this.rate = rate;
    }
}

export default {
    skills: [
        new Skill({
            title: "HTML/CSS",
            rate: 5
        }),
        new Skill({
            title: "LESS/SASS",
            rate: 4
        }),
        new Skill({
            title: "JavaScript/jQuery",
            rate: 5
        }),
        new Skill({
            title: "AngularJS",
            rate: 4
        }),
        new Skill({
            title: "React JS",
            rate: 3
        }),
        new Skill({
            title: "Java / Spring Boot",
            rate: 3
        }),
        new Skill({
            title: "Twitter Bootstrap",
            rate: 5
        }),
        new Skill({
            title: "REST",
            rate: 5
        }),
        new Skill({
            title: "MySQL",
            rate: 4
        }),
        new Skill({
            title: "Adobe Photoshop",
            rate: 5
        }),
        new Skill({
            title: "Adobe Illustrator",
            rate: 3
        }),
        new Skill({
            title: "Adobe XD",
            rate: 3
        })
    ]
};
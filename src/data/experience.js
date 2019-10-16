class Experience {
    constructor({ name = "", address = "", position = "", dates = "", tools = [] }) {
        this.name = name;
        this.address = address;
        this.position = position;
        this.dates = dates;
        this.tools = tools;
    }
}

export default {
    experience: [
        new Experience({
            name: "Security Bank Corporation",
            address: "Makati City",
            position: "AngularJS Develper",
            dates: "May 2019 - October 2019",
            tools: [
                "HTML, CSS",
                "JavaScript / jQuery",
                "Angular JS",
                "LESS / SASS"
            ]
        }),
        new Experience({
            name: "Philus Technology Inc.",
            address: "Taguig, Metro Manila",
            position: "AngularJS Developer",
            dates: "February 2018 - March 2019",
            tools: [
                "HTML, CSS",
                "JavaScript / jQuery",
                "Angular JS",
                "LESS / SASS"
            ]
        }),
        new Experience({
            name: "ADEC Innovations",
            address: "Alabang, Metro Manila",
            position: "Systems Developer I",
            dates: "November 2016 - September 2017",
            tools: [
                "HTML, CSS",
                "JavaScript / jQuery",
                "Java / Spring Boot",
                "AngularJS",
                "MySQL"
            ]
        })
    ]
};
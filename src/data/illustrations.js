class Illustration {
    basePath = '/portfolio/illustrations/';
    constructor({ title = "", desc = "", isPortrait = true, imgName = "" }) {
        this.title = title;
        this.desc = desc;
        this.isPortrait = isPortrait;
        this.path = this.basePath + imgName;
    }
}

export default {
    illustrations: [
        new Illustration({
            title: "Flamingo Logo",
            desc: "",
            isPortrait: true,
            imgName: "01.jpg"
        }),
        new Illustration({
            title: "Shots",
            desc: "",
            isPortrait: false,
            imgName: "03.jpg"
        }),
        new Illustration({
            title: "Get To Work",
            desc: "",
            isPortrait: false,
            imgName: "04.jpg"
        }),
        new Illustration({
            title: "Mr. Greedy",
            desc: "",
            isPortrait: false,
            imgName: "06.jpg"
        }),
        new Illustration({
            title: "Application Image",
            desc: "",
            isPortrait: true,
            imgName: "07.jpg"
        }),
        new Illustration({
            title: "Project Green",
            desc: "",
            isPortrait: false,
            imgName: "08.jpg"
        }),
        new Illustration({
            title: "Competition Entry",
            desc: "",
            isPortrait: true,
            imgName: "09.jpg"
        }),
        new Illustration({
            title: "Shirt Design",
            desc: "",
            isPortrait: true,
            imgName: "11.jpg"
        }),
        new Illustration({
            title: "Batman",
            desc: "",
            isPortrait: true,
            imgName: "12.jpg"
        })
    ]
};
class Illustration {
    basePath = `${process.env.NODE_ENV === 'development' ? '/portfolio' : ''}/illustrations/`
    constructor({ title = "", desc = "", isPortrait = true, dominantColor = "", imgName = "" }) {
        this.title = title;
        this.desc = desc;
        this.isPortrait = isPortrait;
        this.dominantColor = dominantColor;
        this.path = {
            sm: this.basePath + imgName.sm,
            md: this.basePath + (imgName.md ? imgName.md : imgName.lg),
            lg: this.basePath + imgName.lg
        }
    }
}

const obj = {
    illustrations: [
        new Illustration({
            title: "Flamingo Logo",
            desc: "Used on a local bar business.",
            isPortrait: true,
            dominantColor: "#fff",
            imgName: {
                sm: "01-sm.jpg",
                md: "01-md.jpg",
                lg: "01-lg.jpg"
            }
        }),
        new Illustration({
            title: "Shots",
            desc: "Used on a local bar business.",
            isPortrait: false,
            dominantColor: "#fff",
            imgName: {
                sm: "03-sm.jpg",
                md: "03-md.jpg",
                lg: "03-lg.jpg"
            }
        }),
        new Illustration({
            title: "Competition Entry",
            desc: "Won first place. Don't ask me why or how.",
            isPortrait: true,
            dominantColor: "#fff",
            imgName: {
                sm: "09-sm.jpg",
                lg: "09-lg.jpg"
            }
        }),
        new Illustration({
            title: "Get To Work",
            desc: "A college thesis app logo.",
            isPortrait: false,
            dominantColor: "#fff",
            imgName: {
                sm: "04-sm.jpg",
                md: "04-md.jpg",
                lg: "04-lg.jpg"
            }
        }),
        new Illustration({
            title: "Mr. Greedy",
            desc: "Scrapped mascot design for an app. Went with a more professional look instead.",
            isPortrait: false,
            dominantColor: "#fff",
            imgName: {
                sm: "06-sm.jpg",
                md: "06-md.jpg",
                lg: "06-lg.jpg"
            }
        }),
        new Illustration({
            title: "Shirt Design",
            desc: "College shirt design",
            isPortrait: true,
            dominantColor: "#fff",
            imgName: {
                sm: "11-sm.jpg",
                md: "11-md.jpg",
                lg: "11-lg.jpg"
            }
        }),
        new Illustration({
            title: "Application Image",
            desc: "Used for a school project. Please don't count the fingers.",
            isPortrait: false,
            dominantColor: "#63c976",
            imgName: {
                sm: "07-sm.jpg",
                lg: "07-lg.jpg"
            }
        }),
        new Illustration({
            title: "Project Green",
            desc: "A college thesis app logo.",
            isPortrait: false,
            dominantColor: "#fff",
            imgName: {
                sm: "08-sm.jpg",
                md: "08-md.jpg",
                lg: "08-lg.jpg"
            }
        }),
        new Illustration({
            title: "Batman",
            desc: "Batfleck",
            isPortrait: true,
            dominantColor: "#000",
            imgName: {
                sm: "12-sm.jpg",
                lg: "12-lg.jpg"
            }
        }),
        new Illustration({
            title: "A Woman",
            desc: "A woman with her starbucks",
            isPortrait: true,
            dominantColor: "#fff",
            imgName: {
                sm: "13-sm.jpg",
                lg: "13-lg.jpg"
            }
        })
    ]
};

export default obj;
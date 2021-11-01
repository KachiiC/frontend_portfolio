import About from "Sections/Main/Pages/Displayed/About"

const DataOverview = {
    // Replace the strings with your social media handles
    social_media: {
        github: "KachiiC",
        // facebook: "facebook",
        // instagram: "basically_mma",
        // twitter: "twitter",
        // pintrest: "pintrest",
        // snapchat: "snapchat",
        // tiktok: "tiktok",
        // youtube: "youtube",
    },
    navbar_data: {
        title: "Kachi's Portfolio",
        menu_number: 5 
    },
    footer_data: {
        heading: "Useful Links",
        name: "Kachi Cheong",
        year: "2021"
    },
    footer_pages: {
        // Replace this with your own pages or remove key and value if not required 
        about: About,
        backend: <h1>Backend</h1>,
        code: <h1>Code</h1>,
        contact: <h1>Contact</h1>,
        faq: <h1>FAQ</h1>,
    }
}

export default DataOverview
// COMPONENTS
import ImageTextComponent from "Components/SiteComponents/ImageText"
import SiteCards from "Components/SiteComponents/SiteCards"
// IMAGES
import PlaykrownImage from 'Images/Playkrown.png'
import SnuggleBunnyImage from 'Images/SnuggleBunny.png'

export const MyProjectsData = [
    {
        title: "Basically MMA",
        description: "A full stack MMA platform built with react, typescript and django restframework.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Basically%20MMA",
        link: "https://github.com/KachiiC/basically_mma",
        link_type: "external"
    },
    {
        title: "FPL App",
        description: "A full stack fantasy premier league tool built with react and django restframework.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=FPL%20App",
        link: "https://github.com/KachiiC/fpl_fullstack",
        link_type: "external"
    },
    {
        title: "Finance Stack",
        description: "A full stack fantasy premier league tool built with react and django restframework.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Finance%20Stack",
        link: "https://github.com/KachiiC/finance_stack",
        link_type: "external"
    },
    {
        title: "E-commerce App",
        description: "An ecommerce template which can be populated with your own data.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=E-commerce%20App",
        link: "",
        link_type: "external"
    },
    {
        title: "HSK App",
        description: "This a learning platform built with react for people who are learning mandarin.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=HSK%20App",
        link: "https://github.com/KachiiC/HSK",
        link_type: "external"
    },
    {
        title: "Tweet Me App",
        description: "A full stack twitter clone built with react and django restframework.",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Tweet%20Me%20App",
        link: "https://github.com/KachiiC/tweet_me",
        link_type: "external"
    }
]

export const FreelanceProjects = [
    {
        title: "Snuggle Bunny Clothing",
        description: "This is a clothing e-commerce website built with shopify, the basic template uses the debut theme but most (if not all) the pages are redesigned to include various components and transitions to enhance the customer exprience.",
        image: SnuggleBunnyImage,
        link: "https://www.snugglebunnyclothing.com/",
    },
    {
        title: "PlayKrown Ent",
        description: "This website is built for an events company, the website is built with shopify and the template uses the debut theme. The pages and components of the website including the navbar, banners, product pages and transitions were all redesigned from scratch.",
        image: PlaykrownImage,
        link: "https://playkrown.co.uk/"
    }
]

const ProjectsData = [
    {
        title: "My Projects",
        description: "This is list of my projects built with React and typescript.",
        content: <SiteCards data={MyProjectsData} card_size="medium"/>
    },
    {
        title: "Freelance Projects",
        description: "A list of Kachii's freelance projects.",
        content: <ImageTextComponent data={FreelanceProjects} />
    }
]

export default ProjectsData
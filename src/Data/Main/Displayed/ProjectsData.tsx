// COMPONENTS
import AntdCards from "Components/ExternalLibraries/AntdCards"
import ImageTextComponent from "Components/SiteComponents/ImageText"
// IMAGES
import PlaykrownImage from 'Images/Playkrown.png'
import SnuggleBunnyImage from 'Images/SnuggleBunny.png'

export const MyProjectsData = [
    {
        title: "Basically MMA",
        description: "A full stack MMA platform built with react, typescript and django restframework",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Basically%20MMA",
        link: "https://github.com/KachiiC/basically_mma"
    },
    {
        description: "A full stack fantasy premier league tool built with react and django restframework",
        title: "FPL App",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=FPL%20App",
        link: "https://github.com/KachiiC/fpl_fullstack"
    },
    {
        description: "A full stack fantasy premier league tool built with react and django restframework",
        title: "Finance Stack",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Finance%20Stack",
        link: "https://github.com/KachiiC/finance_stack"
    },
    {
        description: "An ecommerce template which can be populated with your own data",
        title: "E-commerce App",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=E-commerce%20App",
        link: ""
    },
    {
        title: "HSK App",
        description: "This a learning platform built with react for people who are learning mandarin",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=HSK%20App",
        link: "https://github.com/KachiiC/HSK"
    },
    {
        title: "Tweet Me App",
        description: "A full stack twitter clone built with react and django restframework ",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Tweet%20Me%20App",
        link: "https://github.com/KachiiC/tweet_me"
    },
]

export const FreelanceProjects = [
    {
        title: "Snuggle Bunny Clothing",
        description: "This is a ...",
        image: SnuggleBunnyImage,
        link: "https://www.snugglebunnyclothing.com/",
    },
    {
        title: "PlayKrown Ent",
        description: "This is a playkrown ent",
        image: PlaykrownImage,
        link: "https://playkrown.co.uk/"
    }
]

const ProjectsData = [
    {
        title: "My Projects",
        description: "This is list of my projects built with React and typescript.",
        content: <AntdCards data={MyProjectsData} />
    },
    {
        title: "Freelance Projects",
        description: "A list of Kachii's freelance projects.",
        content: <ImageTextComponent data={FreelanceProjects} />
    }
]

export default ProjectsData
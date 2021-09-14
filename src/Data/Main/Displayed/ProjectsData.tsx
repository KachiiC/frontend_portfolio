// COMPONENTS
import ImageTextComponent from "Components/SiteComponents/ImageTextComponent"
// IMAGES
import PlaykrownImage from 'Images/Playkrown.png'
import SnuggleBunnyImage from 'Images/SnuggleBunny.png'

export const MyProjectsData = [
    {
        title: "Basically MMA",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Basically%20MMA",
        link: ""
    },
    {
        title: "FPL App",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=FPL%20App",
        link: ""
    },
    {
        title: "Finance Stack",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Finance%20Stack",
        link: ""
    },
    {
        title: "E-commerce App",
        description: "This app is...",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF?text=E-commerce%20App",
        link: ""
    }
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
        content: <ImageTextComponent data={MyProjectsData} />
    },
    {
        title: "Freelance Projects",
        description: "A list of Kachii's freelance projects.",
        content: <ImageTextComponent data={FreelanceProjects} />
    }
]

export default ProjectsData
// PAGES
import About from "Sections/Main/Pages/Displayed/About"
import Api from "Sections/Main/Pages/Displayed/Api"
import MyComponentsData from "./Components/MyComponents"
import ProjectsData from "./ProjectsData"

const DisplayedPagesData = [
    {
        title: "Projects",
        sub_menu: ProjectsData
    },
    {
        title: "Components",
        sub_menu: MyComponentsData
    },
    {
        title: "Api",
        content: Api
    },
    {
        title: "About",
        content: About
    },
    {
        title: "Code",
        external_link: "https://github.com/KachiiC/portfolio"
    }
]

export default DisplayedPagesData
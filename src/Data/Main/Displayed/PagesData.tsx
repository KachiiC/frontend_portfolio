// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES
import About from "Sections/Main/Pages/Displayed/About"
import Components from "Sections/Main/Pages/Displayed/Components"
import Projects from "Sections/Main/Pages/Displayed/Projects"
import Api from "Sections/Main/Pages/Displayed/Api"

const PagesData = [
    {
        title: "Projects",
        content: Projects
    },
    {
        title: "Components",
        content: Components
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

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData
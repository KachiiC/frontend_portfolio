// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES
import About from "Sections/Main/Pages/Displayed/About"
import Components from "Sections/Main/Pages/Displayed/Components"
import Projects from "Sections/Main/Pages/Displayed/Projects"

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
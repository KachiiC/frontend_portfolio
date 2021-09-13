// TOOLS
import { ExampleContentRender } from "Tools/ExampleTools"
import { LinkRenderer } from "Tools/RoutersRender"

const PagesData = [
    {
        title: "Projects",
    },
    {
        title: "Components",
    },
    {
        title: "About",
    },
    {
        title: "Code",
    }
]

// Renders content for each object (for example use only)
ExampleContentRender(PagesData)

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData
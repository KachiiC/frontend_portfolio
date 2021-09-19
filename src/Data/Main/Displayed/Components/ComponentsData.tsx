// DATA
import { MyComponentsData } from "./MyComponents"
import { ComponentsLibraryData } from "./ComponentsLibrary"
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"

export const ComponentsData = [
    {
        title: "My Components",
        description: "These a portfolio of components built by Kachii Cheong, they are written in react tyscript. The components do not rely on any component library and reusable for any page!, the code for each component is linked to each page",
        content: <AntdTabs data={MyComponentsData} position="left" />,
    },
    {
        title: "Component Libraries",
        description: "This is list of components built by myself with React and typescript",
        content: <AntdTabs data={ComponentsLibraryData} position="left" />,
    }
]
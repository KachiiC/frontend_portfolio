// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
import GalleryComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/GalleryComponent"
import SiteNavbarComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/NavbarComponent"
import SiteFooterComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/SiteFooterComponent"

export const ComponentsLibraryData = [
    {
        title: "Site Gallery",
        content: GalleryComponent
    },
    {
        title: "Site Navbar",
        content: SiteNavbarComponent,
    },
    {
        title: "Site Footer",
        content: SiteFooterComponent,
    },
]

export const MyComponentsData = [
    {
        title: "Antd Tables",
        description: "Antd Tables description",
        content: "content 1",
    },
    {
        title: "Antd Cards",
        description: "Antd Cards description",
        content: "content 2",
    },
    {
        title: "Antd Tabs",
        description: "Antd Tabs description",
        content: "content 3",
    },
]

export const ComponentsData = [
    {
        title: "Component Libraries",
        description: "This is list of components built by myself with React and typescript",
        content: <AntdTabs data={ComponentsLibraryData} position="left" />,
    },
    {
        title: "My Components",
        description: "Components Built by Kachii",
        content: <AntdTabs data={MyComponentsData} position="left" />,
    }
]
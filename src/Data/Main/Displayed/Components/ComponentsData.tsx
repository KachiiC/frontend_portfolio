// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
import GalleryComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/GalleryComponent"
import ModalComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ModalComponent"
import NavbarComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/NavbarComponent"
import FooterComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/FooterComponent"
import TabsComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/TabsComponent"

export const MyComponentsData = [
    {
        title: "Site Navbar",
        content: NavbarComponent,
    },
    {
        title: "Site Footer",
        content: FooterComponent,
    },
    {
        title: "Site Gallery",
        content: GalleryComponent
    },
    {
        title: "Site Modal",
        content: ModalComponent,
    },
    {
        title: "Site Tabs",
        content: TabsComponent
    }

]

export const ComponentsLibraryData = [
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
        title: "My Components",
        description: "Components Built by Kachii",
        content: <AntdTabs data={MyComponentsData} position="left" />,
    },
    {
        title: "Component Libraries",
        description: "This is list of components built by myself with React and typescript",
        content: <AntdTabs data={ComponentsLibraryData} position="left" />,
    },
]
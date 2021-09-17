// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
import GalleryComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/GalleryComponent"
import ModalComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ModalComponent"
import NavbarComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/NavbarComponent"
import FooterComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/FooterComponent"
import CollapsibleComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/CollapsibleComponent"
import TabsComponent from "Sections/Main/Pages/Displayed/Components/ComponentComponents/TabsComponent"

export const MyComponentsData = [
    {
        title: "Navbar",
        content: NavbarComponent,
    },
    {
        title: "Footer",
        content: FooterComponent,
    },
    {
        title: "Collapsible",
        content: CollapsibleComponent
    },
    {
        title: "Gallery",
        content: GalleryComponent
    },
    {
        title: "Modal",
        content: ModalComponent,
    },
    {
        title: "Tabs",
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
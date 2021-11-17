// PROPS
import { ComponentTabProps } from "Props/ComponentProps"
// DATA
import { CardsSectionData } from "./ComponentsListData/CardsData"
import { CollapsibleSectionsData } from "./ComponentsListData/CollapsibleData"
import { FilterListSectionData } from "./ComponentsListData/TableData"
import { FilterCollapsibleData } from "./ComponentsListData/FilterCollapsibleData"
import { FilterGallerySectionsData } from "./ComponentsListData/FilterGalleryData"
import { FooterSectionData } from "./ComponentsListData/FooterData"
import { GallerySectionData } from "./ComponentsListData/GalleryData"
import { ModalSectionExample } from "./ComponentsListData/ModalData"
import { NavSectionData } from "./ComponentsListData/NavbarData"
import { TabsSectionExample } from "./ComponentsListData/TabsData"
import { TimelineSectionExample } from "./ComponentsListData/TimelineData"
import { YoutubeModalExample } from "./ComponentsListData/YoutubeModalData"
// COMPONENTS
import ComponentsTab from "./ComponentTab"
import { 
    CardsExample,
    CollapsibleExample, 
    FilterCollapsibleExample, 
    FilterGalleryExample, 
    FilterTableExample, 
    GalleryExample, 
    ModalComponentExample, 
    TabsExample, 
    TimelineExample,
    YoutubeModalPlayerExample
} from "./ComponentExamples"

const githubDirect = "https://github.com/KachiiC/"

const components_data = [
    {
        title: "Navbar",
        introduction: "The navigation bar for this portfolio is a responsive component built with react and typscript.",
        sections: NavSectionData,
        link: githubDirect + "React_Navbar"
    },
    {
        title: "Footer",
        introduction: "The Footer for this portfolio is a responsive component built with react and typscript.",
        sections: FooterSectionData,
        link: githubDirect + "React_footer",
    },
    {
        title: "Cards",
        introduction: "This is a cards component built with react.",
        sections: CardsSectionData,
        component: CardsExample,
        link: githubDirect + "react_cards",
    },
    {
        title: "Collapsible",
        introduction: "This is a collapsible component built with react hooks.",
        sections: CollapsibleSectionsData,
        component: CollapsibleExample,
        link: githubDirect + "react_collapsible",
    },
    {
        title: "Gallery",
        introduction: "This is a gallery component built using react hooks.",
        sections: GallerySectionData,
        link: githubDirect + "react_gallery",
        component: GalleryExample,
    },
    {
        title: "Modal",
        introduction: "This is a modal component built for with react hooks",
        sections: ModalSectionExample,
        component: ModalComponentExample,
        link: githubDirect + "react_modal",
    },
    {
        title: "Tabs",
        introduction: "This is a tabs component built with react hooks",
        sections: TabsSectionExample,
        component: TabsExample,
        link: githubDirect + "react_tabs",
    },
    {
        title: "Timeline",
        introduction: "This is a timeline component built with react hooks",
        sections: TimelineSectionExample,
        component: TimelineExample,
        link: githubDirect + "react_timeline",
    },
    {
        title: "Youtube Modal Player",
        introduction: "This is a youtube player component built with react hooks, in coperating iframe and the modal component.",
        sections: YoutubeModalExample,
        component: YoutubeModalPlayerExample,
        link: githubDirect + "youtube_player"
    },
]

const MyComponentsData = components_data.map((data: ComponentTabProps) => {

    const {
        component,
        introduction,
        link,
        sections,
        title,
    } = data

    const ComponentTabProps = {
        component: component,
        introduction: introduction,
        link: link,
        key: title,
        sections: sections,
        title: title,
    }

    return {
        title: title,
        content: (
            <ComponentsTab
                {...ComponentTabProps}
            />
        )
    }
})

export default MyComponentsData
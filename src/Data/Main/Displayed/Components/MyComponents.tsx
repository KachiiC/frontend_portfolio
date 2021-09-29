// PROPS
import { MyComponentsDataProps } from "Props/ComponentProps"
// DATA
import { CardsSectionData } from "./ComponentsListData/CardsData"
import { CollapsibleSectionsData } from "./ComponentsListData/CollapsibleData"
import { FilterListSectionData } from "./ComponentsListData/FilterListData"
import { FilterCollapsibleData } from "./ComponentsListData/FilterCollapsibleData"
import { FilterGallerySectionsData } from "./ComponentsListData/FilterGalleryData"
import { FooterSectionData } from "./ComponentsListData/FooterData"
import { GallerySectionData } from "./ComponentsListData/GalleryData"
import { ModalSectionExample } from "./ComponentsListData/ModalData"
import { NavSectionData } from "./ComponentsListData/NavbarData"
// import { SlideshowSectionData } from "./ComponentsListData/SlideshowData"
import { TabsSectionExample } from "./ComponentsListData/TabsData"
import { TimelineSectionExample } from "./ComponentsListData/TimelineData"
// COMPONENTS
import ComponentsTab from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ComponentTab"
import { 
    CardsExample,
    CollapsibleExample, 
    FilterCollapsibleExample, 
    FilterGalleryExample, 
    FilterListExample, 
    GalleryExample, 
    ModalComponentExample, 
    // SlideshowExample, 
    TabsExample, 
    TimelineExample,
    YoutubeModalPlayerExample
} from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ComponentExamples"
import { YoutubeModalExample } from "./ComponentsListData/YoutubeModalData"

const githubDirect = "https://github.com/KachiiC/"


export const MyComponentsData = [
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
        title: "Filter Collapsible",
        introduction: "This is a filter collapsible component built with react hooks, typscript and forms.",
        sections: FilterCollapsibleData,
        component: FilterCollapsibleExample,
        link: githubDirect + "react_filter_collapsible",
    },
    {
        title: "Filter Gallery",
        introduction: "This is a filter gallery component built with react hooks, use effect and typscript",
        sections: FilterGallerySectionsData,
        link: githubDirect + "react_filter_gallery",
        component: FilterGalleryExample,
    },
    {
        title: "Filter List",
        introduction: "This is a filter list component built with react hooks, typscript and forms.",
        sections: FilterListSectionData,
        component: FilterListExample,
        link: githubDirect + "react_filter_list",
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
        // link: githubDirect + "react_timeline",
    },
    // {
    //     title: "Slideshow",
    //     introduction: "This is a Slideshow component built for with react hooks",
    //     sections: SlideshowSectionData,
    //     component: SlideshowExample,
    // },
]

MyComponentsData.map((data: MyComponentsDataProps) => {
    
    data.content = (
        <ComponentsTab 
            introduction={data.introduction}
            component={data.component}
            sections={data.sections}
        />
    )

    return data
})
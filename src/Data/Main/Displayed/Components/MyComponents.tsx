// PROPS
import { MyComponentsDataProps } from "Props/ComponentProps"
// DATA
import { CollapsibleSectionsData } from "./ComponentsListData/CollapsibleData"
import { FilterListSectionData } from "./ComponentsListData/FilterListData"
import { FooterSectionData } from "./ComponentsListData/FooterData"
import { GallerySectionData } from "./ComponentsListData/GalleryData"
import { ModalSectionExample } from "./ComponentsListData/ModalData"
import { NavSectionData } from "./ComponentsListData/NavbarData"
import { TabsSectionExample } from "./ComponentsListData/TabsData"
// COMPONENTS
import ComponentsTab from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ComponentTab"
import { 
    CollapsibleExample, 
    FilterListExample, 
    GalleryExample, 
    ModalComponentExample, 
    TabsExample 
} from "Sections/Main/Pages/Displayed/Components/ComponentComponents/ComponentExamples"

export const MyComponentsData = [
    {
        title: "Navbar",
        introduction: "The navigation bar for this portfolio is a responsive component built with react and typscript.",
        sections: NavSectionData
    },
    {
        title: "Footer",
        introduction: "The Footer for this portfolio is a responsive component built with react and typscript.",
        sections: FooterSectionData,
    },
    {
        title: "Collapsible",
        introduction: "This is a collapsible component built with react hooks.",
        sections: CollapsibleSectionsData,
        component: CollapsibleExample,
    },
    {
        title: "Filter List",
        introduction: "This is a filter list component built with react hooks, typscript and forms.",
        sections: FilterListSectionData,
        component: FilterListExample,
    },
    {
        title: "Gallery",
        introduction: "This is a gallery component built using react hooks.",
        sections: GallerySectionData,
        component: GalleryExample,
    },
    {
        title: "Modal",
        introduction: "This is a modal component built for with react hooks",
        sections: ModalSectionExample,
        component: ModalComponentExample,
    },
    {
        title: "Tabs",
        introduction: "This is a tabs component built with react hooks",
        sections: TabsSectionExample,
        component: TabsExample,
    }
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
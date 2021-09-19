import FilterList from "Components/SiteComponents/FilterList"
import Collapsible from "Components/SiteComponents/SiteCollapsible"
import Gallery from "Components/SiteComponents/SiteGallery"
import Modal from "Components/SiteComponents/SiteModal"
import Tabs from "Components/SiteComponents/SiteTabs"
// DATA
import { CollapsibleData } from "Data/Main/Displayed/Components/ComponentsListData/CollapsibleData"
import { FilterListData } from "Data/Main/Displayed/Components/ComponentsListData/FilterListData"
import { GalleryData } from "Data/Main/Displayed/Components/ComponentsListData/GalleryData"
import { ModalData } from "Data/Main/Displayed/Components/ComponentsListData/ModalData"
import { TabsData } from "Data/Main/Displayed/Components/ComponentsListData/TabsData"

export const CollapsibleExample = (
        <Collapsible 
            data={CollapsibleData} 
            width={90} 
        />
    )

export const FilterListExample = (
        <FilterList 
            data={FilterListData} 
            default_column="name"
            width={80}
            placeholder="example placeholder"
        />
    )

export const GalleryExample = (
        <Gallery
            data={GalleryData} 
            width={80} 
            number={4}
        />
    )

export const ModalComponentExample = (
        <>
            {/* MODAL */}
            <Modal
                content={ModalData.content} 
                component={ModalData.component("modal")} 
                type="modal" 
            />
            {/* BLANK */}
            <Modal
                content={ModalData.blank} 
                component={ModalData.component("blank")} 
                type="blank" 
            />
        </>
    )

export const TabsExample = (
        <Tabs 
            data={TabsData} 
            width={80}
        />
    )



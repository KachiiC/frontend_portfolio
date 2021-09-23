import FilterCollapsible from "Components/SiteComponents/FilterCollapsible"
import FilterGallery from "Components/SiteComponents/FilterGallery"
import FilterList from "Components/SiteComponents/FilterList"
import SiteCards from "Components/SiteComponents/SiteCards"
import Collapsible from "Components/SiteComponents/SiteCollapsible"
import Gallery from "Components/SiteComponents/SiteGallery"
import Modal from "Components/SiteComponents/SiteModal"
import SiteSlideshow from "Components/SiteComponents/SiteSlideshow"
import Tabs from "Components/SiteComponents/SiteTabs"
import Timeline from "Components/SiteComponents/SiteTimeline"
// DATA
import { CardsData } from "Data/Main/Displayed/Components/ComponentsListData/CardsData"
import { CollapsibleData } from "Data/Main/Displayed/Components/ComponentsListData/CollapsibleData"
import { FilterListData } from "Data/Main/Displayed/Components/ComponentsListData/FilterListData"
import { GalleryData } from "Data/Main/Displayed/Components/ComponentsListData/GalleryData"
import { ModalData } from "Data/Main/Displayed/Components/ComponentsListData/ModalData"
import { SlideShowData } from "Data/Main/Displayed/Components/ComponentsListData/SlideshowData"
import { TabsData } from "Data/Main/Displayed/Components/ComponentsListData/TabsData"
import { TimelineData } from "Data/Main/Displayed/Components/ComponentsListData/TimelineData"

export const CardsExample = (
    <SiteCards
        data={CardsData}
        card_size="large"
    />
)

export const CollapsibleExample = (
    <Collapsible 
        data={CollapsibleData} 
        width={90} 
    />
)

export const FilterCollapsibleExample = (
    <FilterCollapsible
        data={CollapsibleData} 
        width={80}
        placeholder="example placeholder"
    />
)

export const FilterGalleryExample = (
    <FilterGallery 
        data={CardsData}
        card_size="medium"
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

export const SlideshowExample = (
    <SiteSlideshow 
        data={SlideShowData} 
        thumbnails={5}
        width={50}
    />
)

export const TabsExample = (
        <Tabs 
            data={TabsData} 
            width={80}
        />
    )

export const TimelineExample = (
        <div className="site-timeline-example">
            <Timeline 
                data={TimelineData} 
                width={100}
            />
        </div>
    )



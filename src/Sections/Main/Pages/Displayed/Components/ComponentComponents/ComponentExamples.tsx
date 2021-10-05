// COMPONENTS
import FilterCollapsible from "Components/SiteComponents/FilterCollapsible"
import FilterGallery from "Components/SiteComponents/FilterGallery"
import FilterList from "Components/SiteComponents/FilterTable"
import SiteCards from "Components/SiteComponents/SiteCards"
import Collapsible from "Components/SiteComponents/SiteCollapsible"
import Gallery from "Components/SiteComponents/SiteGallery"
import Modal from "Components/SiteComponents/SiteModal"
import Tabs from "Components/SiteComponents/SiteTabs"
import Timeline from "Components/SiteComponents/SiteTimeline"
import YoutubeModal from "Components/SiteComponents/YoutubeModal"
// DATA
import { CardsData } from "Data/Main/Displayed/Components/ComponentsListData/CardsData"
import { CollapsibleData } from "Data/Main/Displayed/Components/ComponentsListData/CollapsibleData"
import { FilterListData } from "Data/Main/Displayed/Components/ComponentsListData/FilterListData"
import { GalleryData } from "Data/Main/Displayed/Components/ComponentsListData/GalleryData"
import { ModalData } from "Data/Main/Displayed/Components/ComponentsListData/ModalData"
import { TabsData } from "Data/Main/Displayed/Components/ComponentsListData/TabsData"
import { TimelineData } from "Data/Main/Displayed/Components/ComponentsListData/TimelineData"
import { YoutubeModalCurrentExample, YoutubeModalData } from "Data/Main/Displayed/Components/ComponentsListData/YoutubeModalData"

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
        placeholder="example placeholders"
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


export const YoutubeModalPlayerExample = (
    <>
        <h3>Click on the image to open modal!</h3>
        <YoutubeModal 
            component={
                <div className="w-30 m-auto cursor-pointer">
                    <img src={YoutubeModalCurrentExample.video_thumbnail} 
                        alt="component" 
                        className="site-responsive-image"
                    />
                </div>
            } 
            current={YoutubeModalCurrentExample} 
            data={YoutubeModalData} 
        />
    </>
)


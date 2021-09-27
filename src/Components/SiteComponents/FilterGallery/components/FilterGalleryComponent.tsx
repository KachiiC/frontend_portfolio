// PROPS
import { FilterGalleryProps } from "Props/Components/FilterGalleryProps"
// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"

const GalleryComponent = (props: FilterGalleryProps) => (
    <>
        <div className="filter-buttons-container w-80 m-auto" >
            {props.buttons}
        </div>
        <SiteCards 
            data={props.data} 
            card_size={props.card_size}
        />
    </>
)

export default GalleryComponent
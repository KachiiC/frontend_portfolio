import { useState } from "react"
// CSS
import './GalleryComponent.css'
// PROPS
import { GalleryProps } from "Props/Components/GalleryProps"
// TOOLS
// COMPONENTS
import SiteModalComponent from "../SiteModal"
import GalleryImage from "./components/GalleryImage"
import GalleryImagesRow from "./components/GalleryImagesRow"

const GalleryComponent = (props: GalleryProps) => {

    const { data, title, width, number } = props

    // WIDTH LOGIC
    const widthLogic = width ? width : 80
    // NUMBER LOGIC
    const numberLogic = number ? number : 4

    // TITLE LOGIC
    const titleLogic = () => {
        if (title) return <h2>{title}</h2>
    }

    // IMAGE LOGIC
    const [displayedImage, setDisplayedImage] = useState(0)

    // The displayed selected image which opens the modal
    const gallerySelectedImage = (
        <GalleryImage 
            image={data[displayedImage].image} 
            title={data[displayedImage].title}
            width={widthLogic}
            type="display"
        />
    )
    
    // The image displayed in the modal when clicked
    const galleryModalImage = (
        <GalleryImage 
            image={data[displayedImage].image}
            title={data[displayedImage].title}
            width={50}
        />
    )

    return (
        <div className="site-gallery-component">
            {titleLogic()}
            <SiteModalComponent
                type="blank"
                component={gallerySelectedImage}
                content={galleryModalImage}
            />
            <div className={`w-${widthLogic} m-auto`}>
                <GalleryImagesRow 
                    data={data}
                    function={setDisplayedImage}
                    row_number={numberLogic}
                />
            </div>
        </div>
    )
}

export default GalleryComponent
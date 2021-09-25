import { useState } from "react"
// CSS
import './GalleryComponent.css'
// PROPS
import { GalleryProps } from "Props/Components/GalleryProps"
// TOOLS
import { GridStyle } from "Tools/GridTools"
// COMPONENTS
import GalleryImage from "./components/GalleryImage"
import RowImage from "./components/RowImage"
import SiteModalComponent from "../SiteModal"

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

    const GalleryRows = () => {

        const displayedRows = data.map(item => {

            const clickFunction = () => setDisplayedImage(data.indexOf(item))
    
            return (
                <RowImage
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    click={clickFunction}
                />
            )
        }).slice(0, numberLogic)

        return (
            <div className="site-grid" 
                style={GridStyle(numberLogic)}
            >
                {displayedRows}
            </div>
        )
    }

    const gallerySelectedImage = (
        <GalleryImage 
            image={data[displayedImage].image} 
            title={data[displayedImage].title}
            width={widthLogic}
            type="display"
        />
    )

    const galleryModalImage = (
        <GalleryImage 
            image={data[displayedImage].image}
            title={data[displayedImage].title}
            width={50}
        />
    )

    return (
        <>
            {titleLogic()}
            <SiteModalComponent
                type="blank"
                component={gallerySelectedImage}
                content={galleryModalImage}
            />
            <div className={`w-${widthLogic} m-auto`}>
                <GalleryRows />
            </div>
        </>
    )
}

export default GalleryComponent
import { useState } from 'react';
// CSS
import './SiteSlideshow.css';
// COMPONENTS
import SlideshowComponent from './components/SlideshowComponent';
// PROPS
import { SiteSlideShowProps } from 'Props/Components/SlideshowProps';
// TOOPS
import { setLogic } from 'Tools/ObjectDataTools';

const SiteSlideshow  = (props: SiteSlideShowProps) => {

    const { data, thumbnails, width } = props
        
    const thumbnailsLogic = thumbnails ? thumbnails : 4
    const widthLogic = width ? width : 80
    
    const [selectedImage, setselectedImage] = useState(0)
    const [displayedSlides, setDisplayedSlides] = useState({
        first: 0,
        last: thumbnailsLogic
    })

    const { first, last } = displayedSlides

    // CLICK BUTTON
    const lastSlide = data.length - 1

    const rowLogic = (type: string) => {
        type === "next" ?
        
        // NEXT LOGIC
        last > lastSlide ? 
            setLogic(0, thumbnailsLogic, setDisplayedSlides)
            : 
            setLogic(first + 1, last + 1, setDisplayedSlides)
        :
        
        // PREV LOGIC
        first === 0 ? 
            setLogic(lastSlide - thumbnailsLogic + 1, data.length, setDisplayedSlides)
            :
            setLogic(first - 1, last - 1, setDisplayedSlides)
    }

    const clickLogic = (type: string) => {
        last === selectedImage ? rowLogic("next"): rowLogic("previous")
    }
    
    return (
        <SlideshowComponent
            data={data}
            caption={data[selectedImage].caption}
            first={first}
            last={last}
            next={() => clickLogic("next")}
            previous={() => rowLogic("previous")}
            select_image={data[selectedImage].image}
            setFunction={setselectedImage}
            thumbnails={thumbnailsLogic}
            width={widthLogic}
        />
    )
}

export default SiteSlideshow
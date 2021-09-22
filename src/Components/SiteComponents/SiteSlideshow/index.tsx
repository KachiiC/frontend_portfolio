import { useState } from 'react';
// CSS
import './SiteSlideshow.css';
// COMPONENTS
// PROPS
import { SiteSlideShowProps } from 'Props/ComponentProps';
import SlideshowComponent from './components/SlideshowComponent';

const SiteSlideshow  = (props: SiteSlideShowProps) => {

    const { data, thumbnails } = props
        
    const thumbnailsLogic = thumbnails ? thumbnails : 4
    
    const [selectedImage, setselectedImage] = useState(0)
    const [displayedSlides, setDisplayedSlides] = useState({
        first: 0,
        last: thumbnailsLogic
    })

    const { first, last } = displayedSlides
    
    const setLogic = (set_first: number, set_last: number) => {
        return setDisplayedSlides({
            first: set_first,
            last: set_last
        })
    }

    // CLICK BUTTON
    const lastSlide = data.length - 1
    
    // BUTTON ICON
    const nextLogic = () => last > lastSlide ? 
        setLogic(0, thumbnailsLogic) 
        : 
        setLogic(first + 1, last + 1)

    const prevLogic = () => first === 0 ? 
        setLogic(lastSlide - thumbnailsLogic + 1, data.length)
        :
        setLogic(first - 1, last - 1)

    return (
        <SlideshowComponent
            data={data}
            caption={data[selectedImage].caption}
            first={first}
            last={last}
            next={() => nextLogic()}
            previous={() => prevLogic()}
            select_image={data[selectedImage].image}
            setFunction={setselectedImage}
            thumbnails={thumbnailsLogic}
        />
    )
}

export default SiteSlideshow
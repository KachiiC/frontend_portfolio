import { useState } from 'react';
// CSS
import './SiteSlideshow.css';
// TOOLS
import { GridStyle } from 'Tools/GridTools'
import SiteIcon from 'Tools/SiteIcon'
import SlideshowRowImage from './components/SlideshowRowImage';

interface slideshowButtonProps {
    type: "next" | "previous"
}

const SiteSlideshow  = (props: any) => {

    const { data, thumbnails } = props    
    
    const [selectedImage, setselectedImage] = useState(0)
    const [displayedSlides, setDisplayedSlides] = useState({
        first: 0,
        last: thumbnails 
    })

    const { first, last } = displayedSlides

    const displayedImagesRow = data.map((image: any) => {
        const currentImage = data.indexOf(image)
        
        return (
            <SlideshowRowImage
                image={image}
                alt={data.indexOf(image)}
                click={() => setselectedImage(currentImage)}
            />
        )
    }).slice(first, last)

    // Click BUTTON
    const ClickButton = (props: slideshowButtonProps) => {

        const lastSlide = data.length - 1

        const displayedSlidesLogic = () => {

            const setLogic = (first_slide: any, last_slide: any) => {
                return setDisplayedSlides({
                    first: first_slide,
                    last: last_slide
                })
            }

            const nextLogic = last + 1 >= lastSlide ? 
                setLogic(0,thumbnails)
                :
                setLogic(first + 1, last + 1)

            const prevLogic = first === 0 ? 
                setLogic(lastSlide - thumbnails, lastSlide)
                :
                setLogic(first - 1, last - 1)
                
            return props.type === "next" ?  nextLogic : prevLogic
        }

        const buttonTypeLogic = props.type === "next" ? "right": "left"

        return (
            <div onClick={() => displayedSlidesLogic()} 
                className={`slideshow-button ${buttonTypeLogic} cursor-pointer`}
            >
                <SiteIcon 
                    type={buttonTypeLogic} 
                    size="3x"
                /> 
            </div>
        )
    }

    return (
        <div className="slideshow-container">
            <img src={data[selectedImage]}
                alt="displayed_slide"
                className="site-responsive-image site-border"
            />
            <ClickButton type="previous" />
            <ClickButton type="next" />
            <div className="caption-container">
                <p id="caption">this</p>
            </div>

            <div className="site-grid slideshow-row" 
                style={GridStyle(thumbnails)}
            >
                {displayedImagesRow}
            </div>
    </div>


    )
}

export default SiteSlideshow
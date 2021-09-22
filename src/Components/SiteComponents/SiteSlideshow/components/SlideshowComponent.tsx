// COMPONENTS
import { SlideshowComponentProps } from "Props/ComponentProps"
import ClickButton from "./SlideshowButton"
import { SlideshowCaption, SlideshowRows } from "./SlideshowRowImages"


const SlideshowComponent = (props: SlideshowComponentProps) => {

    const { 
        caption,
        data,
        first,
        last,
        next,
        previous,
        select_image,
        setFunction,
        thumbnails,
    } = props
     
    return (

        <div className="slideshow-container">
            <img src={select_image}
                alt="displayed_slide"
                className="site-responsive-image site-border"
            />
            <ClickButton 
                type="previous"
                click={previous} 
            />
            <ClickButton 
                type="next"  
                click={next}
            />
            <SlideshowCaption
                caption={caption} 
            />
            <SlideshowRows 
                first={first} 
                last={last} 
                data={data} 
                setFunction={setFunction}
                thumbnails={thumbnails}
            />
        </div>
    )
}

export default SlideshowComponent
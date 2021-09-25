// PROPS
import { SlideshowComponentProps } from "Props/Components/SlideshowProps"
// COMPONENTS
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
        width
    } = props
     
    return (

        <div className={`slideshow-container w-${width} m-auto`}>
            <ClickButton 
                type="previous"
                click={previous} 
            />
            <img src={select_image}
                alt="displayed_slide"
                className="site-responsive-image site-shadow"
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
// PROPS
import { slideshowButtonProps } from "Props/Components/SlideshowProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const ClickButton = (props: slideshowButtonProps) => {

    const buttonTypeLogic = props.type === "next" ? "right": "left"

    return (
        <div className={`slideshow-button ${buttonTypeLogic} cursor-pointer`}
            onClick={props.click}>
            <SiteIcon 
                type={buttonTypeLogic} 
                size="3x"
            /> 
        </div>
    )
}

export default ClickButton
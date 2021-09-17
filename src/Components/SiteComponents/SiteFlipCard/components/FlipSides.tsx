// PROPS
import { FlipBackProps, FlipFrontProps } from "Props/ComponentProps"

export const FlipFront = (props: FlipFrontProps) => {

    const {image, height, width} = props

    const styleLogic = {
        "width" :`${width}px`, 
        "height" : `${height}px`
    }

    return (
        <div className="flip-card-front">
            <img src={image}
                alt="flip-card"
                style={styleLogic}
                className="site-responsive-image"
            />
        </div>
    )
}


export const FlipBack = (props: FlipBackProps) => (
    <div className="flip-card-back">
        {props.content}
    </div>
)
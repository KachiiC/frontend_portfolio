import { useState } from "react"
// PROPS
import { singleCollapsibleProps } from "Props/Components/CollapsibleProps"
// COMPONENTS
import { CollapsibleContent, CollapsibleHeading } from "./CollapsibleParts"

const SingleCollapsible = (props: singleCollapsibleProps) => {

    const [displayContent, setDisplayContent] = useState(false)
    const [collapisbleDirection, setCollapisbleDirection] = useState("left")

    const clickLogic = () => {
        !displayContent ?
            setDisplayContent(true) 
            : 
            setDisplayContent(false);
        
        collapisbleDirection === "left" ? 
            setCollapisbleDirection("down") 
            : 
            setCollapisbleDirection("left")
    }

    return (
        <>
            <CollapsibleHeading
                direction={collapisbleDirection}
                click={() => clickLogic()}
                title={props.title}
            />
            {displayContent && (
                <CollapsibleContent 
                    width={props.width} 
                    content={props.content} 
                />
            )}
        </>
    )
}

export default SingleCollapsible
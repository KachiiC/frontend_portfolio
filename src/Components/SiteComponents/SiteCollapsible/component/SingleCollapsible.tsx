import { useState } from "react"
// CSS
import { CSSTransition} from 'react-transition-group';
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
            <CSSTransition
                in={displayContent}
                timeout={500}
                classNames="collapsible-transition"
                unmountOnExit
                // appear
            >
                <CollapsibleContent 
                    width={props.width} 
                    content={props.content} 
                />
            </CSSTransition>
        </>
    )
}

export default SingleCollapsible
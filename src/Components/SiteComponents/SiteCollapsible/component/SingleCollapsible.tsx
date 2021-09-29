import { useState } from "react"
// CSS
import { CSSTransition} from 'react-transition-group';
// PROPS
import { singleCollapsibleProps } from "Props/Components/CollapsibleProps"
// COMPONENTS
import { CollapsibleContent, CollapsibleHeading } from "./CollapsibleParts"

const SingleCollapsible = (props: singleCollapsibleProps) => {

    // Each tabs content is open or closed depending on this state
    const [displayContent, setDisplayContent] = useState(false)
    // if tab is open, direction will point down, if closed will point left (default)
    const [collapisbleDirection, setCollapisbleDirection] = useState("left")

    const clickLogic = () => {
        // Each tabs content is open or closed depending on state
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
                // on click will change direction and show or clsose content
                click={() => clickLogic()}
                direction={collapisbleDirection}
                title={props.title}
            />
            <CSSTransition
                in={displayContent}
                timeout={500}
                classNames="collapsible-transition"
                unmountOnExit
                appear
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
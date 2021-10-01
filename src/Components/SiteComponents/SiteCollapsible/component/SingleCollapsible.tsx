import { useReducer, useState } from "react"
// CSS
import { CSSTransition} from 'react-transition-group';
// PROPS
import { singleCollapsibleProps } from "Props/Components/CollapsibleProps"
// COMPONENTS
import { CollapsibleContent, CollapsibleHeading } from "./CollapsibleParts"

const SingleCollapsible = (props: singleCollapsibleProps) => {

    // Each tabs content is open or closed depending on this reducder
    const [displayContent, toggleContent] = useReducer(
        displayContent => !displayContent,
        false
    )
    // if tab is open, direction will point down, if closed will point left (default)
    const [collapisbleDirection, setCollapisbleDirection] = useState("left")

    const clickLogic = () => {
        // Each tabs content is open or closed depending on stateToggle
        toggleContent()
        
        collapisbleDirection === "left" ? 
            setCollapisbleDirection("down") 
            : 
            setCollapisbleDirection("left")
    }

    return (
        <>
            <CollapsibleHeading
                // on click will change direction and show or closes content
                title={props.title}
                click={() => clickLogic()}
                direction={collapisbleDirection}
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
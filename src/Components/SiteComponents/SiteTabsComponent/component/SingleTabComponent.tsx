import { useState } from "react"
// PROPS
import { singleTabProps } from "Props/ComponentProps"
import { TabContent, TabHeading } from "./TabParts"

const SingleTabComponent = (props: singleTabProps) => {

    const [displayContent, setDisplayContent] = useState(false)
    const [tabDirection, setTabDirection] = useState("left")

    const clickLogic = () => {
        !displayContent ? setDisplayContent(true) : setDisplayContent(false);
        tabDirection === "left" ? setTabDirection("down") : setTabDirection("left")
    }

    return (
        <>
            <TabHeading
                width={props.width}
                direction={tabDirection}
                click={() => clickLogic()}
                title={props.title}
            />
            {displayContent && (
                <TabContent 
                    width={props.width} 
                    content={props.content} 
                />
            )}
        </>
    )
}

export default SingleTabComponent
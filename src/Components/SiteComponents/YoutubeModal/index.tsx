// PROPS
import { YoutubeModalProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import SiteModalComponent from "../SiteModal"
import YoutubeModalContent from "./components/YoutubeModalContent"
// CSS
import './YoutubeModal.css'


const YoutubeModal = (props: YoutubeModalProps) => {

    const componentLogic = props.component ? 
        props.component 
        : 
        <img src={props.current.video_thumbnail} 
            alt={props.current.video_title} 
        />
        
    const modalContent = (
        <YoutubeModalContent 
            data={props.data}
            current={props.current}
        />
    )

    return (
        <SiteModalComponent
            component={componentLogic}
            content={modalContent}
            type="modal"
        />
    )
} 

export default YoutubeModal
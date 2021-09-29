import { useState } from "react"
// PROPS
import { YoutubeModalProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import ModalVideoPlayer from "./ModalVideoPlayer"
import YoutubeSuggestions from "./YoutubeSuggestion"

const YoutubeModalContent = (props: YoutubeModalProps) => {
    
    const [displayedVideo, setDisplayedVideo] = useState(props.current)

    const {video_title, video_id, video_description, upload_date} = displayedVideo

    return (
        <div className="site-grid-system youtube-modal-content">
            <ModalVideoPlayer 
                video_title={video_title}
                video_description={video_description}
                video_id={video_id}
                upload_date={upload_date} 
                video_thumbnail={""}            
            />
            <YoutubeSuggestions 
                data={props.data}
                setFunction={setDisplayedVideo}
            />
        </div>
    )
}

export default YoutubeModalContent
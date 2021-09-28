import { useState } from "react"
import ModalVideoPlayer from "./ModalVideoPlayer"
import YoutubeSuggestions from "./YoutubeSuggestion"

const YoutubeModalContent = (props: any) => {
    
    const [displayedVideo, setDisplayedVideo] = useState(props.current)

    const {video_title, video_id, video_description, upload_date} = displayedVideo

    return (
        <div className="site-grid-system youtube-modal-content">
            <ModalVideoPlayer 
                title={video_title}
                description={video_description}
                video_id={video_id}
                upload_date={upload_date}
            />
            <YoutubeSuggestions 
                data={props.data}
                setFunction={setDisplayedVideo}
            />
        </div>
    )
}

export default YoutubeModalContent
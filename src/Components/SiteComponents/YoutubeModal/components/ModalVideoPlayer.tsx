// PROPS
import { YoutubeItemProps } from "Props/Components/YoutubeModalProps";
// TOOLS
import { TitleTrimmer } from "Tools/StringTools";
// COMPONENTS
import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer";

const ModalVideoPlayer = (props: YoutubeItemProps) => (
    <div className="site-col-6">
        <div className="modal-video-player">
            <h2>{props.video_title}</h2>
            <YoutubePlayer 
                id={props.video_id} 
                width="90%"
            />
            <div className="modal-description-container">
                <h4>Upload Date: {props.upload_date}</h4>
                <p>{TitleTrimmer(props.video_description, 250)}</p>
            </div>
        </div>
    </div>
)

export default ModalVideoPlayer
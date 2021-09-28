// TOOLS
import { TitleTrimmer } from "Tools/StringTools";
// COMPONENTS
import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer";

const ModalVideoPlayer = (props: any) => (
    <div className="site-col-6">
        <div className="modal-video-player">
            <h2>{props.title}</h2>
            <YoutubePlayer 
                id={props.video_id} 
                width="90%"
            />
            <div className="modal-description-container">
                <h4>Upload Date: {props.upload_date}</h4>
                <p>{TitleTrimmer(props.description, 250)}</p>
            </div>
        </div>
    </div>
)

export default ModalVideoPlayer
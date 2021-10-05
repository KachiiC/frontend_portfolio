// PROPS
import { YoutubeItemProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"

export const YoutubeData = (data: YoutubeItemProps[]) => {

    return data.map(video => {

        const content = (
            <div>
                <h1>{video.video_title}</h1>
                <p>{video.video_description}</p>
                <YoutubePlayer id={video.video_id} />
            </div>
        )

        return {
            title: video.video_title,
            content: content
        }
    }).slice(0,5)
}

export default YoutubeData
// PROPS
import { YoutubeItemProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"

const YoutubeDataConverter = (data: YoutubeItemProps[]) => {

    return data.map(video => {

        const content = (
            <>
                <h1>{video.video_title}</h1>
                <p>{video.video_description}</p>
                <YoutubePlayer id={video.video_id} />
            </>
        )

        return {
            title: video.video_title,
            content: content
        }
    })
}

export default YoutubeDataConverter
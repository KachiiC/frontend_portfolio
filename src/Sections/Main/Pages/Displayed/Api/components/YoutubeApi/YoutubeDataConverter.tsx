// PROPS
import { YoutubeItemProps } from "Props/Components/YoutubeModalProps"
// COMPONENTS
import YoutubePlayer from "Components/ExternalLibraries/YoutubePlayer"

const YoutubeDataConverter = (data: YoutubeItemProps[]) => {

    return data.map(video => {

        const {video_title, video_description, video_id } = video

        const content = (
            <>
                <h1>{video_title}</h1>
                <p>{video_description}</p>
                <YoutubePlayer id={video_id} />
            </>
        )

        return {
            title: video.video_title,
            content: content
        }
    })
}

export default YoutubeDataConverter
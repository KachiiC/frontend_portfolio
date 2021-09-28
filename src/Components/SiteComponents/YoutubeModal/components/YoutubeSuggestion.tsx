import { TitleTrimmer } from "Tools/StringTools"

const SingleYoutubeSuggestion = (props: any) => (
    <div className="site-flex suggestion-row">
        <div className="youtube-suggestion-title m-auto">
            {TitleTrimmer(props.video_title, 50)}
        </div>
        <div className="youtube-thumbnail" onClick={props.click}>
            <img src={props.video_thumbnail} 
                alt={props.video_title} 
                className="site-responsive-image"
            />
        </div>
    </div>
)

const YoutubeSuggestions = (props: any) => {

    const displaySuggestions = props.data.map((obj: any) => (
        <SingleYoutubeSuggestion
            video_title={obj.video_title}
            video_thumbnail={obj.video_thumbnail}
            click={() => props.setFunction(obj)}
        />
    ))

    return (
        <div className="site-col-6 youtube-suggestions">
            <div className="suggestion-list-title">
                Recommended Video
            </div>
            {displaySuggestions}
        </div>
    )
}

export default YoutubeSuggestions
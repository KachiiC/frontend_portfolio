// COMPONENTS
import SiteCollapsibleComponent from "Components/SiteComponents/SiteCollapsible"
// TOOLS
import {SiteRender, SiteFetcher } from "Tools/SiteFetcherTool"
import { YoutubeData } from "./YoutubeData"

const youtube_link = "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights/"

const YoutubeApi = () => {

    const fetchData = SiteFetcher(
        youtube_link, 
        "playlist_videos"
    )

    const YoutubeCollapsibles = (
        <SiteCollapsibleComponent 
            data={YoutubeData(fetchData.response)} 
            width={80}
        />
    )

    const apiLink = <a href={youtube_link}>modified Youtube Api</a>

    return (
        <>
            <p>
                This tool simply fetches data from a {apiLink} and returns the components 
                in collapsible tabs.
            </p>
            <SiteRender fetch={fetchData} component={YoutubeCollapsibles} />
        </>
    )
}

export default YoutubeApi
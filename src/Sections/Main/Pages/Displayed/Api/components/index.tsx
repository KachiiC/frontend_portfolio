// COMPONENTS
import SiteCollapsibleComponent from "Components/SiteComponents/SiteCollapsible"
// TOOLS
import {SiteRender, SiteFetcher } from "Tools/SiteFetcherTool"
import { YoutubeData } from "./YoutubeApi/YoutubeData"

const YoutubeApi = () => {

    const fetchData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights/", 
        "playlist_videos"
    )

    const YoutubeCollapsibles = (
        <SiteCollapsibleComponent 
            data={YoutubeData(fetchData.response)} 
            width={80}
        />
    )

    return (
        <>
            <h1>Youtube Api</h1>
            <SiteRender fetch={fetchData} component={YoutubeCollapsibles} />
        </>
    )
}

export default YoutubeApi
// COMPONENTS
import SiteCollapsibleComponent from "Components/SiteComponents/SiteCollapsible"
import YoutubeDataConverter from "./YoutubeDataConverter"
// TOOLS
import { SiteLink } from "Tools/LinkTools"
import { SiteRender, SiteFetcher } from "Tools/SiteFetcherTool"
// URLS
import { KachiiRestApi } from "URLs/KachiisRestApi"

const youtube_link = KachiiRestApi("api", "youtube/playlist=PLkqz3S84Tw-RfPS9HHi3MRmrinOBKxIr8")

const YoutubeApi = () => {

    const fetchData = SiteFetcher(youtube_link)

    const YoutubeCollapsibles = (
        <SiteCollapsibleComponent 
            data={YoutubeDataConverter(fetchData.response)} 
            width={80}
        />
    )

    const api_Link = (
        <SiteLink 
            type="external"
            placeholder="Youtube api"
            link={youtube_link}
        />
    )

    const playlist_link = (
        <SiteLink 
            type="external"
            placeholder="playlist"
            link="https://www.youtube.com/playlist?list=PLkqz3S84Tw-RfPS9HHi3MRmrinOBKxIr8"
        />
    )

    return (
        <>
            <p>
                This is an example of a {api_Link} fetch. The api returns an array of videos based on the 
                {playlist_link} provided, we can then use the Site Collapsible component to return a tab
                for each component in that playlist.
            </p>
            <SiteRender 
                fetch={fetchData} 
                component={YoutubeCollapsibles} 
            />
        </>
    )
}

export default YoutubeApi
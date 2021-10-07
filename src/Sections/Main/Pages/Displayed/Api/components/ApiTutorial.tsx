// DATA
import { 
    fetcherTutorialData, 
    fetcherTutorialPlaylistData, 
    RenderTutorial 
} from "Data/Main/Displayed/Api/ApiTutorialData"

const HowDoesitWork = (
    <div className="api-tutorial">
        <p>The code uses 2 components SiteFetcher and SiteRender</p>
        <h1>Site Fetcher</h1>
        <p>The SiteFetcher component is a reuseable fetch tool which uses combines useReducer, useState and useEffect.</p>
        <pre >
            const fetch = SiteFetcher("https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights/")
        </pre>
        <p>
            Additionally you can add an second argument to the fetcher to fetch one specific value from 
            the data.
        </p>
        <p>
            For example the fetch component above returns the following:
        </p>
        <pre>
            {fetcherTutorialData}
        </pre>
        <p>If you only want the value from the "playlist_videos" key then you pass the following through like so...</p>
        <pre >
            const fetch = SiteFetcher(
                "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights/", 
                "playlist_videos"
            )
        </pre>
        <p>
            ...and this returns only the playlist videos:
        </p>
        <pre>
            {fetcherTutorialPlaylistData}
        </pre>
        <p>
            In addition to the response data, SiteFetcher returns a boolean for when the component is 
            loading and a boolean for errors. These can be used hand in hand with the SiteRender component
            which I will now walk through.
        </p>
        <h1>Site Render</h1>
        <p>
            As the SiteFetcher gathers data from the api, the api may take same time before it returns data.
            To enhance user experience it is always better to notify them that there is a loading process.
            As stated earlier, whilst the SiteFetcher is speaking to the Api it returns a value of loading: true
            and after it recieves the response the loading becomes false. If the response isn't sucessful there is
            also an error value which is returned by the SiteFetcher.
        </p>
        <p>
            SiteRender takes fetch and component as an props. If the response is loading it returns a loading component
            and the component when reponse successfully loads. Additionally, if the response encounters and error, instead
            of the page breaking, it simply returns and error which you can troubleshoot in the console log. 
        </p>
        <pre>
            {RenderTutorial}
        </pre>
    </div>
)

export default HowDoesitWork
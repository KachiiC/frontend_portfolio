export const fetcherTutorialPlaylistData = `
[
    {
        "video_title": "Eddie Alvarez vs Conor McGregor",
        "video_id": "Htf8Jt-elxo",
        "video_description": "Conor McGregor becomes the double champ with a huge win at UFC 205 in New York.",
        "video_thumbnail": "https://i.ytimg.com/vi/Htf8Jt-elxo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    ...
]
`

export const fetcherTutorialData = `{
    "playlist_name": "ufc_fights",
    "playlist_id": "PLaaEeFtNlIJ1QCSWkBvxItbKYEpGENASC",
    "playlist_videos": ${fetcherTutorialPlaylistData}
}`


export const RenderTutorial = `
    const fetch = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/api/youtube_playlists/ufc_fights/", 
        "playlist_videos"
    )

    const component = <SiteComponent data={fetch.data} />

    return (
        <SiteRender
            fetch={fetch}
            component={component}
        />
    )
`
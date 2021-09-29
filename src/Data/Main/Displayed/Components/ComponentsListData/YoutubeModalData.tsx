export const YoutubeModalData = [
    {
        "video_title": "Eddie Alvarez vs Conor McGregor",
        "video_id": "Htf8Jt-elxo",
        "video_description": "Conor McGregor becomes the double champ with a huge win at UFC 205 in New York.",
        "video_thumbnail": "https://i.ytimg.com/vi/Htf8Jt-elxo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    {
        "video_title": "Jon Jones vs Alexander Gustafsson",
        "video_id": "en4hR34Bl8w",
        "video_description": "Relive one of the most entertaining bouts in Jon Jones career so far as he took on Alexander Gustafsson for the first time in a razor-close matchup back in 2013 at UFC 165. ",
        "video_thumbnail": "https://i.ytimg.com/vi/en4hR34Bl8w/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    {
        "video_title": "Dustin Poirier vs Justin Gaethje",
        "video_id": "9nS9s5VrHoo",
        "video_description": "The Diamond finished Gaethje in the fourth, but his opponent wasn't impressed with the decision of Herb Deen. ",
        "video_thumbnail": "https://i.ytimg.com/vi/9nS9s5VrHoo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    {
        "video_title": "Jose Aldo vs Chad Mendes",
        "video_id": "pEDW8_mHfpo",
        "video_description": "Jose Aldo successfully defended his UFC featherweight title when he faced Chad Mendes for the second time at UFC 179 in an entertaining Fight of the Night contest.",
        "video_thumbnail": "https://i.ytimg.com/vi/pEDW8_mHfpo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    } 
]

export const YoutubeModalCurrentExample = {
    "video_title": "Khabib Nurmagomedov vs Dustin Poirier",
    "video_id": "uVVdRwXFpG4",
    "video_description": "Watch #UFC254: Khabib v Gaethje at 7pm on October 24th, live on BT Sport Box Office ➡️ https://www.bt.com/sport/box-office/",
    "video_thumbnail": "https://i.ytimg.com/vi/uVVdRwXFpG4/maxresdefault.jpg",
    "upload_date": "28/01/2021"
}

export const YoutubeDataExample = `[
    {
        "video_title": "Eddie Alvarez vs Conor McGregor",
        "video_id": "Htf8Jt-elxo",
        "video_description": "Conor McGregor becomes the double champ with a huge win at UFC 205 in New York.",
        "video_thumbnail": "https://i.ytimg.com/vi/Htf8Jt-elxo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    {
        "video_title": "Jon Jones vs Alexander Gustafsson",
        "video_id": "en4hR34Bl8w",
        "video_description": "Relive one of the most entertaining bouts in Jon Jones career so far as he took on Alexander Gustafsson.",
        "video_thumbnail": "https://i.ytimg.com/vi/en4hR34Bl8w/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    },
    {
        "video_title": "Dustin Poirier vs Justin Gaethje",
        "video_id": "9nS9s5VrHoo",
        "video_description": "The Diamond finished Gaethje in the fourth, but his opponent wasn't impressed with the decision of Herb Deen. ",
        "video_thumbnail": "https://i.ytimg.com/vi/9nS9s5VrHoo/maxresdefault.jpg",
        "upload_date": "27/06/2020"
    }
]`

const YoutubeUsageExample = `
    <YoutubeModal 
        component={<button>Open Youtube Modal</button>} 
        current={CurrentData} 
        data={YoutubeModalData} 
    />
`

export const YoutubeModalExample = [
    {
        title:"How does it work?",
        example: YoutubeUsageExample,
        description: "The component takes data as an argument and returns each object as a timeline event. The width of the component can also be adjusted (100% width by default)."
    },
    {
        title:"Example Data:",
        example: YoutubeDataExample,
        description: "The data must be an array of objects. Each object must contain a video_title, video_id, video_description, video_thumbnail and upload_date. Current must be a singular object with the same keys"
    }
]
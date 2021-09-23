const SlideShowSectionsExample = `
    <SiteSlideshow 
        data={SlideShowData} 
    />
`

const SlideShowDataExample = `
    SlideShowData = [
        {
            caption: "first",
            image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%201",
        },
        {
            caption: "second",
            image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%202",
        },
        {
            caption: "third",
            image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%203",
        }
    ]
`

// IMAGES
export const SlideShowData = [
    {
        caption: "first",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%201",
    },
    {
        caption: "second",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%202",
    },
    {
        caption: "third",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%203",
    },
    {
        caption: "forth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%204",
    },
    {
        caption: "fifth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%205",
    },
    {
        caption: "sixth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%206",
    },
    {
        caption: "seventh",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%207",
    },
    {
        caption: "eighth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%208",
    },
    {
        caption: "ninth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%209",
    },
    {
        caption: "tenth",
        image: "https://via.placeholder.com/300x200/FFFFFF/000000/?text=Example%2010",
    },
]


export const SlideshowSectionData = [
    {
        title:"How does it work?",
        example: SlideShowSectionsExample,
        description: "The component takes data as an argument and returns a card for each object. The size of the cards can be adjusted to xs, small, medium (default), large and xl, and the size of the cards are responsive. It will also fiter the unique values of 'type' and returns buttons to filter for each type."
    },
    {
        title:"Example of Data",
        example: SlideShowDataExample,
        description:"The data must be an array of objects which each must contain type, title, description and an image"
    }
]
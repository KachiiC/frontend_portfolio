import GalleryUsage from 'Images/GalleryUsage.png'
import GalleryDataImg from 'Images/GalleryData.png'

export const GallerySectionData = [
    {
        title:"How does it work?",
        image: GalleryUsage,
        description:"The component takes data as an argument and returns an image for each object. The first image in the array is set as the selected image by default and the following are returned in a row below. When the selected image is clicked on it opens the image in a modal."
    },
    {
        title:"Gallery",
        image: GalleryDataImg,
        description:"The data must be an array of objects. Each object must contain a title and image (both of which must be strings)."
    }
]

export const GalleryData = [    
    {
        title: "First",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=First"
    },
    {
        title: "Second",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Second"
    },
    {
        title: "Third",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Third"
    },
    {
        title: "Forth",
        image: "https://via.placeholder.com/300x200/000000/FFFFFF/?text=Forth"
    }
]
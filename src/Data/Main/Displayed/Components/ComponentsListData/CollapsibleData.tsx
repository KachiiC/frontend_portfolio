// IMAGES
import CollapsibleUsage from 'Images/CollapsibleUsage.png'
import CollapsibleDataImage from 'Images/CollapsibleData.png'

export const CollapsibleSectionsData = [
    {
        title:"How does it work?",
        image: CollapsibleUsage,
        description:"The component takes data as an argument and returns a number of collapsible tabs. The title of each object will displayed on the tab, whilst the 'content' in the dropdown when the tab is clicked."
    },
    {
        title:"Example of Data",
        image: CollapsibleDataImage,
        description:"The data must be an array of objects which each must contain title and content as keys. The title must a string and the content must be a jsx element, neither keys are optional."
    }
]

export const CollapsibleData = [
    {
        title: "China",
        content: <h1>China Content</h1>
    },
    {
        title: "France",
        content: <h1>France Content</h1>
    },
    {
        title: "Russia",
        content: <h1>Russia Content</h1>
    },
    {
        title: "United Kingdom",
        content: <h1>United Kingdom Content</h1>
    },
    {
        title: "United States",
        content: <h1>United States Content</h1>
    },
]
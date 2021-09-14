// IMAGES
import FooterDataImage from 'Images/FooterData.png'
import FooterUsageImage from 'Images/FooterUsage.png'
import FooterImage from 'Images/FooterImage.png'

const FooterSectionData = [
    {
        title:"Example Data",
        image: FooterDataImage,
        description:"The data used here will populate the pages, if you don't have a particular social handle for a key then pass an empty string or comment the line out entirely"
    },
    {
        title: "Example Usage",
        image: FooterUsageImage,
        description: "A footer header and a copyright notice can be included in the footer by passing it through the components useage"
    },
    {
        title: "The Footer",
        image: FooterImage,
        description: "The footer will responsively display all the data that was passed through in data overview and the usage."
    }
]


export default FooterSectionData
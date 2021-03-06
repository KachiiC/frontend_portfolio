// IMAGES
import FooterDataImage from 'Images/FooterData.png'
import FooterImage from 'Images/FooterImage.png'

const FooterUsageExample = `
    <footer>
        <SiteFooter 
            heading="Useful Links"
            logo_data={FooterLogoData}
            links_data={FooterPages}
            name="Desinger"
            year="2021"
        />
    </footer>
`

export const FooterSectionData = [
    {
        title: "The Footer",
        image: FooterImage,
        description: "The footer will responsively display all the data that was passed through in data overview and the usage."
    },
    {
        title: "Example Usage",
        example: FooterUsageExample,
        description: "A footer header and a copyright notice can be included in the footer by passing it through the components useage"
    },
    {
        title:"Example Data",
        image: FooterDataImage,
        description:"The data used here will populate the pages, if you don't have a particular social handle for a key then pass an empty string or comment the line out entirely"
    },
]
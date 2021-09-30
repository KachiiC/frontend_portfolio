// TOOLS
import SiteIcon from "Tools/SiteIcon"
// DATA
import ContactInfomation from "Data/ContactInformation"

const DisplayContact = () => {
    const keys = Object.keys(ContactInfomation)
    
    const displayedInformation = keys.map((key, index) => {

        const value = Object.values(ContactInfomation)[index]
        
        return (
            <div className="contact-card" key={key}>
                <SiteIcon type={key} size="2x" />
                <p>{key.toUpperCase()}: {value}</p>
            </div>
        )
    })

    return (
        <div className="site-flex">
            {displayedInformation}
        </div>

    )

}

const AboutContact = (
    <div className="about-contact">
        <h1>Contact Kachi Cheong :</h1>
        <DisplayContact />
    </div>
)

export default AboutContact
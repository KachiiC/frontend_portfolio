// DATA
import ContactInfomation from "Data/ContactInformation"
// TOOLS
import { ObjKeys, ObjValue } from "Tools/ObjectDataTools"
import SiteIcon from "Tools/SiteIcon"

const DisplayContact = () => {

    const keys = ObjKeys(ContactInfomation)
    
    const displayedInformation = keys.map((key, index) => {

        const value = ObjValue(ContactInfomation)[index]
        
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
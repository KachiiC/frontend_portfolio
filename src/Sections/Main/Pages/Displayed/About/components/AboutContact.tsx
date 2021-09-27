// TOOLS
import SiteIcon from "Tools/SiteIcon"

const AboutContact = (props: {data: Object}) => {

    const keys = Object.keys(props.data)
    
    const displayedInformation = keys.map((key, index) => {

        const value = Object.values(props.data)[index]
        
        return (
            <div className="contact-card">
                <SiteIcon type={key} size="2x" />
                <p>{key.toUpperCase()}: {value}</p>
            </div>
        )
    })

    return (
        <div className="about-contact">
            <h1>Contact Kachi Cheong :</h1>
            <div className="site-flex">
                {displayedInformation}
            </div>
        </div>
    )
}

export default AboutContact
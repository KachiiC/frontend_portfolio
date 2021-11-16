// DATA
import DescriptionData from "Data/Main/Displayed/About/DescriptionData"

const displayedDescriptions = DescriptionData.map(obj => {

    const { description, title } = obj

    return (
        <div className="site-col-4" 
            key={title}
        >
            <h3>{title}</h3>
            <p className="w-80 m-auto">
                {description}
            </p>
        </div>
    )
})

const AboutDescription = (
    <div className="site-grid-system about-description">
        {displayedDescriptions}
    </div>
)

export default AboutDescription
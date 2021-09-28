// DATA
import DescriptionData from "Data/Main/Displayed/About/DescriptionData"

const displayedDescriptions = DescriptionData.map((obj) => (
    <div className="site-col-4">
        <h3>{obj.title}</h3>
        <p className="w-80 m-auto">
            {obj.description}
        </p>
    </div>
))

const AboutDescription = (
    <div className="site-grid-system about-description">
        {displayedDescriptions}
    </div>
)

export default AboutDescription
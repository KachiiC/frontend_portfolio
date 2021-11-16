// IMAGES
import HomeImage from 'Images/HomeImage.png'
// TOOLS
import { SiteLink } from 'Tools/LinkTools'

const LinkProps = {
    link: "about",
    type: "local",
    placeholder:<button>Read More</button>,
}

const HomeHeader = (
    <div className="home-header">
        <img src={HomeImage} 
            alt="home-header-img" 
            className="home-header-image"
        />
        <div className="home-header-text">
            <h2>Hi my name is Kachi Cheong..</h2>
            <p>And I'm a Full Stack Developer!</p>
            <SiteLink {...LinkProps} />
        </div>
    </div>
)

export default HomeHeader
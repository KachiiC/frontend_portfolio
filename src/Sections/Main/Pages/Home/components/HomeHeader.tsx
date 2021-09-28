// COMPONENTS
import { Link } from 'react-router-dom'
// IMAGES
import HomeImage from 'Images/HomeImage.png'

const HomeHeader = (
    <div className="home-header">
        <img src={HomeImage} alt="photographer" className="home-header-image"/>
        <div className="home-header-text">
            <h2>Hi my name is Kachi Cheong..</h2>
            <p>And I'm a Full Stack Developer!</p>
            <Link to="/about">
                <button>
                    Read More
                </button>
            </Link>
        </div>
    </div>
)

export default HomeHeader
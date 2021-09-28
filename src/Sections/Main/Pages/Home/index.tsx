// CSS
import './Home.css'
// COMPONENTS
import HomeHeader from "./components/HomeHeader"
import AboutSkills from "../Displayed/About/components/AboutSkills"
import HomePortfolio from './components/HomePortfolio'


const Home = (
    <>
        {HomeHeader}
        {HomePortfolio}
        {AboutSkills}
    </>
)

export default Home

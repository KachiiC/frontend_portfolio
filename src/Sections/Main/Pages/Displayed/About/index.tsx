// COMPONENTS
import AboutContact from './components/AboutContact'
import AboutIntroduction from './components/AboutIntroduction'
import AboutSkills from './components/AboutSkills'
// CSS
import './About.css'
// DATA
import AboutDescription from './components/AboutDescription'

const About = (
    <>
        <h1 className="about-title">
            Kacheok 'Kachi' Cheong
        </h1>
        {AboutIntroduction}
        {AboutDescription}
        {AboutSkills}
        {AboutContact}
    </>

)

export default About
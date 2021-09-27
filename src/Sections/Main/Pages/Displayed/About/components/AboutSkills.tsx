// DATA
import SkillsData from "Data/Main/Displayed/About/SkillsData"
// COMPONENTS
import FilterIcons from "Components/SiteComponents/FilterIcons"

const AboutSkills = (
    <div className="about-skills-container">
        <FilterIcons 
            title="Kachi's Coding Skills"
            data={SkillsData}
        />
    </div>
)
    

export default AboutSkills
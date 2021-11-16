// COMPONENTS
import FilterIcons from "Components/FilterComponents/FilterIcons"
// DATA
import SkillsData from "Data/Main/Displayed/About/SkillsData"

const AboutSkills = (
    <div className="about-skills-container">
        <FilterIcons 
            title="Kachi's Coding Skills"
            data={SkillsData}
        />
    </div>
)
    

export default AboutSkills
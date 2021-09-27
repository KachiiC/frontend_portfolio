import FilterIcons from "Components/SiteComponents/FilterIcons"
import SkillsData from "Data/Main/Displayed/About/SkillsData"


const Test = () => {
    return (
        <>
            <h1>Test</h1>
            <p>Test Content</p>
            <FilterIcons data={SkillsData} />
        </>
    )
}

export default Test
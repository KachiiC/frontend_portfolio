// COMPONENTS
import AntdTabs from 'Components/ExternalLibraries/AntdTabs'
// DATA
import ProjectsData from 'Data/Main/Displayed/ProjectsData'

const Projects = (
    <>
        <h1>Kachii's Projects</h1>
        <AntdTabs data={ProjectsData} />
    </>
)

export default Projects
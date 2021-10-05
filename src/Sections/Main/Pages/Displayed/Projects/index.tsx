// CSS
import './Projects.css'
// DATA
import ProjectsData from 'Data/Main/Displayed/ProjectsData'
// COMPONENTS
import AntdTabs from 'Components/ExternalLibraries/AntdTabs'

const Projects = (
    <div className="projects-page">
        <h1>Kachii's Projects</h1>
        <p>
            These a portfolio of components built by Kachii Cheong, they are written in react tyscript. 
            The components do not rely on any component library and reusable for any page!, the code for 
            each component is linked to each page.
        </p>
        <AntdTabs data={ProjectsData} />
    </div>
)

export default Projects
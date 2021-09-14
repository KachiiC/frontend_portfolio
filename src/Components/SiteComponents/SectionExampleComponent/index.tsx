// CSS
import './SiteExample.css'
// PROPS
import { SectionExampleProps } from "Props/DataProps"

const SectionExample = (props: SectionExampleProps) => (
    <div className="section-example-container">
        <h3>{props.title}</h3>
        <p className="m-auto">{props.description}</p>
        <div className="example-image-container">
            <img className="site-responsive-image" 
                alt={props.title} 
                src={props.image} 
            />
        </div>
    </div>
)
export default SectionExample
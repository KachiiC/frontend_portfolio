// CSS
import './ImageText.css'
// PROPS
import { ImageTextComponentProps } from 'Props/ComponentProps'
// COMPONENTS
import ImageTextRow from "./components/ImageTextRow"

const ImageTextComponent = (props: ImageTextComponentProps) => {

    const displayRows = props.data.map(project => (
        <ImageTextRow
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
            key={project.title}
        />
    ))

    return (
        <div className="image-text-container">
            {displayRows}
        </div>
    )
}

export default ImageTextComponent
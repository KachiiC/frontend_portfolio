// PROPS
import { GalleryRowProps } from "Props/Components/GalleryProps"
// TOOLS
import { GridStyle } from "Tools/GridTools"

const SingleRowImage = (props: GalleryRowProps) => {

    const {image, title, click} = props

    return (
        <div className="site-col-1 site-border-white">
            <img src={image} 
                alt={title}
                className="site-responsive-image cursor-pointer"
                onClick={click}
            />
        </div>
    )
}

const GalleryImagesRow = (props:any) => {

    const displayedRows = props.data.map((item:any) => {

        const clickFunction = () => props.function(props.data.indexOf(item))

        return (
            <SingleRowImage
                key={item.title}
                title={item.title}
                image={item.image}
                click={clickFunction}
            />
        )
    }).slice(0, props.row_number)

    return (
        <div className="site-grid" 
            style={GridStyle(props.row_number)}
        >
            {displayedRows}
        </div>
    )
}

export default GalleryImagesRow
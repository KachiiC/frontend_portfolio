// PROPS
import { GalleryImageProps, GalleryImageRowProps } from "Props/Components/GalleryProps"
// TOOLS
import { GridStyle } from "Tools/GridTools"
// COMPONENTS
import { GalleryImage } from "./GalleryImage"

const SingleRowImage = (props: GalleryImageProps) => (
    
    <div className="site-col-1">
        <GalleryImage 
            title={props.title}
            image={props.image}
            click={props.click}
        />
    </div>
)

const GalleryImagesRow = (props: GalleryImageRowProps) => {

    const { data, row_number, width, setFunction } = props

    const displayedRows = data.map((item) => (
            <SingleRowImage
                key={item.title}
                title={item.title}
                image={item.image}
                click={() => setFunction(data.indexOf(item))}
            />
        )
    ).slice(0, row_number)

    return (
        <div className={`w-${width} m-auto`}>
            <div className="site-grid" 
                style={GridStyle(row_number)}
            >
                {displayedRows}
            </div>
        </div>
    )
}

export default GalleryImagesRow
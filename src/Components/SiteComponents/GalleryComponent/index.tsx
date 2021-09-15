import { useState } from "react"

interface GalleryComponentProps {
    title?: "string"; 
    data: {
        title: string; 
        image: string
    }[]
}

const GalleryComponent = (props: GalleryComponentProps) => {

    const { title, data } = props

    const titleLogic = () => {
        if (title) return title
    }

    const [displayedImage, setDisplayedImage] = useState(0)

    const displayedRow = data.map(image => (
        <div className="site-col-3 site-border-white">
            <img src={image.image} 
                alt={image.title}
                className="site-responsive-image cursor-pointer"
                onClick={() => setDisplayedImage(data.indexOf(image))}
            />
        </div>
    ))

    return (
        <>
            <h2>{titleLogic()}</h2>
            <div className="w-50 m-auto">
                <img src={data[displayedImage].image} 
                    alt={data[displayedImage].title}
                    className="site-responsive-image" 
                />
                <div className="site-grid-system">
                    {displayedRow}
                </div>
            </div> 
        </>
    )
}

export default GalleryComponent
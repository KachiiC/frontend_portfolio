const GalleryImage = (props: any) => {

    const {width, image, title, click, type} = props

    const clickLogic = () => {
        if (click) return click
    }

    const borderLogic = () => {
        if (type === "display") return "site-border-white"
    }

    const displayedImage = (
        <div className={`w-${width} m-auto`}>
            <img src={image} 
                alt={title}
                className={`site-responsive-image ${borderLogic()}`}
                onClick={clickLogic()}
            />
        </div>
    )

   const displayLogic = type === "display" ? (
            <div className="cursor-pointer site-border-white">
                {displayedImage}
            </div>
        ) : displayedImage
    
    return displayLogic
}

export default GalleryImage
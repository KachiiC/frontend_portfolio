const SlideshowRowImage = (props: any) => (
    <div className="slideshow-column site-col-1">
        <img className="site-responsive-image cursor-pointer" 
            src={props.image}
            alt={props.alt}
            onClick={props.click} 
        />
    </div>
)

export default SlideshowRowImage
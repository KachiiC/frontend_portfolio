// COMPONENTS
import Gallery from "Components/SiteComponents/SiteGallery"
// DATA
import GalleryData from "Data/Main/Displayed/Components/MyComponents/GalleryData"

const GalleryComponent = (
    <>
        <p>This is a gallery component built using react hooks.</p>
        <Gallery 
            data={GalleryData}
            width={80}
        />
    </>
)

export default GalleryComponent
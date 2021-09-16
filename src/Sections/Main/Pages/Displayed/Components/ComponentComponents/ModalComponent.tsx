import SiteModalComponent from "Components/SiteComponents/SiteModalComponent"

const ModalComponent = (
    <>
        <p>This is a modal component built for with react hooks</p>
        <SiteModalComponent 
            content={<h1>The contents of the modal</h1>}
            component={<button>Click to open modal</button>}
            type="modal"
        />
    </>
)

export default ModalComponent
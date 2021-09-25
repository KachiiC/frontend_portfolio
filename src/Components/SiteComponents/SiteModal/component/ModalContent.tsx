// CSS
// CSS
import '../SiteModal.css'
// PROPS
import { modalContentProps } from 'Props/Components/ModalProps'
// COMPONENT
import SiteCloseButton from './SiteCloseButton'

const SiteModalContent = (props: modalContentProps) => {

    const { content, click, type } = props

    const modalContent = (

        <div className="modal-container">
            <SiteCloseButton 
                click={click} 
                type="modal"
            />
            <div className="modal-container-content">
                {content}
            </div>
        </div>
    )

    const modalBlankContent = (
        <>
            <SiteCloseButton 
                click={click} 
                type="blank"
            />
            {content}
        </>
    )

    const modalContentLogic = type === "blank" ?  
        modalBlankContent 
        : 
        modalContent

    return (
        <div className="modal-component">
            {modalContentLogic}
        </div>
    )
}

export default SiteModalContent
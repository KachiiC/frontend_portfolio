import { useState } from 'react'
// CSS
import './SiteModal.css'
// PROPS
import { ModalComponent } from 'Props/Components/ModalProps'
// COMPONENTS
import ModalContent from './component/ModalContent'

const SiteModalComponent = (props: ModalComponent) => {

    const [displayModal, setDisplayModal] = useState(false)

    const modalLogic = () => !displayModal ? 
        setDisplayModal(true) 
        : 
        setDisplayModal(false)

    const modalContent = (
        <ModalContent
            type={props.type} 
            click={() => modalLogic()}
            content={props.content}
        />
    )

    return (
        <>
            <div onClick={() => modalLogic()}>
                {props.component}
            </div>
            {displayModal && modalContent}
        </>
    )

}

export default SiteModalComponent
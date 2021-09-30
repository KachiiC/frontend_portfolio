import { useState } from 'react'
// CSS
import './SiteModal.css'
// PROPS
import { ModalComponent } from 'Props/Components/ModalProps'
// COMPONENTS
import ModalContent from './component/ModalContent'
// TOOLS
import { StateLogic } from 'Tools/FunctionTools'

const SiteModalComponent = (props: ModalComponent) => {

    const [displayModal, setDisplayModal] = useState(false)

    const modalLogic = () => StateLogic(displayModal, setDisplayModal) 

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
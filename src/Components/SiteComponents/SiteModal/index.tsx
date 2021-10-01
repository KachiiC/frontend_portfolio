import { useReducer } from 'react'
// CSS
import './SiteModal.css'
// PROPS
import { ModalComponent } from 'Props/Components/ModalProps'
// COMPONENTS
import ModalContent from './component/ModalContent'

const SiteModalComponent = (props: ModalComponent) => {

    // toggle detirmines if modal is display or not. Intital state is false. 
    const [displayModal, toggle] = useReducer(displayModal => !displayModal, false)

    const modalContent = (
        <ModalContent
            click={toggle}
            type={props.type} 
            content={props.content}
        />
    )

    return (
        <>
            <div onClick={toggle}>
                {props.component}
            </div>
            {displayModal && modalContent}
        </>
    )

}

export default SiteModalComponent
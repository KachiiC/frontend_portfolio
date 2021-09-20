const ModalExampleUsage = `
    // Import from where you store the modal in your src
    // CSS
    import SiteModal from 'Components/SiteComponents/SiteModal'
    import './About.css'
    
    const ModalList = () => {
    
        const OpenButton = (props: any) => <button>Click here to open {props.title} modal</button>
    
        // MODAL 
        const ModalExample = (
            <SiteModal
                component={<OpenButton title="modal" />} 
                content={<div>Modal Content</div>} 
                type="modal" 
            />
        )
    
        // BLANK 
        const BlankModalExample = (
            <SiteModal
                component={<OpenButton title="blank" />}
                content={<img src="https://via.placeholder.com/300/FFFFFF/000000/?text=Example" alt="placeholder"/>} 
                type="blank" 
            />
        )
    
        return (
            <>
                {ModalExample}
                {BlankModalExample}
            </>
    
        )
    }
    
    export default ModalList
`

export const ModalSectionExample = [
    {
        title:"How does it work?",
        example: ModalExampleUsage,
        description:"The component takes component, content and type as arguments. The component is what is clicked on to reveal the modal, the content is what is displayed in the modal. A type (blank or modal) must be set to detirmine the type of modal being used."
    },
]

export const ModalData = {
    component: (text: string) => <button className="modal-example-button">Click here open {text} modal</button>,
    content: <h1>Content modal</h1>,
    blank: <h1 className="text-white">Blank modal</h1>
}
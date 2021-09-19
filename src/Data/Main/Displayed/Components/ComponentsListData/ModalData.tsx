import ModalUsage from 'Images/ModalUsage.png'

export const ModalSectionExample = [
    {
        title:"How does it work?",
        image: ModalUsage,
        description:"The component takes component, content and type as arguments. The component is what is clicked on to reveal the modal, the content is what is displayed in the modal. A type (blank or modal) must be set to detirmine the type of modal being used."
    },
]

export const ModalData = {
    component: (text: string) => <button className="modal-example-button">Click here open {text} modal</button>,
    content: <h1>Content modal</h1>,
    blank: <h1 className="text-white">Blank modal</h1>
}
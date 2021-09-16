// IMAGE TEXT PROPS
export interface ImageTextRowProps {
    title: string;
    image: string;
    link: string;
    description: string;
}

export interface ImageTextComponentProps {
    data: ImageTextRowProps[]
}

// SECTION EXAMPLE PROPS
export interface SectionExampleProps {
    title: string
    image: string
    description: string
}

// GALLERY PROPS 
export interface GalleryImageProps {
    title: string;
    image: string;
    click?: any;
    width?: number
}

export interface GalleryProps {
    title?: string;
    width: number;
    data: GalleryImageProps[]
}

// MODAL PROPS
export interface modalContentProps { 
    content: JSX.Element;
    click: any;
    type: "blank" | "modal";
}

export interface closeButtonProps {
    click: any; 
    type: "blank" | "modal"
}

export interface ModalComponent { 
    component: any; 
    content: JSX.Element; 
    type: "blank" | "modal" 
}

// TABS COMPONENTS
export interface singleTabProps {
    title: string; 
    content: JSX.Element
    width?: number
}

export interface TabProps {
    width?: number; 
    data: singleTabProps[]
}

export interface TabHeadingProps { 
    click: any; 
    direction: string; 
    title: string; 
    width: number | undefined
}

export interface TabContentProps { 
    width: number | undefined; 
    content: JSX.Element 
}
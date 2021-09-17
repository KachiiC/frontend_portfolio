import { MouseEventHandler } from "react";

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
    click?: MouseEventHandler<HTMLDivElement>;
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
    click: MouseEventHandler<HTMLDivElement>;
    type: "blank" | "modal";
}

export interface closeButtonProps {
    click: MouseEventHandler<HTMLDivElement>; 
    type: "blank" | "modal"
}

export interface ModalComponent { 
    component: any; 
    content: JSX.Element; 
    type: "blank" | "modal" 
}

// TABS COMPONENTS
export interface singleCollapsibleProps {
    title: string; 
    content: JSX.Element
    width?: number
}

export interface CollapsibleProps {
    width?: number; 
    data: singleCollapsibleProps[]
}

export interface CollapsibleHeadingProps { 
    click: MouseEventHandler<HTMLDivElement>; 
    direction: string; 
    title: string; 
    width: number | undefined
}

export interface CollapsibleContentProps { 
    width: number | undefined; 
    content: JSX.Element 
}

// TAB PROPS

export interface SiteTabsProps {
    data: {
        title: string; 
        content: JSX.Element
    }[]
    width?: number
}


export interface TabLinkProps { 
    click: MouseEventHandler<HTMLDivElement>;
    title: string;
} 

export interface TabContentProps { 
    content: JSX.Element 
}
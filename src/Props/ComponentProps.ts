import { ChangeEventHandler, MouseEventHandler } from "react";

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

// COLLAPSIBLE COMPONENT
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

export interface SingleTab {
    title: string; 
    content: JSX.Element
}

export interface SiteTabsProps {
    data: SingleTab[]
    width?: number
}

export interface TabLinkProps { 
    click: MouseEventHandler<HTMLDivElement>;
    title: string;
} 

export interface TabContentProps { 
    content: JSX.Element 
}

// FLIP CARD PROPS

export interface SiteFlipCardProps { 
    dimensions?: number | string | undefined; 
    front: string; 
    back: JSX.Element 
}

export interface FlipFrontProps {
    image: string;
    height: number | string | undefined; 
    width: number | string | undefined; 
}

export interface FlipBackProps {
    content: JSX.Element
}

// YOUTUBE PROPS

export interface YoutubeProps {
    id: string;
    width?: string;
    height?: string;
}

// FILTER PROPS

export interface FilterProps { 
    data: any[]; 
    placeholder: string;
    default_column?: string;
    width?: number | string 
}

export interface FilterInputProps {
    on_change: any;
    placeholder: string;
    value: string;
}

export interface FilterSelectProps { 
    data: any[]; 
    function: ChangeEventHandler<HTMLSelectElement> | undefined; default: string | number | readonly string[] | undefined 
}

export interface FilterSearchProps { 
    data: any[]; 
    function: ChangeEventHandler<HTMLSelectElement> | undefined; default: string | number | readonly string[] | undefined 
    value: string; 
    on_change: any; 
    placeholder: string 
}

export interface FilterTableProps {
    data: any[];
    results_data?: any;
}
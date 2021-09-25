import { MouseEventHandler } from "react";

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
}

export interface CollapsibleContentProps { 
    width: number | undefined; 
    content: JSX.Element 
}
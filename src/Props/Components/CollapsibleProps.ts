import { MouseEventHandler } from "react";

export interface singleCollapsibleProps {
    title: string; 
    content: JSX.Element
    width?: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100; 
}

export interface CollapsibleProps {
    width?: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100 | undefined; 
    data: singleCollapsibleProps[]
}

export interface CollapsibleHeadingProps { 
    click: any;
    direction: string; 
    title: string; 
}

export interface CollapsibleContentProps { 
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100 | undefined; 
    content: JSX.Element 
}
import { MouseEventHandler } from "react";

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

export interface TabLinkRowProps {
    data: SingleTab[];
    // title: string;
    setFunction: Function;
}

export interface TabContentProps { 
    content: JSX.Element 
}
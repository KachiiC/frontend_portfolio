import { MouseEventHandler } from "react";
// PROPS
import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    click?: MouseEventHandler<HTMLDivElement>
    data: pageDataProps[]
}

export interface SiteNavLinkProps { 
    click?: MouseEventHandler<HTMLDivElement>
    link_type: "small" | "nav" | "dropdown" 
    link?: string
    title: string
}

export interface DisplayMenuTypeProps  { 
    data: pageDataProps;
    click?: MouseEventHandler<HTMLDivElement>
    type: "small" | "nav" | "dropdown"
}

export interface DisplayMenuListProps {
    data: pageDataProps[] 
    click?: MouseEventHandler<HTMLDivElement>
    type: "small" | "nav" | "dropdown"  
}

export interface SmallMenuIconProps {
    click: MouseEventHandler<HTMLDivElement> | undefined
}
import { pageDataProps } from "./MainProps";

export interface SiteNavbarProps { 
    title: string; 
    menu_number: number;
    data: pageDataProps[]
}

export interface NavMenuProps { 
    click?: any
    data: pageDataProps[]; 
    menu_number?: number | undefined; 
    menu_type: string; 
}

export interface NavLinkProps {
    link?: string | undefined; 
    title?: string | undefined; 
    external_link?: string;
}

export interface SiteNavLinkProps { 
    click?: any;
    data: NavLinkProps
    type?: string; 
}

export interface SmallMenuBlockProps { 
    data: pageDataProps[]; 
    click: any 
}

export interface SmallMenuIconProps {
    click: any
}
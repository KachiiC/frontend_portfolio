import { SizeProp } from "@fortawesome/fontawesome-svg-core";

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}

// SITE ICON
export interface SiteIconProps {
    type: string | undefined; 
    size: SizeProp | undefined; 
}

export interface LinkRendererProps {
    title?: string | undefined; 
    link?: string | undefined;
    icon?: string;
    content?: string | JSX.Element;
    external_link?: string 
}
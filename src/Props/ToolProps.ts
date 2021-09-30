import { SizeProp } from "@fortawesome/fontawesome-svg-core";

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}


export interface TargetProps { 
    target: { 
        value: any; 
    }
}


// SITE ICON
export interface SiteIconProps {
    type: string | undefined; 
    size: SizeProp | undefined; 
    color?: string;
}

export interface LinkRendererProps {
    title?: string | undefined; 
    link?: string | undefined;
    icon?: string;
    content?: string | JSX.Element;
    external_link?: string 
}
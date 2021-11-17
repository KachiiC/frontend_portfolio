import { ChangeEventHandler } from "react"
import { SizeProp } from "@fortawesome/fontawesome-svg-core"

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}

export interface TargetProps {
    preventDefault: ChangeEventHandler<HTMLInputElement>
    target: { 
        value: string
    }
}

// SITE ICON
export interface SiteIconProps {
    type: string | undefined
    size: SizeProp | undefined
    color?: string
}

// Site Link Props
export interface SiteLinkProps {
    link: string;
    type: "local" | "external" | string | undefined
    placeholder: string | number | JSX.Element | undefined 
}

export interface SiteRenderProps { 
    fetch: { 
        loading: boolean; 
        error: boolean; 
        response: Object | never[]
    }; 
    component: JSX.IntrinsicAttributes; 
}
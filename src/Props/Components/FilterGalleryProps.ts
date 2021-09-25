import { MouseEventHandler } from "react";
// PROPS
import { SiteSingleCardProps } from "./CardProps";


export interface filterButtonProps {
    title: string
    click: MouseEventHandler<HTMLImageElement> | undefined 
}

export interface FilterGalleryProps { 
    data: SiteSingleCardProps[]
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
}
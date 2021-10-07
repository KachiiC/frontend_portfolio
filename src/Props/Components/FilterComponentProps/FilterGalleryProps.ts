import { MouseEventHandler } from "react";
// PROPS
import { SiteSingleCardProps } from "../CardProps";


export interface SingleFilterButtonProps {
    title: string
    click: MouseEventHandler<HTMLImageElement> | undefined 
}

export interface FilterGalleryProps { 
    data: SiteSingleCardProps[]
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
    buttons?: JSX.Element
}

export interface FilterButtonProps {
    data: string[];
    setFilterFunction: Function;
    setAll: MouseEventHandler<HTMLImageElement> | undefined;
}
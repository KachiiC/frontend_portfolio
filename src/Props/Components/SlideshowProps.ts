import { MouseEventHandler } from "react";

export interface SlideshowData {
    caption: string | undefined; 
    image: string
}

export interface SiteSlideShowProps {
    data: SlideshowData[];
    thumbnails?: number;
    width? : number
}

export interface slideshowButtonProps {
    click: any;
    type: "next" | "previous"
}

export interface SlideshowCaptionProps {
    caption: string | undefined
}

export interface SlideshowRowImageProps {
    image: string | undefined; 
    caption: string | undefined; 
    click: MouseEventHandler<HTMLImageElement> | undefined 
}

export interface SlideshowRowsProps { 
    data: SlideshowData[]; 
    first: number; 
    last: number; 
    thumbnails: number; 
    setFunction: Function
}

export interface SlideshowComponentProps {
    data: SlideshowData[];
    caption: string | undefined; 
    first: number; 
    last: number; 
    thumbnails: number; 
    setFunction: Function 
    next: Function;
    previous: Function;
    select_image: string | undefined;
    width: number
}
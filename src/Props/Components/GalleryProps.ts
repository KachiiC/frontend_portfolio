import { MouseEventHandler } from "react";

export interface GalleryProps {
    number?: number
    title?: string| undefined;
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100; 
    data: GalleryImageProps[]
}

export interface GalleryImageProps {
    image: string
    title: string
    click?: MouseEventHandler<HTMLDivElement>
}

export interface GalleryImageRowProps { 
    data: GalleryImageProps[]; 
    setFunction: Function;
    row_number: number; 
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100; 
}

export interface GallerySelectedImageProps {
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100; 
    image: string;
}

export interface GalleryModalImageProps {
    title: string; 
    image: string; 
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100; 
}
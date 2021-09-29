import { MouseEventHandler } from "react";

export interface GalleryRowProps {
    title: string
    image: string
    click?: MouseEventHandler<HTMLDivElement>
}

export interface GalleryProps {
    number?: number
    title?: string
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100 ; 
    data: GalleryRowProps[]
}

export interface GalleryImageProps {
    width: number
    image: string
    title: string
    click?: MouseEventHandler<HTMLDivElement>
    type?: string
}
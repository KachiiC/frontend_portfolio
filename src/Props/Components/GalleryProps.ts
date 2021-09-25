import { MouseEventHandler } from "react";

export interface GalleryRowProps {
    title: string
    image: string
    click?: MouseEventHandler<HTMLDivElement>
}

export interface GalleryProps {
    number?: number
    title?: string
    width: number
    data: GalleryRowProps[]
}

export interface GalleryImageProps {
    width: number
    image: string
    title: string
    click?: MouseEventHandler<HTMLDivElement>
    type?: string
}
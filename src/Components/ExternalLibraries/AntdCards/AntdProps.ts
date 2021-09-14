export interface singleCardProps { 
    image: HTMLImageElement | string;
    title: string; 
    description?: string;
    link?: string 
}

export interface antdCardProps {
    data: singleCardProps[]
}
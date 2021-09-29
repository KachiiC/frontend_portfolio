import { MouseEventHandler } from "react";

export interface YoutubeItemProps {
    video_title: string;
    video_id: string;
    video_description: string;
    video_thumbnail: string;
    upload_date: string;
}

export interface SingleYoutubeSuggestionProps {
    video_thumbnail: string;
    video_title: string;
    click: MouseEventHandler<HTMLDivElement> | undefined; 
}
export interface YoutubeSuggestionProps {
    data: YoutubeItemProps[]
    setFunction: Function
}

export interface YoutubeModalProps { 
    component?: any; 
    current: YoutubeItemProps; 
    data: YoutubeItemProps[];
}
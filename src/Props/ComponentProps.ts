import { SectionExampleProps } from "./DataProps";

export interface ComponentTabProps {
    component?: JSX.Element; 
    content?: JSX.Element;
    title: string;
    introduction: string; 
    link: string;
    sections: SectionExampleProps[]
}

// YOUTUBE PROPS
export interface YoutubeProps {
    id: string;
    width?: string;
    height?: string;
}


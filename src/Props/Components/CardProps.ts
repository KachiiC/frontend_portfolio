export interface SiteSingleCardProps {
    title: string; 
    description: string; 
    image: string; 
    span?: number;
    type?: string;
    link?: string;
    link_type?: 'external' | 'local' | undefined | string;
}

export interface SiteCardProps  { 
    data: SiteSingleCardProps[] 
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
}

export interface LinkLogicProps { 
    component:JSX.Element 
}
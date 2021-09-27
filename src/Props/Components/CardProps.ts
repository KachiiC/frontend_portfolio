export interface SiteSingleCardProps {
    title: string; 
    description: string; 
    image: string; 
    span?: number;
    type?: string;
    link?: string;
    link_type?: string;
}

export interface SiteCardProps  { 
    data: SiteSingleCardProps[] 
    card_size?: 'xs'|'small'|'medium'|'large'|'xl'; 
}
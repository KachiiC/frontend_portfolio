export interface SiteTableProps {
    data: any[]; 
    keys?: string[]
}

export interface SiteTableHeaderProps {
    keys: string[]
}

export interface SiteTableRowProps {
    data: Object[];
}

export interface SiteTableSingleRowProps { 
    data: {
        [s: string]: unknown 
    } | Object 
}
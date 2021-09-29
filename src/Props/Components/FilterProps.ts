import { ChangeEventHandler } from "react";

export interface FilterProps { 
    data: any[]; 
    placeholder?: string;
    default_column?: string;
    width?: number | string 
}

export interface FilterInputProps {
    on_change: any;
    placeholder: string;
    value: string;
}

export interface FilterSelectProps { 
    data: string[]; 
    function: ChangeEventHandler<HTMLSelectElement> | undefined; default: string | number | readonly string[] | undefined 
}

export interface FilterSearchProps { 
    data: any[]; 
    function: ChangeEventHandler<HTMLSelectElement> | undefined; default: string | number | readonly string[] | undefined 
    value: string; 
    on_change: any; 
    placeholder: string 
}

export interface FilterTableProps {
    data: any[]
    keys: string[]
}

export interface FilterTableHeaderProps {
    keys: string[]
}

export interface FilterTableRowProps {
    data: Object[];
}

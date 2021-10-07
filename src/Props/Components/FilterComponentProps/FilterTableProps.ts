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
    column_function: ChangeEventHandler<HTMLSelectElement> | undefined 
    default_value: string;
}

export interface FilterSearchProps {
    default_value: string; 
    data: any[]; 
    column_function: ChangeEventHandler<HTMLSelectElement> | undefined
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

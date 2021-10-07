import { ChangeEventHandler } from "react";

export interface FilterProps { 
    data: any[]; 
    placeholder?: string;
    default_column?: string;
    width?: number | string 
}

export interface FilterSelectProps { 
    column_function: ChangeEventHandler<HTMLSelectElement>
    data: string[]; 
    default_value: string;
}

export interface FilterInputProps {
    on_change: ChangeEventHandler<HTMLInputElement>
    placeholder: string;
    value: string;
}


export interface FilterSearchProps {
    default_value: string; 
    data: string[]; 
    column_function: ChangeEventHandler<HTMLSelectElement>
    on_change: ChangeEventHandler<HTMLInputElement>; 
    placeholder: string 
    value: string; 
}

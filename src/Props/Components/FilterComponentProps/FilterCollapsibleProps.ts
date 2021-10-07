import { singleCollapsibleProps } from "../CollapsibleProps";

export interface FilterCollapsibleProps {
    data: singleCollapsibleProps[]
    width: 10 | 20 | 30 | 40| 50| 60| 70| 80| 90| 100 ; 
    placeholder?: string;
}
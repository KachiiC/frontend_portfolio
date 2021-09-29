// PROPS
import { ObjectDataProps } from "Props/ToolProps"

export const ObjectDataRender = (data: ObjectDataProps , type: string) => {

    const data_keys = Object.keys(data).filter(key => data[key])
  
    const data_links = data_keys.map((key) => {

        const social_data = {
            icon: key,
            link: `https://www.${key}.com/${data[key]}`
        }
        
        const router_data = {
            title: key,
            content: data[key],
        }

        return type === "social" ? social_data : router_data
    })

    return data_links
}

export const UnqiueValues = (data: any, value: any) =>  {

    const allValues = data.map((obj:any) => obj[value])

    const uniqueArray = allValues.filter(function(item: any, pos: any) {
        return allValues.indexOf(item) === pos;
    })

    return uniqueArray
}

export const setLogic = (first: number | string, last: number | string, setFunction: Function) => {
    return setFunction({
        first: first,
        last: last
    })
}

export const ArrrayObjectKeys = (data: Object[]) => {
    return Object.keys(data[0])
}
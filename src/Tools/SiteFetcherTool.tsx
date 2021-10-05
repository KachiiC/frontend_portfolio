import { useEffect, useReducer, useState } from "react"

export const SiteFetcher = (url: RequestInfo, initial: any) => {

    const [fetchData, setFetchData] = useState(initial)
    const [loading, toggleLoading] = useReducer(loading => !loading, true)
    const [displayable, toggleDisplay] = useReducer(display => !display, false)

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setFetchData(data)
            toggleDisplay()
            toggleLoading()
        })
        .catch(error => {
            console.log(error)
            toggleLoading()
        })
    },[url])


    return {
        loading,
        fetchData,
        displayable
    }
    
}

// export const DataRender = (url: RequestInfo) => {

//     const { fetchData, loading, displayable } = SiteFetcher(url)

//     const renderLogic = loading === true ? 
//         <h1>Loading</h1> 
//         : displayable === true ?
//             fetchData
//             :
//             <h1>Cannot Load</h1>

//     return <>{renderLogic}</>
// }

import { useEffect, useState } from "react"

export const SiteFetcher = (url: RequestInfo) => {

    const [fetchData, setFetchData] = useState([])
    const [loading, setLoading] = useState(true)
    const [displayable, setDisplayable] = useState(false)

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setFetchData(data)
            setDisplayable(true)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
    },[url])

    return {
        loading,
        fetchData,
        displayable
    }
    
}

export const DataRender = (url: RequestInfo) => {

    const { fetchData, loading, displayable } = SiteFetcher(url)

    const renderLogic = loading === true ? 
        <h1>Loading</h1> 
        : displayable === true ?
            fetchData
            :
            <h1>Cannot Load</h1>

    return <>{renderLogic}</>
}

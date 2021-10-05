import { useEffect, useReducer, useState } from "react"

export const SiteFetcher = (url: string, argument?: string ) => {
    
    const [response, setResponse] = useState<any>([])
    const [loading, toggleLoading] = useReducer(
        loading => !loading, true
    )
    const [error, setError] = useReducer(
        error => !error, false
    )
  
    useEffect(() => {
        if (response.length === 0) {
            fetch(url)
            .then(responseData => responseData.json())
            .then((responseJson) => {
                setResponse(argument ? responseJson[`${argument}`] : responseJson);
                toggleLoading()
            })
            .catch((error) => {
                setError()
                toggleLoading()
                console.log(error)
            })
        }
    }, [url, argument, response])
  
    return {
      response,
      loading,
      error
    }
};

interface SiteRenderProps { 
    fetch: { 
        loading: boolean; 
        error: boolean; 
        response: any
    }; 
    component: JSX.IntrinsicAttributes; 
}

export const SiteRender = (props: SiteRenderProps) => {

    const {error, loading} = props.fetch

    const displayLogic = loading ? 
        <h1>Loading</h1>
        : 
        error ?
            <h1>Failed</h1>
            :
            props.component

    return (
        <>
            {displayLogic}
        </>
    )
}
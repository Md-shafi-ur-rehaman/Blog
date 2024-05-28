import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(()=>{
        async function fet(){
            try{
                const response = await fetch(url);
                
                if(!response.ok){
                    throw new Error("cannot fetch data");
                }
                const jsonData = await response.json();

                setData(jsonData);
                setIsLoading(false);
                setError(false);
            }
            catch(err){
                setIsLoading(false);
                setError(err.message);
            }
        }
        fet();
    },[url])
    return {data, isLoading, error}
}

export default useFetch;

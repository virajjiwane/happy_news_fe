import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query) => {
    const [data, setdata] = useState({Items:[]});
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);

    const options = {
        method: 'GET',
        url: `https://8eqj1ekey3.execute-api.ap-south-1.amazonaws.com/prod/happy_news`,
        params: {...query}
    }

    const fetchData = async () => {
        setisLoading(true);
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setdata(response.data);
            setisLoading(false);
        } catch (error) {
            seterror(error);
            alert('There is an error');
        }finally{
            setisLoading(false);
        }
    }

    useEffect(() => {
      fetchData();
    
    
    },[]);

    const refetch = ()=>{
        setisLoading(true);
        fetchData();
    }
    
    return {data, isLoading, error, refetch};
}

export default useFetch;
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
        console.log("params", options);
        setisLoading(true);
        try {
            const response = await axios.request(options);
            data.Items = data.Items.concat(response.data.Items);
            console.log(response.event);
            setdata(data);
            setisLoading(false);
        } catch (error) {
            setisLoading(false);
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
        let lastArticle = data.Items.slice(-1);
        options.params = {LastEvaluatedKey: lastArticle.epoch_in_milliseconds};
        fetchData();
    }
    
    return {data, isLoading, error, refetch};
}

export default useFetch;
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import http from "../http.common";

const useGet = (endpointUrl) => {
    const [data, setData] = useState([]);
    const [url] = useState(endpointUrl);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await http.get(url);
          setData(result.data);
        } catch (error) {
          toast.error(error.response?.data.message);
        }
      };
  
      fetchData();
    }, [url]);
    return { data };
  };
  
  export default useGet;

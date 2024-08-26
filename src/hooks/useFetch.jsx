import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [ data, setData ] = useState();
  const [ pending, setPending ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      const response = await axios.get(url);
      setData(response.data);
      setPending(false);
    };
    fetchData();
  }, [url]);

  return { data }
}

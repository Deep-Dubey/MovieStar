import React, { useState, useEffect } from 'react'

function useFetch(api,queryTerm="") {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
        async function fetchMovie(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results)
        }
        fetchMovie()
      },[url]);

  return {data}
}

export default useFetch

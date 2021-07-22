import { useEffect, useState } from "react";
import getData from "../helpers/getData";

const useFetchData = (URL) => {
  const [ state, setState ] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getData(URL)
      .then( data => {
        setState({
          data,
          loading: false
        })
      })
  }, [URL])
  return state;
}

export default useFetchData;
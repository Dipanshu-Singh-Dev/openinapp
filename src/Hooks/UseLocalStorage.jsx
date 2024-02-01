import React, { useEffect,useState } from 'react'

const useLocalStorage = () => {
  const [ls, setLs] = useState(JSON.parse(localStorage.getItem("files")) || []);
  useEffect(()=>{

  },[])
  return [ls,setLs];
}

export default useLocalStorage;
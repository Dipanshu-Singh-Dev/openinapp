import React, { useEffect,useState } from 'react'
import Blue from "../components/Blue/Index"
import Login from "../components/Login/Index"
import LoginMb from "../components/Login/Mb"
import Header from "../components/Header/Index"
const Signin = () => {
  const [width,setWidth] = useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => setWidth(window.screen.width);
    const rev = setInterval(handleResize,100)
    return () => clearInterval(rev)
  },[])
  return (
    <div style={{display: "flex", height: "100vh",flexDirection: width>767?"row":"column"}}>
      {width > 767 ?<Blue/>:null}
      {width < 767 ? <Header/>:null}
      {width > 767 ?<Login/>:<LoginMb/>}
    </div>
  )
}

export default Signin
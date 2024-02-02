import React, { useEffect,useState } from 'react'
import Blue from "../components/Blue/Index"
import Login from "../components/Login/Index"
import LoginMb from "../components/Login/Mb"
import Header from "../components/Header/Index"
const Signin = () => {
  const [width,setWidth] = useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.screen.width)
      setWidth(window.screen.width);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })
  return (
    <div style={{display: "flex", height: "100vh",flexDirection: width>767?"row":"column"}}>
      {width > 767 ?<Blue/>:null}
      {width < 767 ? <Header/>:null}
      {width > 767 ?<Login/>:<LoginMb/>}
    </div>
  )
}

export default Signin
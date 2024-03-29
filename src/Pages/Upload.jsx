import React from 'react'
import Uploader from "../components/Upload/Index"
import Sidebar from "../components/Sidebar/Index"
import MbUploader from "../components/MbUploader/Index"
import { useState, useEffect } from "react";
const Upload = () => {
  const [width,setWidth] = useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => setWidth(window.screen.width);
    const rev = setInterval(handleResize,100)
    return () => clearInterval(rev);
  },[])
  return (
    <div
      style={{
        marginLeft: "1vw",
        height: "100vh",
        margin: "auto",
        display: "flex",
      }}
    >
      {width > 767 && <Sidebar />}
      {width > 767 ? <Uploader />:<MbUploader />}
    </div>
  );
}

export default Upload
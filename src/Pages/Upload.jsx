import React from 'react'
import Uploader from "../components/Upload/Index"
import Sidebar from "../components/Sidebar/Index"
import MbUploader from "../components/MbUploader/Index"
import { useState, useEffect } from "react";
const Upload = () => {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.screen.width);
      setWidth(window.screen.width);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
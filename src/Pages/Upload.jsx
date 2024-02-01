import React from 'react'
import Uploader from "../components/Upload/Index"
import Sidebar from "../components/Sidebar/Index"
const Upload = () => {
  return (
    <div style={{width: "99vw", height: "100vh",margin:"auto",display:"flex"}}>
      <Sidebar/>
      <Uploader/>
    </div>
  )
}

export default Upload
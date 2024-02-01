import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { excel,upload } from "../../components/SVG";

const Index = () => {
  const input = useRef();
const submit = useRef();
const [file,setFile] = useState()
  const preventDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleFile = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
      console.log(file.name);

      // Set the selected files to the file input
      input.current.files = files;
    }
  };

  const handleBrowseClick = () => {
    input.current.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      setFile(file.name);
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!input.current.files[0]){
      window.alert("Please select a file first")
      return;
    }
    console.log(input.current.files[0])
    const files = JSON.parse(localStorage.getItem("files")) || [];
    files.push({
      name: input.current.files[0].name,
      type: input.current.files[0].type,
    });
    console.log(files)
    localStorage.setItem("files",JSON.stringify(files));
  }

  return (
    <div id={styles.container}>
      <div
        onDrop={handleFile}
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
        id={styles.upload}
      >
        {excel}
        {file?<p>{file}</p>:null}
        <p>
          Drop your excel sheet here or{" "}
          <span
            onClick={handleBrowseClick}
            style={{ color: "#605BFF", cursor: "pointer" }}
          >
            browse
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="file"
            style={{ display: "none" }}
            ref={input}
            type="file"
            onChange={handleFileInputChange}
          />
          <input
            ref={submit}
            style={{ display: "none" }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <button
        onClick={() => {
          submit.current.click();
        }}
        id={styles.submitter}
        type="submit"
      >
        {upload} Upload
      </button>
    </div>
  );
};

export default Index;

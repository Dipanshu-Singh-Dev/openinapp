import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { excel, upload } from "../../SVG";

const Index = () => {
  const input = useRef();
  const submit = useRef();
  const [loading, setLoading] = useState();
  const [file, setFile] = useState();
  const preventDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleRemove = () => {
    setFile(null);
    input.current.value = null;
  };
  const handleFile = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
      console.log(file.name);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.current.files[0]) {
      window.alert("Please select a file first");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFile(null);
      input.current.value = null;
      window.alert("Upload complete");
    }, 2000);

    console.log(input.current.files[0]);
    const files = JSON.parse(localStorage.getItem("files")) || [];
    files.push({
      name: input.current.files[0].name,
      type: input.current.files[0].type,
    });
    console.log(files);
    localStorage.setItem("files", JSON.stringify(files));
  };

  return (
    <div id={styles.container}>
      <div
        onDrop={handleFile}
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
        id={styles.upload}
      >
        {excel}
        {file ? (
          <>
            <p>{file}</p>
            <p
              onClick={handleRemove}
              style={{ cursor: "pointer", color: "red" }}
            >
              Remove
            </p>
          </>
        ) : (
          <p>
            Upload your excel sheet{" "}
            <span
              onClick={handleBrowseClick}
              style={{ color: "#605BFF", cursor: "pointer" }}
            >
              here
            </span>
          </p>
        )}
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
      {loading ? (
        <button id={styles.submitter}>...</button>
      ) : (
        <button
          onClick={() => {
            submit.current.click();
          }}
          id={styles.submitter}
          type="submit"
        >
          {upload} Upload
        </button>
      )}
    </div>
  );
};

export default Index;

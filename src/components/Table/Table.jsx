import { useEffect, useState } from "react";
import styles from "./table.module.css";
import data from "../../data";
import { v4 as uuidv4 } from "uuid";
import Popunder from "../Popunder/Index";
const ResponsiveTable = () => {
  const [toggle,setToggle] = useState({})
  const togglePopunder = (i) =>{
    setToggle(prev=>{
      console.log(prev)
      for(let key in prev){
        prev[key] = false;
      }
      prev[i] = !prev[i];
      console.log(prev);
      return {...prev};
    });
  }
  useEffect(()=>{
    data.map((el,index)=>{
      toggle[index] = false;
    })
  },[toggle])
  return (
    <div className={styles.container}>
      <p id={styles.head}> Uploads</p>
      <div id={styles.tableContainer}>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <p className={`${styles.col} ${styles.col1}`}>SI No.</p>
            <p className={`${styles.col} ${styles.col2}`}>Links</p>
            <p className={`${styles.col} ${styles.col3}`}>Prefix</p>
            <p className={`${styles.col} ${styles.col4}`}>Tags</p>
            <p className={`${styles.col} ${styles.col5}`}>Selected Tags</p>
          </li>

          {data.map((el,index) => {
            return (
              <li key={uuidv4()} className={styles.tableRow}>
                <p className={`${styles.col} ${styles.col1}`}>
                  {el.id < 10 ? `0${el.id}` : el.id}
                </p>
                <p
                  className={`${styles.col} ${styles.col2}`}
                  style={{ color: "#5B93FF", cursor: "pointer" }}
                  onClick={() => (window.location.href = `${el.link}`)}
                >
                  {el.link.slice(8)}
                </p>

                <p className={`${styles.col} ${styles.col4}`}>{el.prefix}</p>
                <div style={{position:"relative"}} className={`${styles.col} ${styles.col4}`}>
                  <p onClick={() => togglePopunder(index)}>
                    Select a Tag
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9.75L12.5 14.25L8 9.75"
                        stroke="#999CA0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                  {toggle[index] ? <Popunder /> : null}
                </div>
                <p id={styles.tags} className={`${styles.col} ${styles.col5}`}>
                  {el.tags.map((el) => (
                    <p key={uuidv4()}>
                      {el}{" "}
                      <svg
                        style={{ cursor: "pointer" }}
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L4 4M4 4L1 7M4 4L7 7M4 4L7 1"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </p>
                  ))}
                </p>
              </li>
            );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveTable;

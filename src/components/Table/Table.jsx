import React from "react";
import styles from "./table.module.css";
import data from "../../data";
import { v4 as uuidv4 } from "uuid";
const ResponsiveTable = () => {
  const tags = [
    "Technology",
    "Fashion",
    "Food",
    "Travel",
    "Sports",
    "Music",
    "Art",
    "Health",
    "Education",
    "Finance",
  ];
  return (
    <div className={styles.container}>
      <p id={styles.head}> Uploads</p>
      <div id={styles.tableContainer}>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <p className={`${styles.col} ${styles.col1}`}>SI No.</p>
            <p className={`${styles.col} ${styles.col2}`}>Link</p>
            <p className={`${styles.col} ${styles.col3}`}>Prefix</p>
            <p className={`${styles.col} ${styles.col4}`}>Tags</p>
            <p className={`${styles.col} ${styles.col5}`}>Selected Tags</p>
          </li>
          {data.map((el) => (
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
              <p className={`${styles.col} ${styles.col4}`}>
                <select>
                  <option value="">Select Tags</option>
                  {tags.map((el) => (
                    <option key={uuidv4()} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </p>
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveTable;

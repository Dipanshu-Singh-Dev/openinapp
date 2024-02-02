import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import data from "../../../data";
import { v4 as uuidv4 } from "uuid";
import Popunder from "../../Popunder/Index";
import PopunderTags from "../PopunderTags/Index"
const ResponsiveTable = () => {
  const [toggle, setToggle] = useState({});
  const [toggleTags, setToggleTags] = useState({});
  const [width, setWidth] = useState(window.screen.width);
  const togglePopunder = (i) => {
    setToggle((prev) => {
      for (let key in prev) {
        prev[key] = false;
      }
      return { ...prev,[i]:!prev[i] };
    });
  };
  const togglePopunderTags = (i) => {
    setToggleTags((prev) => {
      for (let key in prev) {
        prev[key] = false;
      }
      return { ...prev, [i]: !prev[i] };
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    data.map((el, index) => {
      toggle[index] = false;
      toggleTags[index] = false;
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p id={styles.head}> Uploads</p>
      <div id={styles.tableContainer}>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <p className={`${styles.col} ${styles.col1}`}>SI No.</p>
            <p className={`${styles.col} ${styles.col2}`}>Links</p>
            <p className={`${styles.col} ${styles.col3}`}>Prefix</p>
            <p className={`${styles.col} ${styles.col4}`}>Add Tags</p>
            <p className={`${styles.col} ${styles.col5}`}>Selected Tags</p>
          </li>

          {data.map((el, index) => {
            return (
              <li key={uuidv4()} className={styles.tableRow}>
                <p className={`${styles.col} ${styles.col1}`}>
                  {el.id < 10 ? `0${el.id}` : el.id}
                </p>
                <p
                  className={`${styles.col} ${styles.col2}`}
                  style={{
                    color: "#5B93FF",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  onClick={() => (window.location.href = `${el.link}`)}
                >
                  {window.screen.width > 767
                    ? el.link.slice(8)
                    : el.link.slice(8, 19)}
                </p>

                <p className={`${styles.col} ${styles.col4}`}>{el.prefix}</p>
                <div
                  style={{ position: "relative" }}
                  className={`${styles.col} ${styles.col4}`}
                >
                  <p
                    className={styles.select}
                    onClick={() => togglePopunder(index)}
                  >
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
                  <svg
                    onClick={() => togglePopunder(index)}
                    className={styles.plus}
                    height={16}
                    fill="gray"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 45.402 45.402"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  {toggle[index] ? <Popunder handler={togglePopunder} /> : null}
                </div>
                <div style={{ position: "relative" }} className={`${styles.col} ${styles.col5}`}>
                  <p
                    style={{ display: "relative" }}
                    className={`${styles.tags}`}
                  >
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
                  <svg
                    onClick={() => {
                      togglePopunderTags(index)
                    }}
                    className={styles.down}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                        fill="gray"
                      ></path>{" "}
                    </g>
                  </svg>
                  {toggleTags[index] ? (
                    <PopunderTags handler={togglePopunderTags} />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveTable;

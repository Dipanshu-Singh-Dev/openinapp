import React, { useState } from 'react';
import styles from "./styles.module.css";
import { v4 as uuidv4 } from 'uuid';
import data from '../../data';

localStorage.setItem("files",JSON.stringify(data));
const Index = () => {
    const handleDelete = ()=>{

    }
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
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("files")) || []
  ); 
  return (
    <div id={styles.container}>
      <p>Uploads</p>
      <div id={styles.tableContainer}>
        <ul id={styles.table}>
          <div id={styles.thead}>
            <div>
              <div className='col col-1'>SI No.</div>
              <div className='col col-2'>divnks</div>
              <div className='col col-3'>Prefix</div>
              <div className='col col-4'>Add Tags</div>
              <div className='col col-5'>Selected Tags</div>
            </div>
          </div>
            {data.map((el) => {
              return (
                <div className="trow" key={uuidv4()}>
                  <div className="col col-1">
                    {el.id < 10 ? `0${el.id}` : el.id}
                  </div>
                  <div
                    className="col col-2"
                  >
                  </div>
                  <div className="col col-3"></div>
                  <div className="col col-4">
                    <select>
                      <option value="">Select Tags</option>
                      {tags.map((el) => (
                        <option key={uuidv4()} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col col-4" id={styles.tags}>
                  
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Index
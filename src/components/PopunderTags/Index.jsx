import React from 'react'
import styles from './styles.module.css'
const Index = ({ handler }) => {
  console.log(handler)
  console.log("Popunder");
  return (
    <div id={styles.container}>
      <p onClick={handler}>Technology</p>
      <p onClick={handler}>Fashion</p>
      <p onClick={handler}>Food</p>
      <p onClick={handler}>Travel</p>
      <p onClick={handler}>Sports</p>
      <p onClick={handler}>Music</p>
      <p onClick={handler}>Art</p>
    </div>
  );
};

export default Index
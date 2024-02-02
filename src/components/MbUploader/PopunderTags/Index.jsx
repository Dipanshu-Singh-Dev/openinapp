import React from 'react'
import styles from './styles.module.css'
const Index = ({ handler }) => {
  console.log("Popunder");
  return (
    <div id={styles.container}>
      <p onClick={handler}>Technology</p>
      <p onClick={handler}>Fashion</p>
      <p onClick={handler}>Food</p>
    </div>
  );
};

export default Index
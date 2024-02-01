import React from 'react'
import styles from './styles.module.css'
import {discord, github, linkedin, logo, twitter} from '../SVG'
const Index = () => {
  return (
    <div id={styles.container}>
      <img id={styles.bg} src="bluediv.png" alt="bg" />
      <div id={styles.content}>
       {logo}
       <p id={styles.title}>BASE</p>
       <div id={styles.svgs}>
        {github}
        {twitter}
        {linkedin}
        {discord}
       </div>
      </div>
    </div>
  );
}

export default Index
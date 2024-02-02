import React from 'react'
import styles from './styles.module.css'
import Navbar from './Navbar/Index'
import { logo } from '../SVG'
import Table from "./Table/Index"
import UploadForm from './UploadForm/Index'
const Index = () => {
  return (
    <div id={styles.container} >
      <Navbar />
      <p id={styles.head}>Upload CSV</p>
      <UploadForm/>
      <Table/>
    </div>
  );
}

export default Index
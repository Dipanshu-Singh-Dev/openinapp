import React from 'react'
import styles from "./styles.module.css";
import Sidebar from '../Sidebar/Index'
import { profile,bell, lightLogo, hamburger } from '../../SVG';
const Index = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div id={styles.container}>
      {toggle && <Sidebar show={toggle} handler={() => setToggle(false)} />}
      <div id={styles.hamLogo}>
        <div style={{ position: "relative" }}>
          <span
            style={{ marginRight: "10px" }}
            onClick={() => setToggle(!toggle)}
          >
            {hamburger}
          </span>
        </div>
        <div id={styles.logo}>
          {lightLogo}
          <p>Base</p>
        </div>
      </div>
      <div id={styles.left}>
        {bell}
        {profile}
      </div>
    </div>
  );
}

export default Index
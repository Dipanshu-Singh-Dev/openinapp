import React from 'react'
import styles from './styles.module.css'
const Index = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div onSubmit={handleSubmit} id={styles.container}>
      <form>
        <p>Email Address</p>
        <input type="text" placeholder="Enter your email" />
        <p>Password</p>
        <input type="text" placeholder="Enter your password" />
        <p id="link">Forgot Password?</p>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Index
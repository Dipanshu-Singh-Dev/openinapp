import React from 'react'
import styles from './styles.module.css'
import Form from "../Form/Index"
import GoogleSignInButton from '../Google/Button';
const Index = () => {
  return (
    <div id={styles.container}>
      <div id={styles.form}>
        <div id={styles.head}>
          <p id={styles.heading}>Sign In</p>
          <p id={styles.details}>Sign in to your account</p>
        </div>
        <div id={styles.buttons}>
          <button>
            <GoogleSignInButton />
          </button>
          <button>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                fill="#999999"
              />
            </svg>
            Sign in with Apple
          </button>
        </div>
        <Form />
        <p id={styles.signup}>
          Don’t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}

export default Index
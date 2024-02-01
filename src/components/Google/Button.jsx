import { GoogleLogin } from "@react-oauth/google";
import React from 'react'
import {useNavigate} from "react-router-dom"
const Button = () => {
  const navigate = useNavigate()
    return (
      <GoogleLogin
        style={{ width: "80%", height: "33px" }}
        onSuccess={(credentialResponse) => {
          navigate("/upload");
        }}
        size="medium"
        text="Signin"
        shape="rectangular"
        onError={() => {
          window.alert("Login Failed");
        }}
      />
    );
}

export default Button

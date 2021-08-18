import React from 'react';
import LoginIm from "./images/login.png"
import LoginForm from "./LoginForm"

const Login = () => {
    return (
        <div style={{width: "100%", display: "flex", }}>
            <div><img src={LoginIm} alt="login" /></div>
            <div style={{width: "100%" }}>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login

import React from 'react';
import LoginIm from "./images/login.svg"
import LoginForm from "./LoginForm"

const Login = () => {
    return (
        <div className="container-fluid row" style={{display: "flex", maxWidth: "100%", padding: "0px"}}>
            <div className="col-md-5"style={{padding: "0" }} ><img src={LoginIm} alt="login" style={{ width: "95%",}} className="img-fluid" /></div>
            <div style={{padding: "0px"}} className="col-md-7">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login

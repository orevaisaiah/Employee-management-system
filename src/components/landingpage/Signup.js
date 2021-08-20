import React from "react";
import SignupImage from "./images/signup.png";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="container-fluid row" style={{display: "flex", maxWidth: "100%", padding: "0px"}}>
      <div className="col-md-5"style={{padding: "0" }} >
        <img src={SignupImage} alt="signup" style={{heigght: "100%" }} className="img-fluid" />
      </div>
      <div style={{padding: "0px"}} className="col-md-7" >
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

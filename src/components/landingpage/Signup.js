import React from "react";
import SignupImage from "./images/signup.png";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="container-fluid" style={{display: "flex", width: "100%"}}>
      <div >
        <img src={SignupImage} alt="signup" style={{heigght: "100%" }} />
      </div>
      <div style={{width: "100%" }}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

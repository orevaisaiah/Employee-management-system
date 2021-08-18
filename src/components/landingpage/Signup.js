import React from "react";
import SignupImage from "./images/signup.png";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div style={{display: "flex", width: "100%"}}>
      <div style={{width: "fitContent", padding: "0px"}}>
        <img src={SignupImage} alt="signup" />
      </div>
      <div style={{width: "90%" }}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import SignupImage from "./SignupImage";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div style={{display: "flex"}}>
      <div style={{width: "100%"}}>
        <SignupImage />
      </div>
      <div style={{width: "100%"}}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

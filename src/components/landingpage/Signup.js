<<<<<<< HEAD
import React from 'react';

const Signup = () => {
    return (
        <div>
            
        </div>
    )
}

export default Signup
=======
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
>>>>>>> f512bacb320fe731d7bfc892ef478b3f37d3099d

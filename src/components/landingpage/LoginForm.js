import React from "react";

const LoginForm = () => {
  return (
    <div style={{ width: "80%", marginLeft: "200px", marginTop: "300px"}}>
        <div style={{ marginTop: "110px" }}>
        <h2
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "auto",
            color: "#000000",
            marginBottom: "0px"
          }}
        >
          Login
        </h2>
      </div>
      <div style={{ marginBottom: "60px" }}>
        <p
          style={{
            width: "85%",
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "auto",
            color: "#000000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget
          justo, neque gravida nec at massa auctor.
        </p>
      </div>
      <form action="" >
        <div style={{width: "50%"}}>
          <input 
            className="login-input"
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div style={{width: "50%" }}>
          <input
            className="login-input"
            type="password"
            required
            placeholder="Password"
          />
        </div>
        <input
          style={{
            width: "160px",
            height: "50px",
            backgroundColor: "#3D50C7",
            color: "#F8F8F8",
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            border: "none",
            borderRadius: "10px",
            marginTop: "30px"
          }}
          type="submit"
          value="Login"
        />
      </form>
      <div style={{ width: "100%" }}>
        <p className="login-link">
          Don't have an Account? <a href="http://#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

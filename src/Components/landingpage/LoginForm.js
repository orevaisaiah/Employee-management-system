import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = Buffer.from(`${email}:${password}`, "utf8").toString(
        "base64"
      );
      let res = await axios.post(
        "https://empmgtapp.herokuapp.com/api/employee/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Basic ${token}`,
          },
        }
      );

      setUser(res.data);
      localStorage.setItem("user", res.data);
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(token));

      console.log(user);
      console.log("Login");

      history.push("/Dashboard");
    } catch (error) {
      console.error(error);
      alert("Email doesnt exist");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="aligntext"
      style={{ width: "75%", margin: "0 auto 0 auto" }}
    >
      <div>
        <h2
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: "32px",
            fontWeight: "700",
            color: "#000000",
            lineHeight: "5vh",
            margin: "220px 0 0 0",
          }}
        >
          Login
        </h2>
      </div>
      <div style={{}}>
        <p
          style={{
            width: "43.5vw",
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "3vh",
            color: "#000000",
            margin: "16px 0 33px 0",
          }}
        >
          Enter your login details to get access to your employee management
          dashboard
        </p>
      </div>
      <form action="">
        <div style={{ width: "100%" }}>
          <input
            className="login-input"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginBottom: "20px",
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <input
            className="login-input"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginBottom: "14px",
            }}
          />
        </div>
        <div>
          <a
            href="http://#"
            style={{
              color: "#08072E",
              fontFamily: '"Lato", sans-serif',
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </a>
        </div>
        <input
          style={{
            width: "10.5vw",
            height: "6.3vh",
            backgroundColor: "#3D50C7",
            color: "#F8F8F8",
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            border: "none",
            borderRadius: "5px",
            margin: "30px 0 20px 0",
          }}
          type="submit"
          value="Login"
          onClick={handleLogin}
        />
      </form>
      <div style={{ width: "100%" }}>
        <p className="login-link">
          Don't have an Account?
          <span>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

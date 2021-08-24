import React from "react";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div style={{ maxWidth: "100%" }}>
            <div style={{ width: "100%", margin: "340px 0 0 0" }}>
                <div style={{ marginTop: "150px" }}>
                    <h2
                        style={{
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "1.67vw",
                            fontWeight: "700",
                            color: "#000000",
                            lineHeight: "4vh",
                            margin: "0 0 16px 0",
                          }}
                    >
                        Login
                    </h2>
                </div>
                <div style={{ marginBottom: "30px" }}>
                    <p
                         style={{
                            width: "43.5vw",
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "0.b33vw",
                            fontWeight: "400",
                            lineHeight: "2vh",
                            color: "#000000",
                            marginBottom: "59px",
                          }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim eget justo, neque gravida nec at massa auctor.
                    </p>
                </div>
                <form action="">
                    <div style={{ width: "80%" }}>
                        <input
                            className="login-input"
                            type="email"
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div style={{ width: "80%" }}>
                        <input
                            className="login-input"
                            type="password"
                            required
                            placeholder="Password"
                            style={{
                                margin: "0 0 0px 0px",
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
                            width: "150px",
                            height: "45px",
                            backgroundColor: "#3D50C7",
                            color: "#F8F8F8",
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "16px",
                            fontWeight: "400",
                            border: "none",
                            borderRadius: "5px",
                            marginTop: "16px",
                        }}
                        type="submit"
                        value="Login"
                    />
                </form>
                <div style={{ width: "100%" }}>
                    <p className="login-link">
                        Don't have an Account?{" "}
                        <span>
                            {" "}
                            <Link
                                to="/signup"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                {" "}
                                Register
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

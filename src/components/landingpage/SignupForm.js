import React from "react";
import FileUpload from "./images/file-upload.png";

const SignupForm = () => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ width: "75%", margin: "50px auto 0 auto" }}>
                <form action="">
                    <div>
                        <h2
                            style={{
                                fontFamily: '"Lato", sans-serif',
                                fontSize: "30px",
                                fontWeight: "700",
                                color: "#000000",
                            }}
                        >
                            Register
                        </h2>
                    </div>
                    <div>
                        <p
                            style={{
                                fontFamily: '"Lato", sans-serif',
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "auto",
                                color: "#000000",
                                marginTop: "10px",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Enim eget justo, neque gravida nec at massa
                            auctor.
                        </p>
                    </div>
                    <div>
                        <select className="form-select" required>
                            <option className="form-option" value="company">
                                Select Category of Your Company{" "}
                            </option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                            <option value="company">Lorem</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: "25px" }}>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Company Name"
                            required
                            style={{ margin: "0px 92px 0 0" }}
                        />
                        <label htmlFor="logo-image">
                            Upload Logo{" "}
                            <span>
                                <img src={FileUpload} alt="upload icon" />
                            </span>
                        </label>
                        <input
                            type="file"
                            id="logo-image"
                            required
                            style={{
                                display: "none",
                                visibility: "none",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                    <div style={{ height: "50px", margin: "0px" }}>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="First Name"
                            required
                            style={{ margin: "0px 55px 0 0" }}
                        />
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div style={{ height: "50px", margin: "0px" }}>
                        <input
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            required
                            style={{ margin: "0px 31px 0 0" }}
                        />
                        <label htmlFor="profile-image">
                            Upload Profile Picture{" "}
                            <span>
                                <img src={FileUpload} alt="upload icon" />
                            </span>
                        </label>
                        <input
                            type="file"
                            id="profile-image"
                            style={{
                                display: "none",
                                visibility: "none",
                                cursor: "pointer",
                            }}
                            required
                        />
                    </div>
                    <div style={{ height: "43px", margin: "0px" }}>
                        <input
                            className="form-input"
                            type="password"
                            placeholder="Password"
                            required
                            style={{ margin: "0px 55px 0 0" }}
                        />
                        <input
                            className="form-input"
                            type="password"
                            placeholder="Re-type Password"
                            required
                        />
                    </div>
                    <div style={{ height: "43px", margin: "0px" }}>
                        <input type="checkbox" name="" id="terms" required />
                        <label htmlFor="terms">
                             I agree to all{" "}
                            <span>
                                <a
                                    href="http://#"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    Terms{" "}
                                </a>
                            </span>
                            and{" "}
                            <span>
                                <a
                                    href="http://#"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
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
                            marginBottom: "30px",
                        }}
                        type="submit"
                        value="Create Account"
                    />
                </form>
                <div>
                    <p>
                        Already have an Account?{" "}
                        <a
                            href="http://#"
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

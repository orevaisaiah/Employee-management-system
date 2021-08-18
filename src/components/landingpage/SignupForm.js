import React from "react";
import FileUpload from "./images/file-upload.png";

const SignupForm = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <div style={{ marginTop: "110px" }}>
        <h2
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "auto",
            color: "#000000",
          }}
        >
          Register
        </h2>
      </div>
      <div style={{ marginBottom: "30px" }}>
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
      <div>
        <form action="">
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
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <input
              className="form-input"
              style={{ marginRight: "60px" }}
              type="text"
              placeholder="Company Name"
              required
            />
            <label htmlFor="logo-image">
              Upload Company Logo{" "}
              <span style={{ position: "relative", top: "20px" }}>
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
                marginBottom: "30px",
              }}
            />
          </div>
          <div>
            <input
              className="form-input"
              style={{ marginRight: "60px", marginBottom: "7px" }}
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="form-input"
              style={{ marginBottom: "7px" }}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <input
              className="form-input"
              style={{ marginRight: "60px" }}
              type="email"
              placeholder="Email"
              required
            />
            <label htmlFor="profile-image">
              Upload Profile Picture{" "}
              <span style={{ position: "relative", top: "20px" }}>
                <img src={FileUpload} alt="upload icon" />
              </span>
            </label>
            <input
              type="file"
              id="profile-image"
              style={{ display: "none", visibility: "none", cursor: "pointer" }}
              required
            />
          </div>
          <div style={{ width: "100%" }}>
            <input
              style={{ marginRight: "60px" }}
              className="form-input"
              type="password"
              placeholder="Password"
              required
            />
            <input
              className="form-input"
              type="password"
              placeholder="Re-type Password"
              required
            />
          </div>
          <div style={{ width: "100%", margin: "30px 0px" }}>
            <input type="checkbox" name="" id="terms" required />
            <label htmlFor="terms">
              I agree to all{" "}
              <span>
                <a href="http://#">Terms </a>
              </span>
              and{" "}
              <span>
                <a href="http://#">Privacy Policy</a>
              </span>
            </label>
          </div>
          <input
            style={{
              margin: "30px 0",
              width: "160px",
              height: "50px",
              backgroundColor: "#3D50C7",
              color: "#F8F8F8",
              fontFamily: '"Lato", sans-serif',
              fontSize: "16px",
              fontWeight: "400",
              border: "none"
            }}
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
      <div style={{ width: "100%" }}>
        <p>
          Already have an Account? <a href="http://#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

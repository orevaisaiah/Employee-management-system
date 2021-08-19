import React from "react";
import Upload from "./Upload";

const SignupForm = () => {
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <div style={{ marginTop: "55px" }}>
        <h2
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
            marginBottom: "0px";'
          }}
        >
          Register
        </h2>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p
          style={{
            width: "85%",
            fontFamily: '"Lato", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "auto",
            color: "#000000",
            marginTop: "10px"
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
            <label htmlFor="logo-image">Upload Company Logo <span><Upload /></span></label>
            <input style={{display: "none", visibility: "none"}} type="file" id="logo-image" required />
          </div>
          <div style={{width: "100%", }}>
            <input
              className="form-input"
              style={{ marginRight: "60px" }}
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="form-input"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div style={{width: "100%", }}>
            <input
              className="form-input"
              style={{ marginRight: "3.75em" }}
              type="email"
              placeholder="Email"
              required
            />
            <label htmlFor="profile-image">Upload Profile Picture</label>
            <input style={{display: "none", visibility: "none"}} type="file" id="profile-image" required />
          </div>
          <div style={{width: "100%", }}>
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
          <div style={{width: "100%", }}>
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
          <input style={{marginTop: "30px"}} type="submit" value="Create Account" />
        </form>
      </div>
      <div style={{width: "100%", }}>
        <p>
          Already have an Account? <a href="http://#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

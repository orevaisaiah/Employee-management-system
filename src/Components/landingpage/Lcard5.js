import React from "react";

const Lcard5 = () => {
  return (
    <div className="lcard5">
      <h2 id="heading24">
        Join Our Mailing List
      </h2>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "400",
          fontFamily: "'Lato', sans-serif",
          lineHeight: "3.5vh",
          textAlign: "center",
          color: "#FFFFFFB2",
          width: "55%",
          height: "40%",
          margin: "0px auto 24px auto",
        }}
      >
        All required to enjoy every benefit from this organization is to have a
        functional elecrtonic mailing system to share information that concerns
        the company to increase productivityt.
      </p>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
         
        }}
        action=""
      >
          <input id="email-field" type="email" placeholder="Enter Email" />
          <button
            style={{
              backgroundColor: "#3D50C7",
              width: "63px",
              height: "23px",
              color: "white",
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              fontWeight: "700",
              border: "none",
              boderRadius: "10px",
              marginLeft: "-67px",
              marginTop: "3.5px",
            }}
          >
            Send
          </button>
      </form>
    </div>
  );
};

export default Lcard5;

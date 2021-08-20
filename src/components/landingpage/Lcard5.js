import React from "react";

const Lcard5 = () => {
    return (
        <div className="lcard5">
            <h2
                style={{
                    fontSize: "4vw",
                    fontWeight: "700",
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "auto",
                    textAlign: "center",
                    color: "#FFFFFF",
                    maxWidth: "350px",
                    margin: "0px auto 15px auto",
                    paddingTop: "40px",
                }}
            >
                Join Our Mailing List
            </h2>
            <p
                style={{
                    fontSize: "1.8vw",
                    fontWeight: "400",
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "auto",
                    textAlign: "center",
                    color: "#FFFFFFB2",
                    maxWidth: "570px",
                    margin: "10px auto 0px auto",
                }}
            >
                All required to enjoy every benefit from this organization is to
                have a functional elecrtonic mailing system to share information
                that concerns the company to increase productivityt.
            </p>
            <form
                style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
                action=""
            >
                <input
                    id="email-field"
                    type="email"
                    placeholder="Enter Email"
                />
            </form>
        </div>
    );
};

export default Lcard5;

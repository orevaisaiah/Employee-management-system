import React from "react";
import Phone from "./Phone";

const Lcard4 = () => {
    return (
        <div className="lcard4">
            <div>
                <h2 id="heading23">
                    Employee Side Of Things
                </h2>
            </div>
            <div className="container-fluid" style={{ width: "100%", height: "100%", margin: "auto" }}>
                <p
                    style={{
                        width: "55%",
                        height: "60%",
                        fontSize: "1rem",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif",
                        lineHeight: "3vh",
                        textAlign: "center",
                        color: "#313335B2",
                        margin: "0px auto 0px auto",
                    }}
                >
                    Ease of receiving task from the Admins. Team members can
                    share information and experience among themselves. Also
                    there is a cordial relationship between the employees and
                    their employers. Above all, there is fairness of information
                    delivery without involment of a third party. It is a plus to
                    employees.
                </p>
            </div>
            <div className="container-fluid"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Phone />
            </div>
        </div>
    );
};

export default Lcard4;

import React from "react";
import Phone from "./Phone";

const Lcard4 = () => {
    return (
        <div className="lcard4">
            <div>
                <h2
                    style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        fontFamily: "'Lato', sans-serif",
                        lineHeight: "auto",
                        textAlign: "center",
                        color: "#060709",
                        margin: " 70px auto 10px auto",
                    }}
                >
                    Employee Side Of Things
                </h2>
            </div>
            <div style={{ width: "70%", height: "70px", margin: "auto" }}>
                <p
                    style={{
                        width: "85%",
                        fontSize: "12px",
                        fontWeight: "400",
                        fontFamily: "'Lato', sans-serif",
                        lineHeight: "auto",
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
            <div
                style={{
                    width: "fitContent",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Phone />
            </div>
        </div>
    );
};

export default Lcard4;

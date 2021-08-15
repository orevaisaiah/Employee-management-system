import React from "react";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";

const Lcard3 = () => {
    return (
        <div className="lcard3">
            <div
                style={{
                    width: "30%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div>
                    <div>
                        <h2 className="main-heading">How It Works</h2>
                    </div>
                    <div>
                        <div className="bckgd">
                            <h3 className="numb">1</h3>
                        </div>
                        <div>
                            <h3 className="sub-heading">Sign Up</h3>
                        </div>
                        <div>
                            <p className="parag">
                                Admin will create an operational account for
                                each of the employees to enable timely,
                                effective and efficient communication between
                                the Admin and his employees.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bckgd">
                            <h3 className="numb">2</h3>
                        </div>
                        <div>
                            <h3 className="sub-heading">
                                Add Employees
                            </h3>
                        </div>
                        <div>
                            <p className="parag">
                                Recruitment of new employees to each of the
                                companies department could be done by top
                                officers ; Admin, Managers ...
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bckgd">
                            <h3 className="numb">3</h3>
                        </div>
                        <div>
                            <h3 className="sub-heading">
                                Generate Report
                            </h3>
                        </div>
                        <div>
                            <p className="parag">
                                Preparation of report emanating from the
                                organization would made ease; From the admins or
                                employees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", top: "1290px", left: "42px"}}>
                <Svg1 />
            </div>
            <div style={{ position: "absolute", top: "1350px", left: "88px"}}>
                <Svg2 />
            </div>
            <div style={{ position: "absolute", top: "1420px", left: "22px"}}>
                <Svg3 />
            </div>
            <div style={{ position: "absolute", top: "1290px", right: "94px"}}>
                <Svg1 />
            </div>
            <div style={{ position: "absolute", top: "1350px", right: "26px"}}>
                <Svg2 />
            </div>
            <div style={{ position: "absolute", top: "1420px", right: "150px"}}>
                <Svg3 />
            </div>
            <div style={{ position: "absolute", top: "1900px", left: "42px"}}>
                <Svg1 />
            </div>
            <div style={{ position: "absolute", top: "1970px", left: "88px"}}>
                <Svg2 />
            </div>
            <div style={{ position: "absolute", top: "2040px", left: "22px"}}>
                <Svg3 />
            </div>
            <div style={{ position: "absolute", top: "1900px", right: "104px"}}>
                <Svg1 />
            </div>
            <div style={{ position: "absolute", top: "1970px", right: "26px"}}>
                <Svg2 />
            </div>
            <div style={{ position: "absolute", top: "2040px", right: "150px"}}>
                <Svg3 />
            </div>
        </div>
    );
};

export default Lcard3;

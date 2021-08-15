import React from "react";
import Button from "../Button";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-container1">
                <p className="header-p">ems board</p>
            </div>
            <div className="header-container2">
                <div  style={{marginRight: "40px"}}>
                    <Button
                        text={"Login"}
                        color={"white"}
                        width={"110px"}
                        height={"60px"}
                        font={"16px"}
                        weight={700}
                        btcolor={"#FB8B24"}
                        family={"'Lato', sans-serif"}
                        btheight={"24px"}
                        border={"none"}
                    />
                </div>
                <div>
                    <Button
                        text={"Sign Up"}
                        borderRadius={"0px"}
                        color={"#FB8B24"}
                        width={"110px"}
                        height={"60px"}
                        font={"16px"}
                        weight={700}
                        btcolor={"#FFFFFF"}
                        family={"'Lato', sans-serif"}
                        btheight={"24px"}
                        border={"none"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
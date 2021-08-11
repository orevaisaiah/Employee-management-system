import React from 'react';
import PropTypes from "prop-types";

const Button = ({ text, color, width, height, borderRadius }) => {
    return (
        <div>
            <button style={{ backgroundColor: color, width: width, height: height, borderRadius: borderRadius }}>{text}</button>
        </div>
    )
};
Button.defaultProps = {
    color: '#EFF1FB',
    height: "54px",
    width: "177px",
    borderRadius: "10px"
};
Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,

};

export default Button

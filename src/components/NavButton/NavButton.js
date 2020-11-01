import React from "react";
//import "./NavButton.css";

export default function NavButton(props) {
    const { className, children, ...otherProps } = props;
    // console.log("test", tag)
    // console.log("test", props.tag)

    return React.createElement(
        props.tag,
        {
            className: ["NavButton", props.className].join(' '),
            ...otherProps
        },
        props.children
    );
}

// NavButton.defaultProps = {
//     tag: "btn"
// };

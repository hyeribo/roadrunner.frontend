import React from "react";

const TextButton = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={`rr-text-button`} {...rest}>
      {props.children}
    </button>
  );
};

export default TextButton;

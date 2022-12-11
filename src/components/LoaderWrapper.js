import React from "react";

const LoaderWrapper = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default LoaderWrapper;

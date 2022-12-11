import React from "react";

const BlurComponent = ({ blurOverLayColor, blurStrength }) => {
  const blurStrengths = {
    sm: 2,
    md: 4,
    lg: 6,
  };

  return (
    <div
      style={{
        backgroundColor: `${blurOverLayColor}17`,
        position: "absolute",
        inset: 0,
        backdropFilter: `blur(${blurStrengths[blurStrength]}px)`,
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default BlurComponent;

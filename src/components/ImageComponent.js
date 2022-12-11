import React from "react";

const ImageComponent = ({ imageSource, alt, imageClass, imageStyle }) => {
  return (
    <img
      style={{
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "auto",
        ...imageStyle,
      }}
      src={imageSource}
      alt={alt}
      className={imageClass}
    />
  );
};

export default ImageComponent;

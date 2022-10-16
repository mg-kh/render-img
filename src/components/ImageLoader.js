import React, { useRef } from "react";

import Hook from "./Hook";

const ImageLoader = ({
  src,
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 100,
  height = 0,
  width = 0,
  backgroundColor = "#b4b4b4",
  isUseblur = false,
}) => {
  const imageRef = useRef();

  const { imageSource, isElementInViewPort } = Hook({
    src,
    placeHolderSrc,
    errorSrc,
    threshold,
    imageRef,
  });

  return (
    <>
      <div
        ref={imageRef}
        style={{
          paddingBottom: `${(height / width) * 100}%`,
          width: "100%",
          position: "relative",
          backgroundImage: `url(${placeHolderSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {isElementInViewPort && imageSource !== "" ? (
          <img
            style={{
              position: "absolute",
              inset: "0",
              width: "100%",
              height: "100%",
            }}
            src={imageSource}
            alt={alt}
          />
        ) : (
          <>
            {isUseblur && (
              <div
                style={{
                  backgroundColor: `${backgroundColor}17`,
                  position: "absolute",
                  inset: 0,
                  backdropFilter: "blur(5px)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ImageLoader;

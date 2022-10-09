// import { round, debounce } from "lodash";
import React, { useEffect, useState, useRef } from "react";
import { useMemo } from "react";

import Hook from "./Hook";

const ImageLoader = ({
  src,
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 0,
  height = 0,
  width = 0,
  backgroundColor = "#d5d5d5",
  ...props
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
          backgroundColor,
          position: "relative",
        }}
      >
        {isElementInViewPort && (
          <img
            style={{ position: "absolute", inset: "0" }}
            {...props}
            src={imageSource}
            alt={alt}
          />
        )}
      </div>
    </>
  );
};

export default ImageLoader;

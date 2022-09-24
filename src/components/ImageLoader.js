import React, { useRef } from "react";

import Hook from "./Hook";

const ImageLoader = ({
  src,
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 100,
  lazyload = false,
  ...props
}) => {
  const imageRef = useRef();

  const { imageSource } = Hook({
    src,
    placeHolderSrc,
    errorSrc,
    threshold,
    lazyload,
    imageRef,
  });

  return (
    <>
      <img ref={imageRef} {...props} src={imageSource} alt={alt} />
    </>
  );
};

export default ImageLoader;

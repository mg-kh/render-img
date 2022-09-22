import React, { useEffect, useState, useRef } from "react";

const ImageLoader = ({
  src,
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 100,
  lazyload = false,
  ...props
}) => {
  const debounce = require("lodash/debounce");
  const round = require("lodash/round");
  const imgObj = new Image();
  const [img, setImg] = useState(placeHolderSrc);
  const viewPort = round(window.innerHeight / 2);
  const imgRef = useRef();

  useEffect(() => {
    if (lazyload) {
      // handleScroll();
      window.addEventListener("scroll", handleScroll);
    } else {
      checkImgErrorOrLoad();
    }
    return () => {
      if (lazyload) window.removeEventListener("scroll", handleScroll);
    };
  }, [src, lazyload]);

  const handleScroll = debounce(() => {
    const { top, bottom } = imgRef.current.getBoundingClientRect();
    const elementHeight = round(bottom - top);
    const startLoadingPos = elementHeight - threshold;
    console.log(top);
    if (viewPort > top + startLoadingPos) {
      checkImgErrorOrLoad();
      window.removeEventListener("scroll", handleScroll);
    }
  }, 100);

  const checkImgErrorOrLoad = () => {
    imgObj.src = src;
    imgObj.onload = () => setImg(() => src);
    imgObj.onerror = () => setImg(() => errorSrc);
  };

  return (
    <>
      <img ref={imgRef} {...props} src={img} alt={alt} />
    </>
  );
};

export default ImageLoader;

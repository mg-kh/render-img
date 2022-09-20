import React, { useEffect, useState } from "react";
// import React from "react";

const ImageLoader = ({ src, placeHolderSrc, errorSrc, alt, ...props }) => {
  const imgObj = new Image();
  const [img, setImg] = useState(placeHolderSrc);

  useEffect(() => {
    imgObj.src = src;
    imgObj.onload = () => setImg(() => src);
    imgObj.onerror = () => setImg(() => errorSrc);
  }, [src]);

  return (
    <>
      <img {...props} src={img} alt={alt} />
    </>
  );
};

export default ImageLoader;

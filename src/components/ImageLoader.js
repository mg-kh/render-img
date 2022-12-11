import React, { useRef } from "react";

import Hook from "./Hook";
import ImageComponent from "./ImageComponent";
import LoaderWrapper from "./LoaderWrapper";
import BlurComponent from "./BlurComponent";

const ImageLoader = ({
  src,
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 100,
  height = 0,
  width = 0,
  blurOverLayColor = "#b4b4b4",
  blurStrength = "sm",
  isUseblur = false,
  loader = null,
  containerClass = "",
  containerStyle = {},
  imageClass = "",
  imageStyle = {},
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
          height: "auto",
          position: "relative",
          ...containerStyle,
        }}
        className={containerClass}
      >
        {isElementInViewPort && imageSource !== "" ? (
          <ImageComponent
            imageSource={imageSource}
            alt={alt}
            imageClass={imageClass}
            imageStyle={imageStyle}
          />
        ) : (
          <>
            {placeHolderSrc && (
              <ImageComponent
                imageSource={placeHolderSrc}
                alt={alt}
                imageClass={imageClass}
                imageStyle={imageStyle}
              />
            )}
            {loader && <LoaderWrapper>{loader}</LoaderWrapper>}
            {isUseblur && (
              <BlurComponent
                blurStrength={blurStrength}
                blurOverLayColor={blurOverLayColor}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ImageLoader;

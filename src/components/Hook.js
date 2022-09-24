import { useEffect, useState, useCallback } from "react";
import { debounce, round } from "lodash";

const Hook = ({
  src,
  placeHolderSrc,
  errorSrc,
  threshold,
  lazyload,
  imageRef,
}) => {
  const imgObj = new Image();
  const centerScreenHeight = round(window.innerHeight / 2);

  // #region component states
  const [imageSource, setImageSource] = useState(placeHolderSrc);
  //   #endregion

  // #region utils functions
  const checkImageSource = useCallback(() => {
    imgObj.src = src;
    imgObj.onload = () => setImageSource(() => src);
    imgObj.onerror = () => setImageSource(() => errorSrc);
  }, [src]);

  const initScrollDetector = (handler) => {
    window.addEventListener("scroll", debounce(handler, 100));
  };

  const removeScrollDetector = (handler) => {
    window.removeEventListener("scroll", handler);
  };

  const scrollEventHandler = () => {
    const { top, bottom } = imageRef.current.getBoundingClientRect();
    const scrollArea = document.body.scrollHeight;
    const elementHeight = round(bottom - top);
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (centerScreenHeight > top + round(elementHeight / 2) - threshold) {
      checkImageSource();
      removeScrollDetector();
    } else if (round(windowHeight + scrollY) > scrollArea - 50) {
      checkImageSource();
      removeScrollDetector();
    }
  };
  // #endregion

  // #region component life cycle
  useEffect(() => {
    if (lazyload) {
      initScrollDetector(scrollEventHandler);
    } else {
      checkImageSource();
    }
  }, [src, lazyload]);
  // #endregion

  return {
    imageSource,
    // actions
    setImageSource,
  };
};

export default Hook;

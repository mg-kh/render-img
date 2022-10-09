import { debounce, round } from "lodash";
import { useCallback, useLayoutEffect, useState, useEffect } from "react";

// utils
import { isInViewPort } from "../utils/scroll";

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
  const [isElementInViewPort, setIsElementInViewPort] = useState(false);
  //   #endregion

  // #region utils functions
  const checkImageSource = useCallback(() => {
    imgObj.src = src;
    imgObj.onload = () => setImageSource(() => src);
    imgObj.onerror = () => setImageSource(errorSrc);
  }, [src, placeHolderSrc, errorSrc]);

  const initScrollDetector = (handler) => {
    window.addEventListener("scroll", handler);
  };

  const removeScrollDetector = (handler) => {
    window.removeEventListener("scroll", handler);
  };

  function scrollEventHandler() {
    return debounce(() => {
      const { top, bottom } = imageRef.current.getBoundingClientRect();
      const elementHeight = round(bottom - top);
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollArea = document.body.scrollHeight;
      if (isInViewPort({ centerScreenHeight, top, elementHeight, threshold })) {
        checkImageSource();
        setIsElementInViewPort(() => true);
      } else if (round(windowHeight + scrollY) > scrollArea - 50) {
        checkImageSource();
        setIsElementInViewPort(() => true);
      }
    }, 50)();
  }
  // #endregion

  useLayoutEffect(() => {
    scrollEventHandler(); // show in view port image instantly
    initScrollDetector(scrollEventHandler); // start detecting the viewport
    if (isElementInViewPort === true) {
      removeScrollDetector(scrollEventHandler); // remove scroll detector event when img reveal
    }
    return () => removeScrollDetector(scrollEventHandler);
  }, [src, lazyload, placeHolderSrc, errorSrc, isElementInViewPort]);

  return {
    imageSource,
    isElementInViewPort,
  };
};

export default Hook;

import { useCallback, useLayoutEffect, useState } from "react";
import { debounce } from "../utils/debounce";

// utils
import { isInViewPort } from "../utils/scroll";

const Hook = ({ src, errorSrc, threshold, imageRef }) => {
  const imgObj = new Image();
  const centerScreenHeight = Math.round(window.innerHeight / 2);

  // #region component states
  const [imageSource, setImageSource] = useState("");
  const [isElementInViewPort, setIsElementInViewPort] = useState(false);
  //   #endregion

  // #region utils functions
  const checkImageSource = useCallback(() => {
    imgObj.src = src;
    imgObj.onload = () => setImageSource(() => src);
    imgObj.onerror = () => setImageSource(errorSrc);
  }, [src, errorSrc]);

  const initScrollDetector = (handler) => {
    window.addEventListener("scroll", handler);
  };

  const removeScrollDetector = (handler) => {
    window.removeEventListener("scroll", handler);
  };

  function scrollEventHandler() {
    return debounce(() => {
      const { top, bottom } = imageRef.current.getBoundingClientRect();
      const elementHeight = Math.round(bottom - top);
      const windowHeight = Math.round(window.innerHeight);
      const scrollY = Math.round(window.scrollY);
      const scrollArea = document.body.scrollHeight;
      if (isInViewPort({ centerScreenHeight, top, elementHeight, threshold })) {
        checkImageSource();
        setIsElementInViewPort(() => true);
      } else if (windowHeight + scrollY > scrollArea - 50) {
        checkImageSource();
        setIsElementInViewPort(() => true);
      }
    }, 50);
  }
  // #endregion

  useLayoutEffect(() => {
    scrollEventHandler(); // show in view port image instantly
    initScrollDetector(scrollEventHandler); // start detecting the viewport
    if (isElementInViewPort === true) {
      removeScrollDetector(scrollEventHandler); // remove scroll detector event when img reveal
    }
    return () => removeScrollDetector(scrollEventHandler);
  }, [src, errorSrc, isElementInViewPort]);

  return {
    imageSource,
    isElementInViewPort,
  };
};

export default Hook;

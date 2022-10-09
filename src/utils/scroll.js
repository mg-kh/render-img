import { round } from "lodash";

export const isInViewPort = ({
  centerScreenHeight,
  top,
  elementHeight,
  threshold,
}) => {
  const startVisiblePoint = top - threshold;
  return centerScreenHeight > startVisiblePoint + round(elementHeight / 2);
};

export const isInViewPort = ({
  centerScreenHeight,
  top,
  elementHeight,
  threshold,
}) => {
  const startVisiblePoint = centerScreenHeight + threshold;
  return startVisiblePoint > top + Math.round(elementHeight / 2);
};

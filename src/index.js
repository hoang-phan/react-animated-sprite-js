import React, { useState } from 'react';
import { useInterval } from 'use-interval-js';

function AnimatedSprite({
  className,
  sheetWidth,
  spriteSize,
  spriteIndices,
  interval,
  loop
}) {
  const [index, setIndex] = React.useState(0);
  const spriteIndex = spriteIndices[index];
  const x = spriteIndex % sheetWidth;
  const y = Math.floor(spriteIndex / sheetWidth);

  useInterval(() => {
    if (index < spriteIndices.length - 1) {
      setIndex(index + 1);
      return;
    }

    if (loop) {
      setIndex(0);
    }
  }, interval);

  return (
    <div
      className={className}
      style={{
        width: spriteSize,
        height: spriteSize,
        backgroundPosition: `-${spriteSize * x}px -${spriteSize * y}px`
      }}
    />
  )  
};

export default AnimatedSprite;

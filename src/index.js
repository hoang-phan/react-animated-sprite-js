import { useInterval } from 'use-interval-js';

export default function AnimatedSprite({
  className,
  sheetWidth,
  spriteSize,
  spriteIndices,
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
  }, 1000);

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
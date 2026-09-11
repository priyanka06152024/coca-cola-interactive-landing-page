import React, { useEffect, useRef } from "react";

const MouseTracker = ({ containerRef, motionRef }) => {
  const target = useRef({
    x: 0.5,
    y: 0.5,
  });

  const current = useRef({
    x: 0.5,
    y: 0.5,
  });

  const previous = useRef({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    const container = containerRef?.current;

    if (!container || !motionRef?.current) return;

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      target.current.x = Math.max(0, Math.min(1, x));
      target.current.y = Math.max(0, Math.min(1, y));
    };

    const handlePointerLeave = () => {
      target.current.x = 0.5;
      target.current.y = 0.5;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, [containerRef, motionRef]);

  useEffect(() => {
    let animationFrame;

    const update = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * 0.08;
      current.current.y += dy * 0.08;

      const velocityX =
        current.current.x - previous.current.x;

      const velocityY =
        current.current.y - previous.current.y;

      const velocity = Math.sqrt(
        velocityX * velocityX +
          velocityY * velocityY
      );

      motionRef.current.mouseX = current.current.x;
      motionRef.current.mouseY = current.current.y;

      motionRef.current.mouseVelocity = velocity;

      motionRef.current.mouseDirectionX = velocityX;
      motionRef.current.mouseDirectionY = velocityY;

      previous.current.x = current.current.x;
      previous.current.y = current.current.y;

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [motionRef]);

  return null;
};

export default MouseTracker;
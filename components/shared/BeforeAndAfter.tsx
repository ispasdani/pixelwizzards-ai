"use client";

import { useRef, useEffect, useState } from "react";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const before = beforeRef.current;
    const slider = sliderRef.current;

    if (!container || !before || !slider) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const containerRect = container.getBoundingClientRect();
      const offsetX = Math.min(
        Math.max(0, e.clientX - containerRect.left),
        containerRect.width
      );
      before.style.width = `${offsetX}px`;
      slider.style.left = `${offsetX}px`;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const containerRect = container.getBoundingClientRect();
      const offsetX = Math.min(
        Math.max(0, touch.clientX - containerRect.left),
        containerRect.width
      );
      before.style.width = `${offsetX}px`;
      slider.style.left = `${offsetX}px`;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div
      className="relative w-[500px] h-[300px] overflow-hidden cursor-ew-resize"
      ref={containerRef}
    >
      <div
        className="absolute top-0 left-0 bottom-0 bg-cover bg-no-repeat bg-center z-20 transition-none"
        ref={beforeRef}
        style={{ backgroundImage: `url(${beforeImage})`, width: "50%" }}
      ></div>
      <div
        className="absolute top-0 left-0 bottom-0 right-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${afterImage})` }}
      ></div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-30 transition-none"
        ref={sliderRef}
        style={{ left: "50%" }}
      >
        <div
          className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        ></div>
      </div>
    </div>
  );
};

export default ComparisonSlider;

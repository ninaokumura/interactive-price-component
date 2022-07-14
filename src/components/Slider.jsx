import React from "react";

export default function Slider(props) {
  const value = Number(props.value);
  const min = Number(props.min);
  const max = Number(props.max);

  const steps = max - min; // # of steps
  const step = 100 / steps; // % per step
  const fillRatio = step * value;

  return (
    <>
      <input
        type="range"
        {...props}
        className="form-range appearance-none rounded-full h-2 slider-thumb"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) ${fillRatio}%, hsl(224, 65%, 95%) ${
            fillRatio + 1
          }%, hsl(224, 65%, 95%) 100%)`,
        }}
      />
    </>
  );
}

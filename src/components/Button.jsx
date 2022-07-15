import React from "react";

export default function Button(props) {
  return (
    <button
      className="border py-2.5 px-10 rounded-full text-pale-blue bg-dark-desaturated-blue text-sans tracking-wide max-w-min whitespace-nowrap m-auto"
      onClick={props.onClick}
    >
      {props.action}
    </button>
  );
}

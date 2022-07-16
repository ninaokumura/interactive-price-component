import React from "react";

export default function Button(props) {
  return (
    <button
      className="border py-2.5 px-10 rounded-full text-pale-blue bg-dark-desaturated-blue text-sans tracking-wide max-w-min whitespace-nowrap m-auto text-xs font-bold hover:text-light-grayish-blue"
      onClick={props.onClick}
    >
      {props.action}
    </button>
  );
}

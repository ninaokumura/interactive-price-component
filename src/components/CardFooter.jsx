import React from "react";
import { ReactComponent as CheckIcon } from "../assets/images/icon-check.svg";

const PLAN_DETAILS = [
  "Unlimited websites",
  "100% data ownsership",
  "Email reports",
];

export default function CardFooter() {
  return (
    <div>
      <ul>
        {PLAN_DETAILS.map(plan => (
          <li
            key={plan}
            className="flex justify-center items-center gap-2 font-sans text-sm text-grayish-blue font-semibold py-1"
          >
            <div>
              <CheckIcon />
            </div>
            {plan}
          </li>
        ))}
      </ul>
    </div>
  );
}

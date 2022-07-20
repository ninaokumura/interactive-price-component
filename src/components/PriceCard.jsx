import React, { useState } from "react";
import Slider from "./Slider";

import Button from "./Button";
import CardFooter from "./CardFooter";
import Toggle from "./Toggle";

const PLANS = [
  {
    pageviews: "10k",
    price: 8,
  },
  {
    pageviews: "50k",
    price: 12,
  },
  {
    pageviews: "100k",
    price: 16,
  },
  {
    pageviews: "500k",
    price: 24,
  },
  {
    pageviews: "1M",
    price: 36,
  },
];

export default function PriceCard() {
  const [isChecked, setIsChecked] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(0);

  const price = PLANS[selectedPlan].price;

  return (
    <div className="bg-price-white rounded z-10 divide-y mt-44 sm:mt-8 sm:m-auto">
      <div className="p-7 flex flex-col gap-8">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
          <h1 className="text-grayish-blue text-sm text-center py-4 font-sans font-semibold tracking-wider sm:mt-3 sm:text-left">
            {PLANS[selectedPlan].pageviews} PAGEVIEWS
          </h1>
          <div className="grid sm:order-1 sm:col-span-2">
            <Slider
              min="0"
              max="4"
              step="1"
              value={selectedPlan}
              onInput={evt => setSelectedPlan(Number(evt.target.value))}
            />
          </div>
          <div className="text-center text-dark-desaturated-blue flex justify-center items-center  gap-1 font-bold pt-3">
            <span className="text-3xl sm:text-4xl">
              {isChecked ? `$${price * 0.75}.00 ` : `$${price}.00`}
            </span>
            <span className="text-grayish-blue text-sm">/month</span>
          </div>
        </div>
        <div className="flex gap-3 text-xs text-grayish-blue font-bold items-center justify-center">
          <span className="">Monthly Billing</span>
          <Toggle
            checked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
          <div className="flex items-center gap-1">
            <span>Yearly Billing</span>
            <span className="bg-light-grayish-red rounded-full text-[9px] text-light-red py-0.5 sm:py-1 px-2 sm:px-5">
              <span className="sm:hidden">-</span>
              25%
              <span className="hidden sm:inline"> discount</span>
            </span>
          </div>
        </div>
      </div>
      <div className="p-7 flex flex-col gap-6 sm:flex-row">
        <CardFooter />
        <Button action="Start my trial" />
      </div>
    </div>
  );
}

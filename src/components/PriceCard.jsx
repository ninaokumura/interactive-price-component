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

  //   10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month
];

export default function PriceCard() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  return (
    <div className="bg-price-white rounded z-10 divide-y">
      <div className="p-7 flex flex-col gap-8">
        <h1 className="text-grayish-blue text-sm text-center py-4 font-sans font-semibold tracking-wider">
          {PLANS[selectedPlan].pageviews} PAGEVIEWS
        </h1>
        <div className="grid">
          <Slider
            min="0"
            max="4"
            step="1"
            value={selectedPlan}
            onInput={evt => setSelectedPlan(Number(evt.target.value))}
          />
        </div>
        <div className="text-center text-dark-desaturated-blue flex justify-center items-center gap-1 font-bold pt-3">
          <span className="text-3xl">${PLANS[selectedPlan].price}.00</span>
          <span className="text-grayish-blue text-sm">/month</span>
        </div>
        <div className="flex gap-4 text-xs text-grayish-blue font-bold">
          <span className="">Monthly Billing</span>
          <Toggle />
          <div className="flex gap-1">
            <span>Yearly Billing</span>
            <span className="bg-light-grayish-red rounded-full text-red-500">
              -25%
            </span>
          </div>
        </div>
      </div>
      <div className="p-7 flex flex-col gap-6">
        <CardFooter />
        <Button action="Start my trial" />
      </div>
    </div>
  );
}

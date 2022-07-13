import React from "react";

export default function PriceCard() {
  return (
    <div className="bg-price-white rounded z-10 p-8 flex flex-col gap-5">
      <h1 className="text-grayish-blue text-sm text-center py-4 font-sans font-semibold tracking-wider">
        100k PAGEVIEWS
      </h1>
      <div className="text-center">bar components goes here...</div>

      <div className="text-center text-dark-desaturated-blue flex justify-center gap-1 text-xs font-bold">
        <span className="text-lg">$16.00</span>
        <span className="text-grayish-blue">/month</span>
      </div>
      <div className="flex gap-4">
        <span className="text-xs">Monthly Billing</span>
        <button>toggle</button>
        <span>Yearly Billing</span>
        <span>-25%</span>
      </div>
    </div>
  );
}

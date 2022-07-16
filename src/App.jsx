import PriceCard from "./components/PriceCard";
import { ReactComponent as CirclesPattern } from "./assets/images/pattern-circles.svg";

function App() {
  return (
    <div className="bg-light-grayish-slider h-screen border border-red w-full grid place-items-center relative font-sans p-4">
      <div className="z-10">
        <div className="absolute h-[50vh] top-0 left-0 right-0 bg-very-pale-blue rounded-bl-[10vw]" />
        <CirclesPattern className=" absolute top-8 right-0 left-0 m-auto" />
        <div className="z-10 absolute left-0 right-0 text-center text-sans text-grayish-blue tracking-wide top-16 flex flex-col gap-4">
          <h1 className="text-xl font-bold text-dark-desaturated-blue tracking-wide">
            Simple, traffic-based pricing
          </h1>
          <div className="px-[70px] sm:px-0">
            <p className="text-sm">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <PriceCard />
    </div>
  );
}

export default App;

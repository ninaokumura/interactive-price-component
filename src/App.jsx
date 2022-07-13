import PriceCard from "./components/PriceCard";
import { ReactComponent as CirclesPattern } from "./assets/images/pattern-circles.svg";

function App() {
  return (
    <div className="bg-light-grayish-slider h-screen border border-red w-full grid place-content-center relative font-sans p-4">
      <div className="z-10">
        <div className="absolute h-[50vh] top-0 left-0 right-0 bg-very-pale-blue rounded-bl-[10vw]" />
        <CirclesPattern className=" absolute top-8 right-0 left-0 m-auto" />
      </div>
      <PriceCard />
    </div>
  );
}

export default App;

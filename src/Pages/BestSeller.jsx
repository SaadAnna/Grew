import PorsheImage from "./PorsheImage.png";
import MercedesImage from "./MercedesImage.png";
import FerrariImage from "./FerrariImage.png";
export default function BestSeller() {
  return (
    <>
      <section className="flex felx-wrap gap-2 mt-32 items-center mx-auto">
      <div className="flex flex-col w-[35%] gap-2 text-start p-4 bg-[#1d1d2281] backdrop-blur-md shadow-lg rounded-xl duration-300 ease-out hover:bg-[#0c0c0e81]">
          <h1 className="font-text  text-white font-semibold text-2xl">
            Porshe 911
          </h1>
            <img src={MercedesImage} className="w-[95%] m-auto" />
          <div className="flex justify-between  items-center">
          

            <span className="font-text text-neutral-300 text-base font-normal">
              1.120.00$
            </span>
            <span className="font-text text-neutral-300 text-base font-normal">
              Shop
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

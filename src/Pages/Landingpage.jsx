import Navbar from "./Navbar";
import ImagePreview from "./ImagePreview.png";
export default function Landingpage() {
  return (
    <>
      <Navbar />
      <section className="flex fle-col w-[80%] items-center justify-center text-center mt-52 mx-auto">
        <div className="flex flex-col text-center gap-4">
          <span className="font-text text-lg font-normal text-neutral-400 ">
            Build by {""}
            <a
              href="#"
              className="font-text text-neutral-400 font-normal text-lg hover:text-white"
            >
              Codew
            </a>
          </span>

          <h1 className="font-text text-white font-semibold lg:text-7xl text-5xl">
            Increase your daily productivity with Grew.
          </h1>
          <p className="font-text text-neutral-400 font-normal text-lg">
            With Grew you can organize your day and increase its <br />{" "}
            productivity in effective and real ways.
          </p>
          <a href="#" className="font-text m-auto w-fit h-fit text-white text-lg font-normal pl-11 pr-11 pt-3 pb-3 bg-[#1c8bd5] rounded-full cursor-pointer duration-200 hover:bg-[#056aad]">
            Start Free Trial
          </a>
        </div>
      </section>
      <div className="flex mx-auto items-center justify-center -mt-36">
      <img src={ImagePreview} className="lg:w-[75%] w-[95%]"/>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center -mt-10 gap-3"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-semibold text-3xl text-white "
        >
          Loved by Companies of All Sizes
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-normal text-lg md:text-xl  text-neutral-400"
        >
          Youll be in good companies
        </p>
      </div>
    </>
  );
}

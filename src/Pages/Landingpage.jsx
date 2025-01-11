import Navbar from "./Navbar";
import SilderImageSection from "./SliderImageSection";
import BestSeller from "./BestSeller";
import WhyUsSection from "./WhyUsSection";
import UserReviews from "./UserReviews";
import Footer from "./Footer";
import AmgLogo from "./AmgLogo.png";
import AudiLogo from "./AudiLogo.png";
import FerrariLogo from "./FerrariLogo.png";
import PorsheLogo from "./PorsheLogo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Landingpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex fle-col lg:w-[95%] w-[99%] items-center justify-center text-center mt-52 mx-auto"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center gap-4"
        >
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
            Choose, design and buy the car of your dreams{" "}
          </h1>
          <p className="font-text text-neutral-400 font-normal text-lg">
            With Grew, buy the car of your dreams
            <br /> from anywhere in the world
          </p>
          <a
            href="#"
            className="font-text m-auto w-fit h-fit text-white text-lg font-normal pl-11 pr-11 pt-3 pb-3 bg-[#1c8bd5] rounded-full cursor-pointer duration-200 hover:bg-[#056aad]"
          >
            Start Free Trial
          </a>
        </div>
      </section>
      <SilderImageSection />
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-28 gap-3"
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
      <section
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap mt-20 text-center items-center w-[59%] justify-center gap-7 mx-auto"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={AmgLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={AudiLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={PorsheLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={FerrariLogo}
          className="w-32 h-fit box-border"
        />
      </section>

      <BestSeller />
      <WhyUsSection />
      <UserReviews />
      <Footer />
    </div>
  );
}

import Navbar from "./Navbar";
import ImagePreview from "./ImagePreview.png";
import SamsungLogo from "./samsunglogo.png";
import CanonLogo from "./canonlogo.png";
import FacebookLogo from "./facebooklogo.png";
import AirbnbLogo from "./airbnblogo.png";
import NikeLogo from "./nikelogo.png";
import CarrefourLogo from "./carrefourlogo.png";
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
        className="flex fle-col w-[80%] items-center justify-center text-center mt-52 mx-auto"
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
            Increase your daily productivity with Grew.
          </h1>
          <p className="font-text text-neutral-400 font-normal text-lg">
            With Grew you can organize your day and increase its <br />{" "}
            productivity in effective and real ways.
          </p>
          <a
            href="#"
            className="font-text m-auto w-fit h-fit text-white text-lg font-normal pl-11 pr-11 pt-3 pb-3 bg-[#1c8bd5] rounded-full cursor-pointer duration-200 hover:bg-[#056aad]"
          >
            Start Free Trial
          </a>
        </div>
      </section>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex mx-auto items-center justify-center -mt-7 lg:-mt-36"
      >
        <img src={ImagePreview} className="lg:w-[75%] w-[95%]" />
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
      <section
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap mt-20 text-center items-center w-[59%] justify-center gap-7 mx-auto"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={SamsungLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={CanonLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={CarrefourLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={NikeLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={AirbnbLogo}
          className="w-32 h-fit box-border"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src={FacebookLogo}
          className="w-32 h-fit box-border"
        />
      </section>
      <div className="flex flex-col mt-40 mx-auto justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-semibold text-3xl text-white "
        >
          What can you do with Grew?
        </h1>
      </div>
      <section
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap mx-auto lg:gap-14 mt-32 justify-center items-center"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-start w-80 h-80 gap-2  bg-transparent"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z" />
          </svg>

          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-semibold text-xl text-white "
          >
            Writing Notes
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-normal text-lg md:text-xl  text-neutral-400"
          >
            You can write your daily notes smoothly and simply to ensure that
            you save your time.{" "}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-start w-80 h-80 gap-2  bg-transparent p-2"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.512 8.72a2.46 2.46 0 0 1 3.479 0 2.461 2.461 0 0 1 0 3.479l-.004.005-1.094 1.08a.998.998 0 0 0-.194-.272l-3-3a1 1 0 0 0-.272-.193l1.085-1.1Zm-2.415 2.445L7.28 14.017a1 1 0 0 0-.289.702v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .703-.288l2.851-2.816a.995.995 0 0 1-.26-.189l-3-3a.998.998 0 0 1-.19-.26Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M7 3a1 1 0 0 1 1 1v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10.67 8H19v8H5v-8h3.855l.53-.537a1 1 0 0 1 .87-.285c.097.015.233.13.277.087.045-.043-.073-.18-.09-.276a1 1 0 0 1 .274-.873l1.09-1.104a3.46 3.46 0 0 1 4.892 0l.001.002A3.461 3.461 0 0 1 17.67 11Z"
              clipRule="evenodd"
            />
          </svg>

          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-semibold text-xl text-white "
          >
            Writing assignments
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-normal text-lg md:text-xl  text-neutral-400"
          >
            Write down your monthly or even daily assignments and keep your
            focus on them.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-start w-80 h-80 gap-2  bg-transparent p-2"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
            <path
              fillRule="evenodd"
              d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
              clipRule="evenodd"
            />
            <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
          </svg>

          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-semibold text-xl text-white "
          >
            Pomodoro Time
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-normal text-lg md:text-xl  text-neutral-400"
          >
            Using this technique can be very helpful in distributing your work
            time.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

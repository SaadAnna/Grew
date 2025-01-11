import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function WhyUsSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  //simple data for the section
  const Details = [
    {
      id: 1,

      Title: "Extensive Range of Car Brands",
      description:
        "Discover a wide selection of top car brands, tailored to match your preferences and budget.",
      Icon: (
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 1,
      Title: "Certified Quality and Reliability",
      description:
        "Every vehicle undergoes strict quality checks to ensure you drive away with confidence.",
      Icon: (
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
          <path
            fillRule="evenodd"
            d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            clipRule="evenodd"
          />
          <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
        </svg>
      ),
    },
    {
      id: 1,
      Title: "Exceptional Customer Support",
      description:
        "Enjoy a hassle-free car buying experience with expert guidance, flexible financing, and personalized solutions",
      Icon: (
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mt-52 mx-auto justify-center gap-3">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-semibold text-3xl text-white "
        >
          Why Choose Us?{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-normal text-lg md:text-xl  text-neutral-400"
        >
          Your Trusted Partner for Finding the Perfect Car.{" "}
        </p>
      </div>
      <section className="flex flex-wrap m-auto mt-32 items-center gap-10">
        {Details.map((Detail) => (
          <div key={Detail.id} className="mx-auto">
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="flex flex-col text-start items-start cursor-pointer gap-3 w-72 h-72 m-auto p-4 rounded-lg ease-linear bg-[#1d1d2281] backdrop-blur-sm duration-100 hover:bg-[#1d1d2281] hover:backdrop-blur-md"
            >
              <span className="">{Detail.Icon}</span>
              <h3 className="font-text text-white font-semibold text-2xl">
                {Detail.Title}
              </h3>
              <p className="font-text text-neutral-300 font-normal text-lg">
                {Detail.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const FooterDetails = [
  {
    id: 1,
    title: "Grew",
    LinkOne: "",
    LinkTwo: "",
    LinkThree: "",
    LinkFour: "",
  },
  {
    id: 1,
    title: "QuickLink",
    LinkOne: "Home",
    LinkTwo: "About",
    LinkThree: "Shop",
    LinkFour: "Contact",
  },
  {
    id: 1,
    title: "Brands",
    LinkOne: "Mercedes",
    LinkTwo: "Porshe",
    LinkThree: "Ferrari",
    LinkFour: "Bently",
  },
  {
    id: 1,
    title: "Contact Us",
    LinkOne: "Twiter",
    LinkTwo: "Instagram",
    LinkThree: "Youtube",
    LinkFour: "Facebook",
  },
];
const FinaleText = [
  {
    id: 1,
    content: "@Grew2024, All RightsReserved.",
  },
];

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" max-w-7xl mx-auto mt-52 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center text-center gap-4 lg:gap-40">
        {FooterDetails.map((footer) => (
          <div
            key={footer.id}
            data-aos="fade-up"
            data-aos-duration="900"
            className="flex flex-col p-4 gap-2 items-start text-start w-fit h-80"
          >
            <h1 className="font-text text-2xl text-white font-semibold">
              {footer.title}
            </h1>
            <a
              href="#"
              className="font-text text-neutral-300 font-normal text-base divide-neutral-200 ease-linear hover:text-[#1c8bd5]"
            >
              {footer.LinkOne}
            </a>
            <a
              href="#"
              className="font-text text-neutral-300 font-normal text-base divide-neutral-200 ease-linear hover:text-[#1c8bd5]"
            >
              {footer.LinkTwo}
            </a>
            <a
              href="#"
              className="font-text text-neutral-300 font-normal text-base divide-neutral-200 ease-linear hover:text-[#1c8bd5]"
            >
              {footer.LinkThree}
            </a>
            <a
              href="#"
              className="font-text text-neutral-300 font-normal text-base divide-neutral-200 ease-linear hover:text-[#1c8bd5]"
            >
              {footer.LinkFour}
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 -mt-20 items-center text-center mx-auto">
        {FinaleText.map((final) => (
          <div key={final.id} className="flex w-fit">
            <h1 className="font-text cursor-pointer text-neutral-400 font-normal text-lg duration-200 ease-out hover:text-white">
              {final.content}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import projects from "../../app/data/project"; // Ścieżka do danych


export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(projects)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // keybord handle

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    // event listening

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      //remove event listening
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className=" my-10 mt-24 mb-20 px-6 xl:px-24 2xl:px-44">
      {/* card */}
      <div className="bg-white p-6 lg:p-16 rounded-xl">
        <div className=" xl:w-4/6 mb-10 xl:mb-20">
          <span className="text-green-500 text-lg font-semibold xl:text-2xl">
            Zobacz, co udało nam się stworzyć!
          </span>
          <h2 className="text-2xl mt-4 xl:mt-8 font-semibold xl:text-4xl xl:leading-snug ">
            Nasze Projekty - Zrealizowane Strony Internetowe i Kampanie SEO
          </h2>
        </div>
        <div className="sm:grid md:grid-cols-2 gap-x-16">
          <div className="w-full mb-10 lg:mb-0">
            <Image
              src={projects[currentIndex].image}
              height={100}
              width={100}
              layout="responsive"
              className="rounded-xl"
              alt={`Grafika podglądowa przedstawiająca stronę internetową dla ${projects[currentIndex].title}`}
            />
          </div>
          {/* text container */}
          <div className="xl:flex xl:flex-col xl:justify-between">
            <div className="">
              <h3 className="text-xl xl:text-2xl mb-4 font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-neutral-900 xl:text-lg font-light mb-6">
                {projects[currentIndex].header}
              </p>
              <Link
                className="inline-flex gap-2 items-center font-semibold group xl:text-lg"
                href={`/portfolio/${projects[currentIndex].id}`}
              >
                Zobacz sam
                <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
                  <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
                </div>
              </Link>
            </div>
            <div className="flex space-x-2 justify-end pr-5 mt-2">
              <button
                onClick={handlePrevious}
                className="flex justify-center items-center bg-gray-300 p-1 hover:bg-gray-200  rounded-full transition duration-300"
              >
                <IoIosArrowBack className="text-3xl text-gray-500 hover:text-gray-600 " />
              </button>
              <button
                onClick={handleNext}
                className="flex justify-center items-center bg-gray-300 p-1   hover:bg-gray-200  rounded-full transition duration-300"
              >
                <IoIosArrowForward className="text-3xl text-gray-500 hover:text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

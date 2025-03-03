"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion"; // Import framer-motion
import projects from "../../app/data/project"; // Ścieżka do danych

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null); // Początkowa pozycja (X)
  const [touchEnd, setTouchEnd] = useState(null); // Końcowa pozycja (X)

  // Minimalna odległość przeciągnięcia (w pikselach), aby uznać za swipe
  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Obsługa zdarzeń dotykowych (dla urządzeń mobilnych)
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0]?.clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Obsługa klawiatury
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Sprawdzenie, czy projects istnieje
  if (!projects || projects.length === 0) {
    return <p>Brak projektów do wyświetlenia.</p>;
  }

  return (
    <section
      id="projekty"
      className="my-10 mt-24 mb-20 md:px-6 xl:px-24 2xl:px-44"
    >
      <div className="bg-white shadow-xl dark:bg-neutral-950 px-6 py-10 lg:p-16 md:rounded-xl">
        <div className="xl:w-4/6 mb-10 xl:mb-20">
          <span className="text-green-500 text-lg font-semibold xl:text-2xl">
            Zobacz, co udało nam się stworzyć!
          </span>
          <h2 className="text-2xl leading-snug mt-4 xl:mt-8 font-semibold xl:text-4xl xl:leading-snug dark:text-neutral-100">
            Nasze Projekty - Zrealizowane Strony Internetowe i Kampanie SEO
          </h2>
        </div>
        <div className="sm:grid md:grid-cols-2 gap-x-16">
          {/* Kontener obrazu z ustalonym stosunkiem proporcji */}
          <div
            className="w-full mb-10 lg:mb-0 aspect-[16/9] relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentIndex].image}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                alt={`Strona dla ${projects[currentIndex].title} – realizacja DomiWeb z Nowego Sącza`}
              />
            </motion.div>
          </div>
          {/* Text container */}
          <div className="flex flex-col justify-between min-h-[380px] md:h-[350px] xl:h-[350px] 2xl:h-[420px]">
            <div>
              <div>
                <h3 className="text-xl xl:text-2xl mb-4 font-semibold dark:text-neutral-100">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-neutral-900 dark:text-neutral-400 xl:text-lg font-light mb-6">
                  {projects[currentIndex].header}
                </p>
              </div>
              <Link
                className="inline-flex gap-2 items-center font-semibold group xl:text-lg dark:text-neutral-100"
                href={`/portfolio/${projects[currentIndex].id}`}
              >
                Zobacz sam
                <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
                  <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white" />
                </div>
              </Link>
            </div>
            <div className="flex space-x-2 justify-end pr-5 mt-2">
              <button
                onClick={handlePrevious}
                aria-label="przewiń do poprzedniego projektu"
                className="flex justify-center items-center bg-gray-300 p-1 hover:bg-gray-200 rounded-full transition duration-300"
              >
                <IoIosArrowBack className="text-3xl text-gray-500 hover:text-gray-600" />
              </button>
              <button
                aria-label="przewiń do kolejnego projektu"
                onClick={handleNext}
                className="flex justify-center items-center bg-gray-300 p-1 hover:bg-gray-200 rounded-full transition duration-300"
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

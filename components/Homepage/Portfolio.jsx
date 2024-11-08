"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
  const projects = [
    {
      image: "/wesolewygibasy.png",
      title: "Żłobki Wesołe Wygibasy.",
      description:
        "Nowoczesny projekt w Next.js dla krakowskiej firmy żłobkowej. Strona stworzona z myślą o łatwej nawigacji i dostępności dla rodziców. Design strony - pastelowe kolory + odpowiednia czcionka.",
      link: "/https://www.wesolewygibasy.pl/",
    },
    {
      image: "/hukimuki.png",
      title: "Pub & Club Huki Muki.",
      description:
        "Dla krakowskiego pubu Huki Muki stworzyliśmy nowoczesną stronę w technologii Next.js, z integracją płatności Stripe i bazą danych PostgreSQL. Strona zawiera również system rezerwacji online.",
      link: "/https://www.hukimuki.pl/",
    },
    {
      image: "/barbarapiekos.png",
      title: "Barbara Piękoś - Artystka.",
      description:
        "Strona internetowa dla Barbary Piękoś - artystki, która prezentuje swoje prace oraz najnowsze wystawy. Projekt oparty na minimalistycznym designie, by podkreślić jej artystyczny styl.",
      link: "/https://www.barbarapiekos.pl/",
    },
    {
      image: "/szlafroki.png",
      title: "Sklep Specjalistyczny SzlafrO.K.",
      description:
        "Dzięki integracji z AWS, strona zapewnia szybkie ładowanie i wysoką dostępność. Użytkownicy mogą łatwo przeglądać ofertę, a responsywny design gwarantuje wygodę na różnych urządzeniach.",
      link: "https://www.szlafroki.krakow.pl/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className=" my-10 mb-20 px-6 xl:px-24 2xl:px-44">
      {/* card */}
      <div className="bg-white p-6 lg:p-16 rounded-xl">
        <div className=" xl:w-4/6 mb-10 xl:mb-20">
          <span className="text-green-500 text-lg font-semibold xl:text-2xl">
            Zobacz, co udało nam się stworzyć!
          </span>
          <h2 className="text-3xl mt-4 xl:mt-8 font-semibold  xl:text-4xl lg:leading-snug ">
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
              alt={`Projekt numer ${currentIndex + 1} wykonany przez Domiweb`}
            />
          </div>
          {/* text container */}
          <div className="xl:flex xl:flex-col xl:justify-between">
            <div className="">
              <h3 className="text-xl xl:text-2xl mb-4 font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-neutral-900 xl:text-xl font-light mb-6">
                {projects[currentIndex].description}
              </p>
              <Link
                className="inline-flex gap-2 items-center font-semibold group xl:text-lg"
                href={projects[currentIndex].link}
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

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
  const projects = [
    {
      image: "/dominik.png",
      title: "Dominik Jojczyk - Portfolio",
      description:
        "Osobiste portfolio Dominika Jojczyka - autora DomiWeb, które przedstawia jego umiejętności i projekty. Zoptymalizowane dla wyszukiwarek, co zwiększa szanse na dotarcie do potencjalnych klientów.",
      link: "/https://dominikjojczyk.pl/",
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
    <section className="my-10 mb-20">
      <div className="px-6">
        <span className="text-green-500 font-normal">
          Zobacz, co udało nam się stworzyć!
        </span>
        <h2 className="text-2xl mt-3 mb-10 font-semibold ">
          Nasze Projekty - Zrealizowane Strony Internetowe i Kampanie SEO
        </h2>
      </div>
      <div className="w-full">
        <Image
          src={projects[currentIndex].image}
          height={100}
          width={100}
          layout="responsive"
          className="shadow-xl"
          alt={`Projekt numer ${currentIndex + 1} wykonany przez Domiweb`}
        />
      </div>
      <div className="px-6 mt-8">
        <h3 className="text-xl mb-4 font-semibold">
          {projects[currentIndex].title}
        </h3>
        <p className="text-neutral-900 font-light mb-6">
          {projects[currentIndex].description}
        </p>
        <Link
          className="inline-flex gap-2 items-center font-semibold group"
          href={projects[currentIndex].link}
        >
          Przejdź do witryny
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
    </section>
  );
}

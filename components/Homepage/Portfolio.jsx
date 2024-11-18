"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
  const projects = [
    {
      image: "/portfolio/wesolewygibasy.png",
      title: "Żłobki Wesołe Wygibasy.",
      description:
        "Strona internetowa dla krakowskiej sieci żłobków, zaprojektowana z myślą o rodzicach. Jasny, przyjazny design, intuicyjna nawigacja i pastelowa kolorystyka tworzą komfortowe doświadczenie użytkownika.",
      link: "https://www.wesolewygibasy.pl/",
    },
    {
      image: "/portfolio/hukimuki.png",
      title: "Pub & Club Huki Muki.",
      description:
        "Strona internetowa dla jednego z najpopularniejszych pubów w Krakowie. Zawiera system rezerwacji online, integrację płatności oraz dynamiczny design, który oddaje klimat miejsca.",
      link: "https://www.hukimuki.pl/",
    },
    {
      image: "/portfolio/barbarapiekos.png",
      title: "Barbara Piękoś - Artystka.",
      description:
        "Strona, która eksponuje sztukę. Elegancki, minimalistyczny design podkreśla unikalny charakter twórczości Barbary, zapewniając jednocześnie czytelność i łatwą nawigację.",
      link: "https://www.barbarapiekos.pl/",
    },
    {
      image: "/portfolio/szlafroki.png",
      title: "Sklep Specjalistyczny SzlafrO.K.",
      description:
        "Dzięki integracji z AWS, strona zapewnia szybkie ładowanie i wysoką dostępność. Użytkownicy mogą łatwo przeglądać ofertę, a responsywny design gwarantuje wygodę na różnych urządzeniach.",
      link: "https://www.szlafroki.krakow.pl/",
    },
    // {
    //   image: "/portfolio/ptaki.png",
    //   title: "Stowarzyszenie hodowców ptaków",
    //   description:
    //     "Dynamiczna strona internetowa z panelem administracyjnym stworzona w PHP i MySQL, która umożliwia łatwe zarządzanie treścią i użytkownikami, a także szybki dostęp do aktualizacji.",
    //   link: "https://www.nshkipe.com.pl/",
    // },
    {
      image: "/portfolio/olmart.png",
      title: "Olmart - Zakład Zduński",
      description:
        "Nowoczesna strona prezentująca usługi zduńskie. Prosty układ i optymalizacja pod kątem SEO pomagają w dotarciu do klientów poszukujących rzetelnych specjalistów.",
      link: "https://www.olmart-ns.pl/",
    },
    {
      image: "/portfolio/optyk.png",
      title: "Optyk - Andrzej Świerczek 1980",
      description:
        "Strona lokalnego optyka z ponad 40-letnią tradycją. Dopracowany projekt wspiera pozycjonowanie w wyszukiwarkach, zwiększając zasięg firmy w regionie.",
      link: "https://www.optyk-andrzej.pl/",
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
    <section className=" my-10 mb-20 px-6 xl:px-24 2xl:px-44">
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
              alt={`Projekt numer ${currentIndex + 1} wykonany przez Domiweb`}
            />
          </div>
          {/* text container */}
          <div className="xl:flex xl:flex-col xl:justify-between">
            <div className="">
              <h3 className="text-xl xl:text-2xl mb-4 font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-neutral-900 xl:text-lg font-light mb-6">
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

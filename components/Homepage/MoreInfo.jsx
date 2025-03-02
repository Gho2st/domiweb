"use client";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSpellCheck, FaHandsHelping } from "react-icons/fa";
import {
  MdAirlineStops,
  MdOutlinePriceCheck,
  MdOutlineHighQuality,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { motion } from "framer-motion";

export default function MoreInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null); // Pozycja startowa dotyku
  const touchEndX = useRef(null); // Pozycja końcowa dotyku

  // Dane kart
  const cards = [
    {
      icon: <FaSpellCheck className="text-5xl mb-4 text-green-500" />,
      title: "Kompleksowe usługi od A do Z",
      description:
        "Zajmujemy się wszystkim – od domeny, przez design, po kodowanie i wdrożenie.",
    },
    {
      icon: <FaHandsHelping className="text-5xl mb-4 text-green-500" />,
      title: "Indywidualne podejście",
      description:
        "Każdy projekt tworzymy od zera – idealnie dopasowany do Twoich potrzeb.",
    },
    {
      icon: <MdAirlineStops className="text-5xl mb-4 text-green-500" />,
      title: "Wysokie pozycje w Google",
      description:
        "Dzięki SEO Twoja strona będzie widoczna tam, gdzie szukają Cię klienci.",
    },
    {
      icon: <MdOutlinePriceCheck className="text-5xl mb-4 text-green-500" />,
      title: "Przystępne ceny",
      description:
        "Profesjonalne rozwiązania w cenach, które Cię nie zaskoczą.",
    },
    {
      icon: <MdOutlineHighQuality className="text-5xl mb-4 text-green-500" />,
      title: "Nowoczesne technologie",
      description:
        "Tworzymy szybkie i bezpieczne strony z użyciem najnowszych trendów.",
    },
    {
      icon: <MdOutlineSupportAgent className="text-5xl mb-4 text-green-500" />,
      title: "Stałe wsparcie",
      description: "Jesteśmy z Tobą także po starcie – zawsze gotowi pomóc.",
    },
  ];

  // Funkcja przewijania karuzeli
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = 320; // Szerokość karty (w-80 = 320px)
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Obsługa kliknięcia "dalej"
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  // Obsługa kliknięcia "wstecz"
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  // Obsługa swipe (przeciągania)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // Minimalna odległość do uznania swipe

    if (difference > swipeThreshold) {
      // Swipe w lewo - następna karta
      handleNext();
    } else if (difference < -swipeThreshold) {
      // Swipe w prawo - poprzednia karta
      handlePrevious();
    }

    // Resetowanie pozycji
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="p-6 xl:px-24 2xl:px-44 my-16 xl:my-20 2xl:my-32">
      <h2 className="capitalize leading-snug mb-14 xl:mb-20 text-2xl xl:text-4xl xl:w-3/5 font-semibold xl:leading-snug dark:text-neutral-200">
        Dlaczego warto wybrać DomiWeb?
      </h2>
      <div className="relative">
        {/* Kontener karuzeli */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scrollbar-hide gap-6 snap-x snap-mandatory"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.35, // Wyróżnienie aktywnej karty
                x: 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`flex-none w-80 rounded-xl  border-green-500 border-4 border-opacity-45 p-6 dark:bg-neutral-950 snap-center ${
                index === currentIndex ? "scale-105" : "scale-100"
              }`}
            >
              {card.icon}
              <h3 className="text-lg xl:text-xl font-medium dark:text-neutral-200">
                {card.title}
              </h3>
              <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex space-x-2 justify-end pr-5 mt-10">
          <button
            onClick={handlePrevious}
            className="flex justify-center items-center bg-gray-300 p-1 hover:bg-gray-200 rounded-full transition duration-300"
          >
            <IoIosArrowBack className="text-3xl text-gray-500 hover:text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="flex justify-center items-center bg-gray-300 p-1 hover:bg-gray-200 rounded-full transition duration-300"
          >
            <IoIosArrowForward className="text-3xl text-gray-500 hover:text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

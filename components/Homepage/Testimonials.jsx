"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className="fill-yellow-400 text-xl xl:text-3xl" />
  ));

  const testimonials = [
    {
      name: "Milena Głowacka",
      review:
        "Jestem bardzo zadowolona z całokształtu wykonanego projektu. Pan Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę niezbędną do wykonywania swojej pracy :)",
    },
    {
      name: "Barbara Piękoś",
      review:
        "Daję pięć gwiazdek za świetny projekt ale również za współpracę. Jeśli potrzebujesz profesjonalnie wykonanej strony polecam Pana Dominika",
    },
    {
      name: "Patryk Jędrzejek",
      review:
        "Genialna współpraca na najwyższym poziomie. DomiWeb to wysoki profesjonalizm, zaawansowane technologie przez co moja strona jest bezkonkurencyjna do innych w tej niszy. Do tego świetna komunikacja na każdym poziomie. Polecam!",
    },
  ];

  // Sprawdzanie rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint w Tailwind
    };

    handleResize(); // Sprawdzenie przy pierwszym renderze
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Funkcja przewijania karuzeli (tylko na mobilnych)
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = 320; // Szerokość karty
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (difference > swipeThreshold) {
      handleNext();
    } else if (difference < -swipeThreshold) {
      handlePrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleDragEnd = (event, info) => {
    const dragThreshold = 50;
    if (info.offset.x < -dragThreshold) {
      handleNext();
    } else if (info.offset.x > dragThreshold) {
      handlePrevious();
    }
  };

  // Komponent pojedynczej opinii
  const TestimonialCard = ({ testimonial, index }) => (
    <div
      className={`flex-1 min-h-[300px] md:min-h-[350px] xl:min-h-[400px] ${
        isMobile ? "flex-none w-80 snap-center" : ""
      }`}
    >
      <div className="p-6 2xl:p-10 shadow-xl bg-white dark:bg-neutral-950 rounded-xl h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-6">
            <div className="w-9 xl:w-14">
              <Image
                src="/google.png"
                alt="Google logo"
                width={10}
                height={10}
                layout="responsive"
              />
            </div>
            <div className="flex gap-1">{stars}</div>
          </div>
          <p className="my-8 2xl:text-lg text-neutral-900 dark:text-neutral-400 font-light">
            {testimonial.review}
          </p>
        </div>
        <span className="font-semibold xl:text-lg dark:text-neutral-200">
          {testimonial.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="xl:px-24 2xl:px-44 my-32">
      <div className="xl:w-3/4 px-6">
        <h2 className="text-3xl leading-snug xl:text-4xl xl:leading-snug font-semibold my-6 dark:text-neutral-200">
          Opinie Klientów o Naszych Usługach Tworzenia Stron i SEO
        </h2>
        <p className="text-neutral-900 dark:text-neutral-300 xl:text-xl font-light">
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
      </div>

      {isMobile ? (
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide snap-x snap-mandatory my-10 mt-20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            dragElastic={0.2}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.35,
                  x: 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`flex-none w-80 snap-center ${
                  index === currentIndex ? "scale-105" : "scale-100"
                }`}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:flex-row my-10 mt-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
}

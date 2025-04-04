"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

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
    {
      name: "szabaga",
      review:
        "Szczerze polecam, pełen profesjonalizm!",
    },
  ];

  // Podwajamy tablicę opinii, aby stworzyć efekt ciągłej pętli
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Sprawdzanie rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint w Tailwind
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Komponent pojedynczej opinii
  const TestimonialCard = ({ testimonial, index }) => (
    <div
      className={`flex-1 min-h-[300px] md:min-h-[350px] xl:min-h-[400px] ${
        isMobile ? "flex-none w-80" : ""
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
    <section className="my-32">
      <div className="px-6 xl:px-24 2xl:px-44 xl:w-3/4">
        <h2 className="text-3xl leading-snug xl:text-4xl xl:leading-snug font-semibold my-6 dark:text-neutral-200">
          Opinie Klientów o Naszych Usługach Tworzenia Stron i SEO
        </h2>
        <p className="text-neutral-900 dark:text-neutral-400 xl:text-lg 2xl:text-xl font-light">
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
      </div>

      <div className="relative overflow-hidden my-16 mt-20 xl:mt-24">
        <motion.div
          key={isMobile ? "mobile" : "desktop"} // Wymuszamy ponowne renderowanie przy zmianie isMobile
          ref={carouselRef}
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // Przesuwamy od 0% do -50%, aby stworzyć efekt pętli
          }}
          transition={{
            x: {
              repeat: Infinity, // Nieskończona pętla
              repeatType: "loop",
              duration: isMobile ? 5 : 20, // 5 sekund na mobile, 20 sekund na desktopie
              ease: "linear", // Liniowy ruch
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-none w-80 md:w-1/3 ${isMobile ? "" : "flex-1"}`}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

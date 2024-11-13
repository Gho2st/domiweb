"use client";
import { motion, useInView } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { useRef } from "react";

export default function Services() {
  // Użycie ref oraz useInView dla każdej karty
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true });
  return (
    <section className="pb-10 mt-14 xl:px-44">
      {/* Card 1 */}
      <motion.article
        ref={ref1}
        className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-xl bg-white"
        initial={{ opacity: 0, x: -200 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }} // Dłuższy czas trwania i lekkie opóźnienie
      >
        <div className="bg-green-500 rounded-lg inline-block p-3">
          <FaCode className="text-4xl text-green-100" />
        </div>
        <h2 className="text-xl 2xl:text-3xl my-5 font-semibold">
          Tworzenie Responsywnych Stron Internetowych
        </h2>
        <p className="text-neutral-900 font-light 2xl:text-lg">
          Oferujemy nowoczesne strony internetowe, które rozwijamy wspólnie z
          klientami od pierwszego kontaktu aż do wdrożenia...
        </p>
        <span className="absolute top-[50%] right-[-30px]">
          <FaArrowTurnDown className="text-5xl text-green-500" />
        </span>
      </motion.article>

      {/* Card 2 */}
      <motion.article
        ref={ref2}
        className="relative w-5/6 xl:w-3/5 ml-auto p-6 xl:p-10 my-14 xl:my-24 rounded-l-lg bg-white"
        initial={{ opacity: 0, x: 200 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }} // Większe opóźnienie dla drugiej karty
      >
        <div className="bg-green-500 rounded-lg inline-block p-3">
          <FaSearch className="text-4xl text-green-100" />
        </div>
        <h2 className="text-xl 2xl:text-3xl my-5 font-semibold 2xl:leading-snug">
          Pozycjonowanie Stron Internetowych (SEO) – Skuteczna Optymalizacja i
          Wzrost Widoczności
        </h2>
        <p className="text-neutral-900 font-light 2xl:text-lg">
          Naszym celem jest, aby Twoja strona zajmowała czołowe miejsca w
          wynikach wyszukiwania...
        </p>
        <span className="absolute top-[50%] left-[-30px]">
          <FaArrowTurnDown className="text-5xl text-green-500 transform scale-x-[-1]" />
        </span>
      </motion.article>

      {/* Card 3 */}
      <motion.article
        ref={ref3}
        className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-lg bg-white"
        initial={{ opacity: 0, x: -200 }}
        animate={inView3 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.6 }} // Jeszcze większe opóźnienie dla trzeciej karty
      >
        <div className="bg-green-500 rounded-lg inline-block p-3">
          <FaPeopleCarry className="text-4xl text-green-100" />
        </div>
        <h2 className="text-xl 2xl:text-3xl my-5 font-semibold">
          Wsparcie Techniczne Stron Internetowych i Aktualizacje
        </h2>
        <p className="text-neutral-900 font-light 2xl:text-lg">
          Zapewniamy wsparcie techniczne na każdym etapie działania Twojej
          strony...
        </p>
      </motion.article>
    </section>
  );
}

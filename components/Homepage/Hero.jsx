"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="">
      <div className="relative px-6 min-h-[100vh] lg:px-24 2xl:px-44">
        <motion.h1
          className="mt-10 xl:mt-14 text-sm xl:text-xl text-gray-500 dark:text-neutral-400 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Strony Internetowe i Aplikacje Mobilne w Nowym Sączu – DomiWeb
        </motion.h1>
        <div className="lg:w-4/5 xl:w-9/12">
          <motion.h2
            className="mt-6 leading-snug font-semibold text-4xl capitalize lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-snug dark:text-neutral-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nowoczesne rozwiązania z SEO – przyciągnij więcej klientów!
          </motion.h2>

          <motion.p
            className="my-7 xl:my-10 text-neutral-900 dark:text-neutral-400 text-base font-light xl:text-xl 2xl:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            W Nowym Sączu tworzymy piękne, responsywne witryny i aplikacje
            mobilne – zoptymalizowane pod SEO. Z nami Twoja firma będzie
            widoczna w Google i gotowa na sukces – napisz do nas!
          </motion.p>
        </div>
        <div className="ml-6 pt-14 lg:ml-44 lg:pt-24">
          <Link aria-label="Przejdź do sekcji projektów" href="/#projekty">
            <motion.div
              className="bg-green-500 rounded-full p-2 inline-flex items-center justify-center cursor-pointer"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaLongArrowAltDown className="text-4xl xl:text-5xl text-white shadow-2xl" />
            </motion.div>
          </Link>
        </div>

        {/* Obrazek jako tło pod tekstem */}
        <motion.div
          className="absolute w-3/4 -bottom-16 -right-16 -z-10 md:w-3/5 lg:w-2/5 xl:w-2/6 lg:right-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src="/blok.png"
            alt="Dekoracyjny obrazek przedstawiający budowę strony lub aplikacji z kartonów"
            layout="responsive"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
    </section>
  );
}

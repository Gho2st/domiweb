import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="">
      <div className="relative px-6 min-h-[100vh] lg:px-24 2xl:px-44  ">
        <h1 className="mt-14 text-sm xl:text-xl text-gray-500 font-semibold">
          Tworzenie Stron Internetowych i Aplikacji Mobilnych z SEO
        </h1>
        <div className="lg:w-4/5 xl:w-9/12">
          <h2 className="mt-6 font-semibold text-4xl capitalize lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-snug ">
            Nowoczesne Strony i Aplikacje Mobilne – Wysokiej Jakości User
            Experience
          </h2>

          <p className="my-7 xl:my-10 text-neutral-900 text-base font-light xl:text-xl 2xl:text-2xl   ">
            Tworzymy nowoczesne, responsywne strony internetowe i aplikacje
            mobilne, które przyciągają użytkowników oraz są zoptymalizowane pod
            kątem SEO, zapewniając widoczność w wyszukiwarkach
          </p>
        </div>
        <div className="ml-6 pt-14 animate-bounce lg:ml-44 lg:pt-24">
          <div className="bg-green-500 rounded-full p-2 inline-flex items-center justify-center cursor-pointer">
            <FaLongArrowAltDown className="text-4xl xl:text-5xl text-white shadow-2xl " />
          </div>
        </div>

        {/* Obrazek jako tło pod tekstem */}
        <div className="absolute w-3/4 -bottom-16 -right-16 -z-10 md:w-3/5 lg:w-2/5 xl:w-2/6 lg:right-24   ">
          <Image
            src="/blok.png"
            alt="Dekoracyjny obrazek"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

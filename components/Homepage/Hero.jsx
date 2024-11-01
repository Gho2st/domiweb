import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="relative px-6 min-h-[86vh] ">
        <h1 className="mt-14 text-sm text-gray-500 font-semibold">
          Tworzenie Stron Internetowych i Aplikacji Mobilnych z SEO
        </h1>
        <h2 className="mx-auto mt-6 font-semibold text-4xl rounded-xl capitalize  ">
          Nowoczesne Strony i Aplikacje Mobilne – Wysokiej Jakości User
          Experience
        </h2>

        <p className="my-10 text-neutral-900 text-lg font-light ">
          Tworzymy nowoczesne, responsywne strony internetowe i aplikacje
          mobilne, które przyciągają użytkowników oraz są zoptymalizowane pod
          kątem SEO, zapewniając widoczność w wyszukiwarkach
        </p>

        <div className="ml-6 pt-14 animate-bounce">
          <div className="bg-green-500 rounded-full p-2 inline-flex items-center justify-center cursor-pointer">
            <FaLongArrowAltDown className="text-4xl text-white shadow-2xl " />
          </div>
        </div>

        {/* Obrazek jako tło pod tekstem */}
        <div className="absolute w-3/4 -bottom-8 -right-16 -z-10 md:w-3/5   ">
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

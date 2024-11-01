import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section>
      <div className="relative px-6 min-h-[86vh] ">
        <p className="mt-14 text-sm text-gray-500 font-semibold">
          Twój Partner w Nowoczesnych Technologiach IT
        </p>
        <h1 className="mx-auto mt-6 font-semibold text-4xl rounded-xl capitalize  ">
          Tworzenie Stron Internetowych i Aplikacji Mobilnych z SEO
        </h1>

        <p className="my-10 text-neutral-900 text-lg font-light ">
          Projektujemy nowoczesne, responsywne strony internetowe i aplikacje
          mobilne, które przyciągają użytkowników i są zoptymalizowane pod kątem
          wyszukiwarek.
        </p>

        <div className="ml-6 pt-14 animate-bounce">
          <div className="bg-green-500 rounded-full p-2 inline-flex items-center justify-center cursor-pointer">
            <FaLongArrowAltDown className="text-4xl text-white shadow-2xl " />
          </div>
        </div>

        {/* Obrazek jako tło pod tekstem */}
        <div className="absolute w-3/4 -bottom-8 -right-16 -z-10  ">
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

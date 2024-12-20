import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Audit() {
  return (
    <>
      <section className="p-6 mb-10 xl:px-24 2xl:px-44 2xl:min-height-[100vh] ">
        <div className="xl:w-4/5">
          <h2 className="text-2xl xl:text-4xl mt-10 font-semibold xl:leading-snug">
            Bezpłatny Audyt SEO Twojej Strony - Sprawdź, Jak Poprawić Widoczność
          </h2>
          <p className="text-neutral-900 xl:text-xl mt-6 mb-10 font-light">
            Skorzystaj z darmowego audytu, by odkryć potencjał swojej strony i
            przyciągnąć więcej klientów. Dowiedz się, jak poprawić jej
            widoczność i osiągnąć lepsze wyniki w wyszukiwarkach.
          </p>
        </div>
        <div className="xl:flex xl:justify-center xl:gap-x-24 xl:mt-20 ">
          <div className="mb-10 xl:w-1/3">
            <Image
              src={"/gif.gif"}
              alt="gif przedstawiajacy audyt seo"
              width={100}
              height={100}
              className="rounded-lg"
              layout="responsive"
            />
          </div>
          <div className="flex justify-center flex-col">
            <ul className="font-light xl:text-lg text-neutral-900">
              <li className="flex justify-center xl:justify-normal items-center gap-4 mb-5">
                <div className="bg-green-500 text-white text-lg w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full flex items-center justify-center">
                  1
                </div>
                Analiza SEO – zidentyfikowanie słów kluczowych i optymalizacja
                treści
              </li>
              <li className="flex justify-center xl:justify-normal items-center gap-4 mb-5">
                <div className="bg-green-500 text-white text-lg w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full flex items-center justify-center">
                  2
                </div>
                Ocena wydajności – sprawdzenie szybkości ładowania strony
              </li>
              <li className="flex justify-center xl:justify-normal items-center gap-4 mb-5">
                <div className="bg-green-500 text-white text-lg w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full flex items-center justify-center">
                  3
                </div>
                Audyt UX/UI – poprawa użyteczności i intuicyjności strony
              </li>
              <li className="flex justify-center xl:justify-normal items-center gap-4 mb-5">
                <div className="bg-green-500 text-white text-lg w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full flex items-center justify-center">
                  4
                </div>
                Bezpieczeństwo – identyfikacja i eliminacja potencjalnych
                zagrożeń
              </li>
              <li className="flex justify-center xl:justify-normal items-center gap-4 mb-8">
                <div className="bg-green-500 text-white text-lg w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full flex items-center justify-center">
                  5
                </div>
                Rekomendacje techniczne – optymalizacja kodu i struktury strony
              </li>
            </ul>
            <Link
              className="inline-flex gap-2 items-center font-semibold group"
              href="/pozycjonowanie"
            >
              Czytaj więcej
              <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
                <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Audit() {
  return (
    <>
      <section className="p-6 mb-10">
        <h2 className="text-2xl mt-10 font-semibold">
          Bezpłatny Audyt SEO Twojej Strony – Sprawdź, Jak Poprawić Widoczność
        </h2>
        <p className="text-neutral-900 mt-6 mb-10 font-light">
          Skorzystaj z darmowego audytu, by odkryć potencjał swojej strony i
          przyciągnąć więcej klientów. Dowiedz się, jak poprawić jej widoczność
          i osiągnąć lepsze wyniki w wyszukiwarkach.
        </p>
        <div className="mb-10">
          <Image
            src={"/audit.jpg"}
            width={100}
            height={100}
            className="rounded-lg"
            layout="responsive"
          />
        </div>

        <ul className="font-light text-neutral-900">
          <li className="flex justify-center items-center gap-4 mb-5 ">
            <FaCheck className="text-3xl text-green-500" />
            Analiza SEO – zidentyfikowanie słów kluczowych i optymalizacja
            treści
          </li>
          <li className="flex justify-center items-center gap-4 mb-5">
            <FaCheck className="text-3xl text-green-500" />
            Ocena wydajności – sprawdzenie szybkości ładowania strony
          </li>
          <li className="flex justify-center items-center gap-4 mb-5">
            <FaCheck className="text-3xl text-green-500" />
            Audyt UX/UI – poprawa użyteczności i intuicyjności strony
          </li>
          <li className="flex justify-center items-center gap-4 mb-5">
            <FaCheck className="text-3xl text-green-500" />
            Bezpieczeństwo – identyfikacja i eliminacja potencjalnych zagrożeń
          </li>
          <li className="flex justify-center items-center gap-4 mb-8">
            <FaCheck className="text-3xl text-green-500" />
            Rekomendacje techniczne – optymalizacja kodu i struktury strony
          </li>
        </ul>
        <Link
          className="inline-flex gap-2 items-center font-semibold group"
          href="#"
        >
          Przejdź do witryny
          <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
            <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white" />
          </div>
        </Link>
      </section>
    </>
  );
}

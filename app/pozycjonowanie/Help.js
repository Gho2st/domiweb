import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Help() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 py-10 mb-20">
      <h2 className="text-2xl xl:text-4xl mt-10 font-semibold xl:leading-snug dark:text-neutral-200">
        Jak możemy Ci pomóc?{" "}
      </h2>
      <p className="my-10 text-neutral-900 dark:text-neutral-400 text-lg font-light xl:text-xl">
        W DomiWeb wiemy, że skuteczne pozycjonowanie to nie tylko wysokie
        pozycje w Google, ale przedewszystkim realne korzyści dla Twojego
        biznesu. Dlatego podchodzimy do SEO kompleksowo, dostosowując strategię
        dla Twoich celów i branży.
      </p>
      <div className="grid xl:text-lg md:grid-cols-2 gap-6 md:gap-12 my-12 xl:my-20 text-neutral-900 dark:text-neutral-300">
        <div className="p-6 leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Indywidualne podejście – analizujemy Twoją stronę i konkurencję, aby
          opracować skuteczną strategię.
        </div>
        <div className="p-6 leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Nowoczesne techniki SEO – stosujemy sprawdzone metody, które przynoszą
          długoterminowe efekty.
        </div>
        <div className="p-6 leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Transparentność działań – regularnie raportujemy postępy i efekty
          naszej pracy.
        </div>
        <div className="p-6 leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Stałe wsparcie i optymalizację – SEO to proces, dlatego nieustannie
          monitorujemy i ulepszamy Twoją stronę.
        </div>
      </div>
      <p className="my-10 text-neutral-900 dark:text-neutral-400 text-lg font-light xl:text-xl">
        Nie czekaj, aż konkurencja Cię wyprzedzi. Skontaktuj się z nami już dziś
        i sprawdź, jak możemy pomóc Twojej stronie osiągnąć lepsze wyniki w
        Google.
      </p>
      <Link
        className="inline-flex gap-2 items-center font-semibold group xl:text-lg dark:text-neutral-300"
        href={"/kontakt"}
      >
        Umów się na bezpłatną konsultację i daj się znaleźć w sieci!
        <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
          <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
        </div>
      </Link>
    </section>
  );
}

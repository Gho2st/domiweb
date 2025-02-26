import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Help() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 py-10 mb-20">
      <h2 className="text-2xl xl:text-4xl mt-10 font-semibold xl:leading-snug dark:text-neutral-200">
        Jak możemy Ci pomóc?
      </h2>
      <p className="my-10  text-neutral-900 dark:text-neutral-400 text-lg font-light xl:text-xl">
        W DomiWeb nie rzucamy obietnic bez pokrycia – dajemy Ci konkretne
        efekty. Pozycjonowanie to dla nas coś więcej niż wysokie miejsca w
        Google – to realne wsparcie dla Twojego biznesu. Jak to robimy?
      </p>
      <div className="grid xl:text-lg md:grid-cols-2 gap-6 md:gap-12 my-12 xl:my-20 text-neutral-900 dark:text-neutral-300">
        <div className="p-6 shadow-2xl leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Słuchamy Ciebie – Zaczynamy od rozmowy, analizujemy Twoją stronę i
          rynek, by strategia pasowała jak ulał do Twoich potrzeb.
        </div>
        <div className="p-6 shadow-2xl leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Działamy z głową – Używamy nowoczesnych metod SEO, które działają dziś
          i będą działać jutro.
        </div>
        <div className="p-6 shadow-2xl leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Jesteśmy przejrzyści – Pokazujemy, co robimy i jakie to przynosi
          rezultaty – żadnych tajemnic!
        </div>
        <div className="p-6 shadow-2xl leading-loose border-green-500 border-2 rounded-xl border-opacity-55 dark:bg-neutral-950">
          Wspieramy na każdym kroku – SEO to maraton, nie sprint. Monitorujemy,
          poprawiamy i dbamy o Twój sukces non-stop.
        </div>
      </div>
      <p className="my-10 text-neutral-900 dark:text-neutral-400 text-lg font-light xl:text-xl">
        Nie musisz znać się na SEO – od tego masz nas. Ty mówisz, czego
        potrzebujesz, a my sprawiamy, że to się dzieje.
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

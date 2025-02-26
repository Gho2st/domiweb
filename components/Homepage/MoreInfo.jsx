import { FaSpellCheck } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdAirlineStops } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { MdOutlineHighQuality } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function MoreInfo() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 xl:my-20 2xl:my-32 ">
      <h2 className="capitalize mb-14 xl:mb-20 text-2xl xl:text-4xl xl:w-3/5 font-semibold xl:leading-snug dark:text-neutral-200">
        Dlaczego warto wybrać DomiWeb do stworzenia swojej strony lub aplikacji?
      </h2>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 2xl:grid-cols-3 dark:text-neutral-300 ">
        {/* card 1 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <FaSpellCheck className="text-5xl mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Kompleksowe usługi od A do Z
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Zajmujemy się wszystkim, czego potrzebujesz do stworzenia i
            uruchomienia strony internetowej lub aplikacji — od zakupu domeny i
            hostingu, przez projektowanie graficzne, aż po kodowanie i
            wdrożenie. W DomiWeb otrzymujesz pełne wsparcie na każdym etapie
            tworzenia.
          </p>
        </div>
        {/* card 2 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <FaHandsHelping className="text-5xl  mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Indywidualne podejście i unikalne projekty
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Nie korzystamy z gotowych szablonów. Każdy projekt tworzymy
            indywidualnie, dostosowując go do potrzeb klienta i specyfiki
            branży, aby Twoja strona wyróżniała się na tle konkurencji i
            odzwierciedlała charakter Twojej marki.
          </p>
        </div>
        {/* card 3 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <MdAirlineStops className="text-5xl mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Pozycjonowanie i widoczność w Google
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Dbamy o to, aby Twoja strona osiągała wysokie pozycje w
            wyszukiwarkach. W DomiWeb stosujemy skuteczne techniki SEO, aby
            pomóc Ci zdobywać nowych klientów i zwiększać widoczność Twojej
            strony w Google.
          </p>
        </div>
        {/* card 4 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <MdOutlinePriceCheck className="text-5xl mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Przystępne ceny i profesjonalizm
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Oferujemy konkurencyjne ceny bez kompromisów w jakości. Naszym celem
            jest dostarczenie profesjonalnych rozwiązań, które są dostępne dla
            każdego, niezależnie od budżetu.
          </p>
        </div>

        {/* card 5 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <MdOutlineHighQuality className="text-5xl mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Nowoczesne technologie
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Korzystamy z nowoczesnych technologii, aby zapewnić naszym klientom
            szybkie, bezpieczne i responsywne strony internetowe. W DomiWeb
            zawsze jesteśmy na bieżąco z trendami, co pozwala nam tworzyć
            rozwiązania o najwyższej jakości.
          </p>
        </div>
        {/* card 6 */}
        <div className="rounded-xl shadow-2xl border-green-500 border-2 border-opacity-45 p-6 dark:bg-neutral-950">
          <MdOutlineSupportAgent className="text-5xl mb-4 text-green-500" />

          <h3 className="text-lg xl:text-xl font-medium">
            Stałe wsparcie i opieka techniczna
          </h3>
          <p className="mt-4 text-neutral-900 dark:text-neutral-400 font-light">
            Po zakończeniu projektu nadal jesteśmy do Twojej dyspozycji.
            Oferujemy stałe wsparcie techniczne i opiekę nad stroną, abyś mógł
            skupić się na rozwijaniu swojej działalności, a nie na problemach
            technicznych.
          </p>
        </div>
      </div>
    </section>
  );
}

import { FaCode } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Services() {
  return (
    <section className=" pb-10 mt-14 xl:px-44 ">
      {/* Card 1 */}
      <article className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-xl bg-white  ">
        <div className="bg-green-500  rounded-lg inline-block p-3">
          <FaCode className="text-4xl text-green-100 " />
        </div>
        <h2 className="text-xl xl:text-2xl my-5 font-semibold">
          Tworzenie Responsywnych Stron Internetowych
        </h2>
        <p className="text-neutral-900 font-light">
          Oferujemy nowoczesne strony internetowe, które rozwijamy wspólnie z
          klientami od pierwszego kontaktu aż do wdrożenia. Każda nasza strona
          jest unikalna, stworzona tak, by wyróżniać się w sieci i spełniać
          oczekiwania zarówno użytkowników, jak i wyszukiwarek.
        </p>
        <span className="absolute top-[50%] right-[-30px]">
          <FaArrowTurnDown className="text-5xl text-green-500" />
        </span>
      </article>

      {/* card 2 */}
      <article className="relative w-5/6 xl:w-3/5 ml-auto p-6 my-14 xl:my-24 rounded-l-lg  bg-white ">
        <div className="bg-green-500 rounded-lg inline-block p-3">
          <FaCode className="text-4xl text-green-100 " />
        </div>
        <h2 className="text-xl xl:text-2xl my-5 font-semibold">
          Pozycjonowanie Stron Internetowych (SEO) – Skuteczna Optymalizacja i
          Wzrost Widoczności
        </h2>
        <p className="text-neutral-900 font-light">
          Naszym celem jest, aby Twoja strona zajmowała czołowe miejsca w
          wynikach wyszukiwania. Oferujemy pełne wsparcie w zakresie SEO,
          pomagając Ci osiągnąć sukces i wyprzedzić konkurencję w Google. Dzięki
          naszym działaniom Twoja strona nie tylko będzie widoczna, ale także
          zyska większy ruch i lepsze wyniki biznesowe.
        </p>
        <span className="absolute top-[50%] left-[-30px]">
          <FaArrowTurnDown className="text-5xl text-green-500 transfrom scale-x-[-1]" />
        </span>
      </article>

      {/* Card 3 */}
      <article className="relative w-5/6 xl:w-3/5 p-6 rounded-r-lg  bg-white ">
        <div className="bg-green-500  rounded-lg inline-block p-3">
          <FaCode className="text-4xl text-green-100 " />
        </div>
        <h2 className="text-xl xl:text-2xl my-5 font-semibold">
          Wsparcie Techniczne Stron Internetowych i Aktualizacje
        </h2>
        <p className="text-neutral-900 font-light">
          Zapewniamy wsparcie techniczne na każdym etapie działania Twojej
          strony. Niezależnie od tego, czy jesteś naszym klientem, czy dopiero
          zaczynasz przygodę z naszą firmą, możesz liczyć na naszą pomoc i
          zaangażowanie. Oferujemy aktualizacje, zabezpieczenia i konserwację
          stron, dbając o to, by Twoja witryna była zawsze w doskonałej formie.
        </p>
      </article>
    </section>
  );
}

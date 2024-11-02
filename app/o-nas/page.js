import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import People from "@/components/UI/People";
import Experience from "@/components/UI/Experience";
import Cta from "@/components/Homepage/Cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="overflow-hidden">
          <div className="relative px-6 min-h-[86vh] ">
            <h1 className="mt-14 text-sm text-gray-500 font-semibold">O Nas</h1>
            <h2 className="mx-auto mt-6 font-semibold text-4xl rounded-xl capitalize  ">
              Jesteśmy ludźmi którym zależy na Twoim Sukcesie
            </h2>

            <p className="my-10  text-neutral-900 text-lg font-light ">
              Przygoda zaczęła się od dziecięcej pasji i wielkich ambicji
              zrodzonych przy starym laptopie. Z biegiem lat, dzięki
              zaangażowaniu i ciężkiej pracy, udało się przekształcić te
              marzenia w rzeczywistość.
            </p>

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

        <Experience />

        <section className=" pb-2 mt-14 ">
          {/* Card 1 */}
          <article className="relative w-5/6 p-6 rounded-r-xl bg-white">
            <div className="bg-green-500 text-white rounded-lg inline-block p-2 px-5">
              <div className="text-4xl">1</div>
            </div>
            <h2 className="text-xl my-5 font-semibold">Pierwszy Kontakt</h2>
            <p className="text-neutral-900 font-light">
              Rozpocznij swoją podróż z nami, dzieląc się swoimi pomysłami lub
              wyzwaniami. Możesz skontaktować się z nami za pośrednictwem
              e-maila, telefonu lub umówić się na osobiste spotkanie. Nasz
              zespół zapewni Ci szybką odpowiedź i pomoc, aby zrozumieć Twoje
              potrzeby i oczekiwania.
            </p>
            <span className="absolute top-[50%] right-[-30px]">
              <FaArrowTurnDown className="text-5xl text-green-500" />
            </span>
          </article>

          {/* Card 2 */}
          <article className="relative w-5/6 ml-auto p-6 my-14 rounded-l-lg bg-white">
            <div className="bg-green-500 text-white rounded-lg inline-block p-2 px-5">
              <div className="text-4xl">2</div>
            </div>
            <h2 className="text-xl my-5 font-semibold">Analiza i Planowanie</h2>
            <p className="text-neutral-900 font-light">
              Po zrozumieniu Twoich potrzeb, przeprowadzimy dokładną analizę i
              zaplanujemy strategię działania. Naszym celem jest stworzenie
              rozwiązania, które spełni Twoje oczekiwania i pomoże w osiągnięciu
              celów biznesowych. Zawsze staramy się dostarczyć najwyższą jakość
              usług.
            </p>
            <span className="absolute top-[50%] left-[-30px]">
              <FaArrowTurnDown className="text-5xl text-green-500 transform scale-x-[-1]" />
            </span>
          </article>

          {/* Card 3 */}
          <article className="relative w-5/6 p-6 rounded-r-lg bg-white my-14">
            <div className="bg-green-500 text-white rounded-lg inline-block p-2 px-5">
              <div className="text-4xl">3</div>
            </div>
            <h2 className="text-xl my-5 font-semibold">
              Programowanie i Rozwój
            </h2>
            <p className="text-neutral-900 font-light">
              Nasz zespół programistów pracuje nad stworzeniem funkcjonalnej i
              estetycznej strony internetowej, dostosowanej do Twoich potrzeb.
              Oferujemy wsparcie techniczne na każdym etapie realizacji
              projektu, aby zapewnić pełne zadowolenie z efektów naszej pracy.
            </p>
            <span className="absolute top-[50%] right-[-30px]">
              <FaArrowTurnDown className="text-5xl text-green-500" />
            </span>
          </article>

          {/* Card 4 */}
          <article className="relative w-5/6 ml-auto p-6 my-14 rounded-l-lg bg-white">
            <div className="bg-green-500 text-white rounded-lg inline-block p-2 px-5">
              <div className="text-4xl">4</div>
            </div>
            <h2 className="text-xl my-5 font-semibold">
              Publikacja i Wsparcie
            </h2>
            <p className="text-neutral-900 font-light">
              Po zakończeniu procesu programowania, Twoja strona zostanie
              opublikowana i udostępniona światu. Nasza praca nie kończy się na
              tym etapie – oferujemy również długoterminowe wsparcie,
              monitorując wydajność strony i wprowadzając niezbędne poprawki,
              aby zapewnić jej optymalne działanie w Internecie.
            </p>
            <span className="absolute top-[50%] left-[-30px]">
              <FaArrowTurnDown className="text-5xl text-green-500 transform scale-x-[-1]" />
            </span>
          </article>
        </section>

        <div className="flex justify-center pb-10">
          <Link
            className="inline-flex gap-2 items-center font-semibold group"
            href="#"
          >
            Pracuj z nami
            <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
              <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
            </div>
          </Link>
        </div>

        <People />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

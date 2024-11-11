import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import People from "@/components/UI/People";
import Experience from "@/components/UI/Experience";
import Cta from "@/components/Homepage/Cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className=" p-6 xl:px-24 2xl:px-44 py-10">
        <section className="overflow-hidden ">
          <div className="relative min-h-[86vh] ">
            <div className="lg:w-3/5">
              <h1 className="text-sm xl:text-xl text-gray-500 font-semibold">
                O Nas
              </h1>
              <h2 className="mt-6 font-semibold  capitalize text-4xl leading-snug lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-snug   ">
                Jesteśmy ludźmi którym zależy na Twoim Sukcesie
              </h2>

              <p className="my-10 text-neutral-900 text-lg font-light xl:text-xl ">
                Przygoda zaczęła się od dziecięcej pasji i wielkich ambicji
                zrodzonych przy starym laptopie. Z biegiem lat, dzięki
                zaangażowaniu i ciężkiej pracy, udało się przekształcić te
                marzenia w rzeczywistość.
              </p>
            </div>
            {/* Obrazek jako tło pod tekstem */}
            <div className="absolute w-4/5 md:w-3/5 lg:w-2/5 xl:w-5/12 -bottom-8 -right-16 -z-10   ">
              <Image
                src="/o-nas.png"
                alt="Dekoracyjny obrazek"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>

        <Experience />

        <section className="pb-10 mt-32 ">
          {/* Card 1 */}
          <article className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-xl bg-white  ">
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
          <article className="relative w-5/6 xl:w-3/5 ml-auto p-6 xl:p-10 my-14 xl:my-24 rounded-l-lg  bg-white ">
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
          <article className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-lg  bg-white ">
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
          <article className="relative w-5/6 xl:w-3/5 ml-auto p-6 xl:p-10 my-14 xl:my-24 rounded-l-lg  bg-white ">
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
          </article>
        </section>

        <People />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

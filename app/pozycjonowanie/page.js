import Cta from "@/components/Homepage/Cta";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";

export const metadata = {
  title: "Pozycjonowanie stron internetowych | DomiWeb",
  alternates: {
    canonical: "/pozycjonowanie",
  },

  description:
    "Dowiedz się, dlaczego pozycjonowanie stron internetowych jest ważne. Dzięki SEO Twoja strona może zyskać większy ruch i wyróżnić się w Google.",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="p-6 xl:px-24 2xl:px-44 py-10 ">
          <div className="relative min-h-[86vh] ">
            <div className="lg:w-3/5">
              <h1 className="text-sm xl:text-xl text-gray-500 font-semibold">
                Pozycjowanie stron internetowych
              </h1>
              <h2 className="mt-6 font-semibold  capitalize text-4xl leading-snug lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-snug   ">
                Pozycjonowanie stron internetowych – dlaczego warto?
              </h2>

              <p className="my-10 text-neutral-900 text-lg font-light xl:text-xl ">
                Pozycjonowanie stron internetowych to proces, który sprawia, że
                Twoja strona staje się widoczna w wynikach wyszukiwania Google.
                Dzięki odpowiednim technikom SEO (ang. Search Engine
                Optimization) strona może dotrzeć do nowych klientów,
                przyciągnąć większy ruch i wyróżnić się na tle konkurencji.
              </p>
            </div>
            {/* Obrazek jako tło pod tekstem */}
            <div className="absolute w-3/5 md:w-3/5 lg:w-2/5 xl:w-4/12 -bottom-16 lg:-bottom-0 -right-0 -z-10   ">
              <Image
                src="/seo.png"
                alt="Obrazek przedstawiający chłopaka zajmującego się pozycjonowaniem stron internetowych"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>

        {/* sekcja 2 */}

        <section className="xl:px-24 2xl:px-44 mt-20 ">
          {/* Card 1 */}
          <article className="relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-r-xl bg-white  ">
            <div className="bg-green-500 text-white rounded-lg inline-block p-2 px-5">
              <div className="text-4xl">1</div>
            </div>
            <h2 className="text-xl my-5 font-semibold">
              Zwiększenie widoczności w Google
            </h2>
            <p className="text-neutral-900 font-light">
              Pozycjonowanie to klucz do osiągnięcia wysokich wyników w
              wyszukiwarce Google. Im wyżej znajduje się Twoja strona w wynikach
              wyszukiwania, tym większa szansa, że dotrzesz do potencjalnych
              klientów. Działania SEO pomagają zoptymalizować stronę, aby była
              bardziej atrakcyjna i lepiej rozpoznawalna w Google.
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
            <h2 className="text-xl my-5 font-semibold">
              Zwiększenie ruchu na stronie
            </h2>
            <p className="text-neutral-900 font-light">
              Dobrze przeprowadzone pozycjonowanie zwiększa liczbę odwiedzin
              Twojej strony. Zwiększony ruch oznacza więcej potencjalnych
              klientów, którzy mogą zapoznać się z Twoją ofertą i dokonać zakupu
              lub skorzystać z usług. Poprzez optymalizację treści, słów
              kluczowych i struktury strony, możesz przyciągnąć nowych
              użytkowników.
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
              Budowanie zaufania i autorytetu
            </h2>
            <p className="text-neutral-900 font-light">
              Dzięki odpowiednim działaniom SEO, Twoja strona staje się bardziej
              wiarygodna i autentyczna w oczach użytkowników. Wysoka pozycja w
              Google buduje zaufanie do Twojej firmy i sprawia, że użytkownicy
              chętniej odwiedzają Twoją stronę oraz podejmują decyzje zakupowe.
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
              Konkurencyjność na rynku
            </h2>
            <p className="text-neutral-900 font-light">
              Pozycjonowanie pozwala Twojej stronie wyróżnić się wśród
              konkurencji. Dzięki odpowiednim działaniom SEO, możesz przyciągnąć
              klientów, którzy szukają produktów lub usług podobnych do Twoich,
              ale wybiorą Ciebie, ponieważ Twoja strona jest lepiej widoczna i
              bardziej dopasowana do ich potrzeb.
            </p>
          </article>
        </section>
      </main>
      <Cta />
      <Footer />
    </>
  );
}

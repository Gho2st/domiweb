import Cta from "@/components/Homepage/Cta";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import Services from "@/components/UI/Services";

export const metadata = {
  title: "Pozycjonowanie stron internetowych | DomiWeb",
  alternates: {
    canonical: "/pozycjonowanie",
  },

  description:
    "Dowiedz się, dlaczego pozycjonowanie stron internetowych jest ważne. Dzięki SEO Twoja strona może zyskać większy ruch i wyróżnić się w Google.",
};

export default function Home() {
  const cardsData = [
    {
      icon: <FaCode className="text-4xl text-green-100" />,
      title: "Zwiększenie widoczności w Google",
      description:
        "Pozycjonowanie to klucz do osiągnięcia wysokich wyników w wyszukiwarce Google. Im wyżej znajduje się Twoja strona w wynikach wyszukiwania, tym większa szansa, że dotrzesz do potencjalnych klientów. Działania SEO pomagają zoptymalizować stronę, aby była bardziej atrakcyjna i lepiej rozpoznawalna w Google.",
    },
    {
      icon: <FaSearch className="text-4xl text-green-100" />,
      title: "Zwiększenie ruchu na stronie",
      description:
        "Dobrze przeprowadzone pozycjonowanie zwiększa liczbę odwiedzin Twojej strony. Zwiększony ruch oznacza więcej potencjalnych klientów, którzy mogą zapoznać się z Twoją ofertą i dokonać zakupu lub skorzystać z usług. Poprzez optymalizację treści, słów kluczowych i struktury strony, możesz przyciągnąć nowych użytkowników.",
    },
    {
      icon: <RiPlantFill className="text-4xl text-green-100" />,
      title: "Budowanie zaufania i autorytetu",
      description:
        "Dzięki odpowiednim działaniom SEO, Twoja strona staje się bardziej wiarygodna i autentyczna w oczach użytkowników. Wysoka pozycja w Google buduje zaufanie do Twojej firmy i sprawia, że użytkownicy chętniej odwiedzają Twoją stronę oraz podejmują decyzje zakupowe.",
    },
    {
      icon: <FaPeopleCarry className="text-4xl text-green-100" />,
      title: "Konkurencyjność na rynku",
      description:
        "Pozycjonowanie pozwala Twojej stronie wyróżnić się wśród konkurencji. Dzięki odpowiednim działaniom SEO, możesz przyciągnąć klientów, którzy szukają produktów lub usług podobnych do Twoich, ale wybiorą Ciebie, ponieważ Twoja strona jest lepiej widoczna i bardziej dopasowana do ich potrzeb.",
    },
  ];

  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <section className="p-6 xl:px-24 2xl:px-44 py-10 mb-20">
          <div className="relative min-h-[100vh] lg:min-h-[86vh] ">
            <div className="lg:w-3/5">
              <h1 className="text-sm xl:text-xl text-gray-500 dark:text-neutral-400 font-semibold">
                Pozycjowanie stron internetowych
              </h1>
              <h2 className="mt-6 font-semibold  capitalize text-4xl leading-snug lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-snug dark:text-neutral-200  ">
                Pozycjonowanie stron internetowych – dlaczego warto?
              </h2>

              <p className="my-10 text-neutral-900 dark:text-neutral-400 text-lg font-light xl:text-xl ">
                Pozycjonowanie stron internetowych to proces, który sprawia, że
                Twoja strona staje się widoczna w wynikach wyszukiwania Google.
                Dzięki odpowiednim technikom SEO (ang. Search Engine
                Optimization) strona może dotrzeć do nowych klientów,
                przyciągnąć większy ruch i wyróżnić się na tle konkurencji.
              </p>
            </div>
            {/* Obrazek jako tło pod tekstem */}
            <div className="absolute -bottom-24 -right-0 w-3/5 lg:w-2/5 xl:w-4/12 lg:-bottom-0 -z-10   ">
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
        <Services cards={cardsData} />
      </main>
      <Cta />
      <Footer />
    </>
  );
}

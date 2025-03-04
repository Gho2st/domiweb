import Cta from "@/components/Homepage/Cta";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import Services from "@/components/UI/Services";
import Help from "./Help";

export const metadata = {
  title: "Pozycjonowanie Stron Nowy Sącz – SEO | DomiWeb",
  alternates: {
    canonical: "/pozycjonowanie",
  },

  description:
    "Pozycjonowanie stron w Nowym Sączu z DomiWeb! Z nami Twoja witryna będzie widoczna w Google – od Krakowa po całą Polskę. Umów się na darmową konsultację i zacznijmy!",
};

export default function Home() {
  const cardsData = [
    {
      icon: <FaCode className="text-4xl text-green-100" />,
      title: "Bądź widoczny w Google – lokalnie i poza Nowym Sączem",
      description:
        "Wyobraź sobie, że Twoja strona wyskakuje na pierwszej stronie wyników w Google – w Nowym Sączu i całej Polsce! To nie magia – to SEO. Dzięki nam Twoja witryna stanie się łatwa do znalezienia, a Ty dotrzesz do ludzi, którzy chcą Cię poznać.",
    },
    {
      icon: <FaSearch className="text-4xl text-green-100" />,
      title: "Przyciągaj więcej gości",
      description:
        "Dobre pozycjonowanie to jak otwarcie drzwi do większej liczby odwiedzających. Więcej ruchu na stronie to więcej szans na nowych klientów – takich, którzy zajrzą, zostaną i skorzystają z Twojej oferty. Zoptymalizujemy wszystko: od słów kluczowych po strukturę, by ludzie do Ciebie trafiali.",
    },
    {
      icon: <RiPlantFill className="text-4xl text-green-100" />,
      title: "Zbuduj zaufanie",
      description:
        "Strony na szczycie Google budzą respekt – i słusznie! Wysoka pozycja to znak, że warto Ci zaufać. Zadbamy, by Twoja witryna wyglądała profesjonalnie i autentycznie, a użytkownicy chętniej klikali właśnie w Twój link.",
    },
    {
      icon: <FaPeopleCarry className="text-4xl text-green-100" />,
      title: "Wyróżnij się na tle innych",
      description:
        "Rynek pełen jest konkurencji, ale z nami to Ty będziesz o krok przed nimi. Pokażemy światu, co masz do zaoferowania, i sprawimy, że klienci wybiorą Ciebie – bo łatwiej Cię znajdą i bardziej im się spodobasz.",
    },
  ];

  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <section className="p-6 xl:px-24 2xl:px-44 mb-20 ">
          <div className="relative  lg:min-h-[86vh] ">
            <div className="lg:w-3/5">
              <h1 className="text-sm mt-6 xl:text-xl text-gray-500 dark:text-neutral-400 font-semibold">
                Pozycjonowanie Stron w Nowym Sączu – DomiWeb
              </h1>
              <h2 className="mt-6 font-semibold capitalize text-4xl leading-snug 2xl:text-6xl lg:leading-snug  2xl:leading-snug dark:text-neutral-200  ">
                Pozycjonowanie stron internetowych – dlaczego warto?
              </h2>

              <p className="my-10 text-lg text-neutral-900 dark:text-neutral-400 md:text-lg font-light 2xl:text-xl ">
                Chcesz, by Twoja strona była widoczna w Google i przyciągała
                nowych ludzi – także w Nowym Sączu? W DomiWeb wiemy, jak to
                zrobić! Pozycjonowanie (SEO) to dla nas sposób, by Twój biznes
                rozkwitł w sieci, a Ty poczuł się pewniej na rynku. Z nami Twoja
                strona stanie się miejscem, do którego klienci trafią naturalnie
                – od Nowego Sącza po Kraków i całą Polskę!
              </p>
            </div>
            {/* Obrazek jako tło pod tekstem */}
            <div className="mx-auto lg:absolute lg:-right-0 w-3/5 lg:w-2/5 xl:w-4/12 lg:-bottom-0 -z-10   ">
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
        <Help />
      </main>
      <Cta />
      <Footer />
    </>
  );
}

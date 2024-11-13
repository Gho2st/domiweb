import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import Image from "next/image";
import People from "@/components/UI/People";
import Experience from "@/components/UI/Experience";
import Cta from "@/components/Homepage/Cta";
import Services from "@/components/UI/Services";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

export const metadata = {
  title: "O nas - Kim jesteśmy i jak wspieramy Twój rozwój | Domiweb",
  alternates: {
    canonical: "/o-nas",
  },

  description:
    "Poznaj zespół Domiweb – ludzi z pasją do tworzenia stron internetowych, których celem jest wspieranie sukcesu Twojej marki. Od pierwszego kontaktu po długoterminowe wsparcie, towarzyszymy Ci na każdym etapie, zapewniając profesjonalizm, jakość, i efektywność.",
};

export default function Home() {
  const cardsData = [
    {
      icon: <FaCode className="text-4xl text-green-100" />,
      title: "Pierwszy Kontakt",
      description:
        "Rozpocznij swoją podróż z nami, dzieląc się swoimi pomysłami lub wyzwaniami. Możesz skontaktować się z nami za pośrednictwem e-maila, telefonu lub umówić się na osobiste spotkanie. Nasz zespół zapewni Ci szybką odpowiedź i pomoc, aby zrozumieć Twoje potrzeby i oczekiwania.",
    },
    {
      icon: <FaSearch className="text-4xl text-green-100" />,
      title: "Analiza i Planowanie",
      description:
        "Po zrozumieniu Twoich potrzeb, przeprowadzimy dokładną analizę i zaplanujemy strategię działania. Naszym celem jest stworzenie rozwiązania, które spełni Twoje oczekiwania i pomoże w osiągnięciu celów biznesowych. Zawsze staramy się dostarczyć najwyższą jakość usług.",
    },
    {
      icon: <RiPlantFill className="text-4xl text-green-100" />,
      title: " Programowanie i Rozwój",
      description:
        "Nasz zespół programistów pracuje nad stworzeniem funkcjonalnej i estetycznej strony internetowej, dostosowanej do Twoich potrzeb. Oferujemy wsparcie techniczne na każdym etapie realizacji projektu, aby zapewnić pełne zadowolenie z efektów naszej pracy.",
    },
    {
      icon: <FaPeopleCarry className="text-4xl text-green-100" />,
      title: "Publikacja i Wsparcie",
      description:
        "Po zakończeniu procesu programowania, Twoja strona zostanie opublikowana i udostępniona światu. Nasza praca nie kończy się na tym etapie – oferujemy również długoterminowe wsparcie, monitorując wydajność strony i wprowadzając niezbędne poprawki, aby zapewnić jej optymalne działanie w Internecie.",
    },
  ];
  return (
    <>
      <Nav />
      <main className=" ">
        <section className="overflow-hidden p-6 xl:px-24 2xl:px-44 py-10 ">
          <div className="relative min-h-[100vh] lg:min-h-[86vh] ">
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
        <Services cards={cardsData} />
      </main>
      <People />
      <Cta />
      <Footer />
    </>
  );
}

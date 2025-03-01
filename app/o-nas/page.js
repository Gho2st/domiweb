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
  title: "O nas – Strony Internetowe Nowy Sącz | DomiWeb",
  alternates: {
    canonical: "/o-nas",
  },

  description:
    "O nas – DomiWeb Nowy Sącz! Tworzymy strony i aplikacje mobilne – od Nowego Sącza po Kraków i całą Polskę. Zaufaj naszemu zespołowi i zacznijmy Twój projekt – napisz do nas!",
};

export default function Home() {
  const cardsData = [
    {
      icon: <FaCode className="text-4xl text-green-100" />,
      title: "Pierwszy Kontakt",
      description:
        "Zacznijmy od rozmowy – opowiedz nam, co Ci w duszy gra. Napisz, zadzwoń albo umów się na spotkanie, a my zajmiemy się resztą. Szybko odpiszemy i pokażemy, jak możemy Ci pomóc. To Twój pierwszy krok do czegoś świetnego – zrobimy go razem!",
    },
    {
      icon: <FaSearch className="text-4xl text-green-100" />,
      title: "Analiza i Planowanie",
      description:
        "Kiedy już się poznamy, usiądziemy do Twoich pomysłów jak do dobrego planu przy domowym stole – w Nowym Sączu, Krakowie czy zdalnie, gdziekolwiek jesteś. Przeanalizujemy, co potrzebujesz, i stworzymy strategię, która da Ci stronę nie tylko ładną, ale i skuteczną. Z nami zawsze wiesz, na czym stoisz.",
    },
    {
      icon: <RiPlantFill className="text-4xl text-green-100" />,
      title: " Programowanie i Rozwój",
      description:
        "Nasz programista zamieni Twoje marzenia w kod – stronę lub aplikację, która wygląda świetnie i działa jeszcze lepiej. Jesteśmy z Tobą na każdym etapie, od Krakowa po Nowy Sącz, byś czuł się spokojny i zadowolony z tego, co tworzymy. To Twój projekt, ale nasz wspólny sukces.",
    },
    {
      icon: <FaPeopleCarry className="text-4xl text-green-100" />,
      title: "Publikacja i Wsparcie",
      description:
        "Gdy wszystko gotowe, Twoja strona rusza w świat – a my nie znikamy. Dbamy o nią jak o własny dom, pilnując, by działała bez zarzutu – czy to w Nowym Sączu, czy gdziekolwiek w Polsce. Potrzebujesz zmian? Jesteśmy tuż obok, gotowi pomóc.",
    },
  ];
  return (
    <>
      <Nav />
      <main className="overflow-hidden ">
        <section className=" p-6 xl:px-24 2xl:px-44 py-10 ">
          <div className="relative min-h-[100vh] lg:min-h-[86vh] ">
            <div className="lg:w-3/5">
              <h1 className="text-sm xl:text-xl text-gray-500 dark:text-neutral-400 font-semibold">
                O nas – Tworzenie Stron i Aplikacji Mobilnych w Nowym Sączu
              </h1>
              <h2 className="mt-6 font-semibold  capitalize text-4xl leading-snug  lg:leading-snug 2xl:text-6xl 2xl:leading-snug dark:text-neutral-200  ">
                Jesteśmy z Nowego Sącza i zależy nam na Twoim sukcesie
              </h2>

              <p className="my-10 text-neutral-900 dark:text-neutral-400 text-lg font-light 2xl:text-xl ">
                Nasza przygoda zaczęła się od dziecięcej pasji i wielkich
                ambicji zrodzonych przy starym laptopie. Z biegiem lat, dzięki
                ciężkiej pracy, przekształciliśmy te marzenia w rzeczywistość –
                najpierw w Nowym Sączu, a potem w całej Polsce, w tym w
                Krakowie. Jesteśmy małym zespołem, który słucha, wspiera i
                sprawia, że Twoje cele stają się osiągalne. Chcemy, byś poczuł
                się u nas jak w domu, a Twoja firma rozwinęła skrzydła w sieci –
                napisz do nas!
              </p>
            </div>
            {/* Obrazek jako tło pod tekstem */}
            <div className="absolute w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/6 -bottom-52 md:-bottom-24 lg:-bottom-0 -right-16 -z-10   ">
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

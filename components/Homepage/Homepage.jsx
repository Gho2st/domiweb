import Audit from "@/components/Homepage/Audit";
import Cta from "@/components/Homepage/Cta";
import FAQ from "@/components/Homepage/FAQ";
import Hero from "@/components/Homepage/Hero";
import MoreInfo from "@/components/Homepage/MoreInfo";
import Portfolio from "@/components/Homepage/Portfolio";
import Review from "@/components/Homepage/Review";
import Services from "@/components/UI/Services";
import TechnologyStack from "@/components/Homepage/TechnologyStack";
import Testimonials from "@/components/Homepage/Testimonials";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaCode className="text-4xl text-green-100" />,
    title: "Strony, które działają na każdym ekranie",
    description:
      "Tworzymy witryny od zera – razem z Tobą, od pierwszej rozmowy po wielki start. Każda jest niepowtarzalna, skrojona na miarę i gotowa, by zachwycić użytkowników oraz wyszukiwarki.",
  },
  {
    icon: <FaSearch className="text-4xl text-green-100" />,
    title: "Wysokie miejsca w Google)",
    description:
      "Chcemy, by Twoja strona była tam, gdzie szukają Cię klienci. Z SEO od DomiWeb wskoczysz na czołowe pozycje, przyciągniesz ruch i zostawisz konkurencję w tyle.",
  },
  {
    icon: <FaPeopleCarry className="text-4xl text-green-100" />,
    title: "Wsparcie, na które możesz liczyć",
    description:
      "Jesteśmy z Tobą nie tylko na starcie, ale i potem. Pilnujemy, by Twoja strona działała jak marzenie – aktualizacje, bezpieczeństwo, poprawki – bierzemy to na siebie.",
  },
];

export default function Homepage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Review />
      <Services cards={cardsData} />
      <TechnologyStack />
      <Audit />
      <MoreInfo />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}

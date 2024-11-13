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
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
const cardsData = [
  {
    icon: <FaCode className="text-4xl text-green-100" />,
    title: "Tworzenie Responsywnych Stron Internetowych",
    description:
      "Oferujemy nowoczesne strony internetowe, które rozwijamy wspólnie z klientami od pierwszego kontaktu aż do wdrożenia. Każda nasza strona jest unikalna, stworzona tak, by wyróżniać się w sieci i spełniać  oczekiwania zarówno użytkowników, jak i wyszukiwarek.",
  },
  {
    icon: <FaSearch className="text-4xl text-green-100" />,
    title: "Pozycjonowanie Stron Internetowych (SEO)",
    description:
      "Naszym celem jest, aby Twoja strona zajmowała czołowe miejsca w wynikach wyszukiwania. Oferujemy pełne wsparcie w zakresie SEO, pomagając Ci osiągnąć sukces i wyprzedzić konkurencję w Google. Dzięki naszym działaniom Twoja strona nie tylko będzie widoczna, ale także zyska większy ruch i lepsze wyniki biznesowe.",
  },
  {
    icon: <FaPeopleCarry className="text-4xl text-green-100" />,
    title: "Wsparcie Techniczne Stron Internetowych",
    description:
      "Zapewniamy wsparcie techniczne na każdym etapie działania Twojej strony. Niezależnie od tego, czy jesteś naszym klientem, czy dopiero zaczynasz przygodę z naszą firmą, możesz liczyć na naszą pomoc i zaangażowanie. Oferujemy aktualizacje, zabezpieczenia i konserwację stron, dbając o to, by Twoja witryna była zawsze w doskonałej formie.",
  },
];
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
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
      <Footer />
    </main>
  );
}

import Cta from "@/components/Homepage/Cta";
import Review from "@/components/Homepage/Review";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import PortfolioItem from "@/components/UI/PortfolioItem";

export const metadata = {
  title: "Portfolio - Realizacje i Projekty | Domiweb",
  alternates: {
    canonical: "/portfolio",
  },

  description:
    "Poznaj nasze portfolio – Domiweb realizuje projekty dla klientów z różnych branż, tworząc nowoczesne i funkcjonalne strony internetowe. Od systemów rezerwacji po optymalizację SEO i zaawansowane integracje, nasze realizacje pokazują różnorodność technologii i designu, które przynoszą naszym klientom realne korzyści.",
};

export default function Home() {
  const portfolioItems = [
    {
      title: "Żłobki Wesołe Wygibasy",
      description:
        "Strona internetowa dla krakowskiej sieci żłobków, zaprojektowana z myślą o rodzicach. Jasny, przyjazny design, intuicyjna nawigacja i pastelowa kolorystyka tworzą komfortowe doświadczenie użytkownika.",
      imageSrc: "/portfolio/wesolewygibasy.png",
      link: "https://www.wesolewygibasy.pl/",
    },
    {
      title: "Pub & Club Huki Muki",
      description:
        "Strona internetowa dla jednego z najpopularniejszych pubów w Krakowie. Zawiera system rezerwacji online, integrację płatności oraz dynamiczny design, który oddaje klimat miejsca.",
      imageSrc: "/portfolio/hukimuki.png",
      link: "https://www.hukimuki.pl/",
    },
    {
      title: "Barbara Piękoś - Artystka",
      description:
        "Strona, która eksponuje sztukę. Elegancki, minimalistyczny design podkreśla unikalny charakter twórczości Barbary, zapewniając jednocześnie czytelność i łatwą nawigację.",
      imageSrc: "/portfolio/barbarapiekos.png",
      link: "https://www.barbarapiekos.pl/",
    },
    {
      title: "Sklep Specjalistyczny SzlafrO.K.",
      description:
        "Dzięki integracji z AWS, strona zapewnia szybkie ładowanie i wysoką dostępność. Użytkownicy mogą łatwo przeglądać ofertę, a responsywny design gwarantuje wygodę na różnych urządzeniach.",
      imageSrc: "/portfolio/szlafroki.png",
      link: "https://www.szlafroki.krakow.pl/",
    },
    {
      title: "Stowarzyszenie Hodowców Ptaków",
      description:
        "Dynamiczna witryna z panelem administracyjnym umożliwiającym zarządzanie treściami i użytkownikami. Idealne rozwiązanie dla organizacji potrzebujących szybkiego dostępu do aktualizacji.",
      imageSrc: "/portfolio/ptaki.png",
      link: "https://www.nshkipe.com.pl/",
    },
    {
      title: "Olmart - Zakład Zduński",
      description:
        "Nowoczesna strona prezentująca usługi zduńskie. Prosty układ i optymalizacja pod kątem SEO pomagają w dotarciu do klientów poszukujących rzetelnych specjalistów.",
      imageSrc: "/portfolio/olmart.png",
      link: "https://www.olmart-ns.pl/",
    },
    {
      title: "Optyk - Andrzej Świerczek 1980",
      description:
        "Strona lokalnego optyka z ponad 40-letnią tradycją. Dopracowany projekt wspiera pozycjonowanie w wyszukiwarkach, zwiększając zasięg firmy w regionie.",
      imageSrc: "/portfolio/optyk.png",
      link: "https://www.optyk-andrzej.pl/",
    },
    {
      title: "Beata Łakota",
      description:
        "Profesjonalna strona dla Beaty Łakoty, skoncentrowana na łatwej nawigacji i optymalizacji SEO, by dotrzeć do szerokiego grona odbiorców.",
      imageSrc: "/portfolio/beata.png",
      link: "https://www.beatalakota.pl/",
    },
    {
      title: "EOS - Ozonowanie | Kraków",
      description:
        "Strona internetowa zoptymalizowana pod kątem lokalnych usług ozonowania. Dzięki formularzowi kontaktowemu klienci mogą łatwo zgłosić zapytania i zamówić usługę.",
      imageSrc: "/portfolio/ozonowanie.png",
      link: "https://www.eos-ozonowanie.pl/",
    },
    {
      title: "Telmech - Obróbka Metali",
      description:
        "Nowoczesna witryna dla firmy zajmującej się obróbką metali. Projekt wyróżnia się zastosowaniem AI w generowaniu grafik oraz optymalizacją SEO.",
      imageSrc: "/portfolio/telmech.png",
      link: "https://www.telmech.com/",
    },
    {
      title: "ToMy - Myje & Remontuje",
      description:
        "Strona internetowa zaprojektowana z myślą o promocji usług porządkowych i remontowych. Przejrzysty układ ułatwia klientom szybkie nawiązanie kontaktu z firmą.",
      imageSrc: "/portfolio/tomy.png",
      link: "https://www.tomy-myje-remontuje.pl/",
    },
  ];

  return (
    <>
      <Nav />
      <main className="p-6 lg:px-24 2xl:px-44">
        <h1 className="mt-6 font-semibold text-4xl xl:text-5xl 2xl:text-6xl capitalize">
          Portfolio
        </h1>
        <p className="my-10 mt-6 xl:mt-10 text-neutral-900 text-lg 2xl:text-xl font-light">
          W DomiWeb kochamy wyzwania. Jesteśmy odwzorować każdy Twój pomysł w
          życie
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12 mb-10">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              link={item.link}
            />
          ))}
        </div>
      </main>
      <Review />
      <Cta />
      <Footer />
    </>
  );
}

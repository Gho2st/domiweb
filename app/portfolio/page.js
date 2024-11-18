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
        "Nowoczesny projekt w Next.js dla krakowskiej firmy żłobkowej. Strona stworzona z myślą o łatwej nawigacji i dostępności dla rodziców. Design strony - pastelowe kolory + odpowiednia czcionka.",
      imageSrc: "/portfolio/wesolewygibasy.png",
      link: "https://www.wesolewygibasy.pl/",
    },
    {
      title: "Pub & Club Huki Muki",
      description:
        "Dla krakowskiego pubu Huki Muki stworzyliśmy nowoczesną stronę w technologii Next.js, z integracją płatności Stripe i bazą danych PostgreSQL. Strona zawiera również system rezerwacji online.",
      imageSrc: "/portfolio/hukimuki.png",
      link: "https://www.hukimuki.pl/",
    },
    {
      title: "Barbara Piękoś - Artystka.",
      description:
        "Strona internetowa dla Barbary Piękoś - artystki, która prezentuje swoje prace oraz najnowsze wystawy. Projekt oparty na minimalistycznym designie, by podkreślić jej artystyczny styl.",
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
      title: "Stowarzyszenie hodowców ptaków",
      description:
        "Dynamiczna strona internetowa z panelem administracyjnym stworzona w PHP i MySQL, która umożliwia łatwe zarządzanie treścią i użytkownikami, a także szybki dostęp do aktualizacji.",
      imageSrc: "/portfolio/ptaki.png",
      link: "https://www.nshkipe.com.pl/",
    },
    {
      title: "Olmart - Zakład Zduński",
      description:
        "Strona internetowa wykorzystująca Bootstrap i jQuery, prezentująca ofertę usług zduńskich, z naciskiem na SEO i widoczność w sieci.",
      imageSrc: "/portfolio/olmart.png",
      link: "https://www.olmart-ns.pl/",
    },
    {
      title: "Optyk - Andrzej Świerczek 1980",
      description:
        "Stworzyliśmy responsywną stronę internetową dla lokalnego optyka, która została zaprojektowana w technologii Bootstrap. Dzięki optymalizacji SEO, strona zwiększyła widoczność w wynikach wyszukiwarek, a użytkownicy mogą łatwo umawiać wizyty online.",
      imageSrc: "/portfolio/optyk.png",
      link: "https://www.optyk-andrzej.pl/",
    },
    {
      title: "Beata Łakota",
      description:
        "Profesjonalna strona internetowa stworzona z wykorzystaniem bootstrapa. Skoncentrowana na optymalizacji SEO i łatwej nawigacji.",
      imageSrc: "/portfolio/beata.png",
      link: "https://www.beatalakota.pl/",
    },
    {
      title: "EOS - Ozonowanie | Kraków",
      description:
        "Dla firmy EOS stworzyliśmy stronę z formularzem kontaktowym opartym na PHP Mailer, zoptymalizowaną pod kątem lokalnych usług ozonowania, co zwiększyło jej widoczność w wynikach wyszukiwania.",
      imageSrc: "/portfolio/ozonowanie.png",
      link: "https://www.eos-ozonowanie.pl/",
    },
    {
      title: "Telmech - Obróbka Metali",
      description:
        "Strona internetowa dla firmy Telmech zajmującej się obróbką metali, zoptymalizowana pod kątem SEO i używająca generowanych przez AI zdjęć.",
      imageSrc: "/portfolio/telmech.png",
      link: "https://www.telmech.com/",
    },
    {
      title: "ToMy - Myje & Remontuje",
      description:
        "Strona internetowa firmy remonoto-sprzątającej, zaprojektowana tak, aby umożliwić łatwy kontakt z klientami oraz przedstawienie oferty usług porządkowych.",
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

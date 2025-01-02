import Cta from "@/components/Homepage/Cta";
import Review from "@/components/Homepage/Review";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import PortfolioItem from "@/components/UI/PortfolioItem";
import projects from "../data/project"; // Ścieżka do danych

export const metadata = {
  title: "Portfolio - Realizacje i Projekty | Domiweb",
  alternates: {
    canonical: "/portfolio",
  },

  description:
    "Poznaj nasze portfolio – Domiweb realizuje projekty dla klientów z różnych branż, tworząc nowoczesne i funkcjonalne strony internetowe. Od systemów rezerwacji po optymalizację SEO i zaawansowane integracje, nasze realizacje pokazują różnorodność technologii i designu, które przynoszą naszym klientom realne korzyści.",
};

export default function Home() {
  // console.log(projects)
  return (
    <>
      <Nav />
      <main className="p-6 lg:px-24 2xl:px-44">
        <h1 className="mt-6 font-semibold text-4xl xl:text-5xl 2xl:text-6xl capitalize dark:text-neutral-200">
          Portfolio
        </h1>
        <p className="my-10 mt-6 xl:mt-10 text-neutral-900 dark:text-neutral-300 text-lg 2xl:text-xl font-light">
          W DomiWeb kochamy wyzwania. Jesteśmy w stanie przeistoczyć każdy Twój
          pomysł w życie.
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12 mb-10">
          {projects.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              description={item.header}
              image={item.image}
              link={item.link}
              id={item.id}
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

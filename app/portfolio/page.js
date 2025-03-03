import Cta from "@/components/Homepage/Cta";
import Review from "@/components/Homepage/Review";
import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import PortfolioItem from "@/components/UI/PortfolioItem";
import projects from "../data/project"; // Ścieżka do danych

export const metadata = {
  title: "Portfolio Stron Internetowych Nowy Sącz | DomiWeb",
  alternates: {
    canonical: "/portfolio",
  },

  description:
    "Portfolio DomiWeb – strony i aplikacje w Nowym Sączu! Projekty z Krakowa i całej Polski – od SEO po design. Zobacz, jak pomagamy firmom zaistnieć w sieci i napisz do nas!",
};

export default function Home() {
  // console.log(projects)
  return (
    <>
      <Nav />
      <main className="p-6 lg:px-24 2xl:px-44">
        <h1 className="mt-6 text-sm xl:text-xl text-gray-500 dark:text-neutral-400 font-semibold">
          Portfolio Stron Internetowych i Aplikacji Mobilnych – DomiWeb Nowy
          Sącz
        </h1>
        <h2 className="mt-6 leading-snug font-semibold text-4xl capitalize  lg:leading-snug 2xl:text-6xl 2xl:leading-snug dark:text-neutral-100">
          Nasze projekty – od Nowego Sącza po Kraków i całą Polskę
        </h2>
        <p className="my-10 mt-6 xl:mt-10 text-neutral-900 dark:text-neutral-400 text-lg 2xl:text-xl font-light">
          W DomiWeb lubimy dawać kształt marzeniom – także w Nowym Sączu! Każdy
          projekt to nowa historia, a Twoja może być następna. Pomogliśmy w
          sieci rozwinąć skrzydła firmom z Krakowa, jak Żłobek Wesołe Wygibasy,
          ale i z całej Polski. Od małych pasji po duże biznesy – z nami
          znajdziesz swoje miejsce online. Napisz do nas i zobacz, co możemy
          zrobić dla Ciebie!
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

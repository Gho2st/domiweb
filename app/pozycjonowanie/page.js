import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="p-6">
          <h1 className="mt-6 text-3xl font-semibold">
            Pozycjonowanie stron internetowych – dlaczego warto?
          </h1>
          <p className="my-10 text-neutral-900 text-lg font-light ">
            Pozycjonowanie stron internetowych to proces, który sprawia, że
            Twoja strona staje się widoczna w wynikach wyszukiwania Google.
            Dzięki odpowiednim technikom SEO (ang. Search Engine Optimization)
            strona może dotrzeć do nowych klientów, przyciągnąć większy ruch i
            wyróżnić się na tle konkurencji.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

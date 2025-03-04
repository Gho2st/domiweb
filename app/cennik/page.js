import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="min-h-[100vh]">
        <div>
          <p className="dark:text-white text-center mt-10 text-xl font-bold">
            Podstrona <span className="text-green-500">cennik</span> jest w trakcie budowania!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

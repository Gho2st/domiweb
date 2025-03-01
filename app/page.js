import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

import Homepage from "@/components/Homepage/Homepage";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Homepage />
      <Footer />
    </main>
  );
}

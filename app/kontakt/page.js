import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

import Form from "./form";

export const metadata = {
  title: "Kontakt – Strony Internetowe Nowy Sącz | DomiWeb",
  alternates: {
    canonical: "/kontakt",
  },

  description:
    "Kontakt z DomiWeb w Nowym Sączu! Strony i aplikacje mobilne – od Krakowa po całą Polskę. Napisz, zadzwoń lub umów się na kawę – zacznijmy Twój projekt już dziś!",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <Form />
      <Footer />
    </>
  );
}

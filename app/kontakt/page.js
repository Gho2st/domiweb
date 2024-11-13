import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";

import Form from "./form";

export const metadata = {
  title: "Kontakt - Skontaktuj się z nami | Domiweb",
  alternates: {
    canonical: "/kontakt",
  },

  description:
    "Masz pytania lub pomysł na współpracę? Skontaktuj się z zespołem Domiweb, aby omówić swoje potrzeby i dowiedzieć się, jak możemy wspólnie osiągnąć Twoje cele biznesowe. Jesteśmy tu, aby odpowiedzieć na wszelkie pytania i zapewnić wsparcie na każdym etapie.",
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

import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <section className="p-6">
          <h1 className="mx-auto mt-6 font-semibold text-4xl capitalize">
            Skontaktuj się z nami
          </h1>
          <p className="mt-8 text-lg text-neutral-900 font-light">
            Zróbmy razem świetny projekt
          </p>

          <form className="mt-10">
            <label
              htmlFor="fullname"
              className="text-sm text-neutral-700 font-medium"
            >
              * Imię i Nazwisko
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Wpisz swoję Imię i Nazwisko"
              className="w-full mt-3 mb-5 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
            ></input>
            <label
              htmlFor="fullname"
              className="text-sm text-neutral-700 font-medium"
            >
              * Twój email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Wpisz swój email"
              className="w-full mt-3 mb-5 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
            ></input>
            <label
              htmlFor="fullname"
              className="text-sm text-neutral-700 font-medium"
            >
              * Twoja Wiadomość
            </label>
            <input
              id="message"
              type="textarea"
              className="w-full h-40 mt-3 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
            ></input>
            <button className="flex justify-center items-center gap-2 bg-green-500 font-semibold rounded-lg p-4 w-full mt-8">
              Wyślij
              <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
            </button>
          </form>

          <div className="mt-10 bg-white p-6 py-10">
            <h3 className="text-xl font-semibold mb-5">
              Oczekujesz bardziej personalnego kontaktu?
            </h3>
            <p className="text-neutral-900 font-light">
              To mozliwe. Umów wizytę z nami - chętnie porozmawiamy o twoich
              pomysłach & odpowiemy na nurtujące pytania jakie mozesz mieć.
            </p>
            <div className="flex gap-8 mt-10">
              <div className="relative h-44 w-3/5 bg-green-300 rounded-2xl overflow-hidden">
                <Image
                  src={"/people/dominik2.png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  alt="zdjęcie właściciela firmy DomiWeb Dominika Jojczyka na charakterystycznym zielonym tle"
                />
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-lg">Dominik Jojczyk</h3>
                  <p className="text-sm mt-1 mb-6 font-semibold text-gray-500">
                    Założyciel, Engineering Team Leader
                  </p>
                </div>
                <Link
                  className="flex gap-2 items-center font-semibold group "
                  href="tel:48576985894"
                >
                  576 985 894
                  <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-green-500 " />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.540067393763!2d20.63364013565588!3d49.61509389777563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dfb91bf3cafbb%3A0x262021a6662173f!2sDomiweb%20-%20Strony%20internetowe!5e0!3m2!1spl!2spl!4v1730563297297!5m2!1spl!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-60"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

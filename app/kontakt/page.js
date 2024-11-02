import Footer from "@/components/UI/Footer/Footer";
import Nav from "@/components/UI/Nav/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <Nav />
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
            <div className="relative h-44 w-1/3 bg-green-300 rounded-2xl overflow-hidden">
              <Image
                src={"/people/dominik2.png"}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
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
                href="#"
              >
                Umów wizytę
                <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-green-500 " />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

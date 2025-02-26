"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [formData, setFormData] = useState({
    text: "",
    fullName: "",
    email: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const recaptchaRef = useRef(null); // Ref dla reCAPTCHA

  // Funkcja walidacji pól formularza
  function validateForm(data) {
    const errors = [];
    if (!data.fullName.trim()) errors.push("fullName");
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.push("email");
    if (!data.text.trim()) errors.push("text");

    setErrorFields(errors);
    return errors.length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(formData)) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    // Pobranie tokena reCAPTCHA
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Proszę zaznacz, że nie jesteś robotem przed wysłaniem.");
      return;
    }

    // console.log("Wysyłanie danych:", { ...formData, recaptchaToken }); // Dodaj logowanie danych

    setIsSending(true);
    setFormError(null);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          text: "",
          fullName: "",
          email: "",
        });
        recaptchaRef.current.reset(); // Zresetuj CAPTCHA po wysłaniu
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setFormError("Niespodziewany błąd.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <main>
      <section className="p-6 lg:px-24 2xl:px-44">
        <h1 className="mx-auto mt-6 font-semibold text-4xl capitalize dark:text-neutral-200">
          Skontaktuj się z nami
        </h1>
        <p className="mt-8 mb-2 text-lg text-neutral-900 dark:text-neutral-300 font-light">
          Zróbmy razem świetny projekt. Masz pomysł, który czeka na realizację?
          A może chcesz po prostu pogadać o tym, jak możemy Ci pomóc? W DomiWeb
          jesteśmy gotowi, by słuchać i działać. Napisz, zadzwoń albo wpadnij na
          kawę – wirtualną lub prawdziwą. Razem stworzymy coś, z czego będziesz
          dumny!
        </p>
        {formError && <p style={{ color: "red" }}>{formError}</p>}

        {/* contact container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          {/* form container */}
          <div>
            {formSubmitted ? (
              <div className="mt-10 lg:mt-20 ">
                <span className="text-2xl dark:text-green-500">
                  Dziękujęmy za przesłanie formularza!
                </span>
                <p className="font-light text-lg mt-6 dark:text-neutral-300">
                  Postaramy się odpowiedzieć tak szybko, jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={sendMail} className="mt-10">
                <div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-sm text-neutral-700 dark:text-neutral-400 font-medium"
                    >
                      * Imię i Nazwisko
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      value={formData.fullName}
                      placeholder="Wpisz swoję Imię i Nazwisko"
                      style={{
                        border: errorFields.includes("fullName")
                          ? "1px solid red"
                          : "0",
                      }}
                      className="w-full mt-3 mb-5 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm text-neutral-700 dark:text-neutral-400 font-medium"
                    >
                      * Twój email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      placeholder="Wpisz swój email"
                      style={{
                        border: errorFields.includes("email")
                          ? "1px solid red"
                          : "0",
                      }}
                      className="w-full mt-3 mb-5 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                    />
                  </div>
                </div>
                <label
                  htmlFor="text"
                  className="text-sm text-neutral-700 dark:text-neutral-400 font-medium"
                >
                  * Twoja Wiadomość
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  style={{
                    border: errorFields.includes("text")
                      ? "1px solid red"
                      : "0",
                  }}
                  className="w-full h-40 mt-3 placeholder:text-neutral-500 p-3 rounded-lg border border-gray-400"
                />
                <ReCAPTCHA
                  className="mt-4"
                  ref={recaptchaRef}
                  sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo" // Wstaw swój Site Key
                />
                <button
                  disabled={isSending}
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-green-500 font-semibold rounded-lg p-4 w-full mt-6"
                >
                  {isSending ? "Wysyłanie..." : "Wyślij wiadomość!"}
                  <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white" />
                </button>
              </form>
            )}
          </div>

          <div className="mt-10 shadow-xl bg-white dark:bg-neutral-950 p-6 py-10 rounded-xl">
            <h2 className="text-xl xl:text-2xl font-semibold mb-5 dark:text-neutral-200">
              Oczekujesz bardziej personalnego kontaktu?
            </h2>
            <p className="text-neutral-900 dark:text-neutral-300 font-light">
              To możliwe. Umów wizytę z nami - chętnie porozmawiamy o twoich
              pomysłach & odpowiemy na nurtujące pytania jakie możesz mieć.
            </p>
            <div className="flex gap-8  mt-10">
              <div className="relative h-44 w-3/5 sm:w-1/3 md:h-64 lg:w-1/1 lg:h-40 xl:h-64  bg-green-300 rounded-2xl overflow-hidden">
                <Image
                  src={"/people/dominik2.png"}
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                  alt="zdjęcie właściciela firmy DomiWeb Dominika Jojczyka na charakterystycznym zielonym tle"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg 2xl:text-xl dark:text-neutral-300">
                  Dominik Jojczyk
                </h3>
                <p className="text-sm mt-1 mb-6 xl:mb-4 font-semibold text-gray-500 dark:text-neutral-400">
                  Założyciel, Engineering Team Leader
                </p>
                <Link
                  className="flex gap-2 items-center font-semibold group dark:text-neutral-300 "
                  href="tel:48576985894"
                >
                  576 985 894
                  <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-green-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-6 lg:mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.540067393763!2d20.63364013565588!3d49.61509389777563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dfb91bf3cafbb%3A0x262021a6662173f!2sDomiweb%20-%20Strony%20internetowe!5e0!3m2!1spl!2spl!4v1730563297297!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-60 lg:h-[50vh]"
        />
      </div>
    </main>
  );
}

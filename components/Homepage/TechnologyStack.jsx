"use client";
import { useState } from "react";
import { RiNextjsLine } from "react-icons/ri";
import { RiWordpressFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { RiReactjsFill } from "react-icons/ri";
import { RiBrainLine } from "react-icons/ri";

export default function TechnologyStack() {
  const [activeTech, setActiveTech] = useState("Next.js");

  // Treści wyświetlane na podstawie wybranej technologii
  const techDetails = {
    "Next.js": {
      name: "Next.js",
      description:
        "Szybkość, o jakiej marzysz. Dzięki Server-Side Rendering i Static Site Generation Twoja strona ładować się będzie w mgnieniu oka – klienci to pokochają!",
    },
    Wordpress: {
      name: "Wordpress",
      description:
        "WordPress to popularna platforma CMS, idealna do budowania elastycznych stron internetowych z prostą edycją treści.",
    },
    Figma: {
      name: "Figma",
      description:
        "Figma to narzędzie do projektowania interfejsów, które umożliwia współpracę zespołową w czasie rzeczywistym, ułatwiając tworzenie prototypów.",
    },
    Python: {
      name: "Python",
      description:
        "Python to język programowania, który świetnie sprawdza się w tworzeniu aplikacji webowych, data science oraz automatyzacji.",
    },
    React: {
      name: "React",
      description:
        "React to popularna biblioteka do budowy interaktywnych interfejsów użytkownika, znana z wydajności i możliwości komponowania komponentów.",
    },
    AI: {
      name: "AI",
      description:
        "Sztuczna inteligencja wspiera nowoczesne strony internetowe, automatyzując procesy, analizując dane użytkowników oraz personalizując ich doświadczenia. Dzięki AI mogę tworzyć inteligentne funkcje, takie jak rekomendacje treści, automatyczne analizy SEO czy chatboty wspomagające obsługę klienta, co zwiększa interaktywność i efektywność witryny.",
    },
  };

  return (
    <section className="p-6 my-10 xl:my-32 lg:px-24 2xl:px-44 2xl:min-h-[55vh]">
      <h2 className="text-4xl leading-snug xl:text-5xl text-center font-semibold dark:text-neutral-200">
        Wykorzystywane Technologie
      </h2>
      <div className="flex items-center text-5xl xl:text-6xl px-6 xl:px-52 my-14 xl:my-24 justify-between dark:text-neutral-400 ">
        <RiNextjsLine
          onClick={() => setActiveTech("Next.js")}
          className={`rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ${
            activeTech === "Next.js" ? "bg-green-500 p-1 text-white" : ""
          }`}
        />
        <RiWordpressFill
          onClick={() => setActiveTech("Wordpress")}
          className={`  rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ${
            activeTech === "Wordpress" ? "bg-green-500 p-1 text-white" : ""
          }`}
        />

        <AiOutlinePython
          onClick={() => setActiveTech("Python")}
          className={` rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ${
            activeTech === "Python" ? "bg-green-500 p-1 text-white" : ""
          }`}
        />
        <RiReactjsFill
          onClick={() => setActiveTech("React")}
          className={` rounded-xl cursor-pointer hover:shadow-xl transition duration-300 ${
            activeTech === "React" ? "bg-green-500 p-1 text-white" : ""
          }`}
        />
        <RiBrainLine
          onClick={() => setActiveTech("AI")}
          className={`rounded-xl cursor-pointer  hover:shadow-xl transition duration-300 ${
            activeTech === "AI" ? "bg-green-500 p-1 text-white" : ""
          }`}
        />
      </div>
      <div className="text-center xl:w-3/5 xl:mx-auto">
        <h3 className="mt-10 mb-6 text-2xl xl:text-3xl font-semibold dark:text-neutral-200">
          {techDetails[activeTech].name}
        </h3>
        <p className="text-neutral-900 font-light xl:text-lg dark:text-neutral-300">
          {techDetails[activeTech].description}
        </p>
      </div>
    </section>
  );
}

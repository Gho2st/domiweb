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
        "Next.js oferuje Server-Side Rendering (SSR) i Static Site Generation (SSG), co przekłada się na szybsze ładowanie stron. Klienci docenią responsywne i efektywne strony, co może przyczynić się do zwiększenia zadowolenia użytkowników.",
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
      description: "Sztuczna inteligencja to...",
    },
  };

  return (
    <section className="p-6 my-10 xl:my-20 lg:px-24 2xl:px-44">
      <h2 className="text-2xl xl:text-5xl text-center font-semibold">
        Wykorzystywane Technologie
      </h2>
      <div className="flex items-center text-6xl px-6 xl:px-52 my-14 xl:my-20 justify-between ">
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
        <h3 className="mt-10 mb-6 text-2xl xl:text-3xl font-semibold">
          {techDetails[activeTech].name}
        </h3>
        <p className="text-neutral-900 font-light xl:text-lg">
          {techDetails[activeTech].description}
        </p>
      </div>
    </section>
  );
}

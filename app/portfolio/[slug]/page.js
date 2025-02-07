import Nav from "@/components/UI/Nav/Nav";
import projects from "../../data/project"; // Ścieżka do danych
import Footer from "@/components/UI/Footer/Footer";
import Image from "next/image";
import Cta from "@/components/Homepage/Cta";
import { FaQuoteRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

// Dynamiczne metadane
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const currentProject = projects.find((p) => p.id === slug);

  if (!currentProject) {
    return {
      title: "Projekt nie znaleziony",
      description: "Nie znaleziono projektu o podanym adresie.",
    };
  }

  return {
    title: currentProject.title,
    description: currentProject.header,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }) {
  const slug = (await params).slug; // Pobierz dynamiczny parametr
  //   console.log("Parametr slug:", slug);

  // Znajdź projekt na podstawie slug
  const currentProject = projects.find((p) => p.id === slug);

  if (!currentProject) {
    return (
      <>
        <Nav />
        <div className="p-6 xl:px-24 2xl:px-44 mt-16 mb-10 dark:text-neutral-200">
          <h1 className="text-3xl mb-6">Błąd - nie znaleziono</h1>
          <p className="text-lg font-light">
            Wystąpił błąd, nie znaleziono odpowiedniego projektu w portfolio
            dotyczącego tego linku.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="p-6 xl:px-24 2xl:px-44">
        {/* Hero container */}
        <div className="grid xl:grid-cols-2 gap-x-20 gap-y-16 xl:gap-y-0 mt-10 xl:mt-20 xl:mb-44 ">
          <div>
            <h1 className="text-3xl font-semibold text-gray-600 dark:text-neutral-200 mb-10">
              {currentProject.title}
            </h1>
            <h3 className="my-10 xl:my-16 font-semibold text-xl 2xl:text-3xl leading-snug dark:text-neutral-300">
              {currentProject.header}
            </h3>
            <Link
              className="inline-flex gap-2 items-center font-semibold group xl:text-lg dark:text-neutral-200"
              href={`${currentProject.link}`}
            >
              Czytaj więcej
              <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
                <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
              </div>
            </Link>
          </div>
          <div className="">
            <Image
              src={`/portfolio/${currentProject.id}/${currentProject.id}.png`}
              width={100}
              height={100}
              layout="responsive"
              className="rounded-xl"
              alt={`Grafika przedstawiająca stronę internetową ${currentProject.title}`}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="grid xl:grid-cols-3 mt-20">
          <h2 className="text-2xl xl:text-2xl 2xl:text-3xl font-semibold mb-5 xl:mb-0 dark:text-neutral-200">
            O projekcie
          </h2>
          <p className="col-span-2 font-light xl:text-lg dark:text-neutral-400">
            {currentProject.description}
          </p>
        </div>
        {/* MORE PHOTOS */}
        <div className="grid xl:grid-cols-2 gap-y-10 xl:gap-y-0 xl:gap-x-10 my-14 xl:my-44 ">
          <Image
            src={`/portfolio/${currentProject.id}/1.png`}
            height={100}
            width={100}
            layout="responsive"
            className="rounded-xl"
            alt={currentProject.id}
          />
          <Image
            src={`/portfolio/${currentProject.id}/2.png`}
            height={100}
            width={100}
            layout="responsive"
            className="rounded-xl"
            alt={currentProject.id}
          />
        </div>
        {/* REVIEW */}
        <section className="p-6  xl:px-24  2xl:px-44 mb-14 2xl:mb-44">
          <div className="relative xl:w-3/4 xl:mx-auto">
            <p className="text-xl xl:text-3xl xl:leading-snug text-gray-700 dark:text-neutral-300 font-semibold z-10">
              {currentProject.review}
            </p>
            <div className="mt-6 mb-1 xl:text-xl font-semibold dark:text-neutral-300">
              {currentProject.name}
            </div>
            <div className="text-sm xl:text-base text-gray-500 dark:text-neutral-400">
              {currentProject.company}
            </div>
            <div className="absolute -z-10 top-0 right-5">
              <FaQuoteRight className="text-[13rem] opacity-60 text-slate-200 dark:text-neutral-500" />
            </div>
          </div>
        </section>
        {/* MORE INFO */}
        <div className="grid xl:grid-cols-3 mt-20 xl:mt-32 mb-10 xl:mb-44">
          <h2 className="text-2xl xl:text-2xl 2xl:text-3xl font-semibold mb-5 xl:mb-0 dark:text-neutral-200">
            Osiągnięto
          </h2>
          <p className="col-span-2 font-light xl:text-lg dark:text-neutral-400">
            {currentProject.target}
          </p>
        </div>
        <Cta />
      </div>
      <Footer />
    </>
  );
}

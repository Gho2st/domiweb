import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 py-10 my-10">
      <p className="text-center font-medium text-xl xl:text-2xl text-green-500">
        Popracujmy razem
      </p>
      <h2 className="text-center text-3xl leading-snug xl:text-4xl font-semibold mb-8 mt-5 dark:text-neutral-200">
        Potrzebujesz Ciekawy Projekt?
      </h2>
      <div className="flex justify-center">
        <Link
          className="inline-flex gap-2 items-center font-semibold group text-lg dark:text-neutral-200 "
          href="/kontakt"
        >
          Porozmawiajmy
          <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
            <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
          </div>
        </Link>
      </div>

      <div className=" flex justify-between w-4/5 xl:w-3/5 mx-auto text-4xl mt-14 xl:mt-20 dark:text-neutral-400">
        <Link aria-label="Przejdź do profilu Domiweb na facebooku" href={"https://www.facebook.com/profile.php?id=100093145422125"}>
          <FaFacebook className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        </Link>
        <Link aria-label="Przejdź do profilu Domiweb na instagramie" href={"https://www.instagram.com/domiweb.pl/"}>
          <FaInstagram className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        </Link>
        <Link aria-label="Przejdź do profilu Właściciela na linkedin" href={"https://www.linkedin.com/in/dominikjojczyk/"}>
          <FaLinkedinIn className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        </Link>
        <Link aria-label="Przejdź do profilu Właściciela na github" href={"https://github.com/Gho2st"}>
          <FaGithub className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}

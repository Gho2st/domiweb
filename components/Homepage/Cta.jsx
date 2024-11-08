import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 py-10">
      <p className="text-center font-medium xl:text-xl text-green-500">Popracujmy razem</p>
      <h2 className="text-center text-2xl xl:text-4xl font-semibold mb-8 mt-5">
        Potrzebujesz Ciekawy Projekt?
      </h2>
      <div className="flex justify-center">
        <Link
          className="inline-flex gap-2 items-center font-semibold group xl:text-lg"
          href="#"
        >
          Porozmawiajmy
          <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
            <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
          </div>
        </Link>
      </div>

      <div className=" flex justify-between w-3/5 mx-auto text-4xl mt-14 xl:mt-20 mb-4">
        <FaFacebook className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaInstagram className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaLinkedinIn className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaGithub className="transtion duration-300 hover:text-green-500 cursor-pointer" />
      </div>
    </section>
  );
}

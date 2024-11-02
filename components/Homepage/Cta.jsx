import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="p-6">
      <p className="text-center font-medium text-green-500">Popracujmy razem</p>
      <h2 className="text-center text-2xl font-semibold mb-8 mt-5">
        Potrzebujesz Ciekawy Projekt?
      </h2>
      <div className="flex justify-center">
        <Link
          className="inline-flex gap-2 items-center font-semibold group"
          href="#"
        >
          Porozmawiajmy
          <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
            <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
          </div>
        </Link>
      </div>

      <div className="px-6 flex justify-between text-4xl mt-14 mb-4">
        <FaFacebook className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaInstagram className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaLinkedinIn className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaGithub className="transtion duration-300 hover:text-green-500 cursor-pointer" />
      </div>
    </section>
  );
}

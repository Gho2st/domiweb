import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="p-6">
      <p className="text-center text-green-500">Popracujmy razem</p>
      <h2 className="text-center text-2xl font-semibold mb-12 mt-5">
        Potrzebujesz Ciekawy Projekt?
      </h2>
      <div className="flex justify-center">
        <Link
          href="#"
          className="p-3 px-4 bg-green-500 rounded-xl text-white font-bold hover:opacity-80 transtion duration-300"
        >
          Porozmawiajmy
        </Link>
      </div>

      <div className="flex justify-between text-4xl mt-14 mb-4">
        <FaFacebook className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaInstagram className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaLinkedinIn className="transtion duration-300 hover:text-green-500 cursor-pointer" />
        <FaGithub className="transtion duration-300 hover:text-green-500 cursor-pointer" />
      </div>
    </section>
  );
}

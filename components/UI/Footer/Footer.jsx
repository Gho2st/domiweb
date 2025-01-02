"use client";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t-2 dark:border-green-500 p-4 text-center dark:text-neutral-200">
      <p className="my-3">
        <span> &copy; {currentYear} DomiWeb</span> - Wszelkie Prawa Zastrzeżone
      </p>
      <Link
        href="/polityka_prywatnosci_domiweb.pdf"
        className="text-sm cursor-pointer hover:text-green-500"
      >
        Polityka Prywatności
      </Link>
      <span className="absolute text-3xl text-green-600 bottom-10 right-3">
        <IoIosArrowUp onClick={scrollToTop} className="cursor-pointer" />
      </span>
    </footer>
  );
}

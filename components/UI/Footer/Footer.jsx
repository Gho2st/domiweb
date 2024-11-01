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
    <footer className="relative border-t-2 p-4 text-center">
      <p className="my-3">
        <span> &copy; {currentYear} DomiWeb</span> - Wszelkie Prawa Zastrzeżone
      </p>
      <Link href="#" className="text-sm">
        Polityka Prywatności
      </Link>
      <span className="absolute text-3xl text-green-600 bottom-3 right-3">
        <IoIosArrowUp onClick={scrollToTop} className="cursor-pointer" />
      </span>
    </footer>
  );
}

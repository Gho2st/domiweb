"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";

import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // Dodajemy i usuwamy overflow-hidden na body, gdy zmienia się stan menu
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Usuwamy klasę przy odmontowaniu komponentu, na wypadek gdyby menu było otwarte
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Define the animation variants for the menu
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Nav Container */}
      <nav className="relative mx-auto">
        <div className="flex p-6 lg:px-24 pb-2 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-semibold text-xl">
            <div className="w-16">
              <Image
                src={"/logo2.png"}
                width={100}
                height={100}
                layout="responsive"
                alt="logo firmy Domiweb składające się z liter D i W"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link href="/o-nas" className=" ">
              O Nas
            </Link>
            <Link href="/kontakt" className=" ">
              Kontakt
            </Link>
            <Link href="/pozycjonowanie" className=" ">
              Pozycjonowanie
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            id="menu-btn"
            className={`block hamburger lg:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              id="menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute p-6 pt-4 bg-neutral-100 w-full h-screen top-15 z-20"
            >
              <div className="flex flex-col items-center justify-center w-full text-lg space-y-6 font-semibold rounded-sm">
                <Link href="/o-nas" className="w-full text-center">
                  O Nas
                </Link>
                <Link href="kontakt" className="w-full text-center">
                  Kontakt
                </Link>
                <Link href="/pozycjonowanie" className="w-full text-center">
                  Pozycjonowanie
                </Link>
                <div className="h-[0.1rem] w-full bg-gray-300"></div>
                <Link
                  href="tel:+48576985894"
                  className="inline-flex justify-center items-center gap-2  text-center text-green-500 font-bold"
                >
                  Umów Spotkanie
                  <IoIosCall className="text-2xl" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

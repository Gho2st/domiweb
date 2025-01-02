"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav className="relative mx-auto">
        <div className="flex p-6 xl:px-24 2xl:px-44 pb-2 items-center justify-between">
          <Link href="/" className="font-semibold text-xl">
            <div className="w-16">
              <Image
                src={"/logo-light.png"}
                width={100}
                height={100}
                layout="responsive"
                alt="logo firmy Domiweb składające się z liter D i W"
                className="block dark:hidden"
              />
              <Image
                src={"/logo-dark.png"}
                width={100}
                height={100}
                layout="responsive"
                alt="logo firmy Domiweb składające się z liter D i W"
                className="hidden dark:block"
              />
            </div>
          </Link>
          <div className="hidden space-x-8 font-bold lg:flex dark:text-neutral-200">
            <Link href="/o-nas">O Nas</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pozycjonowanie">Pozycjonowanie</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link
              href="tel:+48576985894"
              className="inline-flex justify-center items-center gap-2 text-green-500 font-bold"
            >
              Umów Spotkanie
              <IoIosCall className="text-xl" />
            </Link>
            <button
              onClick={toggleDarkMode}
              className="inline-flex justify-center items-center"
            >
              <MdDarkMode className="text-xl" />
            </button>
          </div>
          <button
            id="menu-btn"
            className={`block hamburger lg:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="hamburger-top dark:bg-neutral-300"></span>
            <span className="hamburger-middle dark:bg-neutral-300"></span>
            <span className="hamburger-bottom dark:bg-neutral-300"></span>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              id="menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute p-6 pt-4 bg-neutral-100 dark:bg-neutral-900 w-full h-screen top-15 z-20"
            >
              <div className="flex flex-col items-center justify-center w-full text-lg space-y-6 font-semibold rounded-sm dark:text-neutral-300">
                <Link href="/o-nas">O Nas</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/pozycjonowanie">Pozycjonowanie</Link>
                <div className="h-[0.1rem] w-full bg-gray-300"></div>
                <Link
                  href="tel:+48576985894"
                  className="inline-flex justify-center items-center gap-2 text-green-500 font-bold"
                >
                  Umów Spotkanie
                  <IoIosCall className="text-2xl" />
                </Link>
                <button
                  onClick={toggleDarkMode}
                  className="inline-flex justify-center items-center"
                >
                  <MdDarkMode className="text-xl" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "Jaki jest koszt strony internetowej / aplikacji?",
      answer:
        "Koszt stworzenia strony internetowej lub aplikacji zależy od stopnia jej funkcjonalności, złożoności projektu oraz użytej technologii. Proste strony wizytówkowe zaczynają się od 600 zł.",
    },
    {
      question: "Jaki jest czas realizacji projektu?",
      answer:
        "Czas realizacji projektu wynosi zazwyczaj od tygodnia do miesiąca, w zależności od jego skomplikowania.",
    },
    {
      question: "Ile kosztuje utrzymanie witryny internetowej?",
      answer:
        "Ceny hostingu + certyfikat SSL to ok. 120-150zł rocznie, domeny 70zł rocznie.",
    },
    {
      question: "Ile trzeba czekać na odpowiedź?",
      answer:
        "W większości przypadków odpowiadamy od razu, maksymalnie do paru godzin.",
    },
    // Możesz dodać więcej pytań i odpowiedzi tutaj
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="p-6 xl:p-24 2xl:p-44">
      <h2 className="text-2xl xl:text-4xl text-center font-semibold dark:text-neutral-200">
        Często zadawane pytania
      </h2>
      <div className="flex flex-col space-y-4 mt-10 xl:mt-16 2xl:mt-20">
        {faqs.map((faq, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div key={index} className="rounded-lg overflow-hidden">
              <div
                className="flex flex-col justify-between  xl:w-3/4 xl:mx-auto bg-white dark:bg-neutral-950 p-3 xl:p-5  cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between">
                  <span className="font-medium xl:text-xl dark:text-neutral-300">
                    {faq.question}
                  </span>
                  <div className="text-2xl dark:text-neutral-300">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }} // Używamy "auto" dla płynności
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Użycie easing dla płynniejszego przejścia
                    style={{ overflow: "hidden" }} // Zapewnia, że zawartość nie wychodzi poza granice
                  >
                    <div className="font-light text-neutral-900 dark:text-neutral-400  xl:w-3/4 xl:mx-auto xl:text-lg bg-white dark:bg-neutral-950 px-3 pb-5 xl:px-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

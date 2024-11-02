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
    <section className="p-6">
      <h2 className="text-2xl text-center font-semibold">
        Często zadawane pytania
      </h2>
      <div className="flex flex-col space-y-4 mt-10">
        {faqs.map((faq, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div key={index} className="rounded-lg overflow-hidden">
              <div
                className="flex flex-col justify-between bg-white p-3 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{faq.question}</span>
                  <div className="text-2xl">{isOpen ? "−" : "+"}</div>
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
                    <div className="font-light text-neutral-900 bg-white p-3">
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

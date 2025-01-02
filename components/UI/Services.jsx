"use client";
import { motion, useInView } from "framer-motion";
import { FaArrowTurnDown } from "react-icons/fa6";
import { useRef } from "react";

function ServiceCard({ icon, title, description, isLeftAligned }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      className={`relative w-5/6 xl:w-3/5 p-6 xl:p-10 rounded-lg bg-white dark:bg-neutral-950 ${
        isLeftAligned ? "rounded-r-xl ml-0" : "rounded-l-xl ml-auto"
      } my-14 xl:my-24`}
      initial={{ opacity: 0, x: isLeftAligned ? -200 : 200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2 }}
    >
      <div className="bg-green-500 rounded-lg inline-block p-3">{icon}</div>
      <h2 className="text-xl 2xl:text-3xl my-5 font-semibold dark:text-neutral-200">{title}</h2>
      <p className="text-neutral-900 font-light 2xl:text-lg dark:text-neutral-400">{description}</p>
      <span
        className={`absolute top-[50%] ${
          isLeftAligned ? "right-[-30px]" : "left-[-30px]"
        }`}
      >
        <FaArrowTurnDown
          className={`text-5xl text-green-500 ${
            isLeftAligned ? "" : "transform scale-x-[-1]"
          }`}
        />
      </span>
    </motion.article>
  );
}

export default function Services({ cards }) {
  return (
    <section className="pb-10 mt-14 xl:px-44">
      {cards.map((card, index) => (
        <ServiceCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          isLeftAligned={index % 2 === 0}
        />
      ))}
    </section>
  );
}

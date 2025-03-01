import { FaQuoteRight } from "react-icons/fa";

export default function Review() {
  return (
    <section className="p-6 py-20 xl:px-24 2xl:py-32 2xl:px-44">
      <div className="relative xl:w-3/4 xl:mx-auto">
        <p className="text-xl leading-snug xl:text-3xl xl:leading-snug text-gray-700 dark:text-neutral-200 font-semibold z-10">
          Dzięki stronie internetowej moimi usługami zainteresowało się wiele
          nowych klientów. Strona jest przejrzysta i prosta w obsłudze a na tym
          najbardziej mi zależało.<br></br>Polecam!
        </p>
        <div className="mt-6 mb-1 xl:text-xl font-semibold dark:text-neutral-300">
          Jakub Oleś
        </div>
        <div className="text-sm xl:text-base text-gray-500 dark:text-neutral-400">
          Oleś Garage
        </div>
        <div className="absolute -z-10 top-0 right-5">
          <FaQuoteRight className="text-[13rem] opacity-60 text-slate-200 dark:text-neutral-500" />
        </div>
      </div>
    </section>
  );
}

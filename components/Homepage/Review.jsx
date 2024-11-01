import { FaQuoteRight } from "react-icons/fa";

export default function Review() {
  return (
    <section>
      <div className="relative p-6 pt-20">
        <p className="text-xl text-gray-700 font-semibold z-10">
          Dzięki stronie internetowej moimi usługami zainteresowało się wiele
          nowych klientów. Strona jest przejrzysta i prosta w obsłudze a na tym
          najbardziej mi zależało.<br></br>Polecam!
        </p>
        <div className="mt-6 mb-1 font-semibold">Jakub Oleś</div>
        <div className="text-sm text-gray-500">Oleś Garage</div>
        <div className="absolute -z-10 top-0 right-5">
          <FaQuoteRight className="text-[13rem] opacity-60  text-slate-200" />
        </div>
      </div>
    </section>
  );
}

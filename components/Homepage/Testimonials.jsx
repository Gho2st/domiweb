"use client";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className="fill-yellow-400 text-xl xl:text-3xl" />
  ));

  return (
    <section className="p-6 xl:px-24 2xl:px-44">
      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold my-6">
          Opinie Klientów o Naszych Usługach Tworzenia Stron i SEO
        </h2>
        <p className="text-neutral-900 xl:text-lg font-light">
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
      </div>
      <div className="my-10 xl:my-20 ">
        <div className="p-6 xl:p-10 bg-white rounded-xl xl:w-3/5 xl:mx-auto">
          <div className="flex justify-between mb-10">
            <div className="w-9 xl:w-14">
              <Image
                src={"/google.png"}
                width={10}
                height={10}
                layout="responsive"
              />
            </div>

            <div className="flex gap-1">{stars}</div>
          </div>
          <p className="my-8 xl:text-lg text-neutral-900 font-light">
            Daję pięć gwiazdek za świetny projekt ale również za współpracę.
            Jeśli potrzebujesz profesjonalnie wykonanej strony polecam Pana
            Dominika
          </p>
          <span className="font-semibold xl:text-lg">Milena Głowacka</span>
        </div>
      </div>
    </section>
  );
}

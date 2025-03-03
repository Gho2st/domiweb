"use client";
import Image from "next/image";
import { FaGoogle, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className="fill-yellow-400 text-xl xl:text-3xl" />
  ));

  const testimonials = [
    {
      name: "Milena Głowacka",
      review:
        "Jestem bardzo zadowolona z całokształtu wykonanego projektu. Pan Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę niezbędną do wykonywania swojej pracy :)",
    },
    {
      name: "Barbara Piękoś",
      review:
        "Daję pięć gwiazdek za świetny projekt ale również za współpracę. Jeśli potrzebujesz profesjonalnie wykonanej strony polecam Pana Dominika",
    },
    {
      name: "Patryk Jędrzejek",
      review:
        "Genialna współpraca na najwyższym poziomie. DomiWeb to wysoki profesjonalizm, zaawansowane technologie przez co moja strona jest bezkonkurencyjna do innych w tej niszy. Do tego świetna komunikacja na każdym poziomie. Polecam!",
    },
  ];

  return (
    <section className="p-6 xl:px-24 2xl:px-44">
      <div className="xl:w-3/4">
        <h2 className="text-2xl leading-snug xl:text-4xl xl:leading-snug font-semibold my-6 dark:text-neutral-200">
          Opinie Klientów o Naszych Usługach Tworzenia Stron i SEO
        </h2>
        <p className="text-neutral-900 dark:text-neutral-300 xl:text-xl font-light">
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row my-10 mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 min-h-[300px] md:min-h-[350px] xl:min-h-[400px]"
          >
            <div className="p-6 2xl:p-10 shadow-xl bg-white dark:bg-neutral-950 rounded-xl  h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between mb-6">
                  <div className="w-9 xl:w-14">
                    <Image
                      src="/google.png"
                      alt="Google logo"
                      width={10}
                      height={10}
                      layout="responsive"
                    />
                  </div>
                  <div className="flex gap-1">{stars}</div>
                </div>
                <p className="my-8 2xl:text-lg text-neutral-900 dark:text-neutral-400 font-light">
                  {testimonial.review}
                </p>
              </div>
              <span className="font-semibold xl:text-lg dark:text-neutral-200">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

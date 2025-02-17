"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FaGoogle, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className="fill-yellow-400 text-xl xl:text-3xl" />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Milena Głowacka",
      review:
        "Jestem bardzo zadowolona z całokształtu wykonanego projektu. Pan Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę niezbędną do wykonywania swojej pracy :)",
    },
    {
      name: "Kinga Fraś",
      review: "Polecam, pełen profesjonalizm. Starannie wykonywane zlecenia!!",
    },
    {
      name: "Barbara Piękoś",
      review:
        "Daję pięć gwiazdek za świetny projekt ale również za współpracę. Jeśli potrzebujesz profesjonalnie wykonanej strony polecam Pana Dominika",
    },
    {
      name: "szabaga",
      review: "Szczerze polecam, pełen profesjonalizm!",
    },
    {
      name: "Dominik Cebula",
      review:
        "Polecam, profesjonalna obsługa, strona przemyślana i miła dla oka:)",
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
        <h2 className="text-2xl xl:text-4xl xl:leading-snug font-semibold my-6 dark:text-neutral-200">
          Opinie Klientów o Naszych Usługach Tworzenia Stron i SEO
        </h2>
        <p className="text-neutral-900 dark:text-neutral-300 xl:text-xl font-light">
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
      </div>
      <Slider {...settings} className="my-10 mt-20 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="pb-10">
            <div className="p-6 xl:p-10 bg-white dark:bg-neutral-950 rounded-xl w-11/12 mx-auto ">
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
              <p className="my-8 xl:text-lg text-neutral-900 dark:text-neutral-300 font-light">
                {testimonial.review}
              </p>
              <span className="font-semibold xl:text-lg dark:text-neutral-200">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

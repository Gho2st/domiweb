import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function PortfolioItem({ title, description, image, link, id }) {
  return (
    <div className="bg-white dark:bg-neutral-950 shadow-lg rounded-xl p-6 2xl:p-10">
      <div>
        <Image
          className="rounded-xl"
          src={image}
          width={10}
          height={10}
          layout="responsive"
          alt={title}
        />
      </div>
      <h3 className="text-2xl xl:text-3xl font-semibold  mt-10 dark:text-neutral-300">{title}</h3>
      <p className="my-5 text-neutral-900 dark:text-neutral-400 font-light 2xl:text-lg">
        {description}
      </p>
      <Link
        className="inline-flex gap-2 items-center font-semibold group xl:text-lg dark:text-neutral-300"
        href={`/portfolio/${id}`}
      >
        Czytaj więcej
        <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
          <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
        </div>
      </Link>
    </div>
  );
}

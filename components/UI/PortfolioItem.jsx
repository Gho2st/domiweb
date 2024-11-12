import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function PortfolioItem({ title, description, imageSrc, link }) {
  return (
    <div className="bg-white rounded-xl p-6 2xl:p-10">
      <div>
        <Image
          className="rounded-xl"
          src={imageSrc}
          width={10}
          height={10}
          layout="responsive"
          alt={title}
        />
      </div>
      <h3 className="text-2xl xl:text-3xl font-semibold  mt-10">{title}</h3>
      <p className="my-5 text-neutral-900 font-light 2xl:text-lg">
        {description}
      </p>
      <Link
        className="inline-flex gap-2 items-center font-semibold group xl:text-lg"
        href={link}
      >
        Zobacz sam
        <div className="p-2 rounded-full transition duration-300 group-hover:bg-green-500">
          <FaLongArrowAltRight className="text-xl transition duration-300 group-hover:text-white " />
        </div>
      </Link>
    </div>
  );
}

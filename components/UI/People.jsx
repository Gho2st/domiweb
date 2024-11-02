import Image from "next/image";

export default function People() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold">Ludzie, którzy tworzą DomiWeb</h2>
      {/* card container */}
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <div className="relative w-full h-64 bg-green-300 rounded-2xl overflow-hidden">
            <Image
              src={"/people/dominik2.png"}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <h3 className="mt-5">Dominik Jojczyk</h3>
          <p className="text-sm mt-1 font-semibold text-gray-500">
            Założyciel, Engineering Team Leader
          </p>
        </div>
        {/* 2 card */}
        <div>
          <div className="relative w-full h-64 bg-green-300 rounded-2xl overflow-hidden">
            <Image
              src={"/people/julia.png"}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <h3 className="mt-5">Julia Płachecka</h3>
          <p className="text-sm mt-1 font-semibold text-gray-500">
            Projektant UI & UX
          </p>
        </div>
      </div>
    </section>
  );
}

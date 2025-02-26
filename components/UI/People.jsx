import Image from "next/image";

export default function People() {
  return (
    <section className="p-6 xl:px-24 2xl:px-44 py-10 mb-10">
      <h2 className="text-3xl leading-snug mb-10 font-semibold dark:text-neutral-200">
        Ludzie, którzy tworzą DomiWeb
      </h2>
      {/* card container */}
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="">
          <div className="relative mb-10 w-full h-64 bg-green-300 rounded-2xl overflow-hidden">
            <Image
              src={"/people/dominik2.png"}
              alt="Zdjęcie Dominika Jojczyka, właściciela firmy Domiweb."
              layout="fill"
              className="rounded-2xl object-cover xl:object-contain"
            />
          </div>
          <h3 className="mt-5 font-semibold dark:text-neutral-300">
            Dominik Jojczyk
          </h3>
          <p className="text-sm mt-1 font-semibold text-gray-500 dark:text-neutral-400">
            Pasjonat technologii od małego. „Uwielbiam rozwiązywać zagadki i pić
            kawę przy kodowaniu – a najbardziej cieszy mnie, gdy Twój projekt
            ożywa.”
          </p>
        </div>
        {/* 2 card */}
        <div className="">
          <div className="relative mb-10 w-full h-64 bg-green-300 rounded-2xl overflow-hidden">
            <Image
              src={"/people/julia.png"}
              layout="fill"
              className="rounded-2xl object-cover xl:object-contain"
              alt="Zdjęcie Julii Płacheckiej, projektantki UI & UX firmy Domiweb."
            />
          </div>
          <h3 className="mt-5 font-semibold dark:text-neutral-300">Julia</h3>
          <p className="text-sm mt-1 font-semibold text-gray-500 dark:text-neutral-400">
            Sercem designerka, głową strateg. „Projektuję tak, byś czuł się
            dumny ze swojej strony – ma być piękna i Twoja.”
          </p>
        </div>
      </div>
    </section>
  );
}

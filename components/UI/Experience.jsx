export default function Experience() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold">Doświadczenie</h2>
      <p className="text-neutral-900 text-lg font-light mt-6 mb-10 ">
        Dziś, prowadząc firmę, wierzymy, że kluczowym elementem sukcesu jest
        ludzki kontakt. Tworzymy nowoczesne projekty, ale najważniejsze są dla
        nas relacje z klientami. Chcemy poznać Twoje potrzeby i wspólnie
        wypracować efektywne rozwiązania. Jeśli szukasz zaangażowanego partnera
        do współpracy, zapraszamy!
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col rounded-xl  p-4 bg-white">
          <div className="text-4xl mb-3 ">10+</div>
          <span className="font-light text-neutral-900">
            zrealizowanych stron internetowych
          </span>
        </div>
        <div className="flex flex-col  rounded-xl p-4 bg-white">
          <div className="text-4xl mb-3 ">3</div>
          <span className="font-light text-neutral-900">
            lata programowania
          </span>
        </div>
        <div className="flex flex-col  rounded-xl  p-4 bg-white">
          <div className="text-4xl mb-3 ">26</div>
          <span className="font-light text-neutral-900">
            opinii na profilu firmowym
          </span>
        </div>
        <div className="flex flex-col  rounded-xl  p-4 bg-white">
          <div className="text-4xl mb-3 ">2</div>
          <span className="font-light text-neutral-900">
            osoby pracujące na Twój sukces
          </span>
        </div>
      </div>
    </section>
  );
}

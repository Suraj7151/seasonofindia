/* eslint-disable @next/next/no-img-element */
export default function FruitHero() {
  return (
    <section className="bg-[#FBB920]">
      <div className="max-w-7xl mx-auto px-6 py-44 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Fresh Exotic Fruits
          </h1>
          <h2 className="text-4xl md:text-5xl text-gray-800 mt-2 font-light">in Our Store</h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg">
            The generated Lorem Ipsum is therefore always free from repetition injected humour,
            or non-characteristic words etc.
          </p>

          <button className="mt-8 px-8 py-3 text-gray-800 border border-white rounded-full font-bold hover:bg-white hover:text-yellow-700 transition">
            BUY
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 md:mt-0">
          <img
            src="/home/apple.jpg"
            alt="Basket of Apples"
            className="max-h-[400px] md:max-h-[500px] object-contain"
          />

          <div className="absolute -top-5 -left-5 md:-top-10 md:-left-10 bg-white text-gray-800 text-center rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow-lg">
            <span className="text-xl md:text-2xl font-bold leading-tight">
              1
              <sup className="text-sm align-top">50$</sup>
              <br />
              <span className="text-sm font-normal">kg</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

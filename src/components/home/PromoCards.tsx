/* eslint-disable @next/next/no-img-element */
const promos = [
  {
    title: "Fresh Apples",
    offer: "20% OFF",
    category: "Fresh Apples",
    image: "/home/apple.jpg",
    color: "bg-orange-400",
    overlayColor: "bg-lime-500",
  },
  {
    title: "Free delivery",
    offer: "",
    category: "Tasty Fruits",
    image: "/home/strawberry.jpg",
    color: "bg-gray-700",
    overlayColor: "bg-white",
    textColor: "text-gray-700",
    categoryColor: "text-lime-500",
  },
  {
    title: "Discount 30$",
    offer: "",
    category: "Exotic Vegetable",
    image: "/home/vegetable.jpg",
    color: "bg-lime-500",
    overlayColor: "bg-orange-400",
  },
];

export default function PromoCards() {
  return (
    <section className="mx-14 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12">
        {promos.map((promo, index) => (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all duration-300 shadow-md`}
          >
            {/* Image section */}
            <div className="h-64 w-full">
              <img
                src={promo.image}
                alt={promo.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Colored bottom bar */}
            <div className={`${promo.color} p-20 relative`}>
              {/* Overlay offer box */}
              <div
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-6 py-6 rounded-md text-center shadow-md z-10 ${
                  promo.overlayColor
                } ${promo.textColor || "text-white"}`}
              >
                <h4
                  className={`text-sm font-semibold uppercase ${
                    promo.categoryColor || "text-white"
                  }`}
                >
                  {promo.category}
                </h4>
                <p className="text-xl font-bold">{promo.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

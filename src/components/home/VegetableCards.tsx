/* eslint-disable @next/next/no-img-element */
import { FiShoppingBag } from 'react-icons/fi';

const vegetables = [
  {
    title: 'Parsely',
    price: '$4.99 / kg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    image: '/home/apple.jpg',
  },
  {
    title: 'Parsely',
    price: '$4.99 / kg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    image: '/home/strawberry.jpg',
  },
  {
    title: 'Banana',
    price: '$7.99 / kg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    image: '/home/strawberry.jpg',
  },
  {
    title: 'Bell Papper',
    price: '$7.99 / kg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt',
    image: '/home/strawberry.jpg',
  },
];

export default function VegetableCards() {
  return (
    <section className="mx-16 py-12">
      <h2 className="text-4xl font-bold text-gray-700 mb-8 text-center">
        Fresh Organic Vegetables
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {vegetables.map((veg, idx) => (
          <div
            key={idx}
            className="border border-lime-400 rounded-xl overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={veg.image}
                alt={veg.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-lime-500 text-white text-sm px-3 py-1 rounded-md">
                Vegetable
              </span>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-700">{veg.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{veg.description}</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="font-bold text-lg text-gray-700">{veg.price}</span>
                <button className="flex items-center gap-2 border border-yellow-400 text-lime-600 px-4 py-1 rounded-full hover:bg-yellow-100 transition">
                  <FiShoppingBag />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

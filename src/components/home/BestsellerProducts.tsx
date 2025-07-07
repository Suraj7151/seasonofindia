import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 2,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 3,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 4,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 5,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 6,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 7,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 8,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 9,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
  {
    id: 10,
    name: "Organic Tomato",
    image: "/home/strawberry.jpg",
    price: "3.12 $",
  },
];

export default function BestsellerProducts() {
  return (
    <div className="p-6 md:p-12">
      <h2 className="text-4xl font-bold text-center mb-2">Bestseller Products</h2>
      <p className="text-center text-gray-500 mb-10">
        Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
      </p>

      {/* Circle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="bg-white p-4 text-center rounded-lg shadow">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-3">
              <Image src={product.image} alt={product.name} width={112} height={112} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-gray-700">{product.name}</h3>
            <div className="text-green-600 my-2">
              ★★★★<span className="text-gray-400">★</span>
            </div>
            <p className="font-semibold text-gray-800">{product.price}</p>
            <button className="mt-2 text-green-700 bg-green-100 border border-yellow-400 rounded-full px-4 py-1 text-sm hover:bg-green-200">
              🛒 Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* Full Rectangle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(5, 9).map((product) => (
          <div key={product.id} className="bg-white p-4 text-center rounded-lg shadow">
            <div className="w-full h-40 rounded-xl overflow-hidden mb-3">
              <Image src={product.image} alt={product.name} width={400} height={160} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-gray-700">{product.name}</h3>
            <div className="text-green-600 my-2">
              ★★★★<span className="text-gray-400">★</span>
            </div>
            <p className="font-semibold text-gray-800">{product.price}</p>
            <button className="mt-2 text-green-700 bg-green-100 border border-yellow-400 rounded-full px-4 py-1 text-sm hover:bg-green-200">
              🛒 Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

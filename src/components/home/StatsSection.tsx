import { FaUser } from "react-icons/fa6"; // or use any icon lib you prefer

const stats = [
  { label: "SATISFIED CUSTOMERS", value: "1963" },
  { label: "QUALITY OF SERVICE", value: "99%" },
  { label: "QUALITY CERTIFICATES", value: "33" },
  { label: "AVAILABLE PRODUCTS", value: "789" },
];

export default function StatsSection() {
  return (
    <div className="bg-gray-50 py-10 px-4 md:mx-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-12 text-center"
          >
            <div className="text-yellow-400 flex justify-center mb-2">
              <FaUser size={40} />
            </div>
            <p className="text-[#215527] font-semibold text-xl mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-gray-700">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

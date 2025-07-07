import { FiTruck, FiShield, FiRefreshCw, FiPhone } from "react-icons/fi";

const features = [
  {
    icon: <FiTruck size={32} />,
    title: "Free Shipping",
    description: "Free on order over $300",
  },
  {
    icon: <FiShield size={32} />,
    title: "Security Payment",
    description: "100% security payment",
  },
  {
    icon: <FiRefreshCw size={32} />,
    title: "30 Day Return",
    description: "30 day money guarantee",
  },
  {
    icon: <FiPhone size={32} />,
    title: "24/7 Support",
    description: "Support every time fast",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-14 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 bg-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 py-10 rounded-xl shadow-sm"
          >
            <div className="bg-[#215527] text-white p-12 rounded-full relative mb-4">
              {/* Create the pin shape */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-[16px] border-t-yellow-400"></div>
              <div className="relative z-10">{feature.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

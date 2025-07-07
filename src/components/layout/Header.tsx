"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Trigger when scrollY > 50
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Green Address Bar */}
      <div className="mx-auto px-4">
        <div className="mx-[40px] p-5 bg-[#215527] rounded-tr-[148px] rounded-tl-[330px] rounded-br-[330px] rounded-bl-[148px]">
          <div className="flex justify-between w-full text-white text-sm">
            <div className="flex items-center space-x-4">
              <p>123 Street, New York</p>
              <p>Email@Example.com</p>
            </div>
            <div className="flex space-x-4">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Sales and Refunds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky White Navbar with smooth transition */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white py-2" : "bg-white py-6"
        }`}
      >
        <div className="mx-10 transition-all duration-300">
          <nav className="flex justify-between items-center">
            <a href="index.html">
              <h1 className="text-[#215527] font-bold text-[32px]">Season Of India</h1>
            </a>

            <div className="flex space-x-8 text-lg">
              <a href="index.html">Home</a>
              <a href="shop.html">Shop</a>
              <a href="shop-detail.html">Shop Detail</a>
              <a href="#">Pages</a>
              <a href="contact.html">Contact</a>
            </div>

            <div className="flex m-3">
              <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium border border-gray-500 rounded-full">
                🔍
              </button>
              <a href="#" className="relative ml-4">
                <span className="absolute bg-gray-500 rounded-full text-gray-800 px-1" style={{ top: "-10px", right: "-10px" }}>
                  3
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

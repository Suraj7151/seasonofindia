/* eslint-disable @next/next/no-img-element */
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3EADA] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Row: Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-[#215527] text-3xl font-bold">Fruitables</h2>
            <p className="text-orange-400">Fresh products</p>
          </div>
          <div className="flex w-full md:w-2/3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-l-lg text-gray-700"
            />
            <button className="bg-[#215527] text-white px-6 py-3 rounded-r-lg font-bold">
              Subscribe Now
            </button>
          </div>
          <div className="flex gap-4 text-orange-300 text-xl">
            <Twitter className="cursor-pointer" />
            <Facebook className="cursor-pointer" />
            <Youtube className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
          </div>
        </div>

        {/* Middle Row: Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-yellow-700 pt-10 text-sm">
          <div>
            <h4 className="text-xl font-semibold mb-2">Why People Like us!</h4>
            <p className="text-gray-300 mb-2">
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
            </p>
            <button className="mt-2 bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Shop Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Return Policy</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Account</h4>
            <ul className="space-y-2 text-gray-300">
              <li>My Account</li>
              <li>Shop details</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>International Orders</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Contact</h4>
            <p className="text-gray-300">Address: 1429 Netus Rd, NY 48247</p>
            <p className="text-gray-300">Email: Example@gmail.com</p>
            <p className="text-gray-300">Phone: +0123 4567 8910</p>
            <p className="text-gray-300 mt-2">Payment Accepted</p>
            <div className="mt-2 flex gap-2">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
          <p>
            © <span className="text-lime-400">Your Site Name</span>, All right
            reserved. Designed By{" "}
            <span className="text-lime-400 underline">HTML Codex</span>{" "}
            Distributed by <span className="text-yellow-400 underline">ThemeWagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

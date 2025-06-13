import BagImg from '../assets/bag1.jpeg';
import Image from 'next/image';
import { User } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#f9f5f3] min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="BKCDI Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl">BKCDI</span>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-red-500">New</a>
            <a href="#" className="hover:text-red-500">Best Sellers</a>
            <a href="#" className="hover:text-red-500">Apparel</a>
            <a href="#" className="hover:text-red-500">Accessories</a>
            <a href="#" className="hover:text-red-500">Home & Living</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
              Search
            </button>
            <User className="w-5 h-5 text-black" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mt-8 px-6">
        <div className="relative rounded-xl overflow-hidden bg-gray-200 h-80 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">BKCDI</h1>
            <p className="mt-2 text-lg text-gray-600">Satire for the chronically online</p>
            <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mt-12 px-6">
        <h2 className="text-xl font-semibold mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Apparel', 'Accessories', 'Home & Living'].map((title) => (
            <div key={title} className="rounded-lg overflow-hidden bg-white border border-gray-300 h-64 flex flex-col items-center justify-end text-center text-gray-700 font-medium relative"> {/* Added relative to parent for absolute positioning later */}
              {title === 'Accessories' ? (
                <>
                  <Image
                    src={BagImg}
                    alt="Bag"
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="absolute inset-0 z-0" 
                  />
                  <span className="relative z-10 bg-white bg-opacity-70 px-4 py-2 rounded-md mb-4 text-black font-semibold">
                    {title}
                  </span>
                </>
              ) : (
                title
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";
import React from "react";

const UserNavigation = () => {
  return (
    <>
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">
            SF
          </div>
          <div className="text-lg font-semibold text-black">Skylinee</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition">
            Home
          </Link>
          <Link href="/product" className="hover:text-slate-900 transition">
            Products
          </Link>
          <Link href="/solutions" className="hover:text-slate-900 transition">
            Solutions
          </Link>
          <Link href="/resources" className="hover:text-slate-900 transition">
            Resources
          </Link>
          <Link href="/pricing" className="hover:text-slate-900 transition">
            Pricing
          </Link>
          <Link
            href="/emiCalculator"
            className="hover:text-slate-900 transition"
          >
            EMI Calander
          </Link>
          <button className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
        </nav>
      </header>
    </>
  );
};

export default UserNavigation;

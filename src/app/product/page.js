"use client";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/HomePageBlob/Footer";
import Cta from "../components/HomePageBlob/Cta";

const PRODUCTS = [
  {
    id: "gold-loan",
    name: "Gold Loan",
    short: "Quick collateral-based loans against gold.",
    details:
      "Get instant loans against your gold jewellery with minimal documentation and competitive rates. Flexible tenure and swift disbursal.",
    icon: (
      <svg
        className="w-10 h-10 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m9-9H3"
        />
      </svg>
    ),
  },
  {
    id: "business-loan",
    name: "Business Loan",
    short: "Fuel your business expansion and working capital needs.",
    details:
      "Custom loans for MSMEs and small businesses with flexible repayment options and competitive interest rates. Quick approvals on eligible docs.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    short: "Unsecured loans for personal needs.",
    details:
      "Flexible personal loans for emergencies, travel, education, or home improvements. Minimal documentation and fast processing.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
        />
      </svg>
    ),
  },
  {
    id: "bike-loan",
    name: "Bike Loan",
    short: "Unsecured loans for personal needs.",
    details:
      "Flexible personal loans for emergencies, travel, education, or home improvements. Minimal documentation and fast processing.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
        />
      </svg>
    ),
  },
  {
    id: "tractor-loan",
    name: "Tractor Loan",
    short: "Unsecured loans for personal needs.",
    details:
      "Flexible personal loans for emergencies, travel, education, or home improvements. Minimal documentation and fast processing.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
        />
      </svg>
    ),
  },
  {
    id: "car-loan",
    name: "Car Loan",
    short: "Unsecured loans for personal needs.",
    details:
      "Flexible personal loans for emergencies, travel, education, or home improvements. Minimal documentation and fast processing.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
        />
      </svg>
    ),
  },
  {
    id: "emi-products",
    name: "EMI (PC, Laptop, Mobile, Vehicles)",
    short: "Buy now, pay later for electronics and vehicles.",
    details:
      "EMI options for PCs, laptops, mobiles, cars, bikes, e-riksha, and tractors. Low EMI plans, flexible tenures, and easy approval.",
    icon: (
      <svg
        className="w-10 h-10 text-pink-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M6 7v10a2 2 0 002 2h8a2 2 0 002-2V7"
        />
      </svg>
    ),
    subItems: [
      "PC",
      "Laptop",
      "Mobile",
      "Cars",
      "Bikes",
      "E-Riksha",
      "Tractors",
    ],
  },
];

export default function Page() {
  const [openProduct, setOpenProduct] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenProduct(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (openProduct) {
      // move focus to close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [openProduct]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Our Products</h1>
        <p className="mt-2 text-gray-600">
          Explore loans and EMI options — gold loan, business loan, personal
          loan, and EMI plans for electronics and vehicles.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <article
            key={p.id}
            className="relative group bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setOpenProduct(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setOpenProduct(p)}
          >
            <div className="flex items-center gap-4">
              <div className="flex-none">{p.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{p.short}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Click to view details
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                View
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>

            {/* subtle animated accent */}
            <div className="pointer-events-none absolute -inset-px rounded-xl border border-transparent group-hover:border-indigo-100 transition-colors"></div>
          </article>
        ))}
      </section>
      <Cta />
      <Footer />

      {/* Modal */}
      {openProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setOpenProduct(null)}
          />

          {/* modal panel */}
          <div
            className="relative z-10 max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-2xl transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
            style={{ animationFillMode: "forwards" }}
            role="document"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div>{openProduct.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {openProduct.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {openProduct.details}
                  </p>

                  {openProduct.subItems && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700">
                        Available for:
                      </h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {openProduct.subItems.map((s) => (
                          <li
                            key={s}
                            className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-800"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex-none">
                  <button
                    ref={closeButtonRef}
                    onClick={() => setOpenProduct(null)}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    aria-label="Close"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Apply for ${openProduct.name} - demo action`);
                  }}
                  className="inline-flex items-center justify-center flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setOpenProduct(null)}
                  className="inline-flex items-center justify-center flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* small custom animations using Tailwind utilities + keyframes */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 160ms ease-out forwards;
        }
        .animate-modal-in {
          animation: modal-in 220ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </main>
  );
}

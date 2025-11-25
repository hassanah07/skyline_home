"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cta from "../components/HomePageBlob/Cta";
import Footer from "../components/HomePageBlob/Footer";

/**
 * Pricing page for Skyline E-Finance Pvt Ltd
 * - Tailwind CSS based layout and modal popup
 * - Place this file at: /src/app/pricing/page.js
 */

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 2500,
    period: "mo",
    description: "For freelancers and small teams getting started.",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Email support",
      "Standard security",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 6500,
    period: "mo",
    description: "Growing teams requiring collaboration and reporting.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority email support",
      "Team roles & permissions",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 27000,
    period: "mo",
    description: "Enterprise-grade features and dedicated support.",
    features: [
      "SLA & dedicated account manager",
      "Custom integrations",
      "Advanced security & audits",
      "Onboarding & training",
    ],
  },
];

function Modal({ open, onClose, plan }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open || !plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5">
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between">
            <div>
              <h3
                id="modal-title"
                className="text-2xl font-semibold text-slate-900"
              >
                {plan.name} Plan
              </h3>
              <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 inline-flex items-center justify-center h-9 w-9 rounded-md text-slate-500 hover:bg-slate-100"
              aria-label="Close dialog"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-slate-900">
                ₹{plan.price}
              </span>
              <span className="text-sm text-slate-500">/{plan.period}</span>
            </div>

            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => {
                  // placeholder for real checkout/signup flow
                  alert(`Proceed to signup for the ${plan.name} plan`);
                }}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Get started
              </button>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-sky-600 mt-1 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-sm text-slate-500">
            <p>Secure billing and 24/7 support. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function openPlan(plan) {
    setSelected(plan);
    setModalOpen(true);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                SE
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  Skyline E-Finance Pvt Ltd
                </h1>
                <p className="text-sm text-slate-500">
                  Reliable e-finance tools for modern businesses
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/solutions"
              className="text-slate-700 hover:text-slate-900 text-sm"
            >
              Contact Sales
            </Link>
            <button
              onClick={() => openPlan(PLANS[1])}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              Try Business
            </button>
          </div>
        </header>

        <section className="mt-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Simple, predictable pricing
            </h2>
            <p className="mt-3 text-slate-600">
              Choose a plan that fits your company. No hidden fees — upgrade or
              cancel anytime.
            </p>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-6 rounded-xl border ${
                  plan.popular
                    ? "border-sky-300 bg-sky-50 shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}

                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-2xl font-bold text-slate-900">
                        ₹{plan.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-slate-600">
                  {plan.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="h-4 w-4 text-sky-500 mt-1 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                      </svg>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => openPlan(plan)}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                      plan.popular
                        ? "bg-sky-600 text-white hover:bg-sky-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Select
                  </button>
                  <button
                    onClick={() =>
                      alert(`More details about ${plan.name} plan`)
                    }
                    className="px-3 py-2 rounded-md text-sm text-slate-700 bg-slate-50 hover:bg-slate-100"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-sm text-slate-500 text-center">
            <p>
              Need a custom plan?{" "}
              <Link
                // id="contact"
                // href="#contact"
                href="/solutions"
                className="text-sky-600 hover:underline"
              >
                Contact our sales team
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
      <Cta />
      <Footer />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={selected}
      />
    </main>
  );
}

"use client";
import React, { useMemo, useState } from "react";
import Cta from "../components/HomePageBlob/Cta";
import Footer from "../components/HomePageBlob/Footer";

const resourcesData = [
  {
    id: 1,
    title: "Employee Handbook",
    type: "Guide",
    desc: "Onboarding, code of conduct, benefits and leave policy for all employees.",
    size: "1.2MB",
    href: "#",
  },
  {
    id: 2,
    title: "Expense Policy",
    type: "Policy",
    desc: "Approved expense categories, limits and reimbursement process.",
    size: "480KB",
    href: "#",
  },
  {
    id: 3,
    title: "Payroll Schedule",
    type: "Template",
    desc: "Quarterly payroll calendar and sample payslip template.",
    size: "210KB",
    href: "#",
  },
  {
    id: 4,
    title: "Security Best Practices",
    type: "Guide",
    desc: "Security and data privacy guidelines tailored for financial products.",
    size: "890KB",
    href: "#",
  },
  {
    id: 5,
    title: "Home Loan Form",
    type: "Guide",
    desc: "Security and data privacy guidelines tailored for financial products.",
    size: "890KB",
    href: "#",
  },
  {
    id: 6,
    title: "Gold Loan Form",
    type: "Guide",
    desc: "Security and data privacy guidelines tailored for financial products.",
    size: "890KB",
    href: "#",
  },
  {
    id: 7,
    title: "Car Loan Form",
    type: "Guide",
    desc: "Security and data privacy guidelines tailored for financial products.",
    size: "890KB",
    href: "#",
  },
  {
    id: 7,
    title: "Personal Loan Form",
    type: "Guide",
    desc: "Security and data privacy guidelines tailored for financial products.",
    size: "890KB",
    href: "#",
  },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return resourcesData.filter((r) => {
      const matchesQuery =
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.desc.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "All" ? true : r.type === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-900">
      <header className="relative overflow-hidden">
        {/* Animated skyline */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-56 md:h-72 animate-skyline"
            preserveAspectRatio="none"
            viewBox="0 0 1200 200"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#0ea5a5" stopOpacity="0.12" />
                <stop offset="1" stopColor="#0284c7" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <rect width="1200" height="200" fill="url(#g1)" />
            {/* Simple skyline blocks */}
            <g fill="#0f172a" fillOpacity="0.08">
              <rect x="40" y="70" width="50" height="110" rx="4" />
              <rect x="120" y="40" width="90" height="140" rx="4" />
              <rect x="230" y="85" width="40" height="95" rx="4" />
              <rect x="300" y="20" width="110" height="160" rx="4" />
              <rect x="440" y="60" width="70" height="120" rx="4" />
              <rect x="540" y="30" width="130" height="150" rx="4" />
              <rect x="720" y="50" width="60" height="130" rx="4" />
              <rect x="820" y="10" width="160" height="170" rx="4" />
              <rect x="1000" y="70" width="60" height="110" rx="4" />
              <rect x="1080" y="40" width="90" height="140" rx="4" />
            </g>
          </svg>
        </div>

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl backdrop-blur-sm bg-white/70 dark:bg-slate-800/50 rounded-xl p-8 shadow-lg border border-white/60">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Resources — Skyline e-Finance
            </h1>
            <p className="mt-2 text-slate-700">
              Centralized policies, guides and templates crafted for secure
              financial operations and smooth HR workflows.
            </p>

            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search resources
                </label>
                <div className="relative">
                  <input
                    id="search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search guides, policies, templates..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    ⌘K
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                {["All", "Guide", "Policy", "Template"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition transform ${
                      filter === t
                        ? "bg-sky-600 text-white shadow-md hover:scale-105"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 -mt-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, idx) => (
            <article
              key={r.id}
              className="relative bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow">
                    {/* simple document icon */}
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 3v6h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {r.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      {r.size}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-600 border border-sky-100">
                        {r.type}
                      </span>
                      <span className="text-xs text-slate-400">
                        Updated 2 weeks ago
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={r.href}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white border border-slate-200 hover:bg-slate-50 transition"
                        aria-label={`Preview ${r.title}`}
                      >
                        Preview
                      </a>

                      <a
                        href={r.href}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-sky-600 text-white hover:bg-sky-700 transition shadow-sm"
                        aria-label={`Download ${r.title}`}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle accent animation */}
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-gradient-to-tr from-sky-200 to-indigo-200 opacity-30 blur-xl animate-pulse-slow pointer-events-none" />
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-slate-500">
            No resources found. Try clearing filters or search terms.
          </div>
        )}
      </main>
      <Cta />
      <Footer />

      {/* <footer className="container mx-auto px-6 py-12 text-sm text-slate-500">
        © {new Date().getFullYear()} Skyline e-Finance — Securely powering HR &
        finance workflows.
      </footer> */}

      <style>{`
                /* custom animations */
                @keyframes skylineMove {
                    0% { transform: translateX(0) }
                    50% { transform: translateX(-18px) }
                    100% { transform: translateX(0) }
                }
                .animate-skyline { animation: skylineMove 10s ease-in-out infinite; }

                @keyframes pulseSlow {
                    0% { opacity: 0.25; transform: scale(0.98) }
                    50% { opacity: 0.45; transform: scale(1.04) }
                    100% { opacity: 0.25; transform: scale(0.98) }
                }
                .animate-pulse-slow { animation: pulseSlow 4.5s ease-in-out infinite; }
            `}</style>
    </div>
  );
}

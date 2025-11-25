import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Empowering your financial future with intelligent lending
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            Skylinee helps businesses and individuals get fast, fair financing
            with transparent rates and intelligent decisions powered by modern
            data. Streamline approvals and scale confidently.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow-xl hover:bg-indigo-700 transition"
            >
              Start an application
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
            <Link
              href="/emiCalculator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border bg-pink-200 hover:bg-red-500 border-slate-200 text-slate-700 shadow-2xl transition"
            >
              Calculate your EMI
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-2xl shadow-blue-600">
              <div className="text-sm text-slate-500">Approval time</div>
              <div className="mt-1 font-semibold text-lg">Under 24 hours</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-100 animate-pulse shadow-2xl shadow-yellow-600">
              <div className="text-sm text-slate-500">Avg APR</div>
              <div className="mt-1 font-semibold text-lg">6.4%</div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-2xl shadow-red-600">
              <div className="text-sm text-slate-500">Customers</div>
              <div className="mt-1 font-semibold text-lg">120k+</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md transform transition hover:scale-[1.02]">
            <div className="bg-gradient-to-tr from-white to-slate-50 rounded-2xl shadow-2xl shadow-indigo-600 p-6 border border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">
                    Monthly projection
                  </div>
                  <div className="mt-1 text-2xl font-semibold">$28,450</div>
                </div>
                <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    />
                  </svg>
                  +12.4%
                </div>
              </div>

              <div className="mt-4 h-36 bg-slate-50 rounded-lg overflow-hidden relative border border-slate-100">
                <svg
                  viewBox="0 0 100 30"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <polyline
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,25 10,20 20,18 30,14 40,15 50,8 60,12 70,6 80,4 90,3 100,2"
                  />
                </svg>
                <div className="absolute right-3 bottom-3 text-xs text-slate-400">
                  Projected growth
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="text-slate-500">Loan utilization</div>
                <div className="flex items-center gap-2">
                  <div className="text-slate-700 font-semibold">72%</div>
                  <div className="w-28 h-2 bg-slate-100 rounded overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded"
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-gradient-to-br from-amber-200 to-rose-200 opacity-80 blur-xl animate-float" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

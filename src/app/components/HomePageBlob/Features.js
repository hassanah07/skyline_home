import React from 'react'

const Features = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-lg font-semibold text-slate-700">Why Skylinee</h3>
        <p className="mt-2 text-slate-500 max-w-2xl">
          Built for speed, fairness, and clarity — modern lending tools for
          modern businesses.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Smart underwriting",
              desc: "AI-driven decisions with human oversight",
              icon: "M12 6v6l4 2",
            },
            {
              title: "Transparent pricing",
              desc: "No hidden fees, clear terms",
              icon: "M12 8c-2.21 0-4 1.79-4 4",
            },
            {
              title: "Fast funding",
              desc: "Get funded in as little as 24 hours",
              icon: "M3 12h18",
            },
            {
              title: "Flexible terms",
              desc: "Custom plans that grow with you",
              icon: "M5 12h14",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d={f.icon}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">{f.title}</div>
                  <div className="text-xs text-slate-500">{f.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Features
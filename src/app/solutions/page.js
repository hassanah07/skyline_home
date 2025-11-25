"use client";
import React, { useEffect, useRef, useState } from "react";
import Cta from "../components/HomePageBlob/Cta";
import Footer from "../components/HomePageBlob/Footer";
import ImageCarousel from "../components/ImageCarousel";

export default function Page() {
  const cardsRef = useRef([]);
  const [toast, setToast] = useState(null);
  const localFallbackPath =
    "/mnt/data/A_photograph_features_a_professional_interaction_b.png";

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.8798785578147!2d90.8600117754195!3d26.330388876999077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3759a17b0a8bfcdf%3A0x47e61481c5707ec2!2sBamuntari%20Bazar!5e0!3m2!1sen!2sin!4v1764093268070!5m2!1sen!2sin`;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      id: 1,
      title: "HR Automation",
      desc: "Streamline onboarding, payroll and time tracking with smart automation.",
      color: "bg-indigo-500/10 text-indigo-600",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 8v4l3 3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Employee Self-Service",
      desc: "Give employees control over profiles, leaves and payslips on any device.",
      color: "bg-emerald-500/10 text-emerald-600",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Analytics & Reporting",
      desc: "Actionable dashboards and compliance-ready reports in one place.",
      color: "bg-rose-500/10 text-rose-600",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M3 3v18h18"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 15l2-4 4 6 3-8 2 5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setToast({ type: "error", text: "Please fill all fields." });
      setTimeout(() => setToast(null), 2500);
      return;
    }
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // open default mail client
    window.location.href = `mailto:hello@company.com?subject=${subject}&body=${body}`;
    setToast({ type: "success", text: "Opening mail client..." });
    setTimeout(() => setToast(null), 2500);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-800">
      <ImageCarousel
        images={[
          "/image/financial/image6.png",
          "/image/financial/image4.png",
          "/image/financial/image5.png",
        ]}
      />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Solutions & Contact
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Modern HR tooling with delightful micro-interactions and
            approachable UI.
          </p>
        </header>

        {/* Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, idx) => (
              <article
                key={s.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl shadow-yellow-500 transform transition hover:scale-[1.02] hover:shadow-lg"
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${s.color} shadow-2xl`}
                >
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

                {/* animated gradient accent */}
                <span
                  className="absolute -right-8 -bottom-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))",
                    filter: "blur(18px)",
                  }}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-slate-600">
              Have questions or want a demo? Send us a message and we will get
              back within 24 hours.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-50 to-white border border-slate-100 shadow-sm">
              <div className="text-sm text-slate-700">
                <strong>Office</strong>
                <p className="mt-2 text-slate-600">
                  Skylinee Fynum Small Finance PVT LTD, Bazar Tiniali, Bamuntari
                  Bazar, Kalgachia, Barperta, Assam, 781319
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Phone:</span> (+91) 9365430147
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Email:</span>
                  noreply.skylinee@gmail.com
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-500">
              <p>
                We care about your privacy. Your data is used only to contact
                you regarding your request.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-gray-50 rounded-2xl p-6 border border-slate-100 shadow-2xl"
          >
            <div className="grid gap-4">
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  required
                  className="peer w-full bg-transparent border border-slate-200 rounded-md px-3 py-3 outline-none focus:ring-2 focus:ring-indigo-300 transition"
                  placeholder=" "
                />
                <label className="absolute left-3 top-1 -translate-y-1/2 text-slate-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-sm">
                  Your name
                </label>
              </div>

              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  className="peer w-full bg-transparent border border-slate-200 rounded-md px-3 py-3 outline-none focus:ring-2 focus:ring-emerald-300 transition"
                  placeholder=" "
                />
                <label className="absolute left-3 top-1 -translate-y-1/2 text-slate-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-sm">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="peer w-full bg-transparent border border-slate-200 rounded-md px-3 py-3 outline-none focus:ring-2 focus:ring-rose-300 transition"
                  placeholder=" "
                />
                <label className="absolute left-3 top-3 text-slate-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-sm">
                  Message
                </label>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Send message
                </button>
                <div className="text-xs text-slate-500">
                  Or email us at{" "}
                  <span className="text-slate-700 font-medium">
                    hello@company.com
                  </span>
                </div>
              </div>
            </div>

            {/* small animated map placeholder */}
            <div className="mt-6 h-36 rounded-lg overflow-hidden border border-slate-100">
              <div className="w-full bg-[linear-gradient(135deg,#eef2ff,white)] flex items-center justify-center text-slate-400 text-sm">
                <iframe
                  title="Bamuntari Bazar - Map"
                  src={mapSrc}
                  className="absolute bottom-0 left-0 w-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </form>
        </section>
      </div>

      {/* toast */}
      {toast && (
        <div
          className={`fixed right-6 bottom-6 z-50 rounded-lg px-4 py-3 text-sm font-medium ${
            toast.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
              : "bg-rose-50 text-rose-800 border border-rose-100"
          } shadow-lg animate-toast`}
        >
          {toast.text}
        </div>
      )}
      <Cta />
      <Footer />

      <style>{`
                /* entry animation for cards */
                .card { opacity: 0; transform: translateY(18px); transition: transform 600ms cubic-bezier(.2,.9,.2,1), opacity 600ms ease; }
                .card.enter { opacity: 1; transform: translateY(0); }

                /* floating label fallback: ensure smooth label transitions when using placeholder trick */
                input:placeholder-shown + label, textarea:placeholder-shown + label { transform: translateY(12px); font-size: 1rem; }
                label { left: .75rem; top: .5rem; transform-origin: left top; }

                /* toast animation */
                @keyframes toast-in {
                    from { transform: translateY(12px) scale(.98); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                .animate-toast { animation: toast-in 360ms cubic-bezier(.2,.9,.2,1); }

                /* small responsive tweaks */
                @media (max-width: 640px) {
                    .card.enter { transition-duration: 520ms; }
                }
            `}</style>
    </main>
  );
}

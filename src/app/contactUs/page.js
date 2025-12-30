"use client";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
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
    <div>
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
              We care about your privacy. Your data is used only to contact you
              regarding your request.
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
  );
};

export default Page;

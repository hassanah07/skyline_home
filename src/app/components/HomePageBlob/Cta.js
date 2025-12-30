import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-2xl bg-indigo-600 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <h4 className="text-2xl font-semibold">
              Ready to scale with smarter financing?
            </h4>
            <p className="mt-2 text-indigo-100 max-w-md">
              Join thousands of businesses that trust Skylinee to move faster
              and spend smarter.
            </p>
          </div>
          <div className="flex gap-3">
            {/* <Link
              href="/contactUs"
              className="px-5 py-3 rounded-md bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
            >
              Request a demo
            </Link> */}
            <Link
              href="/contactUs"
              className="px-5 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;

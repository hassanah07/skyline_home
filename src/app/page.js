"use client";
import React from "react";
import Hero from "./components/HomePageBlob/Hero";
import Features from "./components/HomePageBlob/Features";
import Cta from "./components/HomePageBlob/Cta";
import Footer from "./components/HomePageBlob/Footer";
import ImageCarousel from "./components/ImageCarousel";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Background blobs */}
      {/* <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400 via-cyan-400 to-transparent opacity-30 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-rose-300 via-orange-300 to-transparent opacity-25 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-emerald-300 via-green-200 to-transparent opacity-20 blur-2xl animate-slow-blob"></div>
      </div> */}

      {/* Nav */}
      {/* <UserNavigation /> */}

      {/* Hero */}
      <ImageCarousel
        images={[
          "/image/image1.png",
          "/image/image2.png",
          "/image/image3.png",
          "/image/image3.png",
        ]}
      />
      <Hero />

      {/* Features */}
      <Features />

      {/* CTA */}
      <Cta />

      <Footer />

      {/* Local styles for subtle animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 9s infinite;
        }
        .animate-slow-blob {
          animation: blob 14s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.9;
          }
          33% {
            transform: translate(20px, -10px) scale(1.05);
            opacity: 0.85;
          }
          66% {
            transform: translate(-10px, 20px) scale(0.95);
            opacity: 0.9;
          }
          100% {
            transform: translate(0px, 0px) scale(1);
            opacity: 0.9;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) translateX(6px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </main>
  );
}

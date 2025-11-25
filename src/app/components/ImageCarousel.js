"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })] // ← AUTO SLIDE every 3 sec
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((src, i) => (
            <div
              className="flex-[0_0_100%] flex justify-center items-center"
              key={i}
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                width={1200}
                height={800}
                className="
            w-full 
            max-w-[90%] 
            md:max-w-[70%] 
            lg:max-w-[60%] 
            h-auto 
            object-cover 
            rounded-xl 
            mx-auto
          "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

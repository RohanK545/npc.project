"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "/images/banner.jpg",
    "/images/images.jpg",
    "/images/pngtree.jpg",
    "/images/banner-949946_960_720.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">

        {/* SLIDES */}
        <div className="relative w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={image}
                alt="banner"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* NAVIGATION ARROWS */}
        {/* NAVIGATION ARROWS */}
        <div className="absolute inset-0 flex justify-between items-center px-4 z-[9999]">

          {/* LEFT */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-30 pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2} stroke="white"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* RIGHT */}
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-30 pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2} stroke="white"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
          </button>

        </div>


        {/* DOTS */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-[9999]">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition ${index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

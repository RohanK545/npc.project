"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const bannerImages = [
    "/images/banner.jpg",
    "/images/images.jpg",
    "/images/pngtree.jpg",
    "/images/banner-949946_960_720.jpg",
  ];

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="w-100">
      {/* ======================= BANNER ======================= */}
      <section
        className="position-relative"
        style={{ width: "100%", height: "450px", overflow: "hidden" }}
      >
        {/* Slides */}
        <div className="position-relative w-100 h-100">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity .7s ease-in-out",
              }}
            >
              <Image
                src={image}
                alt="banner"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={goToPrevSlide}
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            left: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "#000",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            zIndex: 98,
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "26px",
              fontWeight: "900",
              lineHeight: "0",
            }}
          >
            ❮
          </span>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={goToNextSlide}
          className="position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            right: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "#000",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            zIndex: 98,
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "26px",
              fontWeight: "900",
              lineHeight: "0",
            }}
          >
            ❯
          </span>
        </button>

        {/* DOT INDICATORS */}
        <div
          style={{
            position: "absolute",
            bottom: "18px",
            right: "120px",
            display: "flex",
            gap: "10px",
            zIndex: 98,
          }}
        >
          {bannerImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background:
                  currentSlide === index ? "#2b62cc" : "rgba(180, 180, 255, 0.6)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* PAUSE BUTTON */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "70px",
            background: "#000",
            color: "#fff",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            zIndex: 98,
          }}
        >
          {isPaused ? "▶" : "❚❚"}
        </button>
      </section>

      {/* ======================= ANNOUNCEMENT SECTION ======================= */}
      <section
        style={{
          background: "#f7f7f7",
          padding: "40px 20px",
          width: "100%",
          borderTop: "1px solid #ddd",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex" }}>
          {/* Left Image */}
          <div>
            <Image
              src="/images/modi.png"
              alt="PM Modi"
              width={250}
              height={250}
              style={{ borderRadius: "50%" }}
            />
          </div>

          {/* Right Content */}
          <div style={{ marginLeft: "40px" }}>
            <h3 style={{ fontSize: "22px", color: "#2b4170" }}>Announcements</h3>

            <p
              style={{
                fontSize: "20px",
                color: "#1a2a44",
                width: "80%",
                lineHeight: "32px",
                marginTop: "10px",
              }}
            >
              “India offers the three Ds for business to thrive – Democracy,
              Demography, and Demand…”
            </p>

            <p style={{ color: "#555", marginTop: "15px" }}>
              <strong>VIBRANT GUJARAT SUMMIT</strong> <br />
              17.04.2015
            </p>

            <button
              style={{
                marginTop: "10px",
                background: "white",
                border: "1px solid #1a2a44",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              VIEW EVENT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const bannerImages = [
    "https://ccps.digifootprint.gov.in/static//uploads/2025/04/0ff98e1ffaf83a690f2cd3f0b7ac9502.jpg",
    "https://www.meity.gov.in/static/uploads/2025/10/57abd94ee7b510ee638e9907787c8a6e.jpg",
    "https://www.meity.gov.in/static/uploads/2025/11/3b31c35215a20d22fb1f2d88941ef884.jpg",
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
      <section
        className="position-relative"
        style={{ width: "100%", height: "575px", overflow: "hidden" }}
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
                unoptimized
              />
            </div>
          ))}
        </div>

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
                  currentSlide === index
                    ? "#2b62cc"
                    : "rgba(180, 180, 255, 0.6)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
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

      {/* Announcement Div - Added below banner and above announcement section */}
      <section
        style={{
          background: "#E5E5E5",
          padding: "15px 0",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#432DD7",
              margin: "0",
            }}
          >
            Announcements
          </h2>
        </div>
      </section>

      <section
        style={{
          background: "#F5F5F4",
          padding: "60px 0",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            padding: "0 20px",
          }}
        >
          {/* LEFT IMAGE */}
          <Image
            src="/images/modi.png"
            alt="PM Modi"
            width={260}
            height={260}
            style={{
              borderRadius: "50%",
              border: "6px solid #ffffff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />

          {/* RIGHT CONTENT */}
          <div style={{ maxWidth: "600px" }}>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                color: "#1a2a44",
                fontWeight: 500,
                marginBottom: "25px",
              }}
            >
              India offers the three Ds for business to thrive –{" "}
              <span style={{ color: "#1a2a44", fontWeight: "bold" }}>
                Democracy
              </span>
              ,{" "}
              <span style={{ color: "#1a2a44", fontWeight: "bold" }}>
                Demography
              </span>
              , and{" "}
              <span style={{ color: "#1a2a44", fontWeight: "bold" }}>
                Demand
              </span>
              . We are committed to making India the most investment-friendly
              country in the world.
            </p>

            <div
              style={{
                background: "#f0f7ff",
                borderLeft: "4px solid #1a2a44",
                padding: "20px",
                marginBottom: "25px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1a2a44",
                  marginBottom: "5px",
                }}
              >
                VIBRANT GUJARAT SUMMIT
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  marginBottom: "15px",
                }}
              >
                17.04.2015
              </p>
              <button
                style={{
                  background: "#1a2a44",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.background = "#152c6b";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.background = "#1a2a44";
                }}
              >
                VIEW EVENT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

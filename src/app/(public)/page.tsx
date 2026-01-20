"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import SocialMediaSection from "@/components/SocialMediaSection";
import PartnerLogoCarousel from "@/components/PartnerLogoCarousel";
const DomainExpertise = dynamic(() => import("@/components/DomainExpertise"), {
  ssr: false,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});

const LatestNews = dynamic(() => import("@/components/LatestNews"), {
  ssr: false,
});
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const bannerImages = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
  ];

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, bannerImages.length]);

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length,
    );
  };
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };
  const services = [
    {
      title: "Consultancy",
      gradient: "from-purple-600 to-blue-600",
      icon: "💼",
    },
    {
      title: "Productivity Promotion",
      gradient: "from-pink-600 to-purple-600",
      icon: "📈",
    },
    {
      title: "Training",
      gradient: "from-blue-600 to-purple-700",
      icon: "🎓",
    },
    {
      title: "International Services",
      gradient: "from-purple-700 to-indigo-700",
      icon: "🌐",
    },
  ];
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
                // style={{ objectFit: "cover" }}
                unoptimized
                // width={300}
                // height={300}
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
          fontSize: "1.6rem",
          fontFamily: "Noto Sans, sans-serif",
          color: "#150202",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#c6c6c6",
          padding: "11px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "center",
              color: "#162f6a",
            }}
          >
            <strong>Announcements</strong>
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            style={{ marginLeft: "10px" }}
          >
            <mask
              id="mask0_5630_196823"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="25"
            >
              <rect
                x="0.476562"
                y="0.5"
                width="24"
                height="24"
                fill="#D9D9D9"
              ></rect>
            </mask>
            <g mask="url(#mask0_5630_196823)">
              <path
                d="M16.3005 13.2497V11.7497H19.9158V13.2497H16.3005ZM17.4428 19.9805L14.5505 17.8112L15.462 16.6152L18.3542 18.7842L17.4428 19.9805ZM15.4235 8.34597L14.512 7.14972L17.4043 4.98047L18.3158 6.17672L15.4235 8.34597ZM4.03125 14.9997V9.99972H7.74275L12.0312 5.71147V19.288L7.74275 14.9997H4.03125ZM10.5312 9.34972L8.38125 11.4997H5.53125V13.4997H8.38125L10.5312 15.6497V9.34972Z"
                fill="#13406C"
              ></path>
            </g>
          </svg>
        </div>

        <div
          style={{
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="marquee"></div>
        </div>

        <button
          aria-label="Pause"
          style={{
            marginLeft: "20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined bhashini-skip-translation"
          >
            pause
          </span>
        </button>
      </section>

      <section
        style={{
          fontSize: "1.6rem",
          fontFamily: "Noto Sans, sans-serif",
          color: "#150202",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ebeaea",
          padding: "40px 0",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {/* LEFT IMAGE CARD */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
                width: "260px",
                height: "260px",
                margin: "auto",
                borderRadius: "50%",
              }}
            >
              <Image
                src="https://www.dpiit.gov.in/static/uploads/2025/06/a6d342f52e8462b0d187a7654c97529a.png"
                alt="Pm Image"
                height={300}
                width={300}
                style={{
                  width: "260px",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ maxWidth: "650px", margin: "auto" }}>
            {/* QUOTE SYMBOL */}
            <p
              style={{
                margin: "0",
                fontSize: "50px",
                lineHeight: "0.5",
                fontFamily: "meterial symbols outlined",
                color: "#162f6a",
              }}
            >
              “
            </p>

            {/* QUOTE TEXT */}
            <blockquote style={{ margin: "0 0 25px 0" }}>
              <p
                style={{
                  color: "#162f6a",
                  fontSize: "2.4rem",
                  lineHeight: "1.6",
                  margin: "0",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  letterSpacing: "-.12px",
                  width: "100%",
                  maxWidth: "100%",
                  wordWrap: "break-word",
                }}
              >
                The world trusts India, the world believes in India, and the
                world is ready to build the semiconductor future with India.
              </p>

              <p
                style={{
                  color: "#162f6a",
                  fontSize: "2.4rem",
                  lineHeight: "1.6",
                  margin: "2rem 0 0 0", // Added top margin for spacing
                  fontStyle: "normal",
                  fontWeight: "normal",
                  letterSpacing: "-.12px",
                  width: "100%",
                  maxWidth: "100%",
                  wordWrap: "break-word",
                }}
              >
                We are creating a complete ecosystem, an ecosystem where
                designing, manufacturing, packaging and high-tech devices,
                everything is available right here in India.
              </p>
            </blockquote>

            {/* LINE */}
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "#162f6a",
                margin: "20px 0",
              }}
            ></div>

            {/* EVENT + BUTTON */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              {/* Event Title + Date */}
              <div>
                <p
                  style={{
                    margin: "0",
                    fontSize: "1.4rem",
                    fontWeight: "300",
                    color: "#162f6a",
                    textTransform: "uppercase",
                    fontStyle: "normal",
                  }}
                >
                  SEMICON India 2025
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "1.4rem",
                    color: "#162f6a",
                    fontStyle: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  02.10.2025
                </p>
              </div>

              {/* BUTTON */}
              <a
                href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2163000&reg=3&lang=2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "8px 20px",
                  border: "1px solid #000",
                  backgroundColor: "#FFFFFF",
                  fontSize: "1.4rem",
                  fontFamily: "Noto Sans, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#212529",
                  gap: "6px",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  marginLeft: "40px",
                }}
              >
                <span
                  className="material-symbols-outlined bhashini-skip-translation"
                  style={{ fontSize: "15px", backgroundColor: "#FFFFFF" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24 "
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="#2d2d2d"
                  >
                    <path
                      d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h249q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-249q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v249q0 24-18 42t-42 18H180Zm600-617L403-360q-9 9-21 8.5t-21-9.5q-9-9-9-21t9-21l377-377H549q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h261q12.75 0 21.38 8.62Q840-822.75 840-810v261q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-188Z"
                      fill="#162F6A"
                    />
                  </svg>
                </span>
                View Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <AboutSection /> */}
      <Services />
      <DomainExpertise />
      <SocialMediaSection />
      <PartnerLogoCarousel />
      <LatestNews />
    </div>
  );
}

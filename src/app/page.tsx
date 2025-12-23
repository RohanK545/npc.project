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
                // style={{ objectFit: "cover" }}
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
              <img
                src="https://www.dpiit.gov.in/static/uploads/2025/06/a6d342f52e8462b0d187a7654c97529a.png"
                alt="Pm Image"
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
                  width: "125%",
                }}
              >
                India offers the three Ds for business to thrive – Democracy,
                Demography, and Demand. We are committed to making India the
                most investment-friendly country in the world.
              </p>
            </blockquote>

            {/* LINE */}
            <div
              style={{
                width: "125%",
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
                  Vibrant Gujarat Summit
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
                  17.04.2015
                </p>
              </div>

              {/* BUTTON */}
              <a
                href="https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1500021"
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
                  open_in_new
                </span>
                View Event
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid px-120 py-80 layoutshift-about">
        <div className="row g-5 me-0 ms-0 about-section-layout-3">
          <h2 className="about-section-heading">
            <a className="d-flex align-items-center" href="/ministry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="me-2 headingclr"
              >
                <path
                  d="M27.52 32.1094H20.4745C19.334 32.1094 18.4062 33.0373 18.4062 34.1777V39.8141C18.4062 40.9546 19.3341 41.8824 20.4745 41.8824H27.52C28.6605 41.8824 29.5883 40.9545 29.5883 39.8141V34.1777C29.5883 33.0373 28.6604 32.1094 27.52 32.1094ZM28.2699 39.8142C28.2699 40.2277 27.9335 40.5641 27.52 40.5641H20.4745C20.061 40.5641 19.7246 40.2276 19.7246 39.8142V34.1777C19.7246 33.7642 20.0611 33.4278 20.4745 33.4278H27.52C27.9336 33.4278 28.2699 33.7643 28.2699 34.1777V39.8142Z"
                  fill="#13406C"
                />
                <path
                  d="M39.4993 23.6562H29.6358C29.2717 23.6562 28.9766 23.9514 28.9766 24.3154C28.9766 24.6795 29.2717 24.9746 29.6358 24.9746H39.4993C39.9128 24.9746 40.2492 25.3111 40.2492 25.7245V29.9519C40.2492 30.3159 40.5443 30.6111 40.9083 30.6111C41.2724 30.6111 41.5675 30.3159 41.5675 29.9519V25.7245C41.5675 24.584 40.6397 23.6562 39.4993 23.6562Z"
                  fill="#13406C"
                />
                <path
                  d="M29.5892 12.3411C29.5892 9.25817 27.0811 6.75 23.9982 6.75C20.9153 6.75 18.4071 9.25817 18.4071 12.3411C18.4071 15.2009 20.5658 17.5646 23.339 17.892V23.6593H8.49796C7.35748 23.6593 6.42969 24.5872 6.42969 25.7276V29.9549C6.42969 30.319 6.72483 30.6141 7.08888 30.6141C7.45293 30.6141 7.74807 30.319 7.74807 29.9549V25.7276C7.74807 25.314 8.08452 24.9777 8.49796 24.9777H23.339V29.9549C23.339 30.319 23.6341 30.6141 23.9982 30.6141C24.3622 30.6141 24.6574 30.319 24.6574 29.9549V24.9777H26.8163C27.1804 24.9777 27.4755 24.6825 27.4755 24.3185C27.4755 23.9544 27.1804 23.6593 26.8163 23.6593H24.6574V17.892C27.4305 17.5646 29.5892 15.2009 29.5892 12.3411ZM23.9982 16.6138C21.6422 16.6138 19.7255 14.697 19.7255 12.3411C19.7255 9.98513 21.6422 8.06838 23.9982 8.06838C26.3541 8.06838 28.2709 9.98513 28.2709 12.3411C28.2709 14.6971 26.3541 16.6138 23.9982 16.6138Z"
                  fill="#13406C"
                />
                <path
                  d="M44.4341 32.1094H37.3886C36.2481 32.1094 35.3203 33.0373 35.3203 34.1777V39.8141C35.3203 40.9546 36.2482 41.8824 37.3886 41.8824H44.4341C45.5746 41.8824 46.5024 40.9545 46.5024 39.8141V34.1777C46.5024 33.0373 45.5745 32.1094 44.4341 32.1094ZM45.184 39.8142C45.184 40.2277 44.8475 40.5641 44.4341 40.5641H37.3886C36.9751 40.5641 36.6387 40.2276 36.6387 39.8142V34.1777C36.6387 33.7642 36.9751 33.4278 37.3886 33.4278H44.4341C44.8476 33.4278 45.184 33.7643 45.184 34.1777V39.8142Z"
                  fill="#13406C"
                />
                <path
                  d="M10.6138 32.1094H3.56828C2.42788 32.1094 1.5 33.0373 1.5 34.1777V39.8142C1.5 40.9547 2.42788 41.8824 3.56828 41.8824H4.27282C4.63687 41.8824 4.93201 41.5873 4.93201 41.2233C4.93201 40.8592 4.63687 40.5641 4.27282 40.5641H3.56828C3.15474 40.5641 2.81838 40.2276 2.81838 39.8142V34.1777C2.81838 33.7642 3.15483 33.4278 3.56828 33.4278H10.6138C11.0273 33.4278 11.3637 33.7643 11.3637 34.1777V39.8142C11.3637 40.2277 11.0272 40.5641 10.6138 40.5641H7.09099C6.72694 40.5641 6.4318 40.8592 6.4318 41.2233C6.4318 41.5873 6.72694 41.8824 7.09099 41.8824H10.6138C11.7543 41.8824 12.6821 40.9546 12.6821 39.8142V34.1777C12.6822 33.0373 11.7543 32.1094 10.6138 32.1094Z"
                  fill="#13406C"
                />
              </svg>
              About Us
            </a>
          </h2>

          <div className="col-xl-8 col-lg-12 col-md-12 mb-auto aboutHeadingSpacing">
            <div className="d-flex flex-column justify-content-between about-section-left  ">
              <div className="layout4-about-content text-justify">
                The Ministry of Electronics and Information Technology (MeitY),
                under Government of India, is a stand-alone ministerial agency,
                responsible for formulating and implementing national policies
                and programs aimed at enabling the continuous development of the
                electronics and IT industry. MeitY’s focus areas include the
                development, promotion, and regulation of the electronics and IT
                industry in India, fostering digital governance, enabling
                innovation in emerging technologies and promoting cybersecurity
                initiatives within country.
              </div>

              <div className="row row-gap-4 btn-group mb-5">
                {/* OUR TEAM */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-team"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <mask
                        id="mask0_2895_12542"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <rect width="32" height="32" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2895_12542)">
                        <path
                          d="M22.5908 19.0785C21.7601 19.0785 21.0525 18.7861 20.4678 18.2015C19.8831 17.6168 19.5908 16.9091 19.5908 16.0785C19.5908 15.2476 19.8831 14.5398 20.4678 13.9551C21.0525 13.3707 21.7601 13.0785 22.5908 13.0785C23.4217 13.0785 24.1293 13.3707 24.7138 13.9551C25.2985 14.5398 25.5908 15.2476 25.5908 16.0785C25.5908 16.9091 25.2985 17.6168 24.7138 18.2015C24.1293 18.7861 23.4217 19.0785 22.5908 19.0785ZM16.2575 25.7451V24.2118C16.2575 23.7383 16.3786 23.3035 16.6208 22.9075C16.863 22.5115 17.2069 22.2266 17.6525 22.0528C18.428 21.7279 19.2305 21.4843 20.0598 21.3218C20.8891 21.1596 21.7328 21.0785 22.5908 21.0785C23.4317 21.0785 24.2671 21.1596 25.0971 21.3218C25.9271 21.4843 26.7379 21.7279 27.5295 22.0528C27.975 22.2266 28.3188 22.5115 28.5608 22.9075C28.803 23.3035 28.9241 23.7383 28.9241 24.2118V25.7451H16.2575ZM13.0781 15.5911C11.7948 15.5911 10.6961 15.1343 9.78213 14.2205C8.86835 13.3065 8.41146 12.2078 8.41146 10.9245C8.41146 9.64115 8.86835 8.54259 9.78213 7.62881C10.6961 6.71481 11.7948 6.25781 13.0781 6.25781C14.3615 6.25781 15.46 6.71481 16.3738 7.62881C17.2878 8.54259 17.7448 9.64115 17.7448 10.9245C17.7448 12.2078 17.2878 13.3065 16.3738 14.2205C15.46 15.1343 14.3615 15.5911 13.0781 15.5911ZM3.07812 25.7451V22.7808C3.07812 22.1148 3.25201 21.5026 3.59979 20.9441C3.94779 20.3857 4.42513 19.9655 5.03179 19.6835C6.28824 19.051 7.59235 18.5698 8.94413 18.2398C10.2959 17.91 11.6739 17.7451 13.0781 17.7451C13.7361 17.7451 14.3942 17.7926 15.0525 17.8875C15.7105 17.9824 16.3686 18.0973 17.0268 18.2321C16.743 18.5201 16.4592 18.8083 16.1755 19.0965L15.3241 19.9605C14.9499 19.8707 14.5756 19.8124 14.2011 19.7855C13.8267 19.7586 13.4523 19.7451 13.0781 19.7451C11.8319 19.7451 10.6071 19.8878 9.40379 20.1731C8.20024 20.4587 7.0489 20.8904 5.94979 21.4681C5.69335 21.6048 5.4839 21.7838 5.32146 22.0051C5.15924 22.2267 5.07813 22.4853 5.07813 22.7808V23.7451H13.0781V25.7451H3.07812ZM13.0781 13.5911C13.8115 13.5911 14.4392 13.33 14.9615 12.8078C15.4837 12.2856 15.7448 11.6578 15.7448 10.9245C15.7448 10.1911 15.4837 9.56337 14.9615 9.04115C14.4392 8.51892 13.8115 8.25781 13.0781 8.25781C12.3448 8.25781 11.717 8.51892 11.1948 9.04115C10.6726 9.56337 10.4115 10.1911 10.4115 10.9245C10.4115 11.6578 10.6726 12.2856 11.1948 12.8078C11.717 13.33 12.3448 13.5911 13.0781 13.5911Z"
                          fill="#162F6A"
                        />
                      </g>
                    </svg>
                    Our Team
                  </a>
                </div>

                {/* OUR ORGANISATION */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-organisation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <mask
                        id="mask0_2895_12561"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <rect width="32" height="32" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2895_12561)">
                        <path
                          d="M4.66797 14.6641V4.66406H14.668V14.6641H4.66797ZM4.66797 27.3307V17.3307H14.668V27.3307H4.66797ZM17.3346 14.6641V4.66406H27.3346V14.6641H17.3346ZM17.3346 27.3307V17.3307H27.3346V27.3307H17.3346ZM6.66797 12.6641H12.668V6.66406H6.66797V12.6641ZM19.3346 12.6641H25.3346V6.66406H19.3346V12.6641ZM19.3346 25.3307H25.3346V19.3307H19.3346V25.3307ZM6.66797 25.3307H12.668V19.3307H6.66797V25.3307Z"
                          fill="#162F6A"
                        />
                      </g>
                    </svg>
                    Our Organisations
                  </a>
                </div>

                {/* OUR PERFORMANCE */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-performance"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M2.66797 27.3385V25.3385H28.0013V27.3385H2.66797ZM4.0013 23.4922V15.3385H7.33464V23.4922H4.0013ZM10.4373 23.4922V8.67187H13.7706V23.4922H10.4373ZM16.886 23.4922V12.6719H20.2193V23.4922H16.886ZM23.3346 23.4922V4.67188H26.668V23.4922H23.3346Z"
                        fill="#162F6A"
                      />
                    </svg>
                    Our Performance
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-xl-4 col-lg-12 col-md-12 mb-auto our-team-section-right">
            <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap about-section-right">
              {/* MINISTER 1 */}
              <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <img
                    src="https://www.meity.gov.in/static/uploads/2024/02/c2d2716758c356c9137b4db8ffa9ac50.png"
                    alt="Shri Ashwini Vaishnaw"
                    className="card-img-top img-fluid about-section-img"
                  />
                </span>
                <div className="card-body h-100 p-0">
                  <p className="h3 minister-name text-center my-3">
                    Shri Ashwini Vaishnaw
                  </p>
                  <p className="minister-desg text-center mb-0">
                    HON’BLE MINISTER
                  </p>
                </div>
              </div>

              {/* MINISTER 2 */}
              <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <img
                    src="https://www.meity.gov.in/static/uploads/2024/06/a0c681e6f425566b66d4fecfe80f9380.png"
                    alt="Shri Jitin Prasada"
                    className="card-img-top img-fluid about-section-img"
                  />
                </span>
                <div className="card-body h-100 p-0">
                  <p className="h3 minister-name text-center my-3">
                    Shri Jitin Prasada
                  </p>
                  <p className="minister-desg text-center mb-0">
                    HON’BLE MINISTER OF STATE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}




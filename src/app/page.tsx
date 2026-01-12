"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Services from "@/components/Services";
import DomainExpertise from "@/components/DomainExpertise";
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
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };
   const services = [
    {
      title: "Consultancy",
      gradient: "from-purple-600 to-blue-600",
      icon: "💼"
    },
    {
      title: "Productivity Promotion",
      gradient: "from-pink-600 to-purple-600",
      icon: "📈"
    },
    {
      title: "Training",
      gradient: "from-blue-600 to-purple-700",
      icon: "🎓"
    },
    {
      title: "International Services",
      gradient: "from-purple-700 to-indigo-700",
      icon: "🌐"
    }
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
              {/* <Image
                src="https://www.dpiit.gov.in/static/uploads/2025/06/a6d342f52e8462b0d187a7654c97529a.png"
                alt="Pm Image"
                height={300}
                width={300}
                // style={{
                //   width: "260px",
                //   height: "260px",
                //   objectFit: "cover",
                // }}
              /> */}
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
          <h2 className="about-section-heading col-12">
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
          {/* LEFT CONTENT */}
          <div className="col-xl-8 col-lg-12 col-md-12 mb-auto aboutHeadingSpacing">
            <div className="d-flex flex-column justify-content-between about-section-left">
              <div className="layout4-about-content text-justify">
                National Productivity Council of India (NPC), established in the year 1958, is an autonomous organization under Department for Promotion of Industry & Internal Trade, Ministry of Commerce and Industry, Government of India. Besides undertaking research in the area of productivity, NPC has been providing consultancy and training services in areas of Industrial Engineering, Agri-Business, Economic Services, Quality Management, Human Resources Management, Information Technology, Technology Management, Energy Management, Environmental Management etc., to the Government and Public & Private sector organizations. NPC is a constituent of the Tokyo-based Asian Productivity Organisation (APO), an Inter-Governmental Body of which the Government of India is a founding member.
              </div>

              {/* BUTTONS */}
              <div className="row row-gap-4 btn-group mb-5 g-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-organisation"
                  >
                    {/* SVG icon */}
                    Our Organisations
                  </a>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-team"
                  >
                    {/* SVG icon */}
                    Our Team
                  </a>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <a
                    className="w-100 about-btn d-flex flex-md-column flex-row justify-content-center align-items-center pointer text-decoration-none"
                    href="/ministry/our-performance"
                  >
                    {/* SVG icon */}
                    Our Performance
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-xl-4 col-lg-12 col-md-12 mb-auto our-team-section-right">
            <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap about-section-right gap-4">
              {/* MINISTER 1 */}
              <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right flex-grow-1">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <Image
                    src="https://www.meity.gov.in/static/uploads/2024/02/c2d2716758c356c9137b4db8ffa9ac50.png"
                    alt="Shri Ashwini Vaishnaw"
                    className="card-img-top img-fluid about-section-img"
                    width={300}
                    height={300}
                  />
                </span>
                <div className="card-body h-100 p-0">
                  <p className="h3 minister-name text-center my-3">
                    Shri Ashwini Vaishnaw
                  </p>
                  <p className="minister-desg text-center mb-0">HON’BLE MINISTER</p>
                </div>
              </div>

              {/* MINISTER 2 */}
              <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right flex-grow-1">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <Image
                    src="https://www.meity.gov.in/static/uploads/2024/06/a0c681e6f425566b66d4fecfe80f9380.png"
                    alt="Shri Jitin Prasada"
                    className="card-img-top img-fluid about-section-img"
                    width={300}
                    height={300}
                  />
                </span>
                <div className="card-body h-100 p-0">
                  <p className="h3 minister-name text-center my-3">
                    Shri Jitin Prasada
                  </p>
                  <p className="minister-desg text-center mb-0">
                    HONBLE MINISTER OF STATE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Services />
        <DomainExpertise />
    </div>
  );
}

"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useEffect } from "react";
import axios from "axios";

export default function AboutUs() {
  const handleGet = async () => {
    try {
      const response = await axios.get("/api/WeatherForecast");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["keyLinks"].imageSrc}
        breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
        navItems={navigationConfig["keyLinks"].navItems}
        pageTilte="Feedback & Grievance Redressal"
      />
      <section className="maincontent" role="main">
        <div className="container my-5">
          {/* Desktop Layout - Hidden on Mobile */}
          <div className="container-fluid mx-5 justify-content d-none d-lg-block">
            <div className="row">
              {/* Left sticky column */}
              <div className="col-lg-4 stickyBox">
                <h2 className="mt-1">Feedback</h2>
                <p>Your feedback is valuable to us!</p>
                <div className="formbox rounded p-4 h-100">
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="organame" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      id="organame"
                      name="organame"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="orgaadd" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="orgaadd"
                      name="orgaadd"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                      Feedback
                    </label>
                    <textarea
                      id="comment"
                      rows={2}
                      name="comment"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <p className="mb-2">
                      Resolve the simple captcha:
                      <br />
                      15 + 1 =
                      <input
                        type="text"
                        className="ms-2"
                        size={2}
                        name="captchaResult"
                      />
                    </p>
                    <input type="hidden" name="firstNumber" value="15" />
                    <input type="hidden" name="secondNumber" value="1" />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Submit
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="col-lg-8 ps-5 pe-5">
                <h2>Grievance Redressal</h2>
                <div className="aboutcontent text-justify mt-4">
                  <div className="boxbottom">
                    <p className="mb-0">VC Meeting for Grievance Issues</p>
                    <a
                      id="btn-3mjajy"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://npcindia.gov.in/NPC/Images/Header/VC%20Meeting%20for%20Grievance%20Issues_05.08.2024.pdf"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        <img src="/images/icons/Visibility.svg" alt="Search" />
                      </span>
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Visible only on Mobile */}
          <div className="d-lg-none">
            {/* Feedback Form Section */}
            <div className="mb-4">
              <h2 className="mt-1 mb-3">Feedback</h2>
              <p className="mb-3">Your feedback is valuable to us!</p>
              <div className="formbox rounded p-3">
                <div className="mb-3">
                  <label htmlFor="fullname-mobile" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname-mobile"
                    name="fullname"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email-mobile" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-mobile"
                    name="email"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject-mobile" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject-mobile"
                    name="subject"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="feedback-mobile" className="form-label">
                    Feedback
                  </label>
                  <textarea
                    id="feedback-mobile"
                    rows={3}
                    name="feedback"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-2" style={{ fontSize: "14px" }}>
                    Resolve the simple captcha:
                  </p>
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>15 + 1 =</span>
                    <input
                      type="text"
                      className="form-control ms-2"
                      style={{ width: "60px" }}
                      name="captchaResult"
                    />
                  </div>
                  <input type="hidden" name="firstNumber" value="15" />
                  <input type="hidden" name="secondNumber" value="1" />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Submit
                </button>
              </div>
            </div>

            {/* Grievance Redressal Section */}
            <div className="mb-4">
              <h2 className="mb-3">Grievance Redressal</h2>
              <div className="aboutcontent">
                <div 
                  className="boxbottom p-3" 
                  style={{ 
                    border: "1px solid #ddd", 
                    borderRadius: "8px", 
                    backgroundColor: "#fff" 
                  }}
                >
                  <p className="mb-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                    VC Meeting for Grievance Issues
                  </p>
                  <a
                    className="btn btn-sm d-flex align-items-center justify-content-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://npcindia.gov.in/NPC/Images/Header/VC%20Meeting%20for%20Grievance%20Issues_05.08.2024.pdf"
                    style={{
                      backgroundColor: "#162F6A",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase"
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 64 64" 
                      fill="none"
                    >
                      <path 
                        d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z" 
                        fill="#fff"
                      />
                    </svg>
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
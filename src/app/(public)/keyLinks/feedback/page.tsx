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
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["keyLinks"].imageSrc}
        breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
        navItems={navigationConfig["keyLinks"].navItems}
        pageTilte="Feedback & Grievance Redressal"
      />
      <section className="maincontent" role="main">
        <div className="container my-5">
          <div className="container-fluid mx-5 justify-content">
            <div className="row">
              {/* Left sticky column */}
              <div className="col-md-12 col-lg-4 stickyBox">
                <h2 className="mt-1">Feedback</h2>
                <p>Your feedback is valuable to us!</p>
                <div className=" formbox rounded p-4 h-100">
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
              <div className="col-md-12 col-lg-8 ps-5 pe-5">
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
        </div>
      </section>
    </div>
  );
}

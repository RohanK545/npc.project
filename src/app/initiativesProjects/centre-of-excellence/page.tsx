"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useState } from "react";

export default function AboutUs() {
  // Track the currently open accordion ID, or null if none open
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["initiativeProjects"].imageSrc}
        breadcrumbs={navigationConfig["initiativeProjects"].breadcrumbs}
        navItems={navigationConfig["initiativeProjects"].navItems}
        pageTilte="Centre of Excellence"
      />
      <section className="mainContent">
        <div className="container mt-5">
          <div className="department-accordian">
            <div className="department-accordion-item  d-flex justify-content-between align-items-center gap-2 justify-content-end">
              <h2 className="h3 mb-0">Visit Centre Of Excellence Website</h2>
              <div
                className="col-sm-12 col-md-12 col-lg-2 d-flex align-items-center justify-content-end"
                role="cell"
              >
                <a
                  id="btn-suslr6"
                  className="download-btn d-flex align-items-center text-uppercase pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit Delegation of Powers"
                  aria-label="Visit Delegation of Powers"
                  href="https://www.coeindustry-4.in/User/Homepage.aspx"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
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
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Accordion 1 */}
          <div
            className="department-accordian"
            role="button"
            aria-expanded={openId === "i40"}
            onClick={() => toggleAccordion("i40")}
          >
            <div className="department-accordion-item pointer d-flex justify-content-between align-items-center gap-2 justify-content-end">
              <h2 className="h3 mb-0">Centre For Excellence In Industry 4.0</h2>

              <span
                aria-hidden="true"
                className="material-symbols-outlined bhashini-skip-translation"
                style={{
                  transform:
                    openId === "i40" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>

            {openId === "i40" && (
              <div className="accordion-body mt-3 department-accordion-content">
                <div
                  className="announcementbox row row-gap-2 align-items-center ms-0 me-0 mt-4"
                  role="row"
                >
                  <h3 className="text-justify">
                    National Productivity Council (NPC) in association with
                    Asian Productivity Organization (APO), Japan established
                    Centre of Excellence on IT for Industry 4.0 (CoE: IT for
                    I4.0) in June, 2017 with the following objectives:
                  </h3>
                  <ol className="text-justify ms-4">
                    <li>Create Awareness & Develop knowledge base on I4.0</li>
                    <li>
                      Showcase connected industries using I4.0 technologies
                    </li>
                    <li>Disseminate knowledge to various stakeholders</li>
                  </ol>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div
            className="department-accordian"
            role="button"
            aria-expanded={openId === "energy"}
            onClick={() => toggleAccordion("energy")}
          >
            <div className="department-accordion-item pointer d-flex justify-content-between align-items-center gap-2">
              <h2 className="h3 mb-0">
                Centre For Excellence In Training For Energy Efficiency
              </h2>

              <span
                aria-hidden="true"
                className="material-symbols-outlined bhashini-skip-translation"
                style={{
                  transform:
                    openId === "energy" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>

            {openId === "energy" && (
              <div className="accordion-body mt-3 department-accordion-content ">
                <div
                  className="announcementbox row row-gap-2 align-items-center ms-0 me-0 mt-4"
                  role="row"
                >
                  <h3 className="text-justify">
                    Centre For Excellence In Traning For Energy Efficiency
                  </h3>
                  <p>
                    CETEE is the culmination of Indo-Japanese Governmental
                    Co-operation and has been implemented with the assistance of
                    Bureau of Energy Efficiency (BEE), Ministry of Power, Govt.
                    of India, New Energy Development Organization (NEDO), Govt.
                    of Japan.
                  </p>
                  <p className="text-justify">
                    {" "}
                    CETEE aims to achieve these objectives through its state of
                    the art Hands-on Training facility to impart the advanced
                    Energy Efficiency Technology and Techniques in the field of
                    energy efficiency. CETEE is based on "learning by doing"
                    pedagogy where trainees are exposed to "real-industry"
                    projects.{" "}
                  </p>
                  <br />
                  <p className="text-justify">
                    {" "}
                    Energy Audit and Efficiency Practical Training and
                    Facilities{" "}
                  </p>
                  <p className="text-justify">
                    CETEE is equipped with the various Industrial Energy Utility
                    equipment designed to demonstrate practically various
                    aspects of energy efficiency opportunities and Energy
                    conservation technique as applicable in industries.
                    Participants themselves can operate the equipment and change
                    the operating parameters to learn the impact of efficient
                    operation, change to energy saving mode, conduct testing for
                    performance evaluation of systems through:
                  </p>
                  <p className="text-justify">
                    Pump Training Facility Fan Training Facility Boiler Training
                    Facility Steam Trap Training Facility Open Burner Training
                    Facility and Combustion Furnace Training Facility
                  </p>
                  <ul className="text-justify ms-4">
                    <li>Pump Training Facility</li>
                    <li>Fan Training Facility</li>
                    <li>Boiler Training Facility</li>
                    <li>Steam Trap Training Facility</li>
                    <li>Open Burner Training Facility</li>
                    <li>Combustion Furnace Training Facility</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useState, useEffect } from "react";

export default function Offices() {
  const tables = [
    {
      title: "BENGALURU",
      members: [
        {
          name: "Shri Swarupan Das",
          designation: "RegionalDirector",
          Telephone: "	080-23467294, 9019883123",
          Mail: "swarupan.das@npcindia.gov.in; bangalore@npcindia.gov.in",
          Address:
            "National Productivity Council 2nd Floor, Abhaya Complex KSDB Building, 55, Risaldar Street Seshadripuram Bangalore 560 020",
        },
      ],
    },

    {
      title: "BHUBANESWAR",
      members: [
        {
          name: "Shri Avijit Nayak",
          designation: "Director Gr-II & Regional Director (Bhubaneswar)",
          Telephone: "0674-2397381/26",
          Mail: "avijit.nayak@npcindia.gov.in",
          Address:
            "National Productivity Council A/7, Surya Nagar, Bhubaneswar-751003, Odisha",
        },
        {
          name: "Shri Shyama Prasad",
          designation: "Deputy Director (Bhubaneswar )",
          Telephone: "0674 2397326",
          Mail: "shyama.prasad1@npcindia.gov.in",
          Address:
            "National Productivity Council A/7, Surya Nagar, Bhubaneswar-751003, Odisha",
        },
      ],
    },
    {
      title: "CHANDIGARH",
      members: [
        {
          name: "Ashok Kumar",
          designation: "In charge -Regional Director",
          Telephone: "9888481938",
          Mail: "ashok.kumar@npcindia.gov.in",
          Address:
            "National Productivity Council, Chandigarh CRRID Campus, Centre for Research in Rural and Industrial Development, Plot 2-A, Madhya Marg, Sector 19A, Chandigarh, 160019",
        },
        {
          name: "Shri Suvyendu Shivakar",
          designation: "Deputy Director",
          Telephone: "6287872655",
          Mail: "suvyendu.s@npcindia.gov.in	",
          Address:
            "National Productivity Council, Chandigarh CRRID Campus, Centre for Research in Rural and Industrial Development, Plot 2-A, Madhya Marg, Sector 19A, Chandigarh, 160019",
        },
      ],
    },
  ];

  const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
    return (
      <div
        role="table"
        className="container our-team-list-container mx-auto my-4"
      >
        {/* Title */}
        <div className="our-team-list-header d-flex align-items-center mb-2">
          <span className="material-symbols-outlined bhashini-skip-translation me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24 "
              viewBox="0 -960 960 960"
              width="24"
              fill="2d2d2d"
            >
              <path
                d="M120-120v-555h165v-165h390v330h165v390H533v-165H427v165H120Zm60-60h105v-105H180v105Zm0-165h105v-105H180v105Zm0-165h105v-105H180v105Zm165 165h105v-105H345v105Zm0-165h105v-105H345v105Zm0-165h105v-105H345v105Zm165 330h105v-105H510v105Zm0-165h105v-105H510v105Zm0-165h105v-105H510v105Zm165 495h105v-105H675v105Zm0-165h105v-105H675v105Z"
                fill="#ffffffff"
              />
            </svg>
          </span>
          <p className="text-uppercase mb-0">{title}</p>
        </div>

        {/* Header Row */}
        <div role="rowgroup">
          <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
            <div className="col-lg-2 col-sm-12 ps-1">Name </div>
            <div className="col-lg-2 col-sm-12 ps-1">Designation</div>
            <div className="col-lg-2 col-sm-12">Telephone (Office)</div>
            <div className="col-lg-3 col-sm-12">E-mail</div>
            <div className="col-lg-3 col-sm-12">Address</div>
          </div>
        </div>

        {/* Members */}
        <div role="rowgroup">
          {members.map((m, idx) => (
            <div
              key={idx}
              role="row"
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
            >
              {/* Name & Designation */}
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="name mb-0">{m.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.designation}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Telephone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Mail}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["aboutUs"].imageSrc}
        breadcrumbs={navigationConfig["aboutUs"].breadcrumbs}
        navItems={navigationConfig["aboutUs"].navItems}
        pageTilte="Offices"
      />
      <section className="maincontent">
        {tables.map((tbl, idx) => (
          <InfoTable key={idx} title={tbl.title} members={tbl.members} />
        ))}
      </section>
    </div>
  );
}

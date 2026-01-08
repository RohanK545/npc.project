"use client";

import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Member {
  name: string;
  designation: string;
  telephone: string;
  mail: string;
  address: string;
}

interface Table {
  title: string;
  members: Member[];
}

export default function Offices() {
  const [HeadQuartertables, setHeadQuarterTables] = useState<Table[]>([]);
  const [Officetables, setOfficeTables] = useState<Table[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hqRes, officeRes] = await Promise.all([
          axios.get("/api/aboutUs/getHeadquarters"),
          axios.get("/api/aboutUs/getOffices"),
        ]);

        setHeadQuarterTables(hqRes.data);
        setOfficeTables(officeRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const InfoTable = ({
    title,
    members,
  }: {
    title: string;
    members: Member[];
  }) => {
    return (
      <div role="table" className="our-team-list-container mx-auto my-4">
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
                    <p className="designation mb-0">{m.telephone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.mail}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.address}</p>
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
        <div className="container">
          <h2>HEADQUARTER</h2>
          {HeadQuartertables.map((tbl, idx) => (
            <InfoTable key={idx} title={tbl.title} members={tbl.members} />
          ))}
          <h2>OFFICES</h2>
          {Officetables.map((tbl, idx) => (
            <InfoTable key={idx} title={tbl.title} members={tbl.members} />
          ))}
        </div>
      </section>
    </div>
  );
}

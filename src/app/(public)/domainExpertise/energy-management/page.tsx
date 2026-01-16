"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const members = [
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
    {
      srNo: "1",
      projectTitle: "Water Balance Study",
      typeOfStudy: "  ",
      clientName: "NTPC-Karakka",
      clientType: "Central Government",
      yearOfStudy: "2010-11",
      nameOfGroup: "RD Kolkata",
      area: "Energy Management",
    },
  ];
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredOrganizations = members.filter((org) => {
    const matchesSearch = org.projectTitle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredOrganizations.length / itemsPerPage);

  // Show only items for the selected page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrganizations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  // HANDLERS
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleClearAll = () => {
    setSelectedCategory("");
    setItemsPerPage(10);
    setCurrentPage(1);
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const photos = [
    {
      id: "1",
      imgSrc: "/images/energyManagement/Chlor-alkaliSector.png",
      alt: "Meity Performance Smartboard picture",
      title: "Meity Performance Smartboard",
      link: "/images/energyManagement/Chlor-alkaliSecto.png",
      date: null,
    },
    {
      id: "2",
      imgSrc: "/images/energyManagement/ThermalPowerPlant.png",
      alt: "Meity Performance Smartboard picture",
      title: "Meity Performance Smartboard",
      link: "/images/energyManagement/ThermalPowerPlant.png",
      date: null,
    },
    {
      id: "3",
      imgSrc: "/images/energyManagement/PulpandPaper.png",
      alt: "Meity Performance Smartboard picture",
      title: "Meity Performance Smartboard",
      link: "/images/energyManagement/PulpandPaper.png",
      date: null,
    },
    {
      id: "4",
      imgSrc: "/images/energyManagement/Iron&Steel.png",
      alt: "Meity Performance Smartboard picture",
      title: "Meity Performance Smartboard",
      link: "/images/energyManagement/Iron&Steel.png",
      date: null,
    },
    {
      id: "5",
      imgSrc: "/images/energyManagement/CementSector.png",
      alt: "Meity Performance Smartboard picture",
      title: "Meity Performance Smartboard",
      link: "/images/energyManagement/CementSector.png",
      date: null,
    },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Energy Management"
      />
      <section className="maincontent">
        <div className="container">
          <p className="mt-5">
            {" "}
            Energy Management (EM) Division of NPC offers Consultancy / Training
            services since 1964. NPC has core strength of 30 EM professionals
            which include about 20 BEE certified Energy Auditors. The areas of
            expert services of this division are enlisted below :
          </p>
          <br />
          <div className=" aboutcontent  row g-4">
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>1</h3>
                <p>
                  Energy Management and Audit in all types of Industries,
                  Commercial buildings & establishment, Power-generating plants,
                  Distribution system.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>2</h3>
                <p>
                  Demand side Management potential with focus on the industrial
                  sector.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>3</h3>
                <p>
                  To strengthen policy aspects and increase public awareness of
                  Energy Conservation issues through modular training programmes
                  for Senior, Middle and Shop floor level executives.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>4</h3>
                <p>
                  Technological Upgradation and Resource Conservation in SME's
                  through cluster approach.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>5</h3>
                <p>
                  Providing Technical Expertise Services to APO member Countries
                  in Energy Efficiency.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>6</h3>
                <p>
                  Providing hands on training at Centre Excellence for Training
                  in Energy Efficiency and Indo-Japan project on Regional Energy
                  Efficiency Centre at Dr. Ambedkar Institute of Productivity,
                  Chennai, sponsored by DIPP, with support from BEE & NEDO,
                  Japan.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>7</h3>
                <p>
                  NPC has been conducting the prestigious National Certification
                  Examination for Energy Managers and Energy Auditors on behalf
                  of the Bureau of Energy Efficiency (BEE), Ministry of Power,
                  India, since 2004.
                </p>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h2 className="text-blue">Good Practices Manual</h2>
          <div className="row photos-row-gap">
            {photos.map(({ id, imgSrc, alt, title, link, date }) => (
              <div key={id} className="col-sm-12 col-md-6 col-lg-3">
                <div className="book-card h-100">
                  <div className="img-fluid position-relative">
                    <img
                      className="photos-img img-fluid performimg"
                      src={imgSrc}
                      alt={alt}
                      width={100}
                      height={100}
                    />
                    <div className="position-absolute photos-btn pointer bg-transparent me-2 mb-2">
                      <a
                        id={id}
                        className="link-btn d-flex align-items-center text-uppercase pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${title}`}
                        aria-label={`Visit ${title}`}
                        href={link}
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
                      </a>
                    </div>
                  </div>
                  <div className="book-card-body mt-2">
                    <p role="heading" aria-level={3} className="h3">
                      {title}
                    </p>
                  </div>
                  {date && (
                    <div className="book-card-footer d-flex justify-content-between align-items-center text-uppercase">
                      <small className="ptype">{date}</small>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <br />
          {/* <h2 className="text-blue">CONSULTANCY PROJECTS</h2> */}
          <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
            <div className="col-md-12 col-lg-4">
              <div className="input-group searchField">
                <span className="input-group-text">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    {/* <img src="/images/icons/Search_Icon.svg" alt="Search" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24 "
                      viewBox="0 0 64 64"
                      fill="none"
                      // style={{display: flex; justify-content: center}}
                    >
                      <path
                        d="M25.3333 42.6667C20.4889 42.6667 16.3889 40.9889 13.0333 37.6333C9.67778 34.2778 8 30.1778 8 25.3333C8 20.4889 9.67778 16.3889 13.0333 13.0333C16.3889 9.67778 20.4889 8 25.3333 8C30.1778 8 34.2778 9.67778 37.6333 13.0333C40.9889 16.3889 42.6667 20.4889 42.6667 25.3333C42.6667 27.2889 42.3556 29.1333 41.7333 30.8667C41.1111 32.6 40.2667 34.1333 39.2 35.4667L54.1333 50.4C54.6222 50.8889 54.8667 51.5111 54.8667 52.2667C54.8667 53.0222 54.6222 53.6444 54.1333 54.1333C53.6444 54.6222 53.0222 54.8667 52.2667 54.8667C51.5111 54.8667 50.8889 54.6222 50.4 54.1333L35.4667 39.2C34.1333 40.2667 32.6 41.1111 30.8667 41.7333C29.1333 42.3556 27.2889 42.6667 25.3333 42.6667ZM25.3333 37.3333C28.6667 37.3333 31.5 36.1667 33.8333 33.8333C36.1667 31.5 37.3333 28.6667 37.3333 25.3333C37.3333 22 36.1667 19.1667 33.8333 16.8333C31.5 14.5 28.6667 13.3333 25.3333 13.3333C22 13.3333 19.1667 14.5 16.8333 16.8333C14.5 19.1667 13.3333 22 13.3333 25.3333C13.3333 28.6667 14.5 31.5 16.8333 33.8333C19.1667 36.1667 22 37.3333 25.3333 37.3333Z"
                        fill="#5279d7"
                      />
                    </svg>
                  </span>
                </span>

                <input
                  type="search"
                  role="searchbox"
                  name="scheme"
                  aria-label="search"
                  className="form-control"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <span className="input-group-text filterIconResponsive d-block d-md-none">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    filter_alt
                  </span>
                </span>
              </div>
            </div>

            <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
              <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
                {/* Per Page Select */}
                <div className="input-group perPageField" role="combobox">
                  <label htmlFor="pageLimitSelect" className="visually-hidden">
                    Items per page
                  </label>

                  <span className="input-group-text">
                    <span
                      className="material-symbols-outlined bhashini-skip-translation"
                      aria-hidden="true"
                    >
                      {/* <img src="/images/icons/List_Icon.svg" alt="List" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M18.1605 50.9548C19.1048 50.9548 19.8957 50.6354 20.5332 49.9967C21.17 49.358 21.4885 48.5664 21.4885 47.6221C21.4885 46.6778 21.1691 45.8869 20.5304 45.2494C19.8916 44.6125 19.1001 44.2941 18.1558 44.2941C17.2115 44.2941 16.4209 44.6135 15.784 45.2522C15.1465 45.891 14.8278 46.6825 14.8278 47.6268C14.8278 48.5711 15.1471 49.3617 15.7859 49.9986C16.4253 50.6361 17.2168 50.9548 18.1605 50.9548ZM18.1605 36.3299C19.1048 36.3299 19.8957 36.0105 20.5332 35.3718C21.17 34.733 21.4885 33.9415 21.4885 32.9972C21.4885 32.0529 21.1691 31.2623 20.5304 30.6254C19.8916 29.9885 19.1001 29.6701 18.1558 29.6701C17.2115 29.6701 16.4209 29.9895 15.784 30.6282C15.1465 31.267 14.8278 32.0585 14.8278 33.0028C14.8278 33.9471 15.1471 34.7377 15.7859 35.3746C16.4253 36.0115 17.2168 36.3299 18.1605 36.3299ZM18.1605 21.7059C19.1048 21.7059 19.8957 21.3865 20.5332 20.7478C21.17 20.109 21.4885 19.3175 21.4885 18.3732C21.4885 17.4289 21.1691 16.6383 20.5304 16.0014C19.8916 15.3639 19.1001 15.0452 18.1558 15.0452C17.2115 15.0452 16.4209 15.3645 15.784 16.0033C15.1465 16.642 14.8278 17.4336 14.8278 18.3779C14.8278 19.3222 15.1471 20.1131 15.7859 20.7506C16.4253 21.3874 17.2168 21.7059 18.1605 21.7059ZM29.5976 50.4475H51.0273V44.8014H29.5976V50.4475ZM29.5976 35.8235H51.0273V30.1765H29.5976V35.8235ZM29.5976 21.1986H51.0273V15.5525H29.5976V21.1986ZM7.80565 65C5.90384 65 4.29412 64.3412 2.97647 63.0235C1.65882 61.7059 1 60.0962 1 58.1944V7.80565C1 5.90384 1.65882 4.29412 2.97647 2.97647C4.29412 1.65882 5.90384 1 7.80565 1H58.1944C60.0962 1 61.7059 1.65882 63.0235 2.97647C64.3412 4.29412 65 5.90384 65 7.80565V58.1944C65 60.0962 64.3412 61.7059 63.0235 63.0235C61.7059 64.3412 60.0962 65 58.1944 65H7.80565ZM7.80565 59.3529H58.1944C58.4842 59.3529 58.7497 59.2322 58.9906 58.9906C59.2322 58.7497 59.3529 58.4842 59.3529 58.1944V7.80565C59.3529 7.51576 59.2322 7.25035 58.9906 7.00941C58.7497 6.76784 58.4842 6.64706 58.1944 6.64706H7.80565C7.51576 6.64706 7.25035 6.76784 7.00941 7.00941C6.76784 7.25035 6.64706 7.51576 6.64706 7.80565V58.1944C6.64706 58.4842 6.76784 58.7497 7.00941 58.9906C7.25035 59.2322 7.51576 59.3529 7.80565 59.3529Z"
                          fill="#5279d7"
                        />
                      </svg>
                    </span>
                  </span>

                  <select
                    className="form-select"
                    id="pageLimitSelect"
                    aria-label="pages"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // reset to page 1 whenever per-page changes
                    }}
                  >
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                  </select>
                </div>
                {/* Clear Button */}
                {(itemsPerPage !== 10 || selectedCategory !== "") && (
                  <div className="input-group perPageField">
                    <button
                      className="btn d-flex align-items-center justify-content-center w-100"
                      title="Clear All"
                      type="button"
                      aria-label="Clear all filter"
                      onClick={handleClearAll}
                      style={{
                        padding: "0.85rem 1.2rem",
                        border: "1px solid #5279d7",
                        borderRadius: "0.375rem",
                        backgroundColor: "white",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 66 66"
                        fill="none"
                        className="me-2"
                      >
                        <path
                          d="M5.92308 65L1 60.0769L28.0769 33L1 5.92308L5.92308 1L33 28.0769L60.0769 1L65 5.92308L37.9231 33L65 60.0769L60.0769 65L33 37.9231L5.92308 65Z"
                          fill="#162F6A"
                        />
                      </svg>

                      <span style={{ all: "unset", fontSize: "1.5rem" }}>
                        Clear All
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
          <div role="table" className=" our-team-list-container mx-auto my-4">
            {/* Title */}
            <div className="our-team-list-header d-flex align-items-center mb-2">
              <p className="text-uppercase mb-0">CONSULTANCY PROJECTS</p>
            </div>
            {/* Header Row */}
            <div role="rowgroup">
              <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold ">
                <div className="col-lg-1 col-sm-12 ps-1 text-center">
                  Sr.No.
                </div>

                <div className="col-lg-2 col-sm-12 ps-1 text-center">
                  Project Title
                </div>

                <div className="col-lg-1 col-sm-12 text-center">
                  Type Of Study
                </div>

                <div className="col-lg-2 col-sm-12 text-center">
                  Client Name
                </div>

                <div className="col-lg-2 col-sm-12 text-center">
                  Client Type
                </div>

                <div className="col-lg-1 col-sm-12 text-center">
                  Year Of Study
                </div>

                <div className="col-lg-1 col-sm-12 text-center">
                  Name Of Group/RD
                </div>

                <div className="col-lg-2 col-sm-12 text-center">Area</div>
              </div>
            </div>

            {/* Members Table*/}
            <div role="rowgroup">
              {currentItems.map((m, idx) => (
                <div
                  key={idx}
                  role="row"
                  className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
                >
                  <div className="col-lg-1 col-md-12">
                    <div className="d-flex gap-2  justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className=" mb-0">{m.srNo}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-lg-2 col-md-12">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="name  mb-0">
                          {highlightText(m.projectTitle, searchQuery)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12">
                    <div className="d-flex gap-2  justify-content-centeralign-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0">{m.typeOfStudy}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0">{m.clientName}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0">{m.clientType}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0">{m.yearOfStudy}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-12">
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0 text-justify">
                          {m.nameOfGroup}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="d-flex flex-column">
                        <p className="designation mb-0">{m.area}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="row align-items-center mt-5">
              <div className="col-md-4"></div>

              <div className="col-md-4 d-flex justify-content-center">
                <nav aria-label="Page navigation">
                  <ul className="pagination pointer">
                    {/* Previous Button */}
                    <li>
                      <button
                        className="button-item previous mb-2"
                        disabled={currentPage === 1}
                        aria-label="Go to previous page"
                        onClick={goPrev}
                      >
                        <img
                          src="/images/icons/Chevron_Left.svg"
                          alt="Previous Page"
                        />
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;

                      return (
                        <li
                          key={page}
                          className="page-item"
                          role="link"
                          aria-label={`Go to page ${page}`}
                        >
                          <span
                            className={`page-link pointer hover ${
                              currentPage === page ? "active" : ""
                            }`}
                            onClick={() => goToPage(page)}
                          >
                            {page}
                          </span>
                        </li>
                      );
                    })}

                    {/* Next Button */}
                    <li>
                      <button
                        className="button-item next mb-2"
                        disabled={currentPage === totalPages}
                        aria-label="Go to next page"
                        onClick={goNext}
                      >
                        <span className="material-symbols-outlined">
                          <img
                            src="/images/icons/Chevron_Right.svg"
                            alt="Next Page"
                          />
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

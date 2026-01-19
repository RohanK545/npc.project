"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useMemo } from "react";

export default function AboutUs() {
  const tables = [
    {
      title: "CONSULTANCY PROJECTS",
      projects: [
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "1",
          projectTitle:
            "National Awards For Exemplary Initiatives In E-Governance",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Dept of Administrative Reforms & Public Grievances (DARPG), Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2005-06",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "2",
          projectTitle: "Feasibility Study of Mission Mode Projects",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName: "Ministry of IT & Communications, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2006-07",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
        {
          SrNo: "3",
          projectTitle:
            "Compliance Study of the Procedures adopted at Front Office of Service Providers (PAN-Systems)",
          typeOfStudy: "Evaluation study of e-Governance Initiatives",
          clientName:
            "Department of Income Tax (Systems), Ministry of Finance, Govt. of India",
          clientType: "Central Government",
          yearOfStudy: "2007-08",
          nameOfGroup: "Information Technology",
          area: "Information Technology",
          Scope: "",
        },
      ],
    },
  ];
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const members = tables[0].projects;

  // 🔹 Filter + Pagination
  const filtered = useMemo(() => {
    return members.filter((m) =>
      JSON.stringify(m).toLowerCase().includes(search.toLowerCase())
    );
  }, [search, members]);

  const totalPages = Math.ceil(filtered.length / perPage);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [page, perPage, filtered]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
    setPage(1); // reset page
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
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

  const nextPage = () => page < totalPages && setPage(page + 1);
  const prevPage = () => page > 1 && setPage(page - 1);
  const InfoTable = ({ title }: { title: string }) => {
    return (
      <div role="table" className="our-team-list-container mx-auto my-4">
        {/* Title */}
        <div className="our-team-list-header d-flex align-items-center mt-0 mb-2">
          <p className="text-uppercase mb-0">{title}</p>
        </div>

        {/* Desktop Table - Hidden on Mobile */}
        <div className="d-none d-lg-block">
          {/* Header Row */}
          <div role="rowgroup">
            <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
              <div className="col-lg-1">S.No.</div>
              <div className="col-lg-2 ps-1">Project Title</div>
              <div className="col-lg-2 ps-1">Type of Study</div>
              <div className="col-lg-2 ps-1">Client Name</div>
              <div className="col-lg-1 ps-1">Client Type</div>
              <div className="col-lg-1 ps-1">Year of Study</div>
              <div className="col-lg-1">Name of Group/RD</div>
              <div className="col-lg-1">Area</div>
              <div className="col-lg-1">Scope of Study</div>
            </div>
          </div>
          {/* Members */}
          <div role="rowgroup">
            {paginatedData.map((m, idx) => (
              <div
                key={idx}
                role="row"
                className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
              >
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">{m.SrNo}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="name mb-0">
                        {highlightText(m.projectTitle, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">
                        {highlightText(m.typeOfStudy, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">
                        {highlightText(m.clientName, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">
                        {highlightText(m.clientType, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">{m.yearOfStudy}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">{m.nameOfGroup}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">{m.area}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">{m.Scope}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card Layout - Visible only on Mobile */}
        <div className="d-lg-none">
          {paginatedData.map((m, idx) => (
            <div
              key={idx}
              className="mobile-project-card p-3 mb-3"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Header: Serial Number and Year */}
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "#162F6A",
                    fontSize: "14px",
                    padding: "6px 12px",
                    fontWeight: "600",
                  }}
                >
                  #{m.SrNo}
                </span>
                <span
                  className="text-muted"
                  style={{ fontSize: "13px", fontWeight: "500" }}
                >
                  {m.yearOfStudy}
                </span>
              </div>

              {/* Project Title */}
              <div className="mb-3">
                <h6
                  className="fw-bold mb-0"
                  style={{ color: "#162F6A", fontSize: "15px", lineHeight: "1.4" }}
                >
                  {highlightText(m.projectTitle, search)}
                </h6>
              </div>

              {/* Project Details */}
              <div className="project-details">
                {/* Type of Study */}
                <div className="mb-2">
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Type of Study:
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.typeOfStudy, search)}
                  </p>
                </div>

                {/* Client Name */}
                <div className="mb-2">
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Client Name:
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.clientName, search)}
                  </p>
                </div>

                {/* Client Type */}
                <div className="mb-2">
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Client Type:
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.clientType, search)}
                  </p>
                </div>

                {/* Name of Group/RD */}
                <div className="mb-2">
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Name of Group/RD:
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {m.nameOfGroup}
                  </p>
                </div>

                {/* Area */}
                <div className="mb-2">
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Area:
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {m.area}
                  </p>
                </div>

                {/* Scope of Study (if exists) */}
                {m.Scope && (
                  <div className="mb-0">
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    >
                      Scope of Study:
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                      {m.Scope}
                    </p>
                  </div>
                )}
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
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Information Technology"
      />
      <section className="maincontent">
        <div className="container">
          {/* <h1>New</h1> */}
          <p className="text-justify">
            The key strength of the IT group is the excellent knowledge and
            skill-base coupled with the strong system skills to meet the
            specific needs of the clients. NPC, IT Group has been offering
            consultancy and training services in various areas for Strategic
            Policy & Planning matters for e-Governance/ICT Projects/Knowledge
            Management and web based application development as per sector
            specific as well as capacity building initiates for skill
            development of employees in IT-related areas for various
            organizations.
          </p>
          <h3>The consultancy services offered by IT group include:</h3>
          <div className=" aboutcontent  row g-4">
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>1</h3>
                <p>
                  Business Process Re-engineering and Compliance Audit of the
                  ICT initiatives.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>2</h3>
                <p>E-Governance initiatives assessment and promotion.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>3</h3>
                <p>Knowledge Management implementation and assessment.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>4</h3>
                <p>
                  Project Management Services for ICT project implementation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>5</h3>
                <p>Strategic Planning for Organizational ICT policy.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>6</h3>
                <p>Web Based application development.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>7</h3>
                <p>Promotion & Assessment of Innovations in ICT..</p>
              </div>
            </div>
          </div>
          <br />
          <h3>
            The training and capacity building services offered by IT group
            include:
          </h3>
          <div className=" aboutcontent  row g-4">
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>1</h3>
                <p>E-Governance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>2</h3>
                <p>Knowledge & Innovation Management.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>3</h3>
                <p>ICT Strategic Planning.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>4</h3>
                <p>Information Risk Management and ISMS.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>5</h3>
                <p>IT applications for office Management in Govt Sector.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>6</h3>
                <p>Advance ICT Tools and Techniques.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>7</h3>
                <p>Enhancing Organisational Performance through ICT.</p>
              </div>
            </div>
          </div>
          <br />
          <div className="card-wrapper">
            <div className="reactFamilyTree d-flex align-content-center justify-content-center w-100">
              <div
                style={{
                  position: "relative",
                  width: "344px",
                  height: "652.5px",
                }}
              >
                <div>
                  <i
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "176px",
                      background: "rgb(153, 153, 153)",
                      transform: "translate(172px, 175px)",
                      pointerEvents: "none",
                    }}
                  ></i>
                  <i
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "176px",
                      background: "rgb(153, 153, 153)",
                      transform: "translate(172px, 350px)",
                      pointerEvents: "none",
                    }}
                  ></i>
                </div>

                {/* HON’BLE MINISTER */}
                <div
                  className="FamilyNode_root__LylyV"
                  style={{
                    width: "344px",
                    transform: "translate(0px, 0px)",
                    height: "350px",
                    paddingInline: "12px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-center mx-auto">
                      <div
                        className="profile-card pointer position-relative"
                        tabIndex={0}
                        aria-label="View Profile HON’BLE MINISTER"
                        role="link"
                      >
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <span
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/images/domainExperties/nikhilpanchbhai496125.png"
                              alt="profile picture Shri Ashwini Vaishnaw"
                              className="img-fluid profile-img object-fit-cover bg-white"
                            />
                          </span>
                        </div>
                        <small className="text-uppercase">
                          HON’BLE MINISTER
                        </small>
                        <p className="h4">Shri Ashwini Vaishnaw</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HON’BLE MINISTER OF STATE */}
                <div
                  className="FamilyNode_root__LylyV"
                  style={{
                    width: "344px",
                    transform: "translate(0px, 100px)",
                    height: "350px",
                    paddingInline: "12px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-center mx-auto">
                      <div
                        className="profile-card pointer position-relative"
                        tabIndex={0}
                        aria-label="View Profile HON’BLE MINISTER OF STATE"
                        role="link"
                      >
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <span
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/images/domainExperties/round.png"
                              alt="profile picture Shri Jitin Prasada"
                              className="img-fluid profile-img object-fit-cover bg-white"
                            />
                          </span>
                        </div>
                        <small className="text-uppercase">
                          HON’BLE MINISTER OF STATE
                        </small>
                        <p className="h4">Shri Jitin Prasada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="form-group row align-items-start row-gap-2 mb-0 mt-5 mx-5 filterbox filterBoxResponsive">
          {/* Search Field */}
          <div className="col-md-12 col-lg-4">
            <div className="input-group searchField">
              <span className="input-group-text">
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 64 64"
                    fill="none"
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
                className="form-control"
                placeholder="Search..."
                value={search}
                onChange={() => handleSearchChange}
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

          {/* Desktop Filter Section */}
          <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
            <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
              {/* Per Page Select */}
              <div className="input-group perPageField" role="combobox">
                <label htmlFor="pageLimitSelect" className="visually-hidden">
                  Items per page
                </label>

                <span className="input-group-text">
                  <span aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 66 66"
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
                  id="pageLimitSelect"
                  className="form-select"
                  value={perPage}
                  onChange={handlePerPageChange}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        {tables.map((tbl, idx) => (
          <InfoTable key={idx} title={tbl.title} />
        ))}
        <div className="row align-items-center mt-5">
          <div className="col-md-4"></div>

          <div className="col-md-4 d-flex justify-content-center">
            <nav aria-label="Page navigation">
              <ul className="pagination pointer">
                {/* Previous Button */}
                <li>
                  <button
                    className="button-item previous"
                    onClick={prevPage}
                    disabled={page === 1}
                    aria-label="Go to previous page"
                  >
                    {/* Left Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <path
                        d="M28.8001 32L39.2001 42.4C39.689 42.8889 39.9335 43.5111 39.9335 44.2666C39.9335 45.0222 39.689 45.6444 39.2001 46.1333C38.7112 46.6222 38.089 46.8666 37.3335 46.8666C36.5779 46.8666 35.9557 46.6222 35.4668 46.1333L23.2001 33.8666C22.9335 33.6 22.7446 33.3111 22.6335 33C22.5224 32.6889 22.4668 32.3555 22.4668 32C22.4668 31.6444 22.5224 31.3111 22.6335 31C22.7446 30.6889 22.9335 30.4 23.2001 30.1333L35.4668 17.8666C35.9557 17.3777 36.5779 17.1333 37.3335 17.1333C38.089 17.1333 38.7112 17.3777 39.2001 17.8666C39.689 18.3555 39.9335 18.9777 39.9335 19.7333C39.9335 20.4889 39.689 21.1111 39.2001 21.6L28.8001 32Z"
                        fill="#162F6A"
                      />
                    </svg>
                  </button>
                </li>

                {/* Dynamic Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <li
                      key={num}
                      className="page-item"
                      tabIndex={0}
                      role="link"
                      aria-label={`Go to page ${num}`}
                      onClick={() => setPage(num)}
                    >
                      <span
                        className={`${page === num ? "active" : "false"
                          } page-link pointer hover`}
                      >
                        {num}
                      </span>
                    </li>
                  )
                )}

                {/* Next Button */}
                <li>
                  <button
                    className="button-item next"
                    title="Next"
                    aria-disabled={page === totalPages}
                    disabled={page === totalPages}
                    aria-label="Go to Next page"
                    onClick={nextPage}
                  >
                    {/* Right Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <path
                        d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                        fill="#29136C"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

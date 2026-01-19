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
          projectTitle: "Manpower Assessment Study",
          typeOfStudy: "",
          clientName: "Oil India Ltd, Kolkata Branch Office",
          clientType: "Central Government",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "2",
          projectTitle: "Manpower Assessment Study",
          typeOfStudy: "",
          clientName: "Electro Steel Casting Pvt. Ltd.",
          clientType: "Private Sector",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "3",
          projectTitle: "Change over ISO 9001:2000 to ISO 9001:2008",
          typeOfStudy: "",
          clientName: "Govt. of Mizoram",
          clientType: "State Government",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "4",
          projectTitle: "Productivity Study",
          typeOfStudy: "",
          clientName: "Marathan Electroic Motors, Kolkata",
          clientType: "Private Sector",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "5",
          projectTitle: "Implementation of ISO 9001:2008",
          typeOfStudy: "",
          clientName: "West Bengal Minorities Development & Finance",
          clientType: "State Government",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "6",
          projectTitle: "Implementation of ISO 9001:2008",
          typeOfStudy: "",
          clientName: "DM Office, Hoogly, West Bengal",
          clientType: "State Government",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "7",
          projectTitle: "QMS ISO 9001:2008",
          typeOfStudy: "",
          clientName: "Bokaro Power Supply Cop. Ltd.",
          clientType: "Private Sector",
          yearOfStudy: "2010-11",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "8",
          projectTitle: "Manpower Assessment Study",
          typeOfStudy: "",
          clientName: "Viswa Bharati University",
          clientType: "Central Government",
          yearOfStudy: "2011-12",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "9",
          projectTitle: "Manpower Assessment Study",
          typeOfStudy: "",
          clientName: "Aditya Birla Cotton Mill, Rishra, West Bengal",
          clientType: "Private Sector",
          yearOfStudy: "2011-12",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
        {
          SrNo: "10",
          projectTitle: "ISO 9001:2008",
          typeOfStudy: "",
          clientName: "DM Office, Bankura, West Bengal",
          clientType: "State Government",
          yearOfStudy: "2011-12",
          nameOfGroup: "RD Kolkata",
          area: "Industrial Engineering",
        },
      ],
    },
  ];
  const profiles = [
    {
      name: "Sh. Ashutosh Makup",
      designation: "Director Gr.-II (IE) & Group Head (IE)",
      officePhone: "011-24607363",
      mobilePhone: "7978960438",
      email: "ashutosh.makup@npcindia.gov.in",
      education: "",
      image: "/images/domainExperties/round.png",
    },
    {
      name: "Sh. Vijay Kumar",
      designation: "Director Gr.-II (IE)",
      officePhone: "011-24607338",
      mobilePhone: "9971846036",
      email: "vijay.kumar@npcindia.gov.in",
      education: "",
      image: "/images/domainExperties/round.png",
    },
    {
      name: "Sh. Sanjay Kumar Dwivedi",
      designation: "Deputy Director (IE)",
      officePhone: "011-24607355",
      mobilePhone: "9958775588",
      email: "sk.dwivedi@npcindia.gov.in",
      education: "B.Tech (Production)",
      image: "/images/domainExperties/round.png",
    },
    {
      name: "Sh. B. Prabhakar",
      designation: "Deputy Director (IE)",
      officePhone: "011-24607373",
      mobilePhone: "8989166436",
      email: "b.prabhakar@npcindia.gov.in",
      education: "",
      image: "/images/domainExperties/round.png",
    },
    {
      name: "Sh. Kumud Jacob Lugun",
      designation: "Deputy Director (IE)",
      officePhone: "011-24607367",
      mobilePhone: "7678404087",
      email: "kj.lugun@npcindia.gov.in",
      education:
        "Master of Design in Industrial Design, B.E. Production & Industrial Engineering",
      image: "/images/domainExperties/DelhiIE1.jpg",
    },
    {
      name: "Sh. Mukesh Prakash",
      designation: "Deputy Director (IE)",
      officePhone: "011-24607317",
      mobilePhone: "8800313874",
      email: "mukesh.prakash@npcindia.gov.in",
      education:
        "B.Tech in Metallurgical Engineering and PG in Industrial Engineering",
      image: "/images/domainExperties/Mukesh_Prakash_Photo.jpg",
    },
    {
      name: "Sh. Siddharth Pal",
      designation: "Deputy Director (IE)",
      officePhone: "011-24607316",
      mobilePhone: "9910366514",
      email: "siddharth.pal@npcindia.gov.in",
      education: "",
      image: "/images/domainExperties/round.png",
    },
    {
      name: "Sh. Naman Upadhyay",
      designation: "Assistant Director (IE)",
      officePhone: "",
      mobilePhone: "8982555784",
      email: "naman.upadhyay@npcindia.gov.in",
      education: "Computer Science & Engg.",
      image: "/images/domainExperties/round.png",
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

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    setPage(1); // reset page
  };

  const handlePerPageChange = (e: any) => {
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
  const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
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
              <div className="col-lg-3 ps-1">Project Title</div>
              <div className="col-lg-1 ps-1">Type of Study</div>
              <div className="col-lg-3 ps-1">Client Name</div>
              <div className="col-lg-1 ps-1">Client Type</div>
              <div className="col-lg-1 ps-1">Year of Study</div>
              <div className="col-lg-1">Name of Group/RD</div>
              <div className="col-lg-1">Area</div>
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
                <div className="col-lg-3">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="name mb-0">
                        {highlightText(m.projectTitle, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex flex-column">
                      <p className="mb-0">
                        {highlightText(m.typeOfStudy, search)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
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
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
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
                  style={{
                    color: "#162F6A",
                    fontSize: "15px",
                    lineHeight: "1.4"
                  }}
                >
                  {highlightText(m.projectTitle, search)}
                </h6>
              </div>

              {/* Project Details Grid */}
              <div className="project-details">
                {/* Type of Study */}
                <div className="mb-2 pb-2" style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}
                  >
                    Type of Study
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.typeOfStudy, search)}
                  </p>
                </div>

                {/* Client Name */}
                <div className="mb-2 pb-2" style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}
                  >
                    Client Name
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.clientName, search)}
                  </p>
                </div>

                {/* Client Type */}
                <div className="mb-2 pb-2" style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}
                  >
                    Client Type
                  </p>
                  <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                    {highlightText(m.clientType, search)}
                  </p>
                </div>

                {/* Group and Area Row */}
                <div className="row g-2">
                  <div className="col-6">
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}
                    >
                      Group/RD
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                      {m.nameOfGroup}
                    </p>
                  </div>
                  <div className="col-6">
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}
                    >
                      Area
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px", color: "#333" }}>
                      {m.area}
                    </p>
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
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Industrial Engineering"
      />
      <section className="maincontent">
        <div className="container">
          {/* <h1>New</h1> */}
          <p className="text-justify">
            Industrial Engineering Group focuses on Process Improvement
            initiatives for productivity enhancement. Through Consulting,
            Workshop & Training it creatively applies its skills and experience
            to those components that profoundly affect an organization’s
            performance and provide a foundation for growth and success. The
            services to the organizations are being provided in the following
            areas:
          </p>

          <div className=" aboutcontent  row g-4">
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>1</h3>
                <p>Best Practices Benchmarking.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>2</h3>
                <p>Process and Productivity Improvement studies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>3</h3>
                <p>
                  Organizational restructuring and Manpower Rationalization.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>4</h3>
                <p>Lean Manufacturing.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>5</h3>
                <p>Productivity linked incentive schemes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>6</h3>
                <p>Six Sigma.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>7</h3>
                <p>ISO 9001 : 2015 & Quality Management.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>8</h3>
                <p>
                  Assessment based on EFQM / MBNQA Business Excellence
                  Framework.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>9</h3>
                <p>Project Management.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>10</h3>
                <p>Time & Motion Study.</p>
              </div>
            </div>
          </div>

          <br />
          <p>
            In developing the expertise, the Industrial Engineering Group of NPC
            has worked closely with the following institutions of prominence :
          </p>
          <ul>
            <li>GTZ, Germany</li>
            <li>Fraunhofer’s Information Centre Benchmarking, Germany</li>
            <li>Centre for Interfirm Comparison, U.K.</li>
            <li>PIMS, U.K.</li>
            <li>American Productivity and Quality Centre, USA</li>
            <li>Jarett Thor International, USA</li>
            <li>Asian Productivity Organisation, Tokyo</li>
            <li>ILO</li>
            <li>UNDP</li>
            <li>NITIE, Mumbai</li>
          </ul>

          <br />
          <div className="card-wrapper">
            <div className="container my-4 pb-5">
              <div className="row g-4 justify-content-center">
                {profiles.map((profile, index) => (
                  <div key={index} className="col-12 col-md-6 d-flex">
                    <div
                      className="FamilyNode_root__LylyV w-100 d-flex"
                    // style={{ height: "20px", paddingInline: "12px" }}
                    >
                      <div className="d-flex justify-content-center mx-auto w-100">
                        <div
                          className="team-card pointer position-relative d-flex flex-column text-center w-75"
                          // style={{ height: "100%" }}
                          tabIndex={0}
                          role="link"
                          aria-label={`View Profile ${profile.name}`}
                        >
                          {/* Profile Image */}
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ display: "inline-block" }}>
                              <img
                                src={profile.image}
                                alt={`profile picture ${profile.name}`}
                                className="img-fluid team-img object-fit-cover bg-white"
                              />
                            </span>
                          </div>

                          {/* Name & Designation */}
                          <p className="h4  mb-1">{profile.name}</p>
                          <small className="text-uppercase mb-3">
                            {profile.designation}
                          </small>

                          {/* Contact Info (pushed to bottom) */}
                          <div className="mb-1">
                            {(profile.officePhone || profile.mobilePhone) && (
                              <p className="mb-0 small ">
                                {/* Icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 68 68"
                                  fill="none"
                                >
                                  <path
                                    d="M62.0104 66C54.9158 66 47.7882 64.3504 40.6278 61.0513C33.4679 57.7522 26.8894 53.0984 20.8922 47.0899C14.8957 41.0808 10.2478 34.502 6.94871 27.3534C3.64957 20.2055 2 13.0842 2 5.98965C2 4.84957 2.37647 3.89961 3.12941 3.13976C3.88235 2.37992 4.82353 2 5.95294 2H18.2315C19.1821 2 20.0207 2.31028 20.7473 2.93082C21.4739 3.55075 21.936 4.31686 22.1336 5.22918L24.2918 16.3059C24.4411 17.3336 24.4097 18.2168 24.1976 18.9553C23.9849 19.6938 23.6035 20.314 23.0532 20.816L14.3586 29.28C15.7578 31.8425 17.3565 34.2667 19.1548 36.5525C20.9525 38.8376 22.8988 41.0202 24.9939 43.1002C27.0595 45.1664 29.2555 47.0852 31.5821 48.8565C33.9087 50.6278 36.421 52.2761 39.1191 53.8014L47.5671 45.28C48.1562 44.667 48.8696 44.2372 49.7073 43.9906C50.5443 43.7446 51.4143 43.6844 52.3172 43.8099L62.7708 45.9388C63.7214 46.1898 64.4973 46.6748 65.0984 47.3939C65.6995 48.1129 66 48.9286 66 49.8409V62.0471C66 63.1765 65.6201 64.1176 64.8602 64.8706C64.1004 65.6235 63.1504 66 62.0104 66ZM11.6866 23.9369L18.4056 17.5078C18.5261 17.4111 18.6045 17.2784 18.6409 17.1096C18.6773 16.9409 18.6714 16.784 18.6231 16.6391L16.9864 8.22588C16.938 8.03326 16.8536 7.88863 16.7332 7.792C16.6127 7.69537 16.4558 7.64706 16.2626 7.64706H8.21176C8.06682 7.64706 7.94604 7.69537 7.84941 7.792C7.75341 7.88863 7.70541 8.00941 7.70541 8.15435C7.89804 10.7269 8.31906 13.3402 8.96847 15.9944C9.61725 18.6491 10.5233 21.2966 11.6866 23.9369ZM44.4395 56.4725C46.9349 57.6358 49.5376 58.5252 52.2475 59.1407C54.9581 59.7556 57.4908 60.1211 59.8456 60.2372C59.9906 60.2372 60.1114 60.1889 60.208 60.0922C60.3046 59.9956 60.3529 59.8748 60.3529 59.7299V51.8099C60.3529 51.6166 60.3046 51.4598 60.208 51.3393C60.1114 51.2188 59.9667 51.1344 59.7741 51.0861L51.8682 49.4786C51.7233 49.4303 51.5965 49.4243 51.488 49.4607C51.3795 49.4971 51.2646 49.5755 51.1435 49.696L44.4395 56.4725Z"
                                    fill="#162F6A"
                                  />
                                </svg>
                                {"   "}
                                {/* Numbers */}
                                <span>
                                  {profile.officePhone && (
                                    <span>{profile.officePhone} (Office)</span>
                                  )}

                                  {profile.officePhone &&
                                    profile.mobilePhone && <br />}

                                  {profile.mobilePhone && (
                                    <span>{profile.mobilePhone} (Mobile)</span>
                                  )}
                                </span>
                              </p>
                            )}
                            {profile.education && (
                              <p className="mb-1 small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24 "
                                  viewBox="0 0 64 64"
                                  fill="none"
                                >
                                  <path
                                    d="M16.1334 47.4C15.2446 46.9111 14.5557 46.2556 14.0668 45.4333C13.5779 44.6111 13.3334 43.6889 13.3334 42.6667V29.8667L6.93345 26.3333C6.44456 26.0667 6.089 25.7333 5.86678 25.3333C5.64456 24.9333 5.53345 24.4889 5.53345 24C5.53345 23.5111 5.64456 23.0667 5.86678 22.6667C6.089 22.2667 6.44456 21.9333 6.93345 21.6667L29.4668 9.4C29.8668 9.17778 30.2779 9.01112 30.7001 8.9C31.1223 8.78889 31.5557 8.73334 32.0001 8.73334C32.4446 8.73334 32.8779 8.78889 33.3001 8.9C33.7223 9.01112 34.1334 9.17778 34.5334 9.4L59.9334 23.2667C60.3779 23.4889 60.7223 23.8111 60.9668 24.2333C61.2112 24.6556 61.3335 25.1111 61.3335 25.6V42.6667C61.3335 43.4222 61.0779 44.0556 60.5668 44.5667C60.0557 45.0778 59.4223 45.3333 58.6668 45.3333C57.9112 45.3333 57.2779 45.0778 56.7668 44.5667C56.2557 44.0556 56.0001 43.4222 56.0001 42.6667V26.9333L50.6668 29.8667V42.6667C50.6668 43.6889 50.4223 44.6111 49.9334 45.4333C49.4446 46.2556 48.7557 46.9111 47.8668 47.4L34.5334 54.6C34.1334 54.8222 33.7223 54.9889 33.3001 55.1C32.8779 55.2111 32.4446 55.2667 32.0001 55.2667C31.5557 55.2667 31.1223 55.2111 30.7001 55.1C30.2779 54.9889 29.8668 54.8222 29.4668 54.6L16.1334 47.4ZM32.0001 33.8667L50.2668 24L32.0001 14.1333L13.7334 24L32.0001 33.8667ZM32.0001 49.9333L45.3335 42.7333V32.6667L34.6001 38.6C34.2001 38.8222 33.7779 38.9889 33.3334 39.1C32.889 39.2111 32.4446 39.2667 32.0001 39.2667C31.5557 39.2667 31.1112 39.2111 30.6668 39.1C30.2223 38.9889 29.8001 38.8222 29.4001 38.6L18.6668 32.6667V42.7333L32.0001 49.9333Z"
                                    fill="#162F6A"
                                  />
                                </svg>
                                {"   "}
                                {"   "}
                                {profile.education}
                              </p>
                            )}
                            {profile.email && (
                              <p className="mb-0 small text-break">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24 "
                                  viewBox="0 -960 960 960"
                                  width="24"
                                  fill="#2d2d2d"
                                >
                                  <path
                                    d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
                                    fill="#162F6A"
                                  />
                                </svg>
                                {"   "}
                                {profile.email}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h2 className="my-4 pt-4">CONSULTANCY REPORTS</h2>
          <div className="photos-card h-100 text-center pb-5">
            <div>
              <div className="img-fluid position-relative ">
                <div className="photos-img img-fluid performimg d-flex justify-content-center align-items-center border border-dark">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.35 44.2395C13.2283 43.151 10.7231 42.7162 8.2625 43.0092H2V61.9366H6.9875V54.7126H9.125C11.3393 54.904 13.5644 54.4472 15.425 53.4193C17.0043 52.2798 17.875 50.5939 17.7875 48.8452C17.9044 47.0693 16.997 45.3548 15.35 44.2395ZM11.3375 51.148C10.3955 51.4968 9.35973 51.6275 8.3375 51.5265H6.875V46.1638H8.3375C9.39948 46.0688 10.4709 46.2447 11.4125 46.6685C12.2895 47.1823 12.7864 48.0423 12.725 48.9398C12.8386 49.8446 12.2902 50.7173 11.3375 51.148ZM28.5125 43.0092H22.2875V61.9366H28.25C31.2887 62.1867 34.3486 61.6938 37.0625 60.517C40.0487 58.6449 41.644 55.5893 41.2625 52.4729C41.486 49.803 40.3552 47.1784 38.15 45.249C35.4261 43.4429 31.9523 42.6356 28.5125 43.0092ZM33.4625 57.6464C31.9002 58.3851 30.1113 58.7146 28.325 58.5927H27.35V46.3531H28.25C31.4 46.3531 32.6375 46.6054 33.875 47.5518C35.3769 48.8672 36.1525 50.6529 36.0125 52.4729C36.2054 54.4426 35.2557 56.3694 33.4625 57.6464ZM46.7375 61.9366H51.8V54.0186H62V50.6748H51.8V46.3531H62V43.0092H46.7375V61.9366ZM43.25 2H2V36.7001H9.5V30.391V27.0787V8.30911H40.1375L54.5 20.3911V27.0787V30.391V36.7001H62V17.7728L43.25 2Z"
                      fill="#162F6A"
                    />
                  </svg>
                </div>

                <div className="position-absolute photos-btn pointer bg-transparent me-2 mb-2">
                  <a
                    className="link-btn d-flex align-items-center text-uppercase pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="pdf"
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
            </div>
            <div className="photos-card-body mt-2">
              <p role="heading" aria-level={3} className="h3">
                Lean Manufacturing Competitiveness Scheme
              </p>
              <p role="heading" aria-level={3} className="h3">
                Upscaled Revised 2013
              </p>
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
                  onChange={handleSearchChange}
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
            <InfoTable key={idx} title={tbl.title} members={tbl.projects} />
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
        </div>
      </section>
    </div>
  );
}

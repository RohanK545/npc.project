"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import React, { useState, useEffect } from "react";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },
    { pagetitle: "Our Organizations" },
  ];

  const navItems = [
    { label: "About Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: false },
    // { label: "Our Division", href: "/ministry/division", active: false },
    {
      label: "Our Organizations",
      href: "/ministry/organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Our Groups", href: "/ministry/groups", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];

  const organizations = [
    {
      title: "National Informatics Centre (NIC)",
      description:
        "National Informatics Centre (NIC) of the Ministry of Electronics and Information Technology is providing network backbone and e-Governance support to Central Government, State Governments, UT Administrations, Districts and other Government bodies.",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/niclogo-1.svg",
      link: "https://www.nic.in/",
      category: "Attached Offices",
    },
    {
      title:
        "Standardisation, Testing and Quality Certification Directorate (STQC Dte.)",
      description:
        "Standardisation Testing and Quality Certification (STQC) Directorate is an attached office of the Ministry of Electronics and Information Technology, Government of India, provides quality assurance services in the area of Electronics and IT through a countrywide network of laboratories and centres.",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/stqc-new-1.svg",
      link: "https://www.stqc.gov.in/",
      category: "Attached Offices",
    },
    {
      title: "Digital India Bhashini Division (DIBD)",
      description:
        "Established within MeitY under DIC in the year 2022, Digital India Bhashini Division (DIBD) materializes the aspirations of a digitally unified nation where linguistic diversity is celebrated. Since its inception, Bhashini has been committed to the profound vision of facilitating seamless communicat...",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/4c1c5a553ffc25e5d76737da5625f32e.png",
      link: "https://dic.gov.in/bhashini/",
    },
    {
      title: "India Semiconductor Mission",
      description:
        "The India Semiconductor Mission (ISM) aims to build a strong semiconductor and display ecosystem, positioning India as a global hub for electronics manufacturing and design, while serving as the nodal agency for the efficient and seamless implementation of semiconductor and display schemes.",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/0601cb14ba73ae3fdbaff4607754a05d.png",
      link: "https://www.ism.gov.in/",
      category: "Section 8 Companies",
    },
    {
      title: "MeitY Startup Hub (MSH)",
      description:
        "India is home to one of the most vibrant startup ecosystems with close to 30,000+ tech startups, making it the 3rd largest startup ecosystem in the world. Hence, innovation and entrepreneurship is the emerging focus area that is being aggressively promoted to give fillip to the Indian economy.",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/7cb1b43c8f5a17ae83dc5a0ca4f1ae73.png",
      link: "https://msh.meity.gov.in/",
    },
    {
      title: "India AI",
      description:
        "The IndiaAI Mission aims to build a comprehensive ecosystem that fosters AI innovation by democratizing computing access, enhancing data quality, developing indigenous AI capabilities, attracting top AI talent, enabling industry collaboration, providing startup risk capital, ensuring socially impact...",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/625b45f5045206e1aa16db1e5e63598f.png",
      link: "https://indiaai.gov.in/",
    },
    {
      title: "Unique Identification Authority of India (UIDAI)",
      description:
        "The Unique Identification Authority of India (UIDAI) is a statutory authority responsible for implementing the Aadhaar project, managing the world's largest biometric identity system.",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/4-1.svg",
      link: "https://uidai.gov.in/",
      category: "Statutory Organisations",
    },
    {
      title: "Controller of Certifying Authorities (CCA)",
      description:
        "CCA is a statutory organization that oversees the implementation of the Information Technology (IT) Act and regulates the functioning of Certifying Authorities issuing digital certificates for secure online transactions.",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/bd5654866c2b3e511f6d6adf1fd8f3b1.png",
      link: "https://cca.gov.in/",
      category: "Statutory Organisations",
    },
    {
      title: "Indian Computer Emergency Response Team (CERT-In)",
      description:
        "CERT-In is the national nodal agency responsible for handling and responding to cybersecurity incidents, providing guidance and support to enhance the overall cybersecurity posture of the nation.",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/bf4704217947586330da49095fa2a49c.png",
      link: "https://www.cert-in.org.in/",
      category: "Statutory Organisations",
    },
    {
      title: "MyGov",
      description:
        "MyGov is a citizen engagement platform that enables public participation in governance by allowing citizens to contribute ideas, participate in discussions, and engage with government initiatives.",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/mygov-1.svg",
      link: "https://www.mygov.in/",
      category: "Section 8 Companies",
    },
    {
      title: "Digital India Corporation(DIC)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/6725cb209bc4f14e456ff792f890f920.png",
      description:
        "Digital India Corporation is a not-for-profit Company, responsible for strategic support to Ministries/Departments of Centre/States for Capacity Building on e-Governance projects, promoting best practices, encouraging Public-Private Partnerships (PPP), nurturing innovations and technologies.",
      link: "https://dic.gov.in/",
      category: "Section 8 Companies",
    },
    {
      title: "National e-Governance Division (NeGD)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/NeGD-1.svg",
      description:
        "National e-Governance Division is as an Independent Business Division under the Digital India Corporation playing a pivotal role in supporting in programme management and implementation of the e-Governance Projects; provide technical and advisory support to Ministries/ Departments.",
      link: "http://negd.gov.in/",
      category: "Section 8 Companies",
    },
    {
      title: "National Informatics Centre Services Inc.(NICSI)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/nicsilogo-1.svg",
      description:
        "National Informatics Centre Services Inc. (NICSI)is set up as a section 25 Company to provide IT services, consultancy, and solutions to government organizations, contributing to the effective use of information and communication technologies.",
      link: "https://nicsi.nic.in/",
      category: "Section 8 Companies",
    },
    {
      title: "National Internet Exchange of India(NIXI)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/NIXI-1.svg",
      description:
        "NIXI is a not for profit Organization under section 8 of the Companies Act 2013, responsible for management and operation of critical internet infrastructure, including the National Internet Registry, and promotes the adoption of internet services in India.",
      link: "https://ix.nixi.in/",
      category: "Section 8 Companies",
    },
    {
      title:
        "Bhaskaracharya National Institute for Space Applications and Geo-informatics (BISAG-N)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/bisag_logo-1.svg",
      description:
        "BISAG-N is an autonomous society involved in space applications and geo-informatics, utilizing satellite technology for applications in areas like agriculture, disaster management, and urban planning.",
      link: "https://bisag-n.gov.in/",
      category: "Autonomous Societies",
    },
    {
      title: "Centre for Development of Advanced Computing (C-DAC)",
      logo: "https://www.meity.gov.in/static/uploads/2024/08/fc8b54e7cc328242d4c698849260ce12.png",
      description:
        "C-DAC is an autonomous society involved in research and development in advanced computing technologies, high-performance computing, and cybersecurity.",
      link: "https://cdac.in/",
      category: "Autonomous Societies",
    },
    {
      title: "Centre for Materials for Electronics Technology (C-MET)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/c_dac_logo-1-300x127-1.jpg",
      description:
        "C-MET is an autonomous society focusing on research and development in materials and processes for electronics, contributing to advancements in electronic materials technology.",
      link: "https://cmet.gov.in/",
      category: "Autonomous Societies",
    },
    {
      title: "Education & Research in Computer Networking (ERNET)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/ERNET-1.svg",
      description:
        "ERNET is an autonomous society that facilitates academic and research institutions with high-speed data communication and connectivity services.",
      link: "https://ernet.in/",
      category: "Autonomous Societies",
    },
    {
      title:
        "National Institute of Electronics and Information Technology (NIELIT - Formerly DOEACC Society)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/NIELIT_logo-1.svg",
      description:
        "NIELIT is an autonomous scientific society under the MeitY, Government of India. It is engaged in human resource development in the areas of Information, Electronics, and Communication Technology (IECT); Hardware; Cyber Law; Cyber Security; GIS; Cloud Computing; and related technologies.",
      link: "https://nielit.gov.in/",
      category: "Autonomous Societies",
    },
    {
      title:
        "Society for Applied Microwave Electronics Engineering and Research (SAMEER)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/SAMEER-Logo-1.svg",
      description:
        "SAMEER is an autonomous society that conducts research and development in the field of microwave electronics, radio frequency, and allied areas, supporting advancements in technology.",
      link: "https://sameer.gov.in/",
      category: "Autonomous Societies",
    },
    {
      title: "Software Technology Parks of India (STPI)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/stpi-1.svg",
      description:
        "STPI is an autonomous society that plays a key role in promoting and facilitating exports in the electronics and software sectors, respectively.",
      link: "https://stpi.in/",
      category: "Autonomous Societies",
    },
    {
      title: "CSC e-Governance Services India Limited",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/08e75af493c777e21c17ceb49cb01032.png",
      description:
        "CSC is a network of service delivery points that offer government and non-government services to rural and remote areas, promoting digital inclusion and accessibility.",
      link: "https://csc.gov.in/",
      category: "Company Registered Under Company Act, 1956",
    },
    {
      title: "Semi-Conductor Laboratory (SCL)",
      logo: "https://www.meity.gov.in/static/uploads/2024/02/ssl-1-1.svg",
      description:
        "Semi-Conductor Laboratory (SCL), Mohali is an autonomous body under the Ministry of Electronics and Information Technology (MeitY), Government of India. SCL provides end-to-end solutions for the development of Application-Specific Integrated Circuits (ASICs), Opto-electronics Devices, and Micro-Electronic Systems.",
      link: "https://www.scl.gov.in/",
      category: "Autonomous Societies",
    },
  ];

  // const itemsPerPage = 10; // or get from dropdown later

  const [currentPage, setCurrentPage] = useState(1);
  const filteredOrganizations = organizations.filter((org) => {
    // Category filter
    const matchesCategory =
      !selectedCategory || org.category === selectedCategory;

    // Search filter (checks title)
    const matchesSearch = org.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
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

  return (
    <div style={{}}>
      <section className="maincontent" role="main">
        <div className="container mt-5">
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
                {/* Category Select */}
                <div className="input-group sortField" role="combobox">
                  <label htmlFor="categorySelect" className="visually-hidden">
                    Filter by Category
                  </label>

                  <span className="input-group-text">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined bhashini-skip-translation"
                    >
                      {/* <img src="/images/icons/Sort_By_Icon.svg" alt="Search" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M8 48V42.6667H24V48H8ZM8 34.6667V29.3333H40V34.6667H8ZM8 21.3333V16H56V21.3333H8Z"
                          fill="#5279d7"
                        />
                      </svg>
                    </span>
                  </span>

                  <select
                    className="form-select"
                    id="categorySelect"
                    role="combobox"
                    aria-label="Filter by Category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Category</option>
                    <option value="Attached Offices">Attached Offices</option>
                    <option value="Autonomous Societies">
                      Autonomous Societies
                    </option>
                    <option value="Section 8 Companies">
                      Section 8 Companies
                    </option>
                    <option value="Statutory Organisations">
                      Statutory Organisations
                    </option>
                    <option value="Company Registered Under Company Act, 1956">
                      Company registered under Company Act, 1956
                    </option>
                  </select>
                </div>

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

          <div className="row g-4">
            {currentItems.map((org, index) => (
              <div key={index} className="col-md-12 col-lg-6">
                <div className="organisation-card d-flex flex-column justify-content-between">
                  <div className="organisation-card-title d-flex justify-content-between align-items-center">
                    <p
                      role="heading"
                      aria-level={2}
                      aria-label={org.title}
                      className="h3"
                    >
                      {highlightText(org.title, searchQuery)}
                    </p>

                    <span
                      className="lazy-load-image-background blur lazy-load-image-loaded"
                      style={{ color: "transparent", display: "inline-block" }}
                    >
                      <img
                        src={org.logo}
                        alt={`${org.title} Logo`}
                        className="img-fluid"
                      />
                    </span>
                  </div>

                  <div className="organisation-description">
                    <p className="text-break">{org.description}</p>
                  </div>

                  <div className="d-flex justify-content-end">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="link-btn d-flex align-items-center text-uppercase pointer"
                      href={org.link}
                      aria-label="Visit"
                      title="Visit"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        <img
                          src="/images/icons/Open_In_New.svg"
                          alt="Open In New"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* -----------------------------
         PAGINATION
    ------------------------------ */}

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
      </section>
    </div>
  );
}

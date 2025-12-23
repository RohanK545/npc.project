"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const divisions = [
    {
      id: "btn-5favqq",
      title: "Electronics System Design and Manufacturing (ESDM)",
      description:
        "The ESDM Division fosters growth of the electronics and hardware industry in India by encompassing the entire lifecycle of electronic products, from conception and design to manufacturing and support",
      link: "/ministry/our-groups/details/electronics-system-design-manufacturing-esdm-wM5kTNtQWa",
    },
    {
      id: "btn-16sukh",
      title: "Software Industry Promotion",
      description:
        "The Software Industry Promotion Division is dedicated to make India a software superpower by supporting the growth of Indian software companies, nurturing new tech startups, and bridging the gap between academia and industry.",
      link: "/ministry/our-groups/details/software-industry-promotion-gN1EDOtQWa",
    },
    {
      id: "btn-p5prfk",
      title: "Digital Governance",
      description:
        "The Digital Governance Division aims at transforming the way the Indian government operates by driving the adoption of e-governance solutions to make government services more accessible, efficient, and transparent.",
      link: "/ministry/our-groups/details/digital-governance-wMyMDOtQWa",
    },
    {
      id: "btn-xch7ua",
      title: "Cyber Laws Division",
      description:
        "The Cyber Laws Division is safeguarding India's cyberspace by formulating cyber laws and policies to combat cybercrime and promote cybersecurity awareness.",
      link: "/ministry/our-groups/details/cyber-laws-AM2MDOtQWa",
    },
    {
      id: "btn-r9g84y",
      title: "Cyber Security",
      description:
        "The Cyber Security Division is building  secure and resilient cyberspace for India by protecting critical infrastructure and digital assets while responding to cyber threats.",
      link: "/ministry/our-groups/details/cyber-security-division-gNxIDOtQWa",
    },
    {
      id: "btn-u77czr",
      title: "Infrastructure and Governance",
      description:
        "The Infrastructure and Governance Division aims at strengthening the foundation for a digitally empowered India by developing infrastructure needed for digital transformation and setting standards for good governance.",
      link: "/ministry/our-groups/details/infrastructure-and-governance-gN0EDOtQWa",
    },
    {
      id: "btn-5kgeg6",
      title: "Economic Planning",
      description:
        "The Economic Planning Division focuses on driving India's digital economy forward by formulating policies and strategies to promote digital entrepreneurship, attract investments, and create jobs in the digital sector.",
      link: "/ministry/our-groups/details/economic-planning-division-wN1EDOtQWa",
    },
    {
      id: "btn-2u7usl",
      title: "HRD/Knowledge Management",
      description:
        "The HRD/Knowledge Management Division aims to ensure availability of trained human resources for the manufacturing & service sectors of electronics and IT industry by driving initiatives that bridge knowledge gaps emerging in the formal sector.",
      link: "/ministry/our-groups/details/hrd-knowledge-management-ANzIDOtQWa",
    },
    {
      id: "btn-zdtn51",
      title: "Research and Development",
      description:
        "The Research and Development Division focused on pushing the boundaries of technology by funding cutting-edge research in areas like artificial intelligence, cyber security, and e-governance.",
      link: "/ministry/our-groups/details/research-and-development-gM3EDOtQWa",
    },
    {
      id: "btn-xbz3n0",
      title: "The International Cooperation Division (ICD)",
      description:
        "The International Cooperation Division focused on building a better digital future by partnering  with other countries and international organizations to exchange leading practices and address global challenges in electronics industry.",
      link: "/ministry/our-groups/details/the-international-cooperation-division-icd-wN0EDOtQWa",
    },
    {
      id: "btn-pxg697",
      title: "Parliament Matters",
      description:
        "The Parliament Matters Division aims to keep Parliament informed about MeitY's activities by providing briefings and reports to Parliamentarians.",
      link: "/ministry/our-groups/details/parliment-matters-gM0EDOtQWa",
    },
    {
      id: "btn-5ft2dz",
      title: "Trade and Investment",
      description:
        "The Trade and Investment Division aims at promoting India as a digital investment destination by attracting foreign investments in the IT sector and helping Indian companies expand their global footprint.",
      link: "/ministry/our-groups/details/trade-and-investment-QNxIDOtQWa",
    },
    {
      id: "btn-12dsfb",
      title: "Human Centered Computing",
      description:
        "We're putting people at the center of technology. We design technologies that are user-friendly, accessible, and inclusive.",
      link: "/ministry/our-groups/details/human-centered-computing-AN0EDOtQWa",
    },
    {
      id: "btn-hhiuny",
      title: "AI & Emerging Technologies",
      description:
        "The AI & Emerging Technologies Division aims at embracing the future of technology by exploring the potential of artificial intelligence & blockchain, and other emerging technologies to transform India.",
      link: "/ministry/our-groups/details/ai-emerging-technologies-division-QN5EDOtQWa",
    },
    {
      id: "btn-vhdotl",
      title: "Digital Economy",
      description:
        "The Digital Economy vertical under the Digital Economy Division encompasses the following areas : Matters relating to Promotion of Digital Transactions excluding Digital Payments.",
      link: "/ministry/our-groups/details/digital-economy-division-QN0EDOtQWa",
    },
    {
      id: "btn-t0wv9j",
      title: "Innovation & IPR and Centre of Excellence (CoE)",
      description:
        "The Innovation IPR and Centre of Excellence (CoE) Projects Division aims at fostering a culture of innovation in India by supporting startups and entrepreneurs.",
      link: "/ministry/our-groups/details/innovation-ipr-and-centre-of-excellence-coe-projects-AOxMDOtQWa",
    },
  ];

  interface ReadMoreProps {
    text: string;
    limit?: number;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const filteredOrganizations = divisions.filter((org) => {
    // Category filter
    // const matchesCategory =
    //   !selectedCategory || org.category === selectedCategory;

    // Search filter (checks title)
    const matchesSearch = org.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // return matchesCategory && matchesSearch;
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

  const contactIcons: any = {
    call: "/images/icons/Phone.svg",
    mail: "/images/icons/E-mail.svg",
    // print: "/icons/print.png",
  };
  const ReadMore: React.FC<ReadMoreProps> = ({ text, limit = 150 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= limit) {
      return <p className="mb-0">{text}</p>;
    }

    return (
      <p className="mb-0">
        {isExpanded ? text : text.substring(0, limit) + "... "}
        <span
          style={{ color: "#007bff", cursor: "pointer", fontWeight: 500 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      </p>
    );
  };

  const tables = [
    {
      title: "Deputy Director General - I",
      members: [
        {
          photo: "/images/employeeImages/us_prasad.jpg",
          name: "Mr. Uma Shankar Prasad",
          designation: "Deputy Director General & GH (HRM)	",
          contacts: [
            {
              type: "call",
              value: "9968283459",
            },
            { type: "mail", value: "us.prasad@npcindia.gov.in" },
          ],
          Discipline: "",
          AreaofExpertise: "",
          ProfessionalSummary: "",
        },
      ],
    },

    {
      title: "Deputy Director General - II",
      members: [
        {
          photo: "/images/employeeImages/shirish_paliwal.jpg",
          name: "Sh. Shirish Paliwal",
          designation:
            "Deputy Director General & Group Head (Finance), charge of Training Coordination & PMC Cell",
          contacts: [
            {
              type: "call",
              value: "9824267246",
            },
            {
              type: "mail",
              value: "shirish.p@npcindia.gov.in",
            },
          ],
          Discipline: "IE",
          AreaofExpertise:
            "With a strong academic founda?on including a B.E. in Mechanical Engineering, a Post Graduate Diploma in Industrial Engineering, and cer?fica?ons such as Advance Level Produc?vity Prac??oner (ALPP) from the Asian Produc?vity Organiza?on (APO), Japan, and Cer?fied in Project Management (CIPM) from i2P2M, the professional exper?se spans across mul?ple domains of produc?vity and organiza?onal development.",
          ProfessionalSummary:
            "A seasoned professional with approximately 30 years of diverse experience in productivity improvement, consultancy, and organizational leadership, currently serving as Deputy Director General at the National Productivity Council (NPC), India. His responsibilities include strategic oversight of Finance, Energy, and Environment Management groups, and supervision of regional directorates across India, working under the leadership of the Director General to implement NPCs national mission.",
        },
      ],
    },
  ];

  const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
    return (
      <div
        role="table"
        className=" our-team-list-container mx-auto my-4 me-5 ms-5"
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
            <div className="col-lg-1 col-sm-12">Photo</div>
            <div className="col-lg-2 col-sm-12 ps-1">Name and Designation</div>
            <div className="col-lg-2 col-sm-12">Contact</div>
            <div className="col-lg-1 col-sm-12">Discipline</div>
            <div className="col-lg-3 col-sm-12">Area of Expertise</div>
            <div className="col-lg-3 col-sm-12">Professional Summary</div>
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
              {/* Photo */}
              <div className="col-lg-1 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column d-flex justify-content-center align-items-center">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="img-fluid rounded"
                      style={{
                        width: "80%",
                        height: "80%",
                        // objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Name & Designation */}
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="name mb-0">{m.name}</p>
                    <p className="designation mb-0">{m.designation}</p>
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="col-lg-2 col-md-12">
                <div className="d-flex flex-column gap-2">
                  {m.contacts.map((c: any, i: number) => (
                    <div key={i} className="d-flex align-items-center gap-2">
                      <img
                        src={contactIcons[c.type]}
                        alt={c.type}
                        className="me-2"
                      />
                      <p className="contact mb-0">{c.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discipline */}
              <div className="col-lg-1 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Discipline}</p>
                  </div>
                </div>
              </div>

              {/* Area of Expertise */}
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">
                      <ReadMore text={m.AreaofExpertise} limit={200} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional summary */}
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">
                      <ReadMore text={m.ProfessionalSummary} limit={200} />
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
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc={navigationConfig["aboutUs"].imageSrc}
          breadcrumbs={navigationConfig["aboutUs"].breadcrumbs}
          navItems={navigationConfig["aboutUs"].navItems}
          pageTilte="All Offices"
        />
      </div>
      <section className="maincontent">
        <div className="card-wrapper p-2 py-4 p-md-4">
          <div className="card-wrapper p-2 py-4 p-md-4">
            <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
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
                                src="https://www.meity.gov.in/static/uploads/2024/02/c2d2716758c356c9137b4db8ffa9ac50.png"
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
                                src="https://www.meity.gov.in/static/uploads/2024/06/a0c681e6f425566b66d4fecfe80f9380.png"
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

              <hr style={{ width: "100%" }} />

              {/* PDF Links */}
              <div className="d-flex flex-wrap justify-content-start gap-2">
                {[
                  {
                    title: "Former Ministers",
                    href: "https://www.meity.gov.in/static/uploads/2024/03/Former-Ministers.pdf",
                    size: "66.37 KB",
                  },
                  {
                    title: "List of Council of Ministers",
                    href: "https://www.meity.gov.in/static/uploads/2024/06/6283a888427e8a72919476d50982d09a.pdf",
                    size: "3.30 MB",
                  },
                  {
                    title: "List of Officers/Staff",
                    href: "https://www.meity.gov.in/static/uploads/2025/05/ddc5d5c3d50f686a16fbe238c37dc0b7.pdf",
                    size: "461.13 KB",
                  },
                  {
                    title: "Foreign Deputation JS Level and Above",
                    href: "https://www.meity.gov.in/static/uploads/2024/07/2cda2f40953c1c89b6d316afbd597e69.pdf",
                    size: "365.60 KB",
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    className="detailsBtn pointer d-flex align-items-center text-uppercase"
                    title={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.href}
                  >
                    <span>{link.title}</span>
                    <span>|</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 68 68"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                        fill="#085858"
                      ></path>
                    </svg>
                    <span>{link.size}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {tables.map((tbl, idx) => (
          <InfoTable key={idx} title={tbl.title} members={tbl.members} />
        ))}
      </section>
    </>
  );
}

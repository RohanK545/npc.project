import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },

    { pagetitle: "About Us" },
  ];

  const navItems = [
    { label: "About Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: false },
    {
      label: "Our Organizations",
      href: "/ministry/organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Our Groups", href: "/ministry/groups", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];

  return (
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/9474b41fcf967c101e7d4939b7b03d5e.jpg"
          breadcrumbs={breadcrumbs}
          navItems={navItems}
        />
      </div>

      <div className="container-fluid maincontent mx-5 justify-content">
        <div className="row">
          {/* Left sticky column */}
          <div
            // className="col-md-4 position-sticky "
            className="col-md-12 col-lg-4 stickyBox"
            style={{
              top: "16rem",
              height: "calc(100vh - 6rem)",
              // marginLeft: "10rem",
              minWidth: "250px",
              maxWidth: "475px",
            }}
          >
            <div className="visionbox">
              <h2 className="career-card-header mb-5">
                e-Development of India as the engine for transition into a
                developed nation and an empowered society.
              </h2>
              <h4>VISION STATEMENT</h4>
            </div>
          </div>

          {/* Right content */}
          {/* <div className=" ms-5 col-md-8 ps-5 aboutcontent"> */}
          <div className="col-md-12 col-lg-8 ps-5">
            <div className="aboutcontent text-justify">
              <p className="text-justify">
                The Ministry of Electronics and Information Technology (MeitY),
                under Government of India, is a stand-alone ministerial agency,
                responsible for formulating and implementing national policies
                and programs aimed at enabling the continuous development of the
                electronics and IT industry. MeitY’s focus areas include the
                development, promotion, and regulation of the electronics and IT
                industry in India, fostering digital governance, enabling
                innovation in emerging technologies and promoting cybersecurity
                initiatives within country.
              </p>
              <h2>Mission</h2>
              <p className="text-justify">
                To promote Digital Governance for empowering citizens, promoting
                the inclusive and sustainable growth of the Electronics, IT &
                ITeS industries, enhancing India’s role in Internet Governance,
                adopting a multipronged approach that includes development of
                human resources, promoting R&D and innovation, enhancing
                efficiency through digital services and ensuring a secure cyber
                space.
              </p>
              <h2>Objectives</h2>
              <span
                style={{ display: "block", textAlign: "justify" }}
                className="mb-3"
              >
                The Ministry is dedicated to a multifaceted set of objectives,
                aligning with the dynamic landscape of technology and its impact
                on society:
              </span>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>1</h3>
                    <p>
                      <strong>e-Government:</strong> Providing e-infrastructure
                      for delivery of e-services
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>2</h3>
                    <p>
                      <strong>e-Industry:</strong> Promotion of electronics
                      hardware manufacturing and IT-ITeS industry
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>3</h3>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        <strong>e-Innovation / R&amp;D:</strong> Implementation
                        of R&amp;D Framework-Enabling creation of Innovation/
                        R&amp;D Infrastructure
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>4</h3>
                    <p>
                      <strong>e-Learning:</strong> Providing support for
                      development of e-Skills and Knowledge network
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>5</h3>
                    <p>
                      <strong>e-Security:</strong> Securing India’s cyber space
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>6</h3>
                    <p>
                      <strong>e-Inclusion:</strong> Promoting the use of ICT for
                      more inclusive growth
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>7</h3>
                    <p>
                      <strong>e-Diplomacy:</strong> Promoting the use of India
                      Stack / DPI
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="objectivebox">
                    <h3>8</h3>
                    <p>
                      <strong>Internet Governance:</strong> Enhancing India’s
                      role in Global Platforms of Internet Governance
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <h2>Functions</h2>
                <div>
                  <p>
                    Ministry of Electronics and Information Technology
                    <br />
                    (Electroniki aur Soochana Praudyogiki Mantralaya)
                    <sup>&nbsp;1</sup>
                  </p>
                  <ol>
                    <li>
                      Policy matters relating to information technology;
                      Electronics; and Internet (all matters other than
                      licensing of Internet Service Provider).
                    </li>
                    <li>
                      Promotion of internet, IT and IT enabled services.
                      <br />
                      2A.&nbsp; Promotion of Digital Transactions excluding
                      Digital Payments.
                      <sup>2</sup>
                    </li>
                    <li>
                      Assistance to other departments in the promotion of
                      E-Governance, E-Commerce, E-Medicine, E-Infrastructure,
                      etc.
                    </li>
                    <li>
                      Promotion of Information Technology education and
                      Information Technology-based education.
                    </li>
                    <li>
                      Matters relating to Cyber Laws, administration of the
                      Information Technology Act. 2000 (21 of 2000) and other IT
                      related laws.
                      <br />
                      5A.&nbsp; Matters relating to online gaming.
                      <sup>3</sup>
                      <br />
                      5B.&nbsp; Matters relating to Cyber Security as assigned
                      in the Information Technology Act, 2000 (21 of 2000)
                      <br />
                      (as amended from time to time) and support to other
                      Ministries / Departments on Cyber Security.
                      <sup>4</sup>
                    </li>
                    <li>
                      Matters relating to promotion and manufacturing of
                      Semiconductor Devices in the country.
                      <sup>5</sup>
                    </li>
                    <li>
                      Interaction in IT related matters with international
                      agencies and bodies e. g. Internet for Business Limited
                      (IFB), Institute for Education in Information Society
                      (IBI) and International Code Council — on line (ICC).
                    </li>
                    <li>
                      Initiative on bridging the Digital Divide: Matters
                      relating to Digital India Corporation.
                      <sup>6</sup>
                    </li>
                    <li>
                      Promotion of Standardization, Testing and Quality in IT
                      and standardization of procedure for IT application and
                      Tasks.
                    </li>
                    <li>
                      Electronics Export and Computer Software Promotion Council
                      (ESC).
                    </li>
                    <li>National Informatics Centre (NIC).</li>
                    <li>
                      Initiatives for development of Hardware/Software industry
                      including knowledge—based enterprises, measures for
                      promoting IT exports and competitiveness of the industry.
                    </li>
                    <li>
                      All matters relating to personnel under the control of the
                      Ministry.
                      <sup>7</sup>
                    </li>
                    <li>
                      Unique Identification Authority of India (UIDAI).
                      <sup>8</sup>
                    </li>
                    <li>
                      Semi-Conductor Laboratory, Mohali.
                      <sup>9</sup>
                    </li>
                  </ol>
                </div>
                <div>
                  <h2>Amendments to Functions</h2>
                  <div>
                    <ol>
                      <li>
                        Modified vide Amendment series no. 243 dated 15.10.1999,
                        257 dated 21.12.2001, 300 dated 26.02.2012 and 327 dated
                        16.07.2016.
                      </li>
                      <li>
                        Modified vide Amendment series no. 371 dated 17.07.2023.
                      </li>
                      <li>
                        Inserted vide Amendment series no. 370 dated 23.12.2022.
                      </li>
                      <li>
                        Inserted vide Amendment series no. 377 dated 27.09.2024.
                      </li>
                      <li>
                        Modified vide Amendment series no. 368 dated 07.02.2022
                        (earlier inserted vide no. 279 dated 01.03.2005 and
                        modified vide no. 322 dated 17.03.2016).
                      </li>
                      <li>
                        Modified vide Amendment series no. 345 dated 17.10.2018.
                      </li>
                      <li>
                        Modified vide Amendment series no. 281 dated 01.09.2005,
                        Further modified vide amendment series no. 327 dated
                        16.07.2016
                      </li>
                      <li>
                        Inserted vide Amendment series no. 318 dated 12.09.2015
                        (Earlier inserted under Planning Commission vide
                        Amendment Series no.296 dated 22.02.2010, and in NITI
                        Aayog vide series no.312).
                      </li>
                      <li>
                        Inserted vide Amendment series no. 368 dated 07.02.2022.
                      </li>
                    </ol>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div>
                  <h2>Citizens' Charter</h2>
                  <div>
                    <p>
                      A Citizens’ Charter represents the commitment of the
                      Organisation towards standard, quality and time frame of
                      service delivery, grievance redress mechanism,
                      transparency and accountability. Nodal Officers have been
                      appointed with a view to ensure effective implementation
                      of Citizens’ Charter.
                    </p>
                  </div>
                  <div>
                    <div className="box row row-gap-2 align-items-center ms-0 me-0">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="mb-0 d-flex">
                          <span className="material-symbols-outlined bhashini-skip-translation"></span>
                          Citizens' Charter
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12"></div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex gap-4 align-items-center type-size">
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
                            />
                          </svg>
                          <small
                            className="text-uppercase mb-0"
                            aria-label="PDF size 439.35 KB"
                          >
                            439.35 KB
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-end">
                          <a
                            id="Citizens_Charter_2"
                            className="download-btn d-flex align-items-center text-uppercase pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View PDF Citizens' Charter"
                            aria-label="View PDF Citizens' Charter"
                            href="https://www.meity.gov.in/static/uploads/2025/07/f1d5952d00b34ba94296986a7899740b.pdf"
                          >
                            <span
                              aria-hidden="true"
                              className="material-symbols-outlined bhashini-skip-translation"
                            >
                              <img
                                src="images/icons/visibility.svg"
                                alt="Twitter"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Other Documents</h2>
                  <div>
                    {/* First Document */}
                    <div className="box row row-gap-2 align-items-center ms-0 me-0">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="mb-0 d-flex">
                          <span className="material-symbols-outlined bhashini-skip-translation"></span>
                          Organisational Chart of MeitY
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12"></div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex gap-4 align-items-center type-size">
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
                          <small
                            className="text-uppercase mb-0"
                            aria-label="PDF size 28.74 KB"
                          >
                            28.74 KB
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-end">
                          <a
                            id="Organisational Chart of MeitY_3"
                            type="pdf"
                            className="download-btn d-flex align-items-center text-uppercase pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View PDF Organisational Chart of MeitY"
                            aria-label="View PDF Organisational Chart of MeitY"
                            href="https://www.meity.gov.in/static/uploads/2024/05/ORG-Chart-1-Structure-Eng.-24.11.2023.pdf"
                          >
                            <span className="material-symbols-outlined bhashini-skip-translation">
                              <img
                                src="images/icons/visibility.svg"
                                alt="Twitter"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Second Document */}
                    <div className="box row row-gap-2 align-items-center ms-0 me-0">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="mb-0 d-flex">
                          <span className="material-symbols-outlined bhashini-skip-translation"></span>
                          Groups and their respective Heads/Group Coordinators
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12"></div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex gap-4 align-items-center type-size">
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
                          <small
                            className="text-uppercase mb-0"
                            aria-label="PDF size 107.25 KB"
                          >
                            107.25 KB
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-end">
                          <a
                            id="Groups and their respective Heads/Group Coordinators_3"
                            type="pdf"
                            className="download-btn d-flex align-items-center text-uppercase pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View PDF Groups and their respective Heads/Group Coordinators"
                            aria-label="View PDF Groups and their respective Heads/Group Coordinators"
                            href="https://www.meity.gov.in/static/uploads/2025/02/ffa7b4c326a412fa4fb8660c1dc74bfc.pdf"
                          >
                            <span className="material-symbols-outlined bhashini-skip-translation">
                              <img
                                src="images/icons/visibility.svg"
                                alt="Twitter"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>Other Documents</h2>
                    <div>
                      <div className="box row row-gap-2 align-items-center ms-0 me-0">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <p className="mb-0 d-flex">
                            <span className="material-symbols-outlined bhashini-skip-translation"></span>
                            Abbreviations
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="d-flex justify-content-end">
                            <a
                              id="Abbreviations_0"
                              className="link-btn d-flex align-items-center text-uppercase pointer"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Know More about Abbreviations"
                              aria-label="Know More about Abbreviations"
                              href="/ministry/about-us/details/Title=Abbreviations-Data-gjN4AjMtQWa"
                            >
                              <span className="material-symbols-outlined bhashini-skip-translation">
                                <img
                                  src="images/icons/Arrow_Forward.svg"
                                  alt="Twitter"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>Official Language Activities</h2>
                    <div>
                      <div className="content-box mt-4 help-editor">
                        <div className="mb-0 text-break tbborder">
                          <p>
                            Hindi unit of the Ministry of Electronics and
                            Information Technology is responsible for
                            implementation of Official Language Policy of the
                            Union and the progressive use of Official Language,
                            Hindi in the Ministry and the Offices/Autonomous
                            Societies under its control.
                          </p>
                        </div>
                      </div>
                    </div>
                    {[
                      {
                        title: "Background",
                        href: "/ministry/about-us/details/Title=Background-Data-AzN4AjMtQWa",
                        id: "Background_1",
                      },
                      {
                        title: "Official Language Policy of the Union",
                        href: "/ministry/about-us/details/Title=Official-Language-Policy-of-the-Union-AzN4AjMtQWa",
                        id: "Official Language Policy of the Union_1",
                      },
                      {
                        title: "Constitutional Provisions",
                        href: "/ministry/about-us/details/Title=Constitutional-Provisions-AzN4AjMtQWa",
                        id: "Constitutional Provisions_1",
                      },
                      {
                        title: "Official Language Act",
                        href: "/ministry/about-us/details/Title=Official-Language-Act-AzN4AjMtQWa",
                        id: "Official Language Act_1",
                      },
                      {
                        title:
                          "The Official Languages (Use for Official Purpose of the Union)",
                        href: "/ministry/about-us/details/Title=The-Official-Languages-(Use-for-Official-Purpose-of-the-Union)-AzN4AjMtQWa",
                        id: "The Official Languages (Use for Official Purpose of the Union)_1",
                      },
                      {
                        title: "Official Language activities of the Ministry",
                        href: "/ministry/about-us/details/Title=Official-Language-activities-of-the-Ministry-AzN4AjMtQWa",
                        id: "Official Language activities of the Ministry_1",
                      },
                    ].map((doc) => (
                      <div
                        key={doc.id}
                        className="box row row-gap-2 align-items-center ms-0 me-0"
                      >
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <p className="mb-0 d-flex">
                            <span className="material-symbols-outlined bhashini-skip-translation"></span>
                            {doc.title}
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="d-flex justify-content-end">
                            <a
                              id={doc.id}
                              className="link-btn d-flex align-items-center text-uppercase pointer"
                              // target="_blank"
                              rel="noopener noreferrer"
                              title={`Know More about ${doc.title}`}
                              aria-label={`Know More about ${doc.title}`}
                              href={doc.href}
                            >
                              <span className="material-symbols-outlined bhashini-skip-translation">
                                <img
                                  src="images/icons/Arrow_Forward.svg"
                                  alt="Twitter"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

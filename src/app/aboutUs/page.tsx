import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc={navigationConfig["aboutUs"].imageSrc}
          breadcrumbs={navigationConfig["aboutUs"].breadcrumbs}
          navItems={navigationConfig["aboutUs"].navItems}
          pageTilte="About NPC"
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
                    height: "900px",
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
                    <i
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "176px",
                        background: "rgb(153, 153, 153)",
                        transform: "translate(172px, 525px)",
                        pointerEvents: "none",
                      }}
                    ></i>
                  </div>
                  <div
                    className="d-grid"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "40px",
                      justifyItems: "center",
                    }}
                  >
                    {/* HON’BLE Minister of Commerce and Industry & President */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/aboutUs/PiyushGoyal.jpg"
                                  alt="profile picture Sh. Piyush Goyal"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Minister of Commerce and Industry & President
                            </small>
                            <p className="h4">Sh. Piyush Goyal</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HON’BLE Secretary DPIIT & Chairman */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/aboutUs/chairmanNPC.jpg"
                                  alt="profile picture Sh. Amardeep Singh Bhatia"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Secretary DPIIT & Chairman
                            </small>
                            <p className="h4">Sh. Amardeep Singh Bhatia, IAS</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HON’BLE Director General */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/aboutUs/Smt.NeerjaSekhar.jpg"
                                  alt="profile picture Smt. Neerja Sekhar"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Director General
                            </small>
                            <p className="h4">Smt. Neerja Sekhar, IAS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h1>Citizen's Charter</h1>
                <p>
                  National Productivity Council of India (NPC), established in
                  the year 1958, is an autonomous organization under Department
                  for Promotion of Industry & Internal Trade, Ministry of
                  Commerce and Industry, Government of India. Besides
                  undertaking research in the area of productivity, NPC has been
                  providing consultancy and training services in areas of
                  Industrial Engineering, Agri-Business, Economic Services,
                  Quality Management, Human Resources Management, Information
                  Technology, Technology Management, Energy Management,
                  Environmental Management etc., to the Government and Public &
                  Private sector organizations. NPC is a constituent of the
                  Tokyo-based Asian Productivity Organisation (APO), an
                  Inter-Governmental Body of which the Government of India is a
                  founding member.
                </p>
                <h2>Vision</h2>
                <p className="text-justify">
                  NPC to be the knowledge leader in productivity to provide
                  state of our services to the Indian economy to become globally
                  competitive.
                </p>
                <h2>Mission</h2>
                <p className="text-justify">
                  Contribute to the sustainable, inclusive socioeconomic
                  development of the country by enhancing productivity.
                </p>
                <h2>Objectives</h2>
                <span
                  style={{ display: "block", textAlign: "justify" }}
                  className="mb-3"
                >
                  <ul>
                    <li>
                      To promote innovation - led productivity in a sustained
                      manner in all spheres of national economy through holistic
                      and inclusive approach by addressing the triple bottom
                      line – Economic, Environmental and Social.
                    </li>
                    <li>
                      To propagate productivity consciousness and culture
                      amongst Govt., Business and Society.
                    </li>
                    <li>
                      To demonstrate value addition through generation and
                      application of advanced productivity tools and techniques
                      for multiplier effect.
                    </li>
                    <li>
                      To act as a total solution provider for Industry,
                      Services, and Agriculture sectors for augmenting
                      productivity through Training, Consultancy and Research
                      wherever needed through alliances and partnerships
                    </li>
                    <li>
                      To act as a catalyst in institution building and
                      developing platforms for collaborative networking to
                      strengthen the productivity movement.
                    </li>
                    <li>
                      To act as a think tank by providing productivity related
                      evidence based policy support and advice in while tracking
                      the emerging trends.
                    </li>
                    <li>
                      To be an independent oversight entity for various national
                      programs, schemes and interventions.
                    </li>
                    <li>
                      To recognize productivity champions through awards,
                      affiliations, certifications, accreditations etc.
                    </li>
                    <li>
                      To enhance international outreach for sharing the gains of
                      productivity on mutual basis.
                    </li>
                    <li>
                      To be repository of productivity and competitiveness data
                      across all sectors at the state and national level.
                    </li>
                    <li>
                      To devise national productivity standards across all
                      sectors and self assessment web based measurement tools
                      for productivity diagnosis.
                    </li>
                  </ul>
                </span>
                <h2>Governing Council Members</h2>
                <p className="text-justify">
                  The Council regulates the policies of NPC. It has 30 members
                  comprising the following:
                </p>
                <span
                  style={{ display: "block", textAlign: "justify" }}
                  className="mb-3"
                >
                  <ul>
                    <li>
                      President, Chairman of the Governing Body and Director
                      General, all nominated by the Government of India.
                    </li>
                    <li>5 Representatives of the Government of India.</li>
                    <li>
                      5 representatives of the organizations of employers &
                      Chambers of Commerce & Industry.
                    </li>
                    <li>
                      5 representatives of the organizations of National Trade
                      Unions/Workers.
                    </li>
                    <li>
                      3 representatives of technical organizations and
                      Institutions.
                    </li>
                    <li>
                      3 representatives of Association of Local or regional or
                      industry-wise productivity organizations which are
                      recognized by the council for this purpose.
                    </li>
                    <li>
                      3 representatives from scholars, research workers,
                      consultants, consumers, small and Services Companies
                      (NASSCOM).
                    </li>
                    <li>
                      3 special invitees from emerging areas such as All India
                      Council for Technical Education (AICTE), Indian Institute
                      of Technology (IIT), Madras , Centre for Product Design
                      and Manufacturing (CPDM), Indian Institute of Sciences
                      (IISc), Bengaluru (Manfacturing 4.0 and IOT) .
                    </li>
                    <b>
                      List Of Governing Body Members{" "}
                      <a href="https://npcindia.gov.in/NPC/Images/AboutUs/Governing%20Body%20of%20NPC.pdf">
                        Click here
                      </a>
                    </b>
                  </ul>
                </span>
                <div className="card-wrapper p-2 py-4 p-md-4">
                  <div className="card-wrapper p-2 py-4 p-md-4">
                    <h1>Organization Structure</h1>
                    <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
                      <h2>ORGANOGRAM</h2>
                      <div className="reactFamilyTree d-flex align-content-center justify-content-center w-100">
                        <div
                          style={{
                            position: "relative",
                            width: "344px",
                            height: "400px",
                          }}
                        >
                          <div>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px",
                                height: "450px",
                                background: "rgb(153, 153, 153)",
                                transform: "translate(172px, 100px)",
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "40px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(-200px, 370px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "40px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(550px, 370px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>

                            <i
                              style={{
                                position: "absolute",
                                width: "750px", // length of the horizontal line
                                height: "1px", // thin line height
                                background: "rgb(153, 153, 153)",
                                transform: "translate(-200px, 370px)", // adjust X and Y position accordingly
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "750px", // length of the horizontal line
                                height: "1px", // thin line height
                                background: "rgb(153, 153, 153)",
                                transform: "translate(-200px, 550px)", // adjust X and Y position accordingly
                                pointerEvents: "none",
                              }}
                            ></i>
                            {/* Second small vertical line */}

                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "40px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(-200px, 550px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "40px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(550px, 550px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>
                            {/* Third small veritcal line */}
                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "40px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(-200px, 688px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px", // thin vertical line width
                                height: "400px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(250px, 688px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>

                            {/* <i
                              style={{
                                position: "absolute",
                                width: "1px",
                                height: "176px",
                                background: "rgb(153, 153, 153)",
                                transform: "translate(172px, 350px)",
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "1px",
                                height: "176px",
                                background: "rgb(153, 153, 153)",
                                transform: "translate(172px, 525px)",
                                pointerEvents: "none",
                              }}
                            ></i> */}
                          </div>

                          {/* HON’BLE Minister of Commerce and Industry & President */}
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
                                  className="organogram-card pointer position-relative"
                                  // tabIndex={0}
                                  aria-label="View Profile HON’BLE MINISTER"
                                  role="link"
                                >
                                  <h3>PRESIDENT</h3>
                                  <small className="text-uppercase">
                                    (Minister of commerce & industry)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>

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
                                  className="organogram-card pointer position-relative"
                                  // tabIndex={0}
                                  aria-label="View Profile HON’BLE MINISTER"
                                  role="link"
                                >
                                  <h3>CHAIRMAN</h3>
                                  <small className="text-uppercase">
                                    (Secretary DPIIT)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                  className="organogram-card pointer position-relative"
                                  // tabIndex={0}
                                  aria-label="View Profile HON’BLE MINISTER"
                                  role="link"
                                >
                                  <h3>Director General</h3>
                                  <small className="text-uppercase">
                                    (Chief Executive Officer)
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //////////////////////////////// */}
                    <div>
                      <div>
                        <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "180px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "20px",
                            }}
                          >
                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(20px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(400px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* //////////////////// */}
                        <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "900px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "20px",
                            }}
                          >
                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(20px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(400px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* //////////////////////// */}
                        <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "100px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "20px",
                            }}
                          >
                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(20px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(400px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //////////////////////////////////// */}
                    <div>
                      <div>
                        <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "400px",
                          }}
                        >
                          {/* <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "20px",
                            }}
                          >
                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(20px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="FamilyNode_root__LylyV"
                              style={{
                                width: "344px",
                                height: "350px",
                                transform: "translate(400px, -22px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex justify-content-center mx-auto">
                                  <div
                                    className="organogram-card pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <small className="text-uppercase">
                                      Minister of Commerce and Industry &
                                      President
                                    </small>
                                    <p className="h4">Sh. Piyush Goyal</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row contnrow ml-0 mainBodyClass lightgray"
                  style={{ boxShadow: "inset 5px 0 5px -5px lightgray" }}
                  id="organization"
                >
                  <div
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 mlf-5"
                    id="mlf-5"
                  >
                    <h1 className="pghdng2">
                      <span className="pghdng1 headingcontrast">Organ</span>
                      ization Structure
                    </h1>
                  </div>

                  <div className="Middle">
                    <div
                      id="container"
                      className="align-content-center mb-5 mainBodyClass"
                    >
                      <div className="col-12 text-center mb-4 mainBodyClass">
                        <h2>ORGANOGRAM</h2>
                      </div>

                      {/* PRESIDENT */}
                      <div id="no1">
                        <a href="#line1">
                          PRESIDENT <br />
                          <span className="desc">
                            (Minister of commerce & industry)
                          </span>
                        </a>
                      </div>

                      <div id="line1"></div>

                      {/* CHAIRMAN */}
                      <div className="chcdiv">
                        <a href="#line1">
                          CHAIRMAN <br />
                          <span className="desc">(Secretary DPIIT)</span>
                        </a>
                      </div>

                      <div id="line1"></div>

                      {/* DIRECTOR GENERAL */}
                      <div className="dgdiv">
                        <a href="#line1">
                          Director General <br />
                          <span className="desc">
                            (Chief Executive Officer)
                          </span>
                        </a>
                      </div>

                      {/* Lines */}
                      <div id="line1"></div>
                      <div id="line2"></div>
                      <div id="line3"></div>
                      <div id="line4"></div>
                      <div id="line6"></div>

                      {/* DY DIRECTOR GENERAL */}
                      <div id="no2">
                        <a href="#">DY. DIRECTOR GENERAL</a>
                      </div>

                      <div id="no5">
                        <a href="#">DY. DIRECTOR GENERAL</a>
                      </div>

                      <div id="line5"></div>
                      <div id="line21"></div>
                      <div id="line31"></div>
                      <div id="line61"></div>

                      <div id="no62">
                        <a href="#" style={{ fontSize: "12px" }}>
                          HQ & REGIONAL DIRECTORATE
                        </a>
                      </div>

                      <div id="no63">
                        <a href="#">GROUPS/DIVISIONS</a>
                      </div>

                      <div id="line31"></div>
                      <div id="line22"></div>
                      <div id="line32"></div>
                      <div id="line23"></div>
                      <div id="line24"></div>

                      {/* REGIONAL DIRECTORATE LIST */}
                      <div id="no82">
                        <ul id="lgdiv">
                          <li className="listitm">
                            HQ, Delhi <br />
                            Delhi, NCR (Noida and Gr. Noida), &amp; Madhya
                            Pradesh
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , CHANDIGARH <br />
                            Punjab, Haryana, UT of Chandigarh, Himachal Pradesh,
                            Jammu &amp; Kashmir
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , JAIPUR <br />
                            Rajasthan
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , MUMBAI <br />
                            Maharashtra &amp; Goa
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , GANDHINAGAR <br />
                            Gujarat, UT of Daman &amp; Diu, UT of Dadra &amp;
                            Nagar Haveli
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , PATNA <br />
                            Bihar &amp; Jharkhand
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , KANPUR <br />
                            Uttar Pradesh (except Noida &amp; Gr. Noida) &amp;
                            Uttarakhand
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , KOLKATA <br />
                            West Bengal, Sikkim &amp; Tripura
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , BHUBANESWAR <br />
                            Odisha and Chhattisgarh
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , HYDERABAD <br />
                            Andhra Pradesh &amp; Telangana
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , BENGALURU <br />
                            Karnataka and Kerala
                          </li>

                          <li className="listitm">
                            DR. AMBEDKAR INSTITUTE OF PRODUCTIVITY (AIP) ,
                            CHENNAI <br />
                            Tamilnadu, UT of Puducherry, UT of Lakshadweep and
                            UT of Andaman &amp; Nicobar Islands
                          </li>

                          <li className="listitm">
                            REGIONAL DIRECTORATE , GUWAHATI <br />
                            Assam, Arunachal Pradesh, Manipur, Meghalaya,
                            Mizoram and Nagaland
                          </li>
                        </ul>
                      </div>

                      {/* GROUPS */}
                      <div id="no52">
                        <ul id="lgdiv2">
                          <li className="listitm">Agri Business</li>
                          <li className="listitm">Economic Services</li>
                          <li className="listitm">Energy Management</li>
                          <li className="listitm">
                            Environment and Climate Action
                          </li>
                          <li className="listitm">International Services</li>
                          <li className="listitm">Industrial Engineering</li>
                          <li className="listitm">Information Technology</li>
                          <li className="listitm">Human Resource Management</li>
                        </ul>
                      </div>

                      {/* SUPPORT GROUPS */}
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <div id="no53">
                        <ul id="lgdiv3">
                          <li className="listitm">Finance</li>
                          <li className="listitm">Administration</li>
                          <li className="listitm">
                            Planning Monitoring and Coordination Cell
                          </li>
                          <li className="listitm">Inspection Division</li>
                        </ul>
                      </div>

                      <div className="clear"></div>
                    </div>
                  </div>
                </div>

                {/* <div className="row g-4">
                  <div className="col-md-4">
                    <div className="objectivebox">
                      <h3>1</h3>
                      <p>
                        <strong>e-Government:</strong> Providing
                        e-infrastructure for delivery of e-services
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
                          <strong>e-Innovation / R&amp;D:</strong>{" "}
                          Implementation of R&amp;D Framework-Enabling creation
                          of Innovation/ R&amp;D Infrastructure
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
                        <strong>e-Security:</strong> Securing India’s cyber
                        space
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="objectivebox">
                      <h3>6</h3>
                      <p>
                        <strong>e-Inclusion:</strong> Promoting the use of ICT
                        for more inclusive growth
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
                </div> */}
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
                        Information Technology Act. 2000 (21 of 2000) and other
                        IT related laws.
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
                        Electronics Export and Computer Software Promotion
                        Council (ESC).
                      </li>
                      <li>National Informatics Centre (NIC).</li>
                      <li>
                        Initiatives for development of Hardware/Software
                        industry including knowledge—based enterprises, measures
                        for promoting IT exports and competitiveness of the
                        industry.
                      </li>
                      <li>
                        All matters relating to personnel under the control of
                        the Ministry.
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
                          Modified vide Amendment series no. 243 dated
                          15.10.1999, 257 dated 21.12.2001, 300 dated 26.02.2012
                          and 327 dated 16.07.2016.
                        </li>
                        <li>
                          Modified vide Amendment series no. 371 dated
                          17.07.2023.
                        </li>
                        <li>
                          Inserted vide Amendment series no. 370 dated
                          23.12.2022.
                        </li>
                        <li>
                          Inserted vide Amendment series no. 377 dated
                          27.09.2024.
                        </li>
                        <li>
                          Modified vide Amendment series no. 368 dated
                          07.02.2022 (earlier inserted vide no. 279 dated
                          01.03.2005 and modified vide no. 322 dated
                          17.03.2016).
                        </li>
                        <li>
                          Modified vide Amendment series no. 345 dated
                          17.10.2018.
                        </li>
                        <li>
                          Modified vide Amendment series no. 281 dated
                          01.09.2005, Further modified vide amendment series no.
                          327 dated 16.07.2016
                        </li>
                        <li>
                          Inserted vide Amendment series no. 318 dated
                          12.09.2015 (Earlier inserted under Planning Commission
                          vide Amendment Series no.296 dated 22.02.2010, and in
                          NITI Aayog vide series no.312).
                        </li>
                        <li>
                          Inserted vide Amendment series no. 368 dated
                          07.02.2022.
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
                        transparency and accountability. Nodal Officers have
                        been appointed with a view to ensure effective
                        implementation of Citizens’ Charter.
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
                              Union and the progressive use of Official
                              Language, Hindi in the Ministry and the
                              Offices/Autonomous Societies under its control.
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
      </section>
    </>
  );
}

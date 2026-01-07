"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import PageRenderer from "@/components/PageRenderer";
import { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";

export default function AboutUs() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/page-content/about-us");
        setContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
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
                                <Image
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
                                <Image
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
                                <Image
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

            <div className="col-md-12 col-lg-8 ps-5 pe-5">
              <div className="aboutcontent text-justify">
                {content && <PageRenderer data={content} />}
                <h1>Citizen&apos;s Charter</h1>
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
                <div
                  className="card-wrapper p-2 py-4  p-md-4"
                  style={{
                    position: "relative",
                    width: "1300px",
                    height: "1400px",
                    // paddingRight: "1rem",
                  }}
                >
                  <div className="ms-4 ">
                    <h1>Organization Structure</h1>
                    <div className="">
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
                                height: "490px", // vertical length
                                background: "rgb(153, 153, 153)",
                                transform: "translate(250px, 640px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "140px", // length of the horizontal line
                                height: "1px", // thin line height
                                background: "rgb(153, 153, 153)",
                                transform: "translate(250px, 640px)", // adjust X and Y position accordingly
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "140px", // length of the horizontal line
                                height: "1px", // thin line height
                                background: "rgb(153, 153, 153)",
                                transform: "translate(250px, 870px)", // adjust X and Y position accordingly
                                pointerEvents: "none",
                              }}
                            ></i>
                            <i
                              style={{
                                position: "absolute",
                                width: "140px", // length of the horizontal line
                                height: "1px", // thin line height
                                background: "rgb(153, 153, 153)",
                                transform: "translate(250px, 1130px)", // adjust X and Y position accordingly
                                pointerEvents: "none",
                              }}
                            ></i>
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
                                transform: "translate(80px, -22px)",
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
                                transform: "translate(475px, -22px)",
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
                                      Minister of and Industry & President
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
                            height: "400px",
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
                                transform: "translate(80px, -22px)",
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
                                transform: "translate(475px, -22px)",
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
                            width: "1200px",
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
                              style={{
                                width: "1200px",
                                height: "200px",
                                transform: "translate(20px, -250px)",
                                paddingInline: "12px",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <div className="d-flex  mx-auto">
                                  <div
                                    className="organogram-card-large pointer position-relative"
                                    tabIndex={0}
                                    aria-label="View Profile HON’BLE MINISTER"
                                    role="link"
                                  >
                                    <ul>
                                      <li>
                                        <strong>HQ, Delhi</strong> Delhi NCR
                                        (Noida and Gr. Noida) Madhya Pradesh
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Chandigarh
                                        </strong>{" "}
                                        Punjab Haryana UT of Chandigarh Himachal
                                        Pradesh Jammu & Kashmir
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Jaipur
                                        </strong>{" "}
                                        Rajasthan
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Mumbai
                                        </strong>{" "}
                                        Maharashtra Goa
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Gandhinagar
                                        </strong>{" "}
                                        Gujarat UT of Daman & Diu UT of Dadra &
                                        Nagar Haveli
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Patna
                                        </strong>{" "}
                                        Bihar Jharkhand
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Kanpur
                                        </strong>{" "}
                                        Uttar Pradesh (except Noida & Gr. Noida)
                                        Uttarakhand
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Kolkata
                                        </strong>{" "}
                                        West Bengal Sikkim Tripura
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Bhubaneswar
                                        </strong>{" "}
                                        Odisha Chhattisgarh
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Hyderabad
                                        </strong>{" "}
                                        Andhra Pradesh Telangana
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Bengaluru
                                        </strong>{" "}
                                        Karnataka Kerala
                                      </li>

                                      <li>
                                        <strong>
                                          Dr. Ambedkar Institute of Productivity
                                          (AIP), Chennai
                                        </strong>{" "}
                                        Tamil Nadu UT of Puducherry UT of
                                        Lakshadweep UT of Andaman & Nicobar
                                        Islands
                                      </li>

                                      <li>
                                        <strong>
                                          Regional Directorate, Guwahati
                                        </strong>{" "}
                                        Assam Arunachal Pradesh Manipur
                                        Meghalaya Mizoram Nagaland
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* //////////////////////////////////////////////////////////////////////// */}
                              <div
                                className="FamilyNode_root__LylyV"
                                style={{
                                  width: "344px",
                                  height: "300px",
                                  transform: "translate(805px, -500px)",
                                  paddingInline: "12px",
                                }}
                              >
                                <div style={{ width: "100%" }}>
                                  <div className="d-flex  mx-auto">
                                    <div
                                      className="organogram-card-medium pointer position-relative"
                                      tabIndex={0}
                                      aria-label="View Profile HON’BLE MINISTER"
                                      role="link"
                                    >
                                      <ul>
                                        <li>Agri Business</li>
                                        <li>Economic Services</li>
                                        <li>Energy Management</li>
                                        <li>Environment and Climate Action</li>
                                        <li>International Services</li>
                                        <li>Industrial Engineering</li>
                                        <li>Information Technology</li>
                                        <li>Human Resource Management</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="FamilyNode_root__LylyV"
                                style={{
                                  width: "344px",
                                  height: "300px",
                                  transform: "translate(805px, -460px)",
                                  paddingInline: "12px",
                                }}
                              >
                                <div style={{ width: "100%" }}>
                                  <div className="d-flex justify-content-center mx-auto">
                                    <div
                                      className="organogram-card-medium pointer position-relative"
                                      tabIndex={0}
                                      aria-label="View Profile HON’BLE MINISTER"
                                      role="link"
                                    >
                                      <ul>
                                        <li>Finance</li>
                                        <li>Administration</li>
                                        <li>
                                          Planning Monitoring and Coordination
                                          Cell
                                        </li>
                                        <li>Inspection Division</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //////////////////////////////////// */}
                    <div>
                      <div>
                        {/* <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "400px",
                          }}
                        ></div> */}
                      </div>
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

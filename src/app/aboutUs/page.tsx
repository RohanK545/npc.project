"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import PageRenderer from "@/components/PageRenderer";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import DocumentModal from "@/components/DocumentModal";


export default function AboutUs() {
  const [content, setContent] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/page-content/about-us");
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
        <div className="container-fluid maincontent mx-5 justify-content">
          <div className="row">
            {/* Left sticky column with profile cards */}
            <div
              className="col-md-12 col-lg-4 stickyBox"
              style={{
                top: "16rem",
                height: "fit-content",
                minWidth: "250px",
                maxWidth: "475px",
              }}
            >


              {/* Profile Cards Section */}
              <div className="profile-cards-section">
                <h3 className="mb-4 text-center">Leadership</h3>

                {/* HON’BLE Minister of Commerce and Industry & President */}
                <div className="mb-4">
                  <div className="d-flex justify-content-center">
                    <div
                      className="profile-card pointer position-relative text-center"
                      tabIndex={0}
                      aria-label="View Profile HON'BLE MINISTER"
                      role="link"
                      style={{ maxWidth: "300px" }}
                    >
                      <div className="mb-3">
                        <Image
                          src="/images/aboutUs/PiyushGoyal.jpg"
                          alt="profile picture Sh. Piyush Goyal"
                          className="img-fluid rounded-circle profile-img object-fit-cover bg-white border border-3 border-primary"
                          width={200}
                          height={200}
                        />
                      </div>
                      <small className="text-uppercase d-block mb-1">
                        Minister of Commerce and Industry & President
                      </small>
                      <p className="h5 fw-bold">Sh. Piyush Goyal</p>
                    </div>
                  </div>
                </div>

                {/* HON'BLE Secretary DPIIT & Chairman */}
                <div className="mb-4">
                  <div className="d-flex justify-content-center">
                    <div
                      className="profile-card pointer position-relative text-center"
                      tabIndex={0}
                      aria-label="View Profile HON'BLE MINISTER OF STATE"
                      role="link"
                      style={{ maxWidth: "300px" }}
                    >
                      <div className="mb-3">
                        <Image
                          src="/images/aboutUs/chairmanNPC.jpg"
                          alt="profile picture Sh. Amardeep Singh Bhatia"
                          className="img-fluid rounded-circle profile-img object-fit-cover bg-white border border-3 border-primary"
                          width={200}
                          height={200}
                        />
                      </div>
                      <small className="text-uppercase d-block mb-1">
                        Secretary DPIIT & Chairman
                      </small>
                      <p className="h5 fw-bold">Sh. Amardeep Singh Bhatia, IAS</p>
                    </div>
                  </div>
                </div>

                {/* HON'BLE Director General */}
                <div className="mb-4">
                  <div className="d-flex justify-content-center">
                    <div
                      className="profile-card pointer position-relative text-center"
                      tabIndex={0}
                      aria-label="View Profile HON'BLE MINISTER OF STATE"
                      role="link"
                      style={{ maxWidth: "300px" }}
                    >
                      <div className="mb-3">
                        <Image
                          src="/images/aboutUs/Smt.NeerjaSekhar.jpg"
                          alt="profile picture Smt. Neerja Sekhar"
                          className="img-fluid rounded-circle profile-img object-fit-cover bg-white border border-3 border-primary"
                          width={200}
                          height={200}
                        />
                      </div>
                      <small className="text-uppercase d-block mb-1">
                        Director General
                      </small>
                      <p className="h5 fw-bold">Smt. Neerja Sekhar, IAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content column */}
            <div className="col-md-12 col-lg-8 ps-5 pe-5">
              <div className="aboutcontent text-justify">
                {content && <PageRenderer data={content} />}
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

                <div className="row g-4 my-4">
                  {/* Vision */}
                  <div className="col-lg-6 col-md-12">
                    <div className="h-100 p-4 shadow-sm rounded bg-white border-start border-4 border-primary">
                      <h2 className="">Vision</h2>
                      <p className="text-justify mb-0">
                        NPC to be the knowledge leader in productivity to provide
                        state of our services to the Indian economy to become globally
                        competitive.
                      </p>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="col-lg-6 col-md-12">
                    <div className="h-100 p-4 shadow-sm rounded bg-white border-start border-4 border-success">
                      <h3 className="">Mission</h3>
                      <p className="text-justify mb-0">
                        Contribute to the sustainable, inclusive socioeconomic
                        development of the country by enhancing productivity.
                      </p>
                    </div>
                  </div>
                </div>

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
                      <a
                        href="https://npcindia.gov.in/NPC/Images/AboutUs/Governing%20Body%20of%20NPC.pdf"
                        onClick={(e) => {
                          e.preventDefault();
                          setPdfUrl(
                            "/pdf/Governing Body of NPC.pdf"
                          );
                          setPdfTitle("List Of Governing Body Members");
                          setIsModalOpen(true);
                        }}
                      >
                        Click here
                      </a>
                    </b>

                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={pdfUrl}
        title={pdfTitle}
      />
    </>
  );
}
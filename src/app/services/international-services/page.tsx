import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const members = [
    {
      srNo: "1",
      title:
        "Multicountry Observational Study Mission on Productivity Gainsharing in Agriculture",
      Venue: "F2F Nepal",
      startDate: "07 Jan 2026",
      endDate: "09 Jan 2026",
      npcClosingDate: "19 November 2025",
      targetParticipant:
        "Government agriculture or cooperative officials; representatives of  cooperatives, farmers’ groups, or agribusinesses; and researchers, academics, consultants, or development professionals working on developing or improving productivity gainsharing systems in agriculture.",
      programDetails: "#",
    },
    {
      srNo: "2",
      title:
        "Conference on Role of Green Productivity in Transition to Cleaner Energy (25-CP-22-GE-CON-A)",
      Venue: "Online",
      startDate: "15 December 2025",
      endDate: "15 December 2025",
      npcClosingDate: "17 Nov 2025",
      targetParticipant:
        "Government officials, policymakers, representatives of industrial associations and SMEs, and consultants working on climate change mitigation, renewable energy, green growth, and sustainable development.",
      programDetails: "#",
    },
    {
      srNo: "3",
      title:
        "Training Course on Upskilling and Reskilling the Public-sector Workforce (25-CP-25-GE-TRC-A)",
      Venue: "Face to Face (India, Chennai)",
      startDate: "2 February 2026",
      endDate: "6 February 2026",
      npcClosingDate: "26 November 2025",
      targetParticipant:
        "Representatives of the ministry or department responsible for managing and developing public-sector human resources.",
      programDetails: "#",
    },
    {
      srNo: "4",
      title: "Workshop on Human Capital Management in SMEs (25-CL-10-GE-WSP-A)",
      Venue: "Face to Face (Pakistan, Karachi)",
      startDate: "27 January 2026",
      endDate: "30 January 2026",
      npcClosingDate: "12 December 2025",
      targetParticipant:
        "SME owners, managers, and HR practitioners; officials from NPOs or SME development agencies; representatives of SME associations; and academics working on HCM frameworks.",
      programDetails: "#",
    },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["services"].imageSrc}
        breadcrumbs={navigationConfig["services"].breadcrumbs}
        navItems={navigationConfig["services"].navItems}
        pageTilte="International Services"
      />
      <section className="maincontent">
        <div>
          <div className=" ">
            {" "}
            {/* <h1 className="text-blue">International Services</h1> */}
            <br />
            <p>
              NPC is the Nodal Agency in charge of organizing Indian
              participation in the training programmes, workshops and seminars
              offered by APO in Member Countries on different subjects related
              to productivity. NPC also hosts APO programmes in India every year
              for participants of Member Countries.
            </p>
            <br />
            <h2 className="text-blue">APO Awards</h2>
            <div role="table" className=" our-team-list-container mx-auto my-4">
              {/* Title */}
              <div className="our-team-list-header d-flex align-items-center mb-2">
                <p className="text-uppercase mb-0">MULTICOUNTRY PROJECTS</p>
              </div>
              {/* Header Row */}
              <div role="rowgroup">
                <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold ">
                  <div className="col-lg-1 col-sm-12 ps-1 text-center">
                    Sr.No.
                  </div>

                  <div className="col-lg-3 col-sm-12 ps-1 text-center">
                    Title Of Programme
                  </div>

                  <div className="col-lg-1 col-sm-12 text-center">Venue</div>

                  <div className="col-lg-1 col-sm-12 text-center">
                    Start Date
                  </div>

                  <div className="col-lg-1 col-sm-12 text-center">End Date</div>

                  <div className="col-lg-1 col-sm-12 text-center">
                    NPC Closing Date
                  </div>

                  <div className="col-lg-3 col-sm-12 text-center">
                    Target Participant
                  </div>

                  <div className="col-lg-1 col-sm-12 text-center">
                    Program Details
                  </div>
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
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex gap-2  justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className=" mb-0">{m.srNo}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-3 col-md-12">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="name  mb-0">{m.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex gap-2  justify-content-centeralign-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.Venue}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.startDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.endDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.npcClosingDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0 text-justify">
                            {m.targetParticipant}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-12">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <a
                            href={m.programDetails}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5">
            <h2 className="text-blue">DOWNLOADS</h2>

            <div className="ms-2 my-4 d-flex flex-wrap">
              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                1. NPC ECS Details
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                2. TES Application Form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                3. I-OSM Application Form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                4. I-OSM Biodata Form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                5. APO Guide for Participants
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                6. List of APO Multicountry Projects in 2020
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                7. Precautionary Measures against the Coronavirus (COVID-19)
                Outbreak
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                8. Partial list of Participants who attended APO Multicountry
                Program
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                9. Candidate APO Biodata form 2020
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                10. NPC Certified Productivity Specialist Application Form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                11. Resource Person APO Biodata Form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                12. IMPLEMENTATION PROCEDURES FOR APO FACE-TO-FACE PROJECTS
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                13. IMPLEMENTATION PROCEDURES FOR APO ONLINE MULTICOUNTRY
                PROJECTS
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                14. APO Biodata form
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                15. TES Project Implementation Procedures 2024
              </a>

              <a
                href="#"
                target="_blank"
                className="me-4 text-decoration-none"
                rel="noopener noreferrer"
              >
                16. TES Application Form 2024
              </a>
            </div>

            <div className="row ms-2">
              <p style={{ textAlign: "justify" }}>
                <b>NOMINATION PROCEDURE:</b> All the nominations should be
                routed through proper channel and as per the attached APO
                Biodata Form. The nominations received after the last date will
                not be considered. It is requested to send nominations by e-mail
                to jittin.kapoor@npcindia.gov.in, isg@npcindia.gov.in and
                rk.rawat@npcindia.gov.in. All the information pertaining to the
                nominations will be treated as confidential and classified. The
                nominated officers may be invited as a faculty in programs on
                the relevant subjects organised by NPC.
                <br />
                <br />
                <b>FEES and CHARGES:</b> An Application fee (NON-REFUNDABLE) of
                Rs. 500/- + 18% GST for MSME Sector, Trade Unions and NGO and
                Rs. 1000/- + 18% GST for others is payable.
                <br />
                <br />
                <b>IN CASE OF SELECTION BY APO:</b> NPC will charge Rs. 3,000/-
                + 18% GST for MSME Sector, Trade Unions and NGO, Rs. 12,000/- +
                18% GST for profit making organizations and Rs. 6,000/- + 18%
                GST for others per participant.
                <br />
                <br />
                The requisite amount can be paid through a demand
                draft/cheque/ECS drawn in favour of National Productivity
                Council, New Delhi. In the absence of application fee, the
                nominations will not be considered. Kindly e-mail the details of
                the ECS/RTGS/NEFT payment made on isg@npcindia.gov.in. In this
                regard, the bank account details are attached herewith.In case
                if an invoice is required by the participant towards the payment
                of Fee & Charges, a request in this regard may kindly be sent to
                above email ids well in advance.
              </p>
            </div>

            <div className="row ms-0">
              <div className="col-11 col-sm-11 col-md-12 col-lg-6 col-xl-5 py-4">
                <dl>
                  <dt className="paraname mb-1">
                    Group Head (International Services) / APO Liaison Officer
                    for India
                    <br />
                    National Productivity Council.
                  </dt>
                  <dt className="paraname2 mb-1">
                    Utpadakta Bhawan, 5-6 Institutional Area,
                  </dt>
                  <dt className="paraname3 mb-1">
                    Lodi Road, New Delhi - 110 003
                  </dt>
                  <dt className="ddmrgn mb-1">Phone No.- 011-24607328/12</dt>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

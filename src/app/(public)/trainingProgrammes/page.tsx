import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const members = [
    {
      srNo: "1",
      title: "T2526HRM04",
      titleLinkName: "Right to Information Act (RTI) & Record Management",
      titleLink: "#",
      programMonth: "Dec-25",
      date: "1st Dec 2025-5th Dec 2025",
      Venue: "Goa",
      feeResident: "70000/-(Residential)",
      feeNonResident: "55000/-(Non-Residential)",
      Brochure: "#",
    },
    {
      srNo: "2",
      title: "T2526HRM04",
      titleLinkName: "Right to Information Act (RTI) & Record Management",
      titleLink: "#",
      programMonth: "Dec-25",
      date: "1st Dec 2025-5th Dec 2025",
      Venue: "Goa",
      feeResident: "70000/-(Residential)",
      feeNonResident: "55000/-(Non-Residential)",
      Brochure: "#",
    },
    {
      srNo: "3",
      title: "T2526HRM04",
      titleLinkName: "Right to Information Act (RTI) & Record Management",
      titleLink: "#",
      programMonth: "Dec-25",
      date: "1st Dec 2025-5th Dec 2025",
      Venue: "Goa",
      feeResident: "70000/-(Residential)",
      feeNonResident: "55000/-(Non-Residential)",
      Brochure: "#",
    },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["trainingProgrammes"].imageSrc}
        breadcrumbs={navigationConfig["trainingProgrammes"].breadcrumbs}
        navItems={navigationConfig["trainingProgrammes"].navItems}
        pageTilte="Annual Training Calendar (Financial Year Wise)"
      />
      <section className="maincontent">
        <div>
          <div className=" ">
            <p>
              NPC offers a range of training programmes to improve people's
              behavioural,managerial and technical competencies especially aim
              at making people realize their full potential.
            </p>
            <div role="table" className="our-team-list-container mx-auto my-4">
              {/* Title */}
              <div className="our-team-list-header d-flex align-items-center mb-2">
                <p className="text-uppercase mb-0">
                  Annual Training Calendar for FY 2025-26
                </p>
              </div>
              
              {/* Desktop Table Header - Hidden on Mobile */}
              <div role="rowgroup" className="d-none d-lg-block">
                <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
                  <div className="col-lg-1 ps-1 text-center">S.No.</div>
                  <div className="col-lg-3 ps-1 text-center">Title Of Programme</div>
                  <div className="col-lg-1 text-center">Program Month</div>
                  <div className="col-lg-2 text-center">Date</div>
                  <div className="col-lg-1 text-center">Venue</div>
                  <div className="col-lg-3 text-center">Participant Fee (Exclusive of GST)</div>
                  <div className="col-lg-1 text-center">Brochure</div>
                </div>
              </div>

              {/* Desktop Table Rows - Hidden on Mobile */}
              <div role="rowgroup" className="d-none d-lg-block">
                {members.map((m, idx) => (
                  <div
                    key={idx}
                    role="row"
                    className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
                  >
                    <div className="col-lg-1">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="mb-0">{m.srNo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <a
                            href={m.titleLink}
                            target="_blank"
                            className="me-4 text-decoration-none"
                            rel="noopener noreferrer"
                          >
                            {m.titleLinkName}
                          </a>
                          <p className="mb-0">{m.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.programMonth}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <p className="designation mb-0">{m.Venue}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="row">
                        <div className="col-6">
                          <p className="designation mb-0">{m.feeResident}</p>
                        </div>
                        <div className="col-6">
                          <p className="designation mb-0">{m.feeNonResident}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column">
                          <a
                            href={m.Brochure}
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

              {/* Mobile Card Layout - Visible only on Mobile */}
              <div className="d-lg-none">
                {members.map((m, idx) => (
                  <div
                    key={idx}
                    className="mobile-training-card p-3 mb-3"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                    }}
                  >
                    {/* Serial Number Badge */}
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#162F6A",
                          fontSize: "14px",
                          padding: "6px 12px",
                        }}
                      >
                        #{m.srNo}
                      </span>
                      <a
                        href={m.Brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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

                    {/* Title */}
                    <div className="mb-3">
                      <a
                        href={m.titleLink}
                        target="_blank"
                        className="text-decoration-none fw-bold"
                        style={{ color: "#162F6A", fontSize: "16px" }}
                        rel="noopener noreferrer"
                      >
                        {m.titleLinkName}
                      </a>
                      <p className="text-muted mb-0 mt-1" style={{ fontSize: "13px" }}>
                        {m.title}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="row g-2">
                      <div className="col-6">
                        <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                          <strong>Month:</strong>
                        </p>
                        <p className="mb-0" style={{ fontSize: "14px" }}>
                          {m.programMonth}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                          <strong>Venue:</strong>
                        </p>
                        <p className="mb-0" style={{ fontSize: "14px" }}>
                          {m.Venue}
                        </p>
                      </div>
                      <div className="col-12">
                        <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                          <strong>Date:</strong>
                        </p>
                        <p className="mb-0" style={{ fontSize: "14px" }}>
                          {m.date}
                        </p>
                      </div>
                      <div className="col-12">
                        <p className="mb-1 text-muted" style={{ fontSize: "12px" }}>
                          <strong>Participant Fee (Exclusive of GST):</strong>
                        </p>
                        <div className="d-flex flex-column gap-1">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            {m.feeResident}
                          </p>
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            {m.feeNonResident}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const tables = [
    {
      title: "Contact Person Details",
      members: [
        {
          SrNo: "1",
          name: "Shri Rajesh Sund",
          designation: "Director Gr-I & Group Head (ES & PP), HQ DELHI",
          Telephone: "011-24607303",
          Mail: "rajesh.sund@npcindia.gov.in",
        },
        {
          SrNo: "2",
          name: "C Narendra",
          designation: "Director Gr-II & Regional Director (Bangalore)",
          Telephone: "080-23467294",
          Mail: "c.narendra@npcindia.gov.in",
        },
        {
          SrNo: "3",
          name: "Shri Manoj Kumar Verma",
          designation: "Director Gr-II & Regional Director (Guwahati)",
          Telephone: "0361-3512552",
          Mail: "mk.verma@npcindia.gov.in ; guwahati@npcindia.gov.in",
        },
        {
          SrNo: "4",
          name: "Ashok Kumar",
          designation: "In charge - Regional Director (Chandigarh)",
          Telephone: "9888481938",
          Mail: "ashok.kumar@npcindia.gov.in",
        },
        {
          SrNo: "5",
          name: "Dr. Rajat Sharma",
          designation: "Director Gr-II & Regional Director (Kanpur)",
          Telephone: "0512-2224176",
          Mail: "rajat.sharma@npcindia.gov.in",
        },
        {
          SrNo: "6",
          name: "Shri Avijit Nayak",
          designation: "Director Gr-II & Regional Director (Bhubaneswar)",
          Telephone: "0674-2397381/26",
          Mail: "avijit.nayak@npcindia.gov.in",
        },
        {
          SrNo: "7",
          name: "Shri G. Saravanan",
          designation: "Director Gr-I & Head (AIP Chennai)",
          Telephone: "044-26241059",
          Mail: "g.saravanan@npcindia.gov.in",
        },
        {
          SrNo: "8",
          name: "Shri Rahul Kirkire",
          designation: "Director Gr-I & Regional Director (Gandhinagar)",
          Telephone: "079-23287344",
          Mail: "rahul.kirkire@npcindia.gov.in ; gandhinagar@npcindia.gov.in",
        },
        {
          SrNo: "9",
          name: "Dr. B. Hemant",
          designation: "Director Gr-I & Regional Director (Hyderabad)",
          Telephone: "040-24733473",
          Mail: "hemant.rao@npcindia.gov.in ; hyderabad@npcindia.gov.in",
        },
        {
          SrNo: "10",
          name: "Shri Mukesh Singh",
          designation: "Director Gr-II & Regional Director (Jaipur)",
          Telephone: "0141-2702935",
          Mail: "mukesh.singh@npcindia.gov.in ; jaipur@npcindia.gov.in",
        },
        {
          SrNo: "11",
          name: "Shri S. Chakraborty",
          designation: "Director Gr-I & Regional Director (Kolkata)",
          Telephone: "033-22876069",
          Mail: "s.chakraborty@npcindia.gov.in",
        },
        {
          SrNo: "12",
          name: "Shri BP Bhandary",
          designation: "Director G-I & Regional Director (Mumbai)",
          Telephone: "022-23002924, 23071322",
          Mail: "bp.bhandary@npcindia.gov.in",
        },
        {
          SrNo: "13",
          name: "Shri J.K. Singh",
          designation: "Director Gr-II & Regional Director (Patna)",
          Telephone: "0612-2558311",
          Mail: "jk.singh@npcindia.gov.in ; patna@npcindia.gov.in",
        },

      ],
    },
  ];

  const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
    return (
      <div
        role="table"
        className="container our-team-list-container mx-auto my-4"
      >
        {/* Title */}
        <div className="our-team-list-header d-flex align-items-center mb-2">
          <span className="material-symbols-outlined bhashini-skip-translation me-2">
            
          </span>
          <p className="text-uppercase mb-0">{title}</p>
        </div>

        {/* Header Row */}
        <div role="rowgroup">
          <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
            <div className="col-lg-1 col-sm-12 ps-1">S.No.</div>
            <div className="col-lg-2 col-sm-12 ps-1">Name </div>
            <div className="col-lg-4 col-sm-12 ps-1">Designation</div>
            <div className="col-lg-2 col-sm-12">Telephone (Office)</div>
            <div className="col-lg-3 col-sm-12">E-mail</div>
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
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="mb-0">{m.SrNo}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="name mb-0">{m.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.designation}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Telephone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex gap-2 align-items-center">
                  <div className="d-flex flex-column">
                    <p className="designation mb-0">{m.Mail}</p>
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
        imageSrc={navigationConfig["services"].imageSrc}
        breadcrumbs={navigationConfig["services"].breadcrumbs}
        navItems={navigationConfig["services"].navItems}
        pageTilte="Productivity Promotion"
      />

      <section className="maincontent">
        <div style={{
          marginLeft: 270
        }}>
          <h1 className="pghdng2" style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000",
            marginBottom: "20px"
          }}>
            Productivity Week Celebration 2025
          </h1>

          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <ul className="nav nav-pills tabfont mlf-5 mt-4"></ul>
          </div>

          <div style={{
            marginBottom: "15px"
          }}>
            <b style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000"
            }}>Productivity Week Theme 2025</b>
          </div>

          <div style={{
            marginBottom: "15px"
          }}>
            <h5 style={{
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 0 5px 0",
              color: "#000"
            }}>
              <b>THEME IN ENGLISH:</b>
            </h5>
            <h5 style={{
              fontSize: "14px",
              margin: "0",
              color: "#0066cc"
            }}>
              <a
                href="https://www.npcindia.gov.in/NPC/Uploads/productivity%20week/Ideas%20to%20Impact%20PW%20theme%202025.pdf"
                style={{
                  color: "#0066cc",
                  textDecoration: "none"
                }}

              >
                "From Ideas to Impact: Protecting Intellectual Property for Competitive Startups"(LPC's)
              </a>
            </h5>
          </div>

          <div style={{
            marginTop: "20px"
          }}>
            <a
              href="https://www.npcindia.gov.in/NPC/Uploads/productivity%20week/LPC_List_E-mail_Mobile_23.8.22__1_.pdf"
              target="_blank"
              style={{
                color: "#ff0000",
                textDecoration: "none",
                fontSize: "14px"
              }}

            >
              Lists of Local Productivity Councils (LPC's)
            </a>
          </div>
        </div>
        {tables.map((tbl, idx) => (
          <InfoTable key={idx} title={tbl.title} members={tbl.members} />
        ))}
      </section>
    </div>
  );
}

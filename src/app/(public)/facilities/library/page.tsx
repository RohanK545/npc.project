import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import Image from "next/image";
export default function AboutUs() {
  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["facilities"].imageSrc}
        breadcrumbs={navigationConfig["facilities"].breadcrumbs}
        navItems={navigationConfig["facilities"].navItems}
        pageTilte="Library  "
      />

      <div className="container">
        <div
          className="row py-5 px-3 px-md-5 Imageopacity d-flex justify-content-between align-items-center"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            minHeight: "70vh",
            color: "white",
            marginBottom: "2rem",
            borderRadius: "10px",
          }}
        >
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg1.png"
              className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Interior"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg2.png"
              className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Auditorium"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg3.png"
              className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg4.png"
              className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg5.png"
              className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg6.png"
              // className="Imageclass"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                // objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>

          <div className="col-12 mt-4">
            <p
              style={{
                color: "black",
                fontSize: "16px", // low font size
                lineHeight: "1.6",
                textAlign: "justify",
                textShadow: "none",
              }}
            >
              National Productivity Council (NPC) Library & Documentation Center
              was established in 1958. It is one of the major resource centers
              in the field of productivity awareness, dissemination and
              promotion for research in productivity improvement in India. It
              has a collection of about 13,000 volumes of books and periodicals,
              research reports. It receives 45 current journals and magazines.
              It is a Depository Library for the publications of the Asian
              Productivity Organization (APO), Japan. Library collection is rich
              particularly in the areas of productivity, industrial management
              and training, production management, human resource management,
              energy management, etc.
            </p>
          </div>
        </div>

        <div className="py-4">
          <h2 className="display-6 fw-bold text-primary mb-4">FUNCTIONS/OBJECTIVES</h2>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <span className="text-primary me-2">•</span>
              <p className="mb-0">
                Organizing, maintaining and delivering in-house Library services
                with the help of computer and allied equipments.
              </p>
            </li>
            <li className="d-flex align-items-start mb-3">
              <span className="text-primary me-2">•</span>
              <p className="mb-0">
                National Productivity Council Library is functioning as a resource
                centre for research in productivity awareness and management.
              </p>
            </li>
          </ul>
        </div>

        <div className="py-4">
          <h2 className="display-6 fw-bold text-primary mb-4">LIBRARY SERVICES</h2>
          <h4 className="fw-bold mb-4">NPC Library provides the following services:</h4>

          <ul className="list-unstyled ms-3">
            {[
              "Reading facility to access/read",
              "Daily Newspapers,",
              "Regular Magazines and periodicals,",
              "Latest Books of Economic Services, Industrial Engineering, Human Resource Management, Information Technology, Publicity, Energy Management, Environment",
              "Management, Agribusiness, Govt. Policy, etc.",
              "Hindi Books on drama, poetry, fiction, etc.",
              "NPC Reports, Dictionary, Encyclopedia etc.",
              "Free access to the subscribed libraries, websites and consortium through desktop access at NPC Library.",
              "Free access to the audio –video material through desktops at NPC Library.",
              "Issues of Books or Periodicals and free access to e-Granthalya software and e-repository/e-Books through Knowledge Management Portal (applicable to permanent employees of NPC only). The access to e-books to other members shall be provided through Desktop at NPC Library premises."
            ].map((service, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-primary me-2">✔</span>
                <p className="mb-0">{service}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4">
          <h2 className="display-6 fw-bold text-primary mb-4">LIBRARY MEMBERSHIP</h2>
          <h4 className="fw-bold mb-4">
            Membership of the Library is open to the following categories of
            bonafide Professionals/Research Scholars/Industry Professionals only
            who are actively involved in research on productivity:
          </h4>

          <ul className="list-unstyled ms-3">
            {[
              "All officials of NPC.",
              "Faculties and Research Scholars of Universities in India and abroad.",
              "Industry Professionals working in engineering and management disciplines."
            ].map((category, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-primary me-2">▹</span>
                <p className="mb-0">{category}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4 bg-light p-4 rounded-3 border-start border-4 border-primary">
          <h3 className="fw-bold text-primary mb-3">LIBRARY TIMINGS</h3>
          <p className="fs-5 mb-0">
            The Library shall open from <strong>9.00 am to 5.30 pm</strong> throughout the year
            except Saturdays/Sundays and Holidays.
          </p>
        </div>

        <div className="mt-5 text-center p-4 bg-primary text-white rounded-3 shadow">
          <p className="fs-4 mb-0 fw-bold animate-pulse">
            NPC library provides the following services. Click below
          </p>
        </div>
      </div>
    </div>
  );
}

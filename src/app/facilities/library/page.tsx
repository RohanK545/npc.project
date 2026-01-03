import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["facilities"].imageSrc}
        breadcrumbs={navigationConfig["facilities"].breadcrumbs}
        navItems={navigationConfig["facilities"].navItems}
        pageTilte="Conference Hall"
      />

      <div className="container">


        <div
          className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
          style={{

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            minHeight: "70vh",
            color: "white",
            marginBottom: "2rem",
            borderRadius: "10px"
          }}
        >

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Interior"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Library/Library%203.jpeg"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Auditorium"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Library/Library%204.jpeg"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Library/Library%205.jpeg"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Library/Library%206.jpeg"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Library/Library%201.JPG"
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Stage"
            />
          </div>

          <div className="col-12 mt-4">
            <p
              style={{
                color: "black",
                fontSize: "16px",      // low font size
                lineHeight: "1.6",
                textAlign: "justify",
                textShadow: "none"
              }}
            >
              National Productivity Council (NPC) Library & Documentation Center was established in 1958.
              It is one of the major resource centers in the field of productivity awareness, dissemination
              and promotion for research in productivity improvement in India. It has a collection of about
              13,000 volumes of books and periodicals, research reports. It receives 45 current journals and
              magazines. It is a Depository Library for the publications of the Asian Productivity Organization
              (APO), Japan. Library collection is rich particularly in the areas of productivity, industrial
              management and training, production management, human resource management, energy management, etc.
            </p>
          </div>

        </div>

        <div className="">
          <h1 className="py-4">FUNCTIONS/OBJECTIVES</h1>
          <ul>
            <p>Organizing, maintaining and delivering in-house Library services with the help of computer and allied equipments.</p>
            <p>National Productivity Council Library is functioning as a resource centre for research in productivity awareness and management.</p>
          </ul>
        </div>
        <div>
          <h2 className="py-4">LIBRARY SERVICES</h2>
          <h4 className="py-4">NPC Library provides the following services:</h4>

          <p>Reading facility to access/read</p>
          <p>Daily Newspapers,</p>
          <p>Regular Magazines and periodicals,</p>
          <p>Latest Books of Economic Services, Industrial Engineering, Human Resource Management, Information Technology, Publicity, Energy Management, Environment</p>
          <p>Management, Agribusiness, Govt. Policy, etc.</p>
          <p>Hindi Books on drama, poetry, fiction, etc.</p>
          <p>NPC Reports, Dictionary, Encyclopedia etc.</p>
          <p>Free access to the subscribed libraries, websites and consortium through desktop access at NPC Library.</p>
          <p>Free access to the audio –video material through desktops at NPC Library.</p>
          <p>Issues of Books or Periodicals and free access to e-Granthalya software and e-repository/e-Books through Knowledge Management Portal (applicable to permanent employees of NPC only). The access to e-books to other members shall be provided through Desktop at NPC Library premises.</p>

          <h2 className="py-4">LIBRARY MEMBERSHIP</h2>

          <h4 className="py-4">Membership of the Library is open to the following categories of bonafide Professionals/Research Scholars/Industry Professionals only who are actively involved in research on productivity:</h4>

          <p>All officials of NPC.</p>
          <p>Faculties and Research Scholars of Universities in India and abroad.</p>
          <p>Industry Professionals working in engineering and management disciplines.</p>

          <h3 className="p-4">LIBRARY TIMINGS</h3>
          <p>The Library shall open from 9.00 am to 5.30 pm throughout the year except Saturdays/Sundays and Holidays.</p>



          <p>NPC library provides the following services.Click below</p>


        </div>
      </div>
    </div>
  );
}

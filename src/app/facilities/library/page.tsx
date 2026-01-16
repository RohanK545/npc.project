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
          className="row py-5 px-3 px-md-1 Imageopacity d-flex justify-content-between align-items-center"
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
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 Imagediv d-flex justify-content-center">
            <Image
              src="/images/facilities/LibraryImg6.png"
              width={350}
              height={250}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
              }}
              alt="Sangam Hall Stage"
            />
          </div>

         <div className="col-12 mt-4 me-lg-3 me-md-2 me-1">
  <p
    style={{
      color: "black",
      fontSize: "16px",
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

        <div className="py-1">
          <h2 className="library-section-heading">FUNCTIONS/OBJECTIVES</h2>
          <br />
          <ul>
            <li className="d-flex align-items-start mb-3">
              Organizing, maintaining and delivering in-house Library services
              with the help of computer and allied equipments.
            </li>
            <li className="d-flex align-items-start mb-3">
              National Productivity Council Library is functioning as a resource
              centre for research in productivity awareness and management.
            </li>
          </ul>
        </div>

        <div className="py-4">
          <h2 className="library-section-heading">LIBRARY SERVICES</h2>
          <br />
          <h4 className="fw-bold mb-4">
            NPC Library provides the following services:
          </h4>

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
              "Issues of Books or Periodicals and free access to e-Granthalya software and e-repository/e-Books through Knowledge Management Portal (applicable to permanent employees of NPC only). The access to e-books to other members shall be provided through Desktop at NPC Library premises.",
            ].map((service, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-primary me-2"></span>
                <p className="mb-0">{service}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4">
          <h2 className="library-section-heading ">
            LIBRARY MEMBERSHIP
          </h2>
            <br />
          <h4 className="fw-bold mb-4">
            Membership of the Library is open to the following categories of
            bonafide Professionals/Research Scholars/Industry Professionals only
            who are actively involved in research on productivity:
          </h4>

          <ul className="list-unstyled ms-3">
            {[
              "All officials of NPC.",
              "Faculties and Research Scholars of Universities in India and abroad.",
              "Industry Professionals working in engineering and management disciplines.",
            ].map((category, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <span className="text-primary me-2"></span>
                <p className="mb-0">{category}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4 bg-light p-4 rounded-3 border-start border-4 border-primary">
          <h3 className="library-section-heading">LIBRARY TIMINGS</h3>
          <p className="fs-5 mb-0">
            The Library shall open from <strong>9.00 am to 5.30 pm</strong>{" "}
            throughout the year except Saturdays/Sundays and Holidays.
          </p>
        </div>

       

        {/* Contact Information Section - ADDED HERE */}
        <ContactInformation />
      </div>
    </div>
  );
}

const ContactInformation = () => (
  <div className="row mt-5 mb-5">
    <div className="col-12">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">For more details, Contact:</h4>
        </div>
        <div className="card-body">
          <div className="row">
            {/* First Contact */}
            <div className="col-md-6 mb-4">
              <div className="contact-card p-4 border rounded h-100">
                <h3 className="mb-3">Sh. Amitava Ray</h3>
                <p className="text-muted mb-3">
                  <strong>Group Head (Admin)</strong>
                </p>
                <div className="contact-details">
                  <div className="d-flex align-items-center mb-2">
                    <span className="material-symbols-outlined text-primary me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"
                      >
                        <path
                          d="M62.0104 66C54.9158 66 47.7882 64.3504 40.6278 61.0513C33.4679 57.7522 26.8894 53.0984 20.8922 47.0899C14.8957 41.0808 10.2478 34.502 6.94871 27.3534C3.64957 20.2055 2 13.0842 2 5.98965C2 4.84957 2.37647 3.89961 3.12941 3.13976C3.88235 2.37992 4.82353 2 5.95294 2H18.2315C19.1821 2 20.0207 2.31028 20.7473 2.93082C21.4739 3.55075 21.936 4.31686 22.1336 5.22918L24.2918 16.3059C24.4411 17.3336 24.4097 18.2168 24.1976 18.9553C23.9849 19.6938 23.6035 20.314 23.0532 20.816L14.3586 29.28C15.7578 31.8425 17.3565 34.2667 19.1548 36.5525C20.9525 38.8376 22.8988 41.0202 24.9939 43.1002C27.0595 45.1664 29.2555 47.0852 31.5821 48.8565C33.9087 50.6278 36.421 52.2761 39.1191 53.8014L47.5671 45.28C48.1562 44.667 48.8696 44.2372 49.7073 43.9906C50.5443 43.7446 51.4143 43.6844 52.3172 43.8099L62.7708 45.9388C63.7214 46.1898 64.4973 46.6748 65.0984 47.3939C65.6995 48.1129 66 48.9286 66 49.8409V62.0471C66 63.1765 65.6201 64.1176 64.8602 64.8706C64.1004 65.6235 63.1504 66 62.0104 66ZM11.6866 23.9369L18.4056 17.5078C18.5261 17.4111 18.6045 17.2784 18.6409 17.1096C18.6773 16.9409 18.6714 16.784 18.6231 16.6391L16.9864 8.22588C16.938 8.03326 16.8536 7.88863 16.7332 7.792C16.6127 7.69537 16.4558 7.64706 16.2626 7.64706H8.21176C8.06682 7.64706 7.94604 7.69537 7.84941 7.792C7.75341 7.88863 7.70541 8.00941 7.70541 8.15435C7.89804 10.7269 8.31906 13.3402 8.96847 15.9944C9.61725 18.6491 10.5233 21.2966 11.6866 23.9369ZM44.4395 56.4725C46.9349 57.6358 49.5376 58.5252 52.2475 59.1407C54.9581 59.7556 57.4908 60.1211 59.8456 60.2372C59.9906 60.2372 60.1114 60.1889 60.208 60.0922C60.3046 59.9956 60.3529 59.8748 60.3529 59.7299V51.8099C60.3529 51.6166 60.3046 51.4598 60.208 51.3393C60.1114 51.2188 59.9667 51.1344 59.7741 51.0861L51.8682 49.4786C51.7233 49.4303 51.5965 49.4243 51.488 49.4607C51.3795 49.4971 51.2646 49.5755 51.1435 49.696L44.4395 56.4725Z"
                          fill="#162F6A"
                        />
                      </svg>
                    </span>
                    <span>011-24607369 (office)</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined text-primary me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        fill="#2d2d2d"
                      >
                        <path
                          d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
                          fill="#162F6A"
                        />
                      </svg>
                    </span>
                    <span>amitava[dot]ray[at]npcindia[dot]gov[dot]in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Contact */}
            <div className="col-md-6 mb-4">
              <div className="contact-card p-4 border rounded h-100">
                <h3 className="mb-3">Sh. Yadu Kumar Yadav</h3>
                <p className="text-muted mb-3">
                  <strong>Deputy Director</strong>
                </p>
                <div className="contact-details">
                  <div className="d-flex align-items-center mb-2">
                    <span className="material-symbols-outlined text-primary me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"
                      >
                        <path
                          d="M62.0104 66C54.9158 66 47.7882 64.3504 40.6278 61.0513C33.4679 57.7522 26.8894 53.0984 20.8922 47.0899C14.8957 41.0808 10.2478 34.502 6.94871 27.3534C3.64957 20.2055 2 13.0842 2 5.98965C2 4.84957 2.37647 3.89961 3.12941 3.13976C3.88235 2.37992 4.82353 2 5.95294 2H18.2315C19.1821 2 20.0207 2.31028 20.7473 2.93082C21.4739 3.55075 21.936 4.31686 22.1336 5.22918L24.2918 16.3059C24.4411 17.3336 24.4097 18.2168 24.1976 18.9553C23.9849 19.6938 23.6035 20.314 23.0532 20.816L14.3586 29.28C15.7578 31.8425 17.3565 34.2667 19.1548 36.5525C20.9525 38.8376 22.8988 41.0202 24.9939 43.1002C27.0595 45.1664 29.2555 47.0852 31.5821 48.8565C33.9087 50.6278 36.421 52.2761 39.1191 53.8014L47.5671 45.28C48.1562 44.667 48.8696 44.2372 49.7073 43.9906C50.5443 43.7446 51.4143 43.6844 52.3172 43.8099L62.7708 45.9388C63.7214 46.1898 64.4973 46.6748 65.0984 47.3939C65.6995 48.1129 66 48.9286 66 49.8409V62.0471C66 63.1765 65.6201 64.1176 64.8602 64.8706C64.1004 65.6235 63.1504 66 62.0104 66ZM11.6866 23.9369L18.4056 17.5078C18.5261 17.4111 18.6045 17.2784 18.6409 17.1096C18.6773 16.9409 18.6714 16.784 18.6231 16.6391L16.9864 8.22588C16.938 8.03326 16.8536 7.88863 16.7332 7.792C16.6127 7.69537 16.4558 7.64706 16.2626 7.64706H8.21176C8.06682 7.64706 7.94604 7.69537 7.84941 7.792C7.75341 7.88863 7.70541 8.00941 7.70541 8.15435C7.89804 10.7269 8.31906 13.3402 8.96847 15.9944C9.61725 18.6491 10.5233 21.2966 11.6866 23.9369ZM44.4395 56.4725C46.9349 57.6358 49.5376 58.5252 52.2475 59.1407C54.9581 59.7556 57.4908 60.1211 59.8456 60.2372C59.9906 60.2372 60.1114 60.1889 60.208 60.0922C60.3046 59.9956 60.3529 59.8748 60.3529 59.7299V51.8099C60.3529 51.6166 60.3046 51.4598 60.208 51.3393C60.1114 51.2188 59.9667 51.1344 59.7741 51.0861L51.8682 49.4786C51.7233 49.4303 51.5965 49.4243 51.488 49.4607C51.3795 49.4971 51.2646 49.5755 51.1435 49.696L44.4395 56.4725Z"
                          fill="#162F6A"
                        />
                      </svg>
                    </span>
                    <span>011-24607371 (office)</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined text-primary me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        fill="#2d2d2d"
                      >
                        <path
                          d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
                          fill="#162F6A"
                        />
                      </svg>
                    </span>
                    <span> yk[dot]yadav[at]npcindia[dot]gov[dot]in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
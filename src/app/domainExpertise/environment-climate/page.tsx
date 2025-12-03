import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
const photos = [
  {
    id: "1",
    imgSrc: "/images/energyManagement/Chlor-alkaliSector.png",
    alt: "Meity Performance Smartboard picture",
    title: "Meity Performance Smartboard",
    link: "/images/energyManagement/Chlor-alkaliSecto.png",
    date: null,
  },
  {
    id: "2",
    imgSrc: "/images/energyManagement/ThermalPowerPlant.png",
    alt: "Meity Performance Smartboard picture",
    title: "Meity Performance Smartboard",
    link: "/images/energyManagement/ThermalPowerPlant.png",
    date: null,
  },
  {
    id: "3",
    imgSrc: "/images/energyManagement/PulpandPaper.png",
    alt: "Meity Performance Smartboard picture",
    title: "Meity Performance Smartboard",
    link: "/images/energyManagement/PulpandPaper.png",
    date: null,
  },
  {
    id: "4",
    imgSrc: "/images/energyManagement/Iron&Steel.png",
    alt: "Meity Performance Smartboard picture",
    title: "Meity Performance Smartboard",
    link: "/images/energyManagement/Iron&Steel.png",
    date: null,
  },
  {
    id: "5",
    imgSrc: "/images/energyManagement/CementSector.png",
    alt: "Meity Performance Smartboard picture",
    title: "Meity Performance Smartboard",
    link: "/images/energyManagement/CementSector.png",
    date: null,
  },
];
export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Environment and Climate Action Group"
      />
      <section className="maincontent">
        <div className="container">
          {/* <h1>New</h1> */}
          <p className="text-justify">
            Environment Management Group focuses on waste minimization and
            pollution prevention in line with productivity improvement. The
            Environmental services include Monitoring & Analysis, Design of
            pollution control systems and Resource Conservation. With the
            assistance of Indo-German Bilateral co-operation initiated in 1985,
            the Group has developed expertise in diversified fields in
            Environment Management The Group has assisted more than 2500
            enterprises including SMEs and large industries, Central/State
            Pollution Control Boards, Ministry of Environment & Forests at
            Central/State level and several International organizations. The
            Group is extending its expert services to Asian Productivity
            Organisation (APO) and SAARC Member countries. The services offered
            include:
          </p>
          <div className=" aboutcontent  row g-4">
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>1</h3>
                <p>
                  Consultancy and capacity building services include strategic,
                  practical, and value added environmental management
                  interventions for enhancing sustainability of the enterprises
                  focusing on ecological, economic, and social aspects.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>2</h3>
                <p>
                  Increasing eco-competitiveness and profitability of
                  enterprises by introducing resource conservation concepts and
                  minimising the cost of waste management for enhancing overall
                  productivity.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>3</h3>
                <p>
                  Regularly assisting the central and state government bodies in
                  the areas of environmental standards & guidelines, policy
                  formulation, training, capacity building, and project report
                  evaluation
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>4</h3>
                <p>Green Productivity / Waste Minimization</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>5</h3>
                <p>Hazardous waste management</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>6</h3>
                <p>Solid waste management</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>7</h3>
                <p>GIS & regional environment planning</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>8</h3>
                <p>
                  Environmental Audit, environment management system, and
                  monitoring
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="objectivebox">
                <h3>9</h3>
                <p>BRSR and ESG reporting</p>
              </div>
            </div>
          </div>
          <br />
          <div className="row photos-row-gap">
            {photos.map(({ id, imgSrc, alt, title, link, date }) => (
              <div key={id} className="col-sm-12 col-md-6 col-lg-3">
                <div className="photos-card h-100">
                  <div className="img-fluid position-relative">
                    {/* <img
                      className="photos-img img-fluid performimg"
                      src={imgSrc}
                      alt={alt}
                      width={100}
                      height={100}
                    /> */}
                    <div className="photos-img img-fluid performimg d-flex justify-content-center align-items-center border border-dark">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
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
                    </div>

                    <div className="position-absolute photos-btn pointer bg-transparent me-2 mb-2">
                      <a
                        id={id}
                        className="link-btn d-flex align-items-center text-uppercase pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${title}`}
                        aria-label={`Visit ${title}`}
                        href={link}
                      >
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined bhashini-skip-translation"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24 "
                            viewBox="0 -960 960 960"
                            width="24"
                            fill="#2d2d2d"
                          >
                            <path
                              d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h249q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-249q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v249q0 24-18 42t-42 18H180Zm600-617L403-360q-9 9-21 8.5t-21-9.5q-9-9-9-21t9-21l377-377H549q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h261q12.75 0 21.38 8.62Q840-822.75 840-810v261q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-188Z"
                              fill="#162F6A"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="photos-card-body mt-2">
                    <p role="heading" aria-level={3} className="h3">
                      {title}
                    </p>
                  </div>
                  {date && (
                    <div className="photos-card-footer d-flex justify-content-between align-items-center text-uppercase">
                      <small className="ptype">{date}</small>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const businessItems = [
    {
      id: 1,
      title: "Evaluation & Monitoring",
      description: "Evaluation & Monitoring of Development programs and schemes",
      image: "/images/faculty.png",
      bgClass: "bg-white"
    },
    {
      id: 2,
      title: "Policy Formulation",
      description: "Policy Formulation and Strategic Development Plans",
      image: "/images/presentation.jpg",
      bgClass: "bg-white"
    },
    {
      id: 3,
      title: "Quality Audit",
      description: "Quality Audit/Inspection of Food Business Operators under Food Safety & Standards Act 2006",
      image: "/images/fruit.webp",
      bgClass: "bg-white"
    },
    {
      id: 4,
      title: "Accreditation Agency",
      description: "Accreditation agency for Warehouses and Cold Storages",
      image: "/images/Accreditation.webp",
      bgClass: "bg-black"
    },
    {
      id: 5,
      title: "Productivity Promotion",
      description: "Productivity Promotion in Food & Agribusiness through Seminars & Training Programs",
      image: "/images/Promotion.webp",
      bgClass: "bg-black"
    },
    {
      id: 6,
      title: "Value Chain Management",
      description: "Value Chain Management in Food & Agribusiness",
      image: "/images/Productivity.webp",
      bgClass: "bg-black"
    }
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Agri Business Group"
      />
     
      <div className="card-wrapper p-2 py-4 p-md-4">
        <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
          
          {/* Desktop Layout - Hidden on Mobile */}
          <div className="reactFamilyTree d-none d-md-flex align-content-center justify-content-center w-100">
            <div className="d-flex" style={{ gap: "80px" }}>
              {/* First Column */}
              <div style={{ position: "relative", width: "344px", height: "900px" }}>
                <div className="d-grid" style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
                  justifyItems: "center",
                }}>
                  {/* Item 1 */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Evaluation & Monitoring" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/faculty.png" alt="Evaluation & Monitoring" className="img-fluid profile-img object-fit-cover bg-white" />
                            </span>
                          </div>
                          <small className="text-uppercase">Evaluation & Monitoring of Development programs and schemes</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Policy Formulation" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/presentation.jpg" alt="Policy Formulation" className="img-fluid profile-img object-fit-cover bg-white" />
                            </span>
                          </div>
                          <small className="text-uppercase">Policy Formulation and Strategic Development Plans</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Quality Audit" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/fruit.webp" alt="Quality Audit" className="img-fluid profile-img object-fit-cover bg-white" />
                            </span>
                          </div>
                          <small className="text-uppercase">Quality Audit/Inspection of Food Business Operators under Food Safety & Standards Act 2006</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div style={{ position: "relative", width: "344px", height: "900px" }}>
                <div className="d-grid" style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
                  justifyItems: "center",
                }}>
                  {/* Item 4 - Accreditation */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Accreditation Agency" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/Accreditation.webp" alt="Accreditation Agency" className="img-fluid profile-img object-fit-cover bg-black" />
                            </span>
                          </div>
                          <small className="text-uppercase">Accreditation agency for Warehouses and Cold Storages</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 5 - Productivity Promotion */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Productivity Promotion" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/Promotion.webp" alt="Productivity Promotion" className="img-fluid profile-img object-fit-cover bg-black" />
                            </span>
                          </div>
                          <small className="text-uppercase">Productivity Promotion in Food & Agribusiness through Seminars & Training Programs</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 6 - Value Chain Management */}
                  <div className="FamilyNode_root__LylyV">
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Value Chain Management" role="link">
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img src="/images/Productivity.webp" alt="Value Chain Management" className="img-fluid profile-img object-fit-cover bg-black" />
                            </span>
                          </div>
                          <small className="text-uppercase">Value Chain Management in Food & Agribusiness</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Visible only on Mobile */}
          <div className="d-md-none w-100">
            <div className="d-flex flex-column align-items-center" style={{ gap: "24px" }}>
              {businessItems.map((item) => (
                <div key={item.id} className="FamilyNode_root__LylyV" style={{ width: "100%", maxWidth: "344px" }}>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-center mx-auto">
                      <div 
                        className="profile-card pointer position-relative" 
                        tabIndex={0} 
                        aria-label={item.title} 
                        role="link"
                        style={{ width: "100%" }}
                      >
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <span style={{ color: "transparent", display: "inline-block" }}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className={`img-fluid profile-img object-fit-cover ${item.bgClass}`} 
                            />
                          </span>
                        </div>
                        <small className="text-uppercase">{item.description}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}